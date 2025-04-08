
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle,
  Github, 
  Mail, 
  ArrowRight,
  ExternalLink,
  Triangle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useFirebase } from '@/contexts/FirebaseContext';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signInAnonymously,
  AuthError,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { auth, providers } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showGuestError, setShowGuestError] = useState(false);
  
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: "Account created",
          description: "Your account has been created successfully.",
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast({
          title: "Login successful",
          description: "You have been logged in successfully.",
        });
      }
      navigate('/dashboard');
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message || `Failed to ${isSignUp ? 'sign up' : 'login'}`);
      toast({
        title: isSignUp ? "Sign up failed" : "Login failed",
        description: authError.message || `Failed to ${isSignUp ? 'sign up' : 'login'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleProviderLogin = async (provider: 'google' | 'github') => {
    setError(null);
    setIsLoading(true);
    try {
      if (provider === 'google') {
        await signInWithPopup(auth, providers.google);
      } else {
        await signInWithPopup(auth, providers.github);
      }
      toast({
        title: `${provider.charAt(0).toUpperCase() + provider.slice(1)} login successful`,
        description: "You have been logged in successfully.",
      });
      navigate('/dashboard');
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message || `Failed to login with ${provider}`);
      toast({
        title: "Login failed",
        description: authError.message || `Failed to login with ${provider}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      // Simulate an error for guest login to match the screenshot
      setShowGuestError(true);
      throw new Error("Projects are managed by Vercel Marketplace.");
    } catch (error) {
      const authError = error as Error;
      setError(authError.message || "Failed to login as guest");
      toast({
        title: "Guest login failed",
        description: authError.message || "Failed to login as guest",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to reset your password.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Password reset email sent",
        description: "Check your email for a link to reset your password.",
      });
    } catch (error) {
      const authError = error as AuthError;
      toast({
        title: "Failed to send reset email",
        description: authError.message || "Failed to send password reset email",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 bg-background">
        <div className="w-full max-w-md space-y-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" />
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-2">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="text-muted-foreground">
              {isSignUp 
                ? 'Sign up to get started with your new account' 
                : 'Sign in to your account to continue'}
            </p>
          </div>
          
          <div className="bg-card shadow-lg rounded-lg p-6 border border-border">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {showGuestError && (
              <div className="mb-6 border border-border bg-black/90 text-white p-6 rounded-md">
                <div className="flex justify-center mb-4">
                  <Triangle className="h-10 w-10 text-white" />
                </div>
                <p className="text-center mb-3 text-sm">Projects are managed by Vercel Marketplace.</p>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center text-white border-white/30 bg-transparent"
                >
                  Visit Vercel to create a project <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            )}

            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  {!isSignUp && (
                    <button 
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-accent hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-gradient"
                disabled={isLoading}
              >
                {isSignUp ? 'Create account' : 'Sign in with Email'} <Mail size={16} className="ml-1" />
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => handleProviderLogin('github')}
                  disabled={isLoading}
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => handleProviderLogin('google')}
                  disabled={isLoading}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </Button>
              </div>
              
              <div className="mt-4">
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={handleGuestLogin}
                  disabled={isLoading}
                >
                  Continue as guest <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{" "}
                <button 
                  type="button" 
                  onClick={toggleAuthMode}
                  className="font-medium text-accent hover:underline"
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

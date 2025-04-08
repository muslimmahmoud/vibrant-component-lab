
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Github, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration with Supabase would happen here
    toast({
      title: "Login functionality",
      description: "Supabase integration required. Please connect Supabase to enable authentication.",
    });
    navigate('/dashboard');
  };

  const handleProviderLogin = (provider: string) => {
    // Integration with Supabase would happen here
    toast({
      title: `${provider} login`,
      description: "Supabase integration required. Please connect Supabase to enable authentication.",
    });
    navigate('/dashboard');
  };

  const handleGuestLogin = () => {
    toast({
      title: "Guest access",
      description: "Logged in as a guest user",
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" />
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-2">Welcome back</h2>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
          
          <div className="bg-card shadow-lg rounded-lg p-6 border border-border">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <a href="#" className="text-sm text-accent hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full btn-gradient">
                Sign in with Email <Mail size={16} className="ml-1" />
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => handleProviderLogin('GitHub')}
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => handleProviderLogin('Google')}
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
                >
                  Continue as guest <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <p>
                Don't have an account?{" "}
                <a href="#" className="font-medium text-accent hover:underline">
                  Sign up
                </a>
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

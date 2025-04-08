
import React, { createContext, useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4KnhoNhs3daPliKHi39dU62V_St8Udkg",
  authDomain: "the-final-web.firebaseapp.com",
  projectId: "the-final-web",
  storageBucket: "the-final-web.firebasestorage.app",
  messagingSenderId: "5933120841",
  appId: "1:5933120841:web:c7b51c1a07b04433ac6e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

type FirebaseContextType = {
  app: ReturnType<typeof initializeApp>;
  auth: ReturnType<typeof getAuth>;
  providers: {
    google: GoogleAuthProvider;
    github: GithubAuthProvider;
  };
};

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const firebaseValue = {
    app,
    auth,
    providers: {
      google: googleProvider,
      github: githubProvider
    }
  };

  return (
    <FirebaseContext.Provider value={firebaseValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

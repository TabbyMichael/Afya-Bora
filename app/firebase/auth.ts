import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from 'firebase/auth';
import { auth } from './config';

// Email & Password Sign Up
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Send verification email
    await sendEmailVerification(userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Email & Password Sign In
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (!userCredential.user.emailVerified) {
      throw new Error('Please verify your email before signing in');
    }
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Resend Verification Email
export const resendVerificationEmail = async (user: User) => {
  try {
    await sendEmailVerification(user);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign Out
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
}; 
'use client';

import { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signUpWithEmail, signInWithGoogle, resendVerificationEmail } from '@/app/firebase/auth';
import PhoneInput from './PhoneInput';
import { auth } from '@/app/firebase/config';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const user = await signUpWithEmail(email, password);
      setVerificationSent(true);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneSubmit = (phoneNumber: string) => {
    console.log('Phone authentication initiated for:', phoneNumber);
    router.push('/auth/verify');
  };

  if (verificationSent) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Verify Your Email</h2>
        <p className="text-gray-600">
          We&apos;ve sent a verification email to <span className="font-medium">{email}</span>.
          Please check your inbox and verify your email before signing in.
        </p>
        <p className="text-sm text-gray-500">
          Didn&apos;t receive the email? Check your spam folder or
          <button
            onClick={() => {
              const user = auth.currentUser;
              if (user) {
                resendVerificationEmail(user)
                  .then(() => {
                    alert('Verification email resent!');
                  })
                  .catch((error) => {
                    setError(error.message);
                  });
              }
            }}
            className="text-[#40E0D0] hover:underline ml-1"
          >
            click here to resend
          </button>
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors"
        >
          Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="register-email" className="block text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="register-password" className="block text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
            placeholder="Create a password"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirm-password" className="block text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
            placeholder="Confirm your password"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors disabled:opacity-50"
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignUp}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#4285F4] text-white border border-[#4285F4] py-2 rounded-lg hover:bg-[#357ABD] transition-colors disabled:opacity-50"
      >
        <FcGoogle className="h-5 w-5 bg-white rounded-full" />
        Sign up with Google
      </button>

      <button
        type="button"
        onClick={() => setShowPhoneInput(true)}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-black text-white border border-black py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        <Phone className="h-5 w-5" />
        Sign up with Phone
      </button>

      {showPhoneInput && (
        <PhoneInput
          onSubmit={handlePhoneSubmit}
          onClose={() => setShowPhoneInput(false)}
        />
      )}
    </form>
  );
} 
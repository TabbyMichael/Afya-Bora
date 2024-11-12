'use client';

import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PhoneInput from './PhoneInput';
import { signInWithEmail, signInWithGoogle } from '@/app/firebase/auth';

export default function LoginForm() {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmail(email, password);
      router.push('/'); // Redirect to homepage after successful login
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithGoogle();
      router.push('/'); // Redirect to homepage after successful Google sign-in
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

  return (
    <form onSubmit={handleEmailSignIn} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-[#40E0D0]" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <Link href="/forgot-password" className="text-sm text-[#40E0D0] hover:underline">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors disabled:opacity-50"
      >
        {loading ? 'Signing in...' : 'Sign In'}
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
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#4285F4] text-white border border-[#4285F4] py-2 rounded-lg hover:bg-[#357ABD] transition-colors disabled:opacity-50"
      >
        <FcGoogle className="h-5 w-5 bg-white rounded-full" />
        Sign in with Google
      </button>

      <button
        type="button"
        onClick={() => setShowPhoneInput(true)}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-black text-white border border-black py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        <Phone className="h-5 w-5" />
        Sign in with Phone
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
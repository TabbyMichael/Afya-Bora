'use client';

import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <form className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            id="email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            placeholder="Enter your email"
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            placeholder="Enter your password"
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
        className="w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors"
      >
        Sign In
      </button>
    </form>
  );
} 
'use client';

import { User, Mail, Lock } from 'lucide-react';

export default function RegisterForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            id="name"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            placeholder="Enter your full name"
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            placeholder="Enter your email"
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            placeholder="Create a password"
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            placeholder="Confirm your password"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors"
      >
        Create Account
      </button>
    </form>
  );
} 
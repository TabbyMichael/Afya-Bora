'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const router = useRouter();

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== '') {
      const nextElement = element.nextElementSibling as HTMLInputElement;
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    // Here you would verify the OTP with your backend
    console.log('Verifying OTP:', otpValue);
    
    // If verification is successful, redirect to the desired page
    // router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Verify Your Phone
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;ve sent a code to your phone. Please enter it below.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-2 justify-center">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:border-[#40E0D0]"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors"
          >
            Verify
          </button>
        </form>

        <div className="text-center">
          <button className="text-[#40E0D0] hover:underline">
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
} 
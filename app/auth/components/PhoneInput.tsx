'use client';

import { useState } from 'react';
import { Phone, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

// Extended country options with more countries
const countryOptions = [
  { value: '+254', label: 'Kenya', flag: '/flags/ke.png', code: 'KE' },
  { value: '+255', label: 'Tanzania', flag: '/flags/tz.png', code: 'TZ' },
  { value: '+256', label: 'Uganda', flag: '/flags/ug.png', code: 'UG' },
  { value: '+1', label: 'United States', flag: '/flags/us.png', code: 'US' },
  { value: '+44', label: 'United Kingdom', flag: '/flags/gb.png', code: 'GB' },
  // ... add more countries
];

interface PhoneInputProps {
  onSubmit: (phoneNumber: string) => void;
  onClose: () => void;
}

export default function PhoneInput({ onSubmit, onClose }: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState(countryOptions[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countryOptions.filter(country =>
    country.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.value.includes(searchQuery)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!phoneNumber.trim()) {
      setError('Phone number is required');
      return;
    }

    const phoneRegex = /^\d{9,15}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\s+/g, ''))) {
      setError('Please enter a valid phone number');
      return;
    }

    const fullPhoneNumber = `${countryCode.value}${phoneNumber.replace(/\s+/g, '')}`;
    onSubmit(fullPhoneNumber);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-900">Sign in with Phone</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="flex gap-2">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] bg-white"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Image
                    src={countryCode.flag}
                    alt={countryCode.label}
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  <span className="text-gray-900">{countryCode.value}</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-2 border-b">
                      <input
                        type="text"
                        placeholder="Search country..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="py-1">
                      {filteredCountries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-left"
                          onClick={() => {
                            setCountryCode(country);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <Image
                            src={country.flag}
                            alt={country.label}
                            width={24}
                            height={18}
                            className="rounded-sm"
                          />
                          <span className="text-gray-900">{country.label}</span>
                          <span className="text-gray-500 ml-auto">{country.value}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setError('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0] text-gray-900"
                placeholder="712 345 678"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#36BDB0] transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
} 
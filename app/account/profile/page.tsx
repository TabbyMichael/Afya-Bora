'use client';

export default function ProfilePage() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#40E0D0]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#40E0D0] text-white px-6 py-2 rounded-lg hover:bg-[#36BDB0] transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
} 
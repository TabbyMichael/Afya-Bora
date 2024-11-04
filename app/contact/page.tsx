import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40E0D0] focus:border-[#40E0D0] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40E0D0] focus:border-[#40E0D0] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40E0D0] focus:border-[#40E0D0] sm:text-sm"
                        ></textarea>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ADD8E6] hover:bg-[#9AC0D0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ADD8E6]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage; 
import Link from 'next/link';
import Image from 'next/image';

export default function BlogHomePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-black">Health Blog</h1>
                
                {/* Featured Articles */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-black">Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example featured article */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image src="/images/blog/featured1.jpg" alt="Featured Article" width={400} height={250} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-black">Understanding Heart Health</h3>
                                <p className="text-gray-700 mb-4">Learn about the importance of maintaining a healthy heart and tips to improve cardiovascular health.</p>
                                <Link href="/blog/heart-health" className="text-[#40E0D0] hover:underline">Read More</Link>
                            </div>
                        </div>
                        {/* Add more featured articles as needed */}
                    </div>
                </section>

                {/* Categories */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-black">Categories</h2>
                    <div className="flex space-x-4">
                        <Link href="/blog/category/medication-guides" className="text-[#40E0D0] hover:underline">Medication Guides</Link>
                        <Link href="/blog/category/wellness-tips" className="text-[#40E0D0] hover:underline">Wellness Tips</Link>
                        <Link href="/blog/category/nutrition" className="text-[#40E0D0] hover:underline">Nutrition</Link>
                        <Link href="/blog/category/mental-health" className="text-[#40E0D0] hover:underline">Mental Health</Link>
                        <Link href="/blog/category/chronic-conditions" className="text-[#40E0D0] hover:underline">Chronic Conditions</Link>
                    </div>
                </section>

                {/* Recent Posts */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-black">Recent Posts</h2>
                    <div className="space-y-8">
                        {/* Example recent post */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-black">Cold Remedies: What Works?</h3>
                                <p className="text-gray-700 mb-4">Explore effective remedies for managing cold symptoms and speeding up recovery.</p>
                                <Link href="/blog/cold-remedies" className="text-[#40E0D0] hover:underline">Read More</Link>
                            </div>
                        </div>
                        {/* Add more recent posts as needed */}
                    </div>
                </section>

                {/* Search Functionality */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-black">Search Articles</h2>
                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#40E0D0] focus:border-[#40E0D0] bg-white text-black" />
                </section>

                {/* Archive by Date */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-black">Archive</h2>
                    <ul className="space-y-2">
                        <li><Link href="/blog/archive/2023/09" className="text-[#40E0D0] hover:underline">September 2023</Link></li>
                        <li><Link href="/blog/archive/2023/08" className="text-[#40E0D0] hover:underline">August 2023</Link></li>
                        {/* Add more archive links as needed */}
                    </ul>
                </section>
            </div>
        </div>
    );
} 
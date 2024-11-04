import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4 text-black">Blog Post Title</h1>
                <Image src="/images/blog/post-header.jpg" alt="Blog Post Header" width={800} height={400} className="w-full h-64 object-cover mb-4" />
                <div className="text-gray-600 mb-4">
                    <span>Published on: September 15, 2023</span> | <span>Author: John Doe</span> | <span>Tags: <a href="#" className="text-[#40E0D0] hover:underline">Health</a>, <a href="#" className="text-[#40E0D0] hover:underline">Wellness</a></span>
                </div>
                <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">This is the introduction to the blog post. It should be engaging and provide a brief overview of the topic.</p>
                    <h2 className="text-2xl font-semibold mb-2 text-black">Section Heading</h2>
                    <p className="mb-4">Detailed content goes here. Use headings, bullet points, and sections to break down information and improve readability.</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Key point 1</li>
                        <li>Key point 2</li>
                        <li>Key point 3</li>
                    </ul>
                    <p className="mb-4">Conclude with a summary or final thoughts. Encourage readers to take action or explore related topics.</p>
                </div>
                <div className="mt-8">
                    <a href="/contact" className="text-[#40E0D0] hover:underline">Talk to our pharmacist about this topic today!</a>
                </div>
            </div>
        </div>
    );
} 
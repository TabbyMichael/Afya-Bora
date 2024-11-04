export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to Afya Bora, your trusted online pharmacy dedicated to providing quality healthcare products and services. Since our inception, we have been committed to enhancing the health and wellness of our community through exceptional service and a wide range of healthcare solutions.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                    Our mission is to ensure that everyone has access to genuine healthcare products and professional advice. We strive to deliver fast, reliable, and affordable services to our customers, ensuring their satisfaction and well-being.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-gray-700 mb-4">
                    Our team consists of qualified pharmacists, healthcare professionals, and dedicated customer service staff. With years of experience and a passion for healthcare, our team is here to support you with expert advice and personalized care.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Services and Community Impact</h2>
                <p className="text-gray-700 mb-4">
                    We offer a variety of services including prescription refills, medication counseling, vaccinations, and health screenings. We are proud to partner with local healthcare providers and participate in community health initiatives to support underserved populations.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
                <p className="text-gray-700 mb-4">
                    &quot;Afya Bora has been a lifesaver for me and my family. Their fast delivery and professional service are unmatched.&quot; - Jane Doe
                </p>
                <p className="text-gray-700 mb-4">
                    &quot;I trust Afya Bora for all my healthcare needs. Their team is knowledgeable and always ready to help.&quot; - John Smith
                </p>
                <div className="text-center">
                    <a href="/contact" className="text-[#40E0D0] hover:underline">Contact Us</a> to learn more about our services.
                </div>
            </div>
        </div>
    );
} 
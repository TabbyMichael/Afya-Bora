import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-[#40E0D0] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white text-2xl font-bold">Subscribe to our Newsletter</h3>
              <p className="text-white/80">Stay updated with our latest offers and health tips</p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-gray-900 text-white px-6 py-2 rounded-r-lg hover:bg-gray-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">About Us</h4>
            <p className="mb-4">Your trusted online pharmacy for all your healthcare needs.</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>0800 AFYABORA (0800 693292)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@afyabora.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#40E0D0]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#40E0D0]">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#40E0D0]">Health Blog</Link></li>
              <li><Link href="/careers" className="hover:text-[#40E0D0]">Careers</Link></li>
              <li><Link href="/terms" className="hover:text-[#40E0D0]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#40E0D0]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/prescription" className="hover:text-[#40E0D0]">Prescription Medicines</Link></li>
              <li><Link href="/category/otc" className="hover:text-[#40E0D0]">OTC Medicines</Link></li>
              <li><Link href="/category/personal-care" className="hover:text-[#40E0D0]">Personal Care</Link></li>
              <li><Link href="/category/wellness" className="hover:text-[#40E0D0]">Wellness</Link></li>
              <li><Link href="/category/medical-devices" className="hover:text-[#40E0D0]">Medical Devices</Link></li>
              <li><Link href="/category/baby-care" className="hover:text-[#40E0D0]">Baby Care</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Download Our App</h4>
            <p className="mb-4">Get our app for the best experience</p>
            <div className="space-y-3">
              <Link href="#" className="block">
                <Image
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  width={40}
                  height={42}
                  className="h-auto bg-gray-900"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/images/play-store.jpg"
                  alt="Get it on Play Store"
                  width={40}
                  height={40}
                  className="h-auto bg-gray-900"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="hover:text-[#40E0D0]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#40E0D0]">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#40E0D0]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#40E0D0]">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Afya Bora. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
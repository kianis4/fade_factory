import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <Image 
                  src="/logo.png" 
                  alt="Fade Factory Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                FadeFactory
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium grooming services for the modern gentleman. Experience the difference of true craftsmanship.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="#gallery" className="hover:text-blue-500 transition-colors">Gallery</Link></li>
              <li><a href="https://fadefactory905.booksy.com/a" className="hover:text-blue-500 transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>570 Highway 8, Unit 3</li>
              <li>Stoney Creek, Ontario</li>
              <li>(289) 656-0504</li>
              <li>fadefactory905@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon - Fri: 10am - 8pm</li>
              <li>Saturday: 9am - 6pm</li>
              <li>Sunday: 11am - 5pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Fade Factory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/fadefactory905/" className="text-gray-400 hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

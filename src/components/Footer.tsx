"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-vmgef-ink text-white">
      {/* Newsletter Section - Clean and integrated */}
      <div className="bg-vmgef-bg text-vmgef-ink py-24 border-t border-vmgef-ink/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif text-4xl md:text-5xl mb-4">Join the Village.</h3>
          <p className="text-vmgef-ink-light font-light text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on our impact, upcoming events like the Annual Gala, and stories from the field.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white border border-vmgef-ink/10 text-vmgef-ink placeholder:text-vmgef-ink/40 px-6 py-4 rounded-full focus:outline-none focus:border-vmgef-orange transition-colors shadow-sm"
              required
            />
            <button 
              type="submit"
              className="bg-vmgef-orange text-white px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-vmgef-ink transition-all duration-300 flex items-center justify-center gap-2 group shrink-0 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              Subscribe
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-vmgef-orange flex items-center justify-center rounded-lg">
                <span className="text-white font-serif font-bold text-sm tracking-wider">VM</span>
              </div>
              <span className="font-serif font-semibold text-xl tracking-wide">
                VMGEF
              </span>
            </Link>
            <p className="text-white/70 max-w-sm font-light leading-relaxed mb-8">
              Dedicated to the legacy of Vince. Empowering Ghanaian youth and women via education and skills training.
            </p>
            <div className="flex flex-col gap-2 text-white/70 font-light">
              <p>Weija, Accra, Ghana</p>
              <p>WhatsApp: +233 50 8115 739</p>
              <p>Email: info@vmgef.org</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-vmgef-orange">Explore</h4>
            <ul className="flex flex-col gap-4 text-white/70 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Annual Gala</Link></li>
              <li><Link href="/donate" className="hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-vmgef-orange">Partners</h4>
            <ul className="flex flex-col gap-4 text-white/70 font-light">
              <li>University of Education, Winneba</li>
              <li>Elhmurst Independent Nursery</li>
              <li>Upward Motion Foundation</li>
              <li>Jabony Fountain Foundation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Vince Memorial Garden and Education Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

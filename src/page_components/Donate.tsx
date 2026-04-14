"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CreditCard, Smartphone, HeartHandshake, Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Donate() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".donate-hero", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      delay: 0.1
    });

    const fadeElements = gsap.utils.toArray<HTMLElement>(".fade-up");
    fadeElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 150,
      ease: "none"
    });
  }, { scope: container });

  return (
    <main ref={container} className="w-full min-h-screen bg-vmgef-bg pt-32 pb-32">
      {/* HERO SECTION */}
      <section className="parallax-container relative max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center overflow-hidden rounded-3xl py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/IMG-20251127-WA0069.jpg" 
            alt="Donate Hero" 
            className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vmgef-bg via-vmgef-bg/80 to-vmgef-bg"></div>
        </div>
        <div className="relative z-10">
          <span className="donate-hero text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">Take Action</span>
          <h1 className="donate-hero font-serif text-6xl md:text-8xl text-vmgef-ink leading-[1.1] tracking-tight mb-8">
            Invest in the <span className="italic text-vmgef-orange">Future.</span>
          </h1>
          <p className="donate-hero text-xl text-vmgef-ink-light font-light leading-relaxed max-w-3xl mx-auto">
            Your contribution directly funds STEM scholarships, rural clinics, entrepreneurship grants, and empowerment programs for Ghanaian youth and women.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FINANCIAL DONATION OPTIONS */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="fade-up font-serif text-4xl text-vmgef-ink mb-8">Make a Donation</h2>
            
            {/* Mobile Money */}
            <div className="fade-up bg-white p-8 md:p-10 border border-vmgef-ink/10 hover:border-vmgef-orange transition-colors shadow-sm rounded-3xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#FFCC00]/20 rounded-full flex items-center justify-center shrink-0">
                  <Smartphone size={28} className="text-[#FFCC00] drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-vmgef-ink mb-2">Mobile Money (MoMo)</h3>
                  <p className="text-vmgef-ink-light font-light mb-6">The fastest way to support locally in Ghana via MTN Mobile Money.</p>
                  <div className="bg-vmgef-bg p-4 rounded-xl border border-vmgef-ink/5 inline-block">
                    <span className="block text-xs uppercase tracking-widest text-vmgef-ink-light mb-1">Merchant / Number</span>
                    <span className="font-mono text-xl font-bold text-vmgef-ink">+233 50 8115 739</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Donation */}
            <div className="fade-up bg-vmgef-ink text-white p-8 md:p-10 shadow-xl relative overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-vmgef-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 bg-vmgef-orange rounded-full flex items-center justify-center shrink-0">
                  <CreditCard size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">Online Donation</h3>
                  <p className="text-white/70 font-light mb-8">Securely donate from anywhere in the world using your credit or debit card.</p>
                  <a 
                    href="https://donorbox.org/events/728823/steps/choose_tickets" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-vmgef-orange text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-vmgef-ink transition-colors duration-300 rounded-full"
                  >
                    Donate via Donorbox
                  </a>
                </div>
              </div>
            </div>
            
            {/* FINANCIAL TRANSPARENCY */}
            <div className="fade-up pt-12">
              <h3 className="font-serif text-2xl text-vmgef-ink mb-6">Where Your Money Goes</h3>
              <p className="text-vmgef-ink-light font-light mb-8">We believe in radical transparency. Here is how we allocate every dollar donated to maximize impact.</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-vmgef-ink">Direct Programs & Scholarships</span>
                    <span className="text-vmgef-orange">85%</span>
                  </div>
                  <div className="w-full bg-vmgef-ink/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-vmgef-orange h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-vmgef-ink">Operations & Sustainability</span>
                    <span className="text-vmgef-ink-light">10%</span>
                  </div>
                  <div className="w-full bg-vmgef-ink/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-vmgef-ink h-full rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-vmgef-ink">Future Expansion & Outreach</span>
                    <span className="text-vmgef-ink-light">5%</span>
                  </div>
                  <div className="w-full bg-vmgef-ink/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#D1D1D1] h-full rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* VOLUNTEER & CONTACT */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="fade-up font-serif text-4xl text-vmgef-ink mb-8">Give Your Time</h2>
            
            <div className="fade-up bg-[#F4F1ED] p-8 md:p-10 rounded-3xl">
              <HeartHandshake size={40} className="text-vmgef-orange mb-6" />
              <h3 className="font-serif text-2xl text-vmgef-ink mb-4">Volunteer with VMGEF</h3>
              <p className="text-vmgef-ink-light font-light mb-6">
                We are always looking for passionate individuals to help us drive impact. Opportunities include:
              </p>
              <ul className="space-y-3 text-vmgef-ink-light font-light mb-8">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-vmgef-orange rounded-full"></div> Mentoring students in STEM or Business</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-vmgef-orange rounded-full"></div> Teaching workshops (Financial Literacy, Farming)</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-vmgef-orange rounded-full"></div> Event coordination and logistics</li>
              </ul>
              
              <div className="border-t border-vmgef-ink/10 pt-8 space-y-4">
                <h4 className="font-serif text-lg text-vmgef-ink mb-4">Contact us to get involved:</h4>
                <div className="flex items-center gap-4 text-vmgef-ink-light">
                  <Mail className="text-vmgef-orange" size={20} />
                  <a href="mailto:info@vmgef.org" className="hover:text-vmgef-orange transition-colors">info@vmgef.org</a>
                </div>
                <div className="flex items-center gap-4 text-vmgef-ink-light">
                  <Phone className="text-vmgef-orange" size={20} />
                  <span>+233 50 8115 739 / +233 20 0640 740</span>
                </div>
                <div className="flex items-center gap-4 text-vmgef-ink-light">
                  <MapPin className="text-vmgef-orange" size={20} />
                  <span>Weija, Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

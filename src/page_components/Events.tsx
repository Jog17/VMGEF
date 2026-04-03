"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar, MapPin, Clock, Ticket, Star } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

gsap.registerPlugin(ScrollTrigger);

interface EventsProps {
  events: any[];
  featuredEvents: any[];
}

export default function Events({ events, featuredEvents }: EventsProps) {
  const container = useRef<HTMLDivElement>(null);

  const featured = featuredEvents && featuredEvents.length > 0 ? featuredEvents[0] : null;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".event-hero-text", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.2
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
    <main ref={container} className="w-full min-h-screen bg-vmgef-bg pt-32">
      {/* HERO SECTION */}
      <section className="parallax-container relative max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center overflow-hidden rounded-3xl py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/vmgef_pics/IMG-20251002-WA0052.jpg" 
            alt="Events Hero" 
            className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vmgef-bg via-vmgef-bg/80 to-vmgef-bg"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="event-hero-text text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">Marquee Events</span>
          <h1 className="event-hero-text font-serif text-6xl md:text-8xl text-vmgef-ink leading-[1.1] tracking-tight mb-8">
            A Night of <span className="italic text-vmgef-orange">Impact.</span>
          </h1>
          <p className="event-hero-text text-xl text-vmgef-ink-light font-light leading-relaxed">
            Join us for our annual black-tie fundraising galas. Celebrate art, excellence, and the empowerment of Ghanaian youth.
          </p>
        </div>
      </section>

      {/* FEATURED EVENT: 2ND ANNUAL GALA */}
      <section className="py-24 bg-vmgef-ink text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-vmgef-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vmgef-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-vmgef-orange/30 rounded-full text-vmgef-orange text-xs tracking-widest uppercase font-bold mb-8">
                <Star size={14} /> Upcoming Event
              </div>
              <h2 className="font-serif text-5xl md:text-7xl mb-6">{featured ? featured.title : "2nd Annual Gala"}</h2>
              <p className="text-2xl font-light text-white/80 mb-8 italic">
                "{featured ? featured.description : "Honoring Women Making an Impact in the Community"}"
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-white/80">
                  <Calendar className="text-vmgef-orange" size={24} />
                  <span className="text-lg font-light">{featured && featured.date ? new Date(featured.date).toLocaleDateString() : "Sunday, March 9th, 2025"}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Clock className="text-vmgef-orange" size={24} />
                  <span className="text-lg font-light">4:00 PM - 8:00 PM Prompt</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <MapPin className="text-vmgef-orange" size={24} />
                  <span className="text-lg font-light">{featured ? featured.location : "Canis Majoris Center, Awoshie - Ghana"}</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <h3 className="font-serif text-2xl mb-6 text-vmgef-orange">Event Schedule</h3>
                <ul className="space-y-3 text-white/80 font-light">
                  <li>• VIP Art & Wine Reception</li>
                  <li>• Live Band Entertainment</li>
                  <li>• Impact Report & Mini Documentary</li>
                  <li>• Dinner & NGO Impact Awards</li>
                </ul>
              </div>
            </div>

            {/* TICKET CARD */}
            <div className="fade-up bg-white text-vmgef-ink p-10 shadow-2xl relative rounded-3xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-vmgef-ink rounded-b-full"></div>
              
              <div className="text-center mb-10">
                <h3 className="font-serif text-3xl mb-2">Secure Your Seat</h3>
                <p className="text-vmgef-ink-light font-light">Proceeds go directly to VMGEF programs</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex-1 border border-vmgef-ink/10 p-6 text-center hover:border-vmgef-orange transition-colors rounded-2xl">
                  <span className="block text-sm tracking-widest uppercase text-vmgef-ink-light mb-2">Regular</span>
                  <span className="font-serif text-4xl text-vmgef-orange">700<span className="text-xl">GHC</span></span>
                </div>
                <div className="flex-1 bg-vmgef-ink text-white p-6 text-center relative overflow-hidden rounded-2xl">
                  <div className="absolute top-0 right-0 bg-vmgef-orange text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 transform translate-x-4 translate-y-2 rotate-45">VIP</div>
                  <span className="block text-sm tracking-widest uppercase text-white/70 mb-2">VIP Access</span>
                  <span className="font-serif text-4xl text-vmgef-orange">1300<span className="text-xl">GHC</span></span>
                </div>
              </div>

              <div className="bg-vmgef-bg p-6 text-center mb-8 rounded-2xl">
                <span className="block text-sm uppercase tracking-widest text-vmgef-ink-light mb-2">Short Code for Payment</span>
                <span className="font-mono text-3xl font-bold text-vmgef-ink">*713*33*813#</span>
              </div>

              <div className="text-center">
                <p className="text-sm text-vmgef-ink-light font-light mb-2">For sponsorships and inquiries:</p>
                <p className="font-medium">+233 20 0640 740 | +233 50 8115 739</p>
                <p className="font-medium">info@vmgef.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST & COMMUNITY EVENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-vmgef-ink mb-4">Community & Past Events</h2>
            <p className="text-xl text-vmgef-ink-light font-light">Beyond the gala, we are active in the community year-round.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-up border border-vmgef-ink/10 p-8 hover:shadow-xl transition-shadow duration-500 rounded-3xl">
              <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">March 9, 2024</span>
              <h3 className="font-serif text-2xl text-vmgef-ink mb-4">1st Annual Gala Dinner & Fundraiser</h3>
              <p className="text-vmgef-ink-light font-light mb-6">Our inaugural black-tie event held in Accra, establishing the foundation's presence and raising critical funds for our pilot programs.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                <MapPin size={16} className="text-vmgef-orange" /> Accra, Ghana
              </div>
            </div>

            <div className="fade-up border border-vmgef-ink/10 p-8 hover:shadow-xl transition-shadow duration-500 rounded-3xl">
              <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">October 2024</span>
              <h3 className="font-serif text-2xl text-vmgef-ink mb-4">EEEC & Youth Job Fair</h3>
              <p className="text-vmgef-ink-light font-light mb-6">Entrepreneurship Education & Empowerment Conference. A 2-day business and mentorship workshop co-hosted with JTE Business Consult.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                <MapPin size={16} className="text-vmgef-orange" /> St. Giles Center, Accra
              </div>
            </div>

            <div className="fade-up border border-vmgef-ink/10 p-8 hover:shadow-xl transition-shadow duration-500 rounded-3xl">
              <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">October 2024</span>
              <h3 className="font-serif text-2xl text-vmgef-ink mb-4">Community Beach Clean-Up</h3>
              <p className="text-vmgef-ink-light font-light mb-6">A grassroots environmental initiative bringing together volunteers to clean local beaches and promote climate-smart practices.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                <MapPin size={16} className="text-vmgef-orange" /> Accra, Ghana
              </div>
            </div>

            <div className="fade-up bg-vmgef-bg p-8 border border-vmgef-orange/20 rounded-3xl">
              <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">Upcoming • Dec 2025</span>
              <h3 className="font-serif text-2xl text-vmgef-ink mb-4">Virtual Info Session</h3>
              <p className="text-vmgef-ink-light font-light mb-6">Information session for the "Confident Girls Bright Futures – Tanzania School Tour 2026".</p>
              <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                <Ticket size={16} className="text-vmgef-orange" /> Online Event
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

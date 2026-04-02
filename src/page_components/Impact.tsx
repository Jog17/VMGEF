"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Users, GraduationCap, Heart, TreePine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".impact-hero", {
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

    // Number counter animation
    const numbers = gsap.utils.toArray<HTMLElement>(".counter-num");
    numbers.forEach((num) => {
      const target = parseInt(num.getAttribute("data-target") || "0", 10);
      gsap.to(num, {
        scrollTrigger: {
          trigger: num,
          start: "top 85%",
        },
        innerHTML: target,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        onUpdate: function() {
          num.innerHTML = Math.round(Number(num.innerHTML)).toString() + (num.getAttribute("data-suffix") || "");
        }
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
            src="/vmgef_pics/IMG-20251002-WA0034.jpg" 
            alt="Impact Hero" 
            className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vmgef-bg via-vmgef-bg/80 to-vmgef-bg"></div>
        </div>
        <div className="relative z-10">
          <span className="impact-hero text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">Our Impact</span>
          <h1 className="impact-hero font-serif text-6xl md:text-8xl text-vmgef-ink leading-[1.1] tracking-tight mb-8">
            Measuring <span className="italic text-vmgef-orange">Change.</span>
          </h1>
          <p className="impact-hero text-xl text-vmgef-ink-light font-light leading-relaxed max-w-3xl mx-auto">
            We believe in transparency and tangible results. Here is a look at how your support is transforming lives across Ghana and beyond.
          </p>
        </div>
      </section>

      {/* STATS GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="fade-up bg-white p-10 border border-vmgef-ink/10 text-center rounded-3xl">
            <Users size={40} className="text-vmgef-orange mx-auto mb-6" />
            <div className="font-serif text-5xl text-vmgef-ink mb-2 counter-num" data-target="1500" data-suffix="+">0</div>
            <p className="text-vmgef-ink-light font-light uppercase tracking-widest text-sm">Students Reached</p>
          </div>
          <div className="fade-up bg-vmgef-ink text-white p-10 text-center rounded-3xl">
            <GraduationCap size={40} className="text-vmgef-orange mx-auto mb-6" />
            <div className="font-serif text-5xl mb-2 counter-num" data-target="45">0</div>
            <p className="text-white/70 font-light uppercase tracking-widest text-sm">Scholarships Awarded</p>
          </div>
          <div className="fade-up bg-vmgef-orange text-white p-10 text-center rounded-3xl">
            <Heart size={40} className="text-white mx-auto mb-6" />
            <div className="font-serif text-5xl mb-2 counter-num" data-target="12000" data-suffix=" GHS">0</div>
            <p className="text-white/90 font-light uppercase tracking-widest text-sm">In Seed Grants</p>
          </div>
          <div className="fade-up bg-[#F4F1ED] p-10 border border-vmgef-ink/10 text-center rounded-3xl">
            <TreePine size={40} className="text-vmgef-orange mx-auto mb-6" />
            <div className="font-serif text-5xl text-vmgef-ink mb-2 counter-num" data-target="500" data-suffix="+">0</div>
            <p className="text-vmgef-ink-light font-light uppercase tracking-widest text-sm">Trees Planted</p>
          </div>
        </div>
      </section>

      {/* TANZANIA TOUR HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="bg-vmgef-ink rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <span className="fade-up text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">Global Expansion</span>
              <h2 className="fade-up font-serif text-4xl md:text-5xl text-white mb-6">Tanzania School Tour</h2>
              <p className="fade-up text-white/70 font-light leading-relaxed mb-8">
                In March 2025, VMGEF is expanding its footprint beyond Ghana. We are embarking on the "Confident Girls Bright Futures" school tour in Ukerewe, Tanzania. This initiative aims to empower young girls with essential life skills, educational resources, and the confidence to pursue their dreams.
              </p>
              <div className="fade-up flex items-center gap-4 text-white">
                <MapPin className="text-vmgef-orange" />
                <span className="font-light tracking-wider">Ukerewe Island, Tanzania</span>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="/vmgef_pics/ukerewe map.jpg" 
                alt="Ukerewe Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-vmgef-ink to-transparent"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/vmgef_pics/tanzania flag.png" 
                  alt="Tanzania Flag" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER / TANGIBLE DIFFERENCE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="fade-up font-serif text-4xl md:text-5xl text-vmgef-ink mb-6">Tangible Difference</h2>
          <p className="fade-up text-vmgef-ink-light font-light max-w-2xl mx-auto">
            We don't just talk about change; we build it. From outfitting rural clinics to providing hands-on STEM education, our projects leave a lasting mark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-up group">
            <div className="relative h-[400px] overflow-hidden mb-6 rounded-3xl">
              <img 
                src="/vmgef_pics/IMG-20251002-WA0035.jpg" 
                alt="Mpatase Clinic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full">Healthcare</div>
            </div>
            <h3 className="font-serif text-2xl text-vmgef-ink mb-3">Mpatase Clinic Outfitting</h3>
            <p className="text-vmgef-ink-light font-light">Equipped a 7-room rural clinic, including a dedicated labor suite, serving thousands in the Western Region.</p>
          </div>
          
          <div className="fade-up group">
            <div className="relative h-[400px] overflow-hidden mb-6 rounded-3xl">
              <img 
                src="/vmgef_pics/IMG-20251002-WA0036.jpg" 
                alt="STEM Education" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full">Education</div>
            </div>
            <h3 className="font-serif text-2xl text-vmgef-ink mb-3">Rural STEM Mentoring</h3>
            <p className="text-vmgef-ink-light font-light">Provided hands-on science and technology education to young women, bridging the gender gap in tech.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { urlForImage } from "@/sanity/lib/image";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  teamMembers: any[];
}

export default function About({ teamMembers }: AboutProps) {
  const container = useRef<HTMLDivElement>(null);
  
  const founder = teamMembers && teamMembers.length > 0 ? teamMembers[0] : null;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".about-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      delay: 0.2
    })
    .from(".about-hero-img", {
      scale: 1.1,
      opacity: 0,
      duration: 1.5
    }, "-=0.8");

    const fadeElements = gsap.utils.toArray<HTMLElement>(".fade-up");
    fadeElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-section",
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block about-title">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl text-vmgef-ink leading-[1.1] tracking-tight mb-8 about-title">
              Turning grief into a powerful engine for <span className="italic text-vmgef-orange">impact.</span>
            </h1>
            <p className="text-xl text-vmgef-ink-light font-light leading-relaxed about-title">
              "Dedicated to the legacy of the best man I have ever known, my late son Vince."
            </p>
          </div>
          <div className="h-[500px] lg:h-[700px] overflow-hidden about-hero-img relative rounded-3xl">
            <img 
              src="/images/IMG-20251127-WA0069.jpg" 
              alt="Community support" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-vmgef-ink/10"></div>
          </div>
        </div>
      </section>

      {/* THE HISTORY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="fade-up mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-vmgef-ink mb-8">The Catalyst</h2>
            <div className="space-y-6 text-lg text-vmgef-ink-light font-light leading-relaxed">
              <p>
                The Vince Memorial Garden and Education Foundation (VMGEF) was formally incorporated in 2023. It was born from an unimaginable loss, but fueled by an unbreakable spirit.
              </p>
              <p>
                Jahzara Agyemang, a Ghanaian-American educator and former college professor, launched VMGEF in Accra as a tribute to her son, Vince. Recognizing the critical issue of youth unemployment in Ghana, Jahzara channeled her expertise in education into creating tangible, life-changing solutions.
              </p>
              <p>
                The organization began by piloting its flagship programs in 2024, including the first Girls' STEM camp and comprehensive entrepreneurship courses. Since then, the foundation has rapidly expanded its reach nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="parallax-section relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-vmgef-ink">
          <img 
            src="/images/IMG-20251127-WA0064.jpg" 
            alt="Education" 
            className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="fade-up font-serif text-4xl md:text-6xl text-white leading-tight">
            "We provide tangible solutions to unemployment through a variety of impactful educational programs."
          </h2>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32 bg-vmgef-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up mb-16 text-center">
            <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Leadership</span>
            <h2 className="font-serif text-5xl text-vmgef-ink">Who We Are</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="fade-up md:col-span-5 h-[600px] overflow-hidden rounded-3xl">
              <img 
                src="/images/IMG-20251002-WA0022.jpg" 
                alt={founder ? founder.name : "Jahzara Agyemang"} 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="fade-up md:col-span-7 md:pl-12">
              <h3 className="font-serif text-4xl text-vmgef-ink mb-2">{founder ? founder.name : "Jahzara Agyemang, M.Ed."}</h3>
              <p className="text-vmgef-orange tracking-widest uppercase text-sm font-bold mb-8">{founder ? founder.role : "Founder & Executive Director"}</p>
              
              <div className="space-y-6 text-lg text-vmgef-ink-light font-light leading-relaxed mb-12">
                <p>
                  {founder ? founder.bio : "Jahzara (also known as Obaa Yaa Papabi) is a Philadelphia-raised, Ghana-based educator and entrepreneur. She has served as a professor and nonprofit director in both the US and Ghana."}
                </p>
                {!founder && (
                  <p>
                    Her biography highlights a lifetime of leadership in education and women's empowerment. Today, she leads VMGEF with a small, dedicated core team of 2-10 staff and volunteers headquartered in Weija, Accra.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-vmgef-ink/10 pt-8">
                <div>
                  <h4 className="font-serif text-2xl text-vmgef-ink mb-2">Headquarters</h4>
                  <p className="text-vmgef-ink-light font-light">Weija, Accra, Ghana</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-vmgef-ink mb-2">Team</h4>
                  <p className="text-vmgef-ink-light font-light">Small core staff & dedicated volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

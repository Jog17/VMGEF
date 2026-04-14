"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Stethoscope, GraduationCap, Leaf, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { urlForImage } from "@/sanity/lib/image";

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  programs: any[];
  featuredEvents: any[];
  testimonials: any[];
}

export default function Home({ programs, featuredEvents, testimonials }: HomeProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.from(".hero-line", {
      scaleX: 0,
      transformOrigin: "center",
      duration: 1.2,
      delay: 0.2
    })
    .from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 1
    }, "-=0.8")
    .from(".hero-title-line", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      rotation: 2
    }, "-=0.8")
    .from(".hero-desc", {
      y: 30,
      opacity: 0,
      duration: 1
    }, "-=0.8")
    .from(".hero-btn", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    }, "-=0.6");

    // Featured Cards Stagger
    gsap.from(".featured-card", {
      scrollTrigger: {
        trigger: ".featured-grid",
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Scroll Animations for Sections
    const fadeUpElements = gsap.utils.toArray<HTMLElement>(".fade-up");
    fadeUpElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });

    // Bento Grid Stagger
    gsap.from(".bento-item", {
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Parallax Image
    gsap.to(".parallax-img", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });

    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-video-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 150,
      ease: "none"
    });

  }, { scope: container });

  return (
    <main ref={container} className="w-full min-h-screen bg-vmgef-bg overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-vmgef-ink">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="/images/VID-20250425-WA0008.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-vmgef-ink/60 via-vmgef-ink/40 to-vmgef-bg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-6 overflow-hidden">
            <div className="hero-line h-[1px] w-16 bg-vmgef-orange"></div>
            <span className="hero-subtitle text-vmgef-orange tracking-[0.25em] uppercase text-xs md:text-sm font-semibold">
              Vince Memorial Garden & Education Foundation
            </span>
            <div className="hero-line h-[1px] w-16 bg-vmgef-orange"></div>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] text-white leading-[0.9] tracking-tight max-w-6xl mb-10">
            <div className="overflow-hidden pb-2"><div className="hero-title-line">Education is</div></div>
            <div className="overflow-hidden pb-2"><div className="hero-title-line">my <span className="italic text-vmgef-orange">Superpower.</span></div></div>
          </h1>

          <p className="hero-desc text-lg md:text-xl text-white/80 max-w-2xl mb-14 font-light leading-relaxed">
            Dedicated to the legacy of Vince. We provide tangible solutions to unemployment through impactful educational programs, empowering Ghanaian youth and women.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/programs" 
              className="hero-btn group flex items-center justify-center gap-3 bg-vmgef-orange text-white px-10 py-5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-vmgef-ink transition-all duration-500 rounded-full"
            >
              Our Programs
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
            <Link 
              href="/about" 
              className="hero-btn group flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-10 py-5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-vmgef-ink transition-all duration-500 backdrop-blur-sm rounded-full"
            >
              The Legacy
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED INITIATIVES (4 Items from Jahzara) */}
      <section className="py-24 bg-vmgef-bg relative z-20 -mt-20">
        <div className="max-w-[96rem] mx-auto px-6 md:px-12">
          <div className="featured-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1: Tanzania Tour */}
            <Link href="/events" className="featured-card group relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-vmgef-ink text-white flex flex-col justify-end p-8 shadow-2xl">
              <img src="/images/IMG-20251127-WA0065.jpg" alt="Tanzania School Tour" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-12 h-12 bg-vmgef-orange rounded-full flex items-center justify-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ArrowRight size={20} className="text-white" />
                </div>
                <span className="text-vmgef-orange text-xs font-bold tracking-widest uppercase mb-3 block">March Event</span>
                <h3 className="font-serif text-3xl mb-4 leading-tight">Confident Girls Bright Futures Tanzania School Tour</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Click to learn more about the project and ways to donate.</p>
              </div>
            </Link>

            {/* Item 2: Our Impact */}
            <Link href="/impact" className="featured-card group relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-vmgef-ink text-white flex flex-col justify-end p-8 shadow-2xl">
              <img src="/images/IMG-20251002-WA0034.jpg" alt="Our Impact" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ArrowRight size={20} className="text-vmgef-ink" />
                </div>
                <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-3 block">Year in Review</span>
                <h3 className="font-serif text-3xl mb-4 leading-tight">Our 2025<br/>Impact</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">See the tangible difference we are making this year.</p>
              </div>
            </Link>

            {/* Item 3: 3rd Annual Gala */}
            <Link href="/events" className="featured-card group relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-vmgef-ink text-white flex flex-col justify-end p-8 shadow-2xl">
              <img src="/images/IMG-20251002-WA0052.jpg" alt="3rd Annual Gala" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-12 h-12 bg-vmgef-orange rounded-full flex items-center justify-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ArrowRight size={20} className="text-white" />
                </div>
                <span className="text-vmgef-orange text-xs font-bold tracking-widest uppercase mb-3 block">July 25</span>
                <h3 className="font-serif text-3xl mb-4 leading-tight">3rd Annual Gala<br/>Join Us</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Save the date for an unforgettable evening of celebration.</p>
              </div>
            </Link>

            {/* Item 4: BAE Program */}
            <Link href="/programs" className="featured-card group relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-vmgef-ink text-white flex flex-col justify-end p-8 shadow-2xl">
              <img src="/images/IMG-20251002-WA0038.jpg" alt="BAE Program" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ArrowRight size={20} className="text-vmgef-ink" />
                </div>
                <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-3 block">Senior High Program</span>
                <h3 className="font-serif text-3xl mb-4 leading-tight">Building an Entrepreneur</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Click for program explanation and Google link to register your school.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION / VISION (Massive Typography) */}
      <section className="py-32 md:py-48 bg-vmgef-bg relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-vmgef-ink leading-[1.1] tracking-tight mb-12">
              "Dedicated to the legacy of the best man I have ever known, my late son Vince."
            </h2>
            <p className="text-xl md:text-2xl text-vmgef-ink-light font-light leading-relaxed max-w-3xl mx-auto">
              Founded in 2023 by educator Jahzara Agyemang, M.Ed., our vision is to empower Ghanaian youth and women via education and skills training.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS BENTO GRID */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Our Initiatives</span>
              <h2 className="font-serif text-5xl md:text-6xl text-vmgef-ink leading-tight">
                Tangible solutions <br />to unemployment.
              </h2>
            </div>
            <Link href="/programs" className="group flex items-center gap-2 text-vmgef-ink uppercase tracking-widest text-sm font-medium hover:text-vmgef-orange transition-colors pb-2 border-b border-vmgef-ink hover:border-vmgef-orange">
              View All Programs <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="bento-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
            {/* BAE - Large Feature */}
            <div className="bento-item md:col-span-2 lg:col-span-2 row-span-2 bg-vmgef-ink text-white p-10 flex flex-col justify-between group overflow-hidden relative rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img src="/images/IMG-20251002-WA0039.jpg" alt="Entrepreneurship" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="relative z-20">
                <div className="w-12 h-12 bg-vmgef-orange rounded-full flex items-center justify-center mb-6">
                  <BookOpen size={24} className="text-white" />
                </div>
              </div>
              <div className="relative z-20">
                <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-3 block">{programs && programs.length > 0 ? programs[0].subtitle : "14-Week Course"}</span>
                <h3 className="font-serif text-3xl md:text-4xl mb-4">{programs && programs.length > 0 ? programs[0].title : "Building an Entrepreneur (BAE)"}</h3>
                <p className="text-white/80 font-light max-w-md">{programs && programs.length > 0 ? programs[0].description : "Senior-high entrepreneurship course teaching business planning, culminating in a pitch competition with a GHS 10,000 grant."}</p>
              </div>
            </div>

            {/* Confident Girls */}
            <div className={`bento-item md:col-span-1 lg:col-span-2 ${programs && programs.length > 1 && programs[1].color ? programs[1].color : "bg-[#F4F1ED]"} p-10 flex flex-col justify-between group hover:bg-vmgef-orange transition-colors duration-500 rounded-3xl`}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Heart size={24} className="text-vmgef-orange" />
              </div>
              <div>
                <span className="text-vmgef-ink-light group-hover:text-white/80 tracking-widest uppercase text-xs font-bold mb-3 block transition-colors">{programs && programs.length > 1 ? programs[1].subtitle : "8-Week Series"}</span>
                <h3 className="font-serif text-2xl text-vmgef-ink group-hover:text-white mb-3 transition-colors">{programs && programs.length > 1 ? programs[1].title : "Confident Girls, Bright Futures"}</h3>
                <p className="text-vmgef-ink-light group-hover:text-white/90 font-light text-sm transition-colors">{programs && programs.length > 1 ? programs[1].description : "Junior-high empowerment covering self-confidence, integrity, and emotional growth."}</p>
              </div>
            </div>

            {/* Healthcare */}
            <div className={`bento-item md:col-span-1 lg:col-span-1 ${programs && programs.length > 2 && programs[2].color ? programs[2].color : "bg-white"} border border-gray-200 p-8 flex flex-col justify-between group hover:border-vmgef-orange transition-colors duration-500 rounded-3xl`}>
              <Stethoscope size={32} className="text-vmgef-orange mb-6" />
              <div>
                <h3 className="font-serif text-xl text-vmgef-ink mb-3">{programs && programs.length > 2 ? programs[2].title : "Healthcare Outreach"}</h3>
                <p className="text-vmgef-ink-light font-light text-sm">{programs && programs.length > 2 ? programs[2].description : "Mpatase Clinic Equipment Drive. Outfitting a new 7-room rural clinic."}</p>
              </div>
            </div>

            {/* STEM */}
            <div className={`bento-item md:col-span-1 lg:col-span-1 ${programs && programs.length > 3 && programs[3].color ? programs[3].color : "bg-white"} border border-gray-200 p-8 flex flex-col justify-between group hover:border-vmgef-orange transition-colors duration-500 rounded-3xl`}>
              <GraduationCap size={32} className="text-vmgef-orange mb-6" />
              <div>
                <h3 className="font-serif text-xl text-vmgef-ink mb-3">{programs && programs.length > 3 ? programs[3].title : "STEM Scholarships"}</h3>
                <p className="text-vmgef-ink-light font-light text-sm">{programs && programs.length > 3 ? programs[3].description : "4-year university scholarships for young women in science and tech."}</p>
              </div>
            </div>

            {/* Urban Farming */}
            <div className={`bento-item md:col-span-1 lg:col-span-2 ${programs && programs.length > 4 && programs[4].color ? programs[4].color : "bg-[#E8EFE9]"} p-10 flex flex-col justify-between group relative overflow-hidden rounded-3xl`}>
              <Leaf size={32} className="text-[#2D5A27] mb-6 relative z-10" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-vmgef-ink mb-3">{programs && programs.length > 4 ? programs[4].title : "Urban Farming & Reforestation"}</h3>
                <p className="text-vmgef-ink-light font-light text-sm max-w-sm">{programs && programs.length > 4 ? programs[4].description : "Teaching climate-smart agriculture and tree-planting through community classes."}</p>
              </div>
              {/* Decorative leaf graphic */}
              <Leaf size={200} className="absolute -bottom-10 -right-10 text-[#2D5A27]/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 md:py-32 bg-vmgef-ink relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up text-center mb-16">
            <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Watch Our Impact</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">The VMGEF Story</h2>
          </div>
          
          <div className="fade-up parallax-video-container relative w-full max-w-5xl mx-auto aspect-video bg-black group cursor-pointer overflow-hidden shadow-2xl rounded-3xl">
            {/* Placeholder for actual video thumbnail */}
            <img 
              src="/images/IMG-20251127-WA0068.jpg" 
              alt="Video Thumbnail" 
              className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-vmgef-orange rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(255,99,33,0.4)] group-hover:scale-110 transition-transform duration-500">
                <Play size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY (Split Layout) */}
      <section className="py-24 md:py-32 bg-vmgef-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="parallax-container h-[600px] overflow-hidden relative rounded-3xl">
              <img 
                src="/images/IMG-20251002-WA0022.jpg" 
                alt="Jahzara Agyemang" 
                className="parallax-img absolute -top-[20%] left-0 w-full h-[140%] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="fade-up flex flex-col justify-center">
              <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">The Founder</span>
              <h2 className="font-serif text-5xl md:text-6xl text-vmgef-ink leading-tight mb-8">
                Jahzara Agyemang, M.Ed.
              </h2>
              <div className="space-y-6 text-lg text-vmgef-ink-light font-light leading-relaxed">
                <p>
                  Also known as Obaa Yaa Papabi, Jahzara is a Philadelphia-raised, Ghana-based educator and entrepreneur. Having served as a professor and nonprofit director in the US and Ghana, her life's work is dedicated to leadership in education and women's empowerment.
                </p>
                <p>
                  In 2023, she launched VMGEF in Accra as a profound tribute to her late son, Vince. The foundation serves as a direct response to youth unemployment, transforming grief into a powerful engine for community impact.
                </p>
              </div>
              <div className="mt-12">
                <Link href="/about" className="inline-flex items-center gap-3 bg-vmgef-ink text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-vmgef-orange transition-colors duration-300 rounded-full">
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS & AFFILIATES - INFINITE MARQUEE */}
      <section className="py-24 bg-white border-t border-vmgef-ink/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <span className="fade-up text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Our Network</span>
          <h2 className="fade-up font-serif text-4xl text-vmgef-ink">Trusted Partners & Affiliates</h2>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 py-4">
            {/* First set of logos/names */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">UEW</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Univ. of Education, Winneba</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">EIN</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Elhmurst Independent Nursery</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">UMF</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Upward Motion Foundation</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">JFF</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Jabony Fountain Foundation</span>
            </div>
            
            {/* Duplicate set for seamless infinite scroll */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">UEW</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Univ. of Education, Winneba</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">EIN</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Elhmurst Independent Nursery</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">UMF</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Upward Motion Foundation</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-vmgef-bg rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-vmgef-ink">JFF</span>
              </div>
              <span className="font-serif text-xl text-vmgef-ink-light">Jabony Fountain Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS SECTION */}
      <section className="py-24 bg-vmgef-ink text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { number: "14", label: "Week Entrepreneurship Course", sub: "Building an Entrepreneur (BAE)" },
              { number: "4", label: "Year STEM Scholarships", sub: "Partnering with Univ. of Education, Winneba" },
              { number: "7", label: "Room Rural Clinic Outfitted", sub: "Mpatase Clinic Equipment Drive" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="fade-up flex flex-col items-center text-center pt-8 md:pt-0 px-4"
              >
                <span className="font-serif text-6xl md:text-7xl text-vmgef-orange mb-4">{stat.number}</span>
                <span className="font-sans font-medium text-lg uppercase tracking-wider mb-2">{stat.label}</span>
                <span className="text-white/60 text-sm font-light">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="py-24 bg-vmgef-bg relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Join Us</span>
              <h2 className="font-serif text-4xl md:text-5xl text-vmgef-ink leading-tight">
                Upcoming Events
              </h2>
            </div>
            <Link href="/events" className="group flex items-center gap-2 text-vmgef-ink uppercase tracking-widest text-sm font-medium hover:text-vmgef-orange transition-colors pb-2 border-b border-vmgef-ink hover:border-vmgef-orange">
              View All Events <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Event */}
            <div className="fade-up group relative overflow-hidden rounded-3xl bg-vmgef-ink text-white">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/IMG-20251002-WA0052.jpg" 
                  alt="Gala Event" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vmgef-ink via-vmgef-ink/80 to-transparent"></div>
              </div>
              <div className="relative z-10 p-10 h-full flex flex-col justify-end min-h-[400px]">
                <div className="mb-6">
                  <span className="inline-block bg-vmgef-orange text-white text-xs font-bold tracking-widest uppercase px-4 py-2 mb-4 rounded-full">Featured</span>
                  <h3 className="font-serif text-3xl md:text-4xl mb-2">{featuredEvents && featuredEvents.length > 0 ? featuredEvents[0].title : "2nd Annual Gala"}</h3>
                  <p className="text-white/80 font-light">{featuredEvents && featuredEvents.length > 0 ? featuredEvents[0].description : "A night of celebration, fundraising, and community impact."}</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-auto">
                  <div className="text-sm tracking-widest uppercase font-semibold text-vmgef-orange">{featuredEvents && featuredEvents.length > 0 ? featuredEvents[0].location : "Accra, Ghana"}</div>
                  <Link href="/events" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-vmgef-orange group-hover:border-vmgef-orange transition-colors">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Event */}
            <div className="fade-up group relative overflow-hidden rounded-3xl bg-[#F4F1ED] text-vmgef-ink border border-vmgef-ink/10">
              <div className="p-10 h-full flex flex-col min-h-[400px]">
                <div className="mb-6">
                  <span className="inline-block border border-vmgef-ink/20 text-vmgef-ink-light text-xs font-bold tracking-widest uppercase px-4 py-2 mb-4 rounded-full">Community</span>
                  <h3 className="font-serif text-3xl md:text-4xl mb-2">{featuredEvents && featuredEvents.length > 1 ? featuredEvents[1].title : "BAE Pitch Competition"}</h3>
                  <p className="text-vmgef-ink-light font-light">{featuredEvents && featuredEvents.length > 1 ? featuredEvents[1].description : "Watch our high school entrepreneurs pitch their business plans for a GHS 10,000 grant."}</p>
                </div>
                <div className="flex items-center justify-between border-t border-vmgef-ink/10 pt-6 mt-auto">
                  <div className="text-sm tracking-widest uppercase font-semibold text-vmgef-orange">{featuredEvents && featuredEvents.length > 1 && featuredEvents[1].date ? new Date(featuredEvents[1].date).toLocaleDateString() : "Coming Soon"}</div>
                  <Link href="/events" className="w-10 h-10 rounded-full border border-vmgef-ink/20 flex items-center justify-center group-hover:bg-vmgef-ink group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOICES OF IMPACT */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up text-center mb-16">
            <span className="text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl text-vmgef-ink">Voices of Impact</h2>
          </div>
          
          <div className="fade-up max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-12 h-12 mx-auto text-vmgef-orange/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <p className="font-serif text-2xl md:text-3xl text-vmgef-ink leading-relaxed mb-10">
              "{testimonials && testimonials.length > 0 ? testimonials[0].quote : "The BAE program didn't just teach me how to write a business plan; it taught me that my ideas have value. I now have the confidence to pursue my dreams and create jobs in my community."}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-vmgef-ink/10 overflow-hidden">
                <img src="/images/IMG-20251002-WA0040.jpg" alt="Student" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <div className="font-bold text-vmgef-ink text-sm uppercase tracking-widest">{testimonials && testimonials.length > 0 ? testimonials[0].author : "Ama Mensah"}</div>
                <div className="text-vmgef-orange text-xs font-semibold tracking-wider uppercase">{testimonials && testimonials.length > 0 ? testimonials[0].role : "BAE Program Graduate"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-vmgef-orange text-white text-center">
        <div className="fade-up max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Ready to make an impact?</h2>
          <p className="text-xl font-light mb-12 opacity-90">
            Join us in empowering the next generation of Ghanaian leaders, entrepreneurs, and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/donate" 
              className="bg-white text-vmgef-orange px-10 py-5 text-sm tracking-[0.2em] uppercase font-bold hover:bg-vmgef-ink hover:text-white transition-all duration-500 rounded-full"
            >
              Donate Now
            </Link>
            <Link 
              href="/donate" 
              className="bg-transparent border border-white text-white px-10 py-5 text-sm tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-vmgef-orange transition-all duration-500 rounded-full"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

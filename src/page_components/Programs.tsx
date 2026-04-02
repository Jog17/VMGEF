"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BookOpen, Heart, Stethoscope, GraduationCap, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: "bae",
    title: "Building an Entrepreneur (BAE)",
    subtitle: "14-Week Senior-High Course",
    description: "A comprehensive 14-week entrepreneurship course designed for senior-high students. We teach essential business planning, financial literacy, and strategic thinking. The program culminates in a high-stakes pitch competition where the winner receives a GHS 10,000 grant and 6 months of dedicated mentorship to launch their business.",
    icon: BookOpen,
    image: "/vmgef_pics/IMG-20251002-WA0038.jpg",
    color: "bg-vmgef-ink",
    textColor: "text-white"
  },
  {
    id: "confident-girls",
    title: "Confident Girls, Bright Futures",
    subtitle: "8-Week Empowerment Series",
    description: "An intensive 8-week empowerment series specifically tailored for junior-high girls. The curriculum covers critical life skills including self-confidence, integrity, navigating peer-pressure, journaling, and emotional growth. We pair this with ongoing mentorship to ensure lasting impact.",
    icon: Heart,
    image: "/vmgef_pics/IMG-20251127-WA0065.jpg",
    color: "bg-[#F4F1ED]",
    textColor: "text-vmgef-ink"
  },
  {
    id: "healthcare",
    title: "Healthcare Outreach",
    subtitle: "Mpatase Clinic Equipment Drive",
    description: "In partnership with local Queen Mother Nanahemaa Araba Acquaah I and the Jabony Fountain Foundation, we are outfitting a newly constructed rural clinic in Mpatase, Western Region. This vital 7-room facility includes a dedicated labor suite, bringing essential healthcare to an underserved community.",
    icon: Stethoscope,
    image: "/vmgef_pics/IMG-20251002-WA0035.jpg",
    color: "bg-white",
    textColor: "text-vmgef-ink"
  },
  {
    id: "stem",
    title: "STEM Scholarships",
    subtitle: "Partnering with Univ. of Education, Winneba",
    description: "We believe the future of innovation lies in the hands of young women. VMGEF provides full 4-year university scholarships for young women pursuing degrees in science and technology. This is paired with an 18-week rural STEM mentoring program to build a pipeline of future female technologists.",
    icon: GraduationCap,
    image: "/vmgef_pics/IMG-20251002-WA0036.jpg",
    color: "bg-vmgef-ink",
    textColor: "text-white"
  },
  {
    id: "urban-farming",
    title: "Urban Farming & Reforestation",
    subtitle: "Climate-Smart Agriculture",
    description: "Addressing food security and climate change simultaneously. We teach climate-smart agriculture and tree-planting through hands-on community classes. Aided by partners like 'The Garden Boy', we equip locals with the skills for sustainable urban farming and environmental stewardship.",
    icon: Leaf,
    image: "/vmgef_pics/IMG-20251002-WA0037.jpg",
    color: "bg-[#E8EFE9]",
    textColor: "text-vmgef-ink"
  }
];

export default function Programs() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".prog-hero-text", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.2
    });

    const programSections = gsap.utils.toArray<HTMLElement>(".program-section");
    programSections.forEach((sec) => {
      gsap.from(sec.querySelectorAll(".prog-fade"), {
        scrollTrigger: {
          trigger: sec,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      gsap.from(sec.querySelector(".prog-img"), {
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
        },
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
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
            src="/vmgef_pics/IMG-20251002-WA0038.jpg" 
            alt="Programs Hero" 
            className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vmgef-bg via-vmgef-bg/80 to-vmgef-bg"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="prog-hero-text text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">Our Initiatives</span>
          <h1 className="prog-hero-text font-serif text-6xl md:text-8xl text-vmgef-ink leading-[1.1] tracking-tight mb-8">
            Education is <br />
            <span className="italic text-vmgef-orange">My Superpower.</span>
          </h1>
          <p className="prog-hero-text text-xl text-vmgef-ink-light font-light leading-relaxed">
            From entrepreneurship and STEM to healthcare and urban farming, our programs are designed to increase skills, job readiness, and self-reliance in underserved communities.
          </p>
        </div>
      </section>

      {/* PROGRAMS LIST */}
      <section className="pb-32">
        {programs.map((prog, index) => {
          const isEven = index % 2 === 0;
          const Icon = prog.icon;
          
          return (
            <div key={prog.id} className={`program-section ${prog.color} ${prog.textColor} py-24 md:py-32 overflow-hidden`}>
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="prog-fade inline-flex items-center justify-center w-16 h-16 rounded-full bg-vmgef-orange mb-8">
                      <Icon size={32} className="text-white" />
                    </div>
                    <span className="prog-fade block tracking-widest uppercase text-sm font-bold opacity-80 mb-4">
                      {prog.subtitle}
                    </span>
                    <h2 className="prog-fade font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                      {prog.title}
                    </h2>
                    <p className="prog-fade text-lg md:text-xl opacity-80 font-light leading-relaxed mb-10">
                      {prog.description}
                    </p>
                    <div className="prog-fade">
                      <Link 
                        href="/donate" 
                        className={`inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-colors duration-300 rounded-full ${
                          prog.textColor === 'text-white' 
                            ? 'bg-white text-vmgef-ink hover:bg-vmgef-orange hover:text-white' 
                            : 'bg-vmgef-ink text-white hover:bg-vmgef-orange'
                        }`}
                      >
                        Support This Program <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                  <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} h-[400px] md:h-[600px] w-full relative rounded-3xl overflow-hidden`}>
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="prog-img absolute inset-0 w-full h-full object-cover shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

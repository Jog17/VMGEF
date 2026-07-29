"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlForImage } from "@/sanity/lib/image";
import { X, Image as ImageIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface GalleryProps {
  galleryPageData?: any;
}

export default function Gallery({ galleryPageData }: GalleryProps) {
  const container = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.from(".gallery-hero-text", {
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
  }, { scope: container });

  const images = galleryPageData?.images || [];

  return (
    <main ref={container} className="pt-32 pb-24 min-h-screen bg-vmgef-bg selection:bg-vmgef-orange selection:text-white">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="relative z-10 max-w-4xl mx-auto pt-10">
          <span className="gallery-hero-text text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">
            {galleryPageData?.hero?.subtitle || "Our Visual Journey"}
          </span>
          <h1 className="gallery-hero-text font-serif text-5xl md:text-7xl text-vmgef-ink leading-[1.1] tracking-tight mb-8">
            {galleryPageData?.hero?.title || "Moments of Impact"}
          </h1>
          <p className="gallery-hero-text text-xl text-vmgef-ink-light font-light leading-relaxed max-w-2xl mx-auto">
            {galleryPageData?.hero?.description || "Browse through the memories, events, and milestones that define VMGEF."}
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img: any, index: number) => {
              const imgUrl = urlForImage(img)?.url();
              if (!imgUrl) return null;
              
              return (
                <div 
                  key={img._key || index} 
                  className="fade-up break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl bg-black"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={imgUrl}
                    alt={img.caption || `Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {img.caption && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-white font-serif text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {img.caption}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="fade-up py-32 text-center bg-white rounded-3xl border border-vmgef-ink/10 flex flex-col items-center justify-center">
            <ImageIcon size={48} className="text-vmgef-ink-light/30 mb-4" />
            <p className="text-vmgef-ink-light font-light text-xl">No images have been uploaded yet.</p>
            <p className="text-vmgef-ink-light/60 mt-2">Check back soon for updates to our gallery.</p>
          </div>
        )}
      </section>

      {/* LIGHTBOX / MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-vmgef-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={urlForImage(selectedImage)?.url() || ""} 
              alt={selectedImage.caption || "Gallery preview"}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-6 font-serif text-xl md:text-2xl font-light">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}

    </main>
  );
}


"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Star, Clock, Ticket, User, Mail, Phone, Users, CheckCircle2, X, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { RichText } from "@/components/RichText";
import { urlForImage } from "@/sanity/lib/image";

interface EventsProps {
  events: any[];
  featuredEvents: any[];
  eventsPageData?: any;
}

export default function Events({ events, featuredEvents, eventsPageData }: EventsProps) {
  const container = useRef<HTMLDivElement>(null);
  const [registeringEvent, setRegisteringEvent] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guestsCount: "1",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const featured = featuredEvents && featuredEvents.length > 0 ? featuredEvents[0] : null;

  const handleOpenRegistration = (eventObj: any) => {
    setRegisteringEvent(eventObj);
    setFormData({ fullName: "", email: "", phone: "", guestsCount: "1", notes: "" });
    setIsSubmitted(false);
  };

  const handleCloseRegistration = () => {
    setRegisteringEvent(null);
    setIsSubmitted(false);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

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
          {eventsPageData?.hero?.backgroundImage ? (
            <img 
              src={urlForImage(eventsPageData.hero.backgroundImage)?.url() || ""} 
              alt="Events Hero" 
              className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-20"
            />
          ) : (
            <img 
              src="/vmgef_pics/IMG-20251002-WA0052.jpg" 
              alt="Events Hero" 
              className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-vmgef-bg via-vmgef-bg/80 to-vmgef-bg"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="event-hero-text text-vmgef-orange tracking-[0.2em] uppercase text-sm font-semibold mb-6 block">
            {eventsPageData?.hero?.subtitle || "Marquee Events"}
          </span>
          <h1 className="event-hero-text font-serif text-6xl md:text-8xl text-vmgef-ink leading-[1.1] tracking-tight mb-8">
            {eventsPageData?.hero?.titleLines ? (
              <>
                {eventsPageData.hero.titleLines[0]} <span className="italic text-vmgef-orange">{eventsPageData.hero.titleLines[1]}</span>
              </>
            ) : (
              <>
                A Night of <span className="italic text-vmgef-orange">Impact.</span>
              </>
            )}
          </h1>
          <p className="event-hero-text text-xl text-vmgef-ink-light font-light leading-relaxed">
            {eventsPageData?.hero?.description || "Join us for our annual black-tie fundraising galas. Celebrate art, excellence, and the empowerment of Ghanaian youth."}
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
                <Star size={14} /> {featured && featured.date && new Date(featured.date) > new Date() ? "Upcoming Event" : "Featured Event"}
              </div>
              <h2 className="font-serif text-5xl md:text-7xl mb-6">{featured ? featured.title : "2nd Annual Gala"}</h2>
              <div className="text-2xl font-light text-white/80 mb-8 italic prose prose-invert prose-p:my-0 prose-p:inline">
                <RichText value={featured?.description} fallback="Honoring Women Making an Impact in the Community" />
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-white/80">
                  <Calendar className="text-vmgef-orange" size={24} />
                  <span className="text-lg font-light">{featured && featured.date ? new Date(featured.date).toLocaleDateString() : "Sunday, March 9th, 2025"}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Clock className="text-vmgef-orange" size={24} />
                  <span className="text-lg font-light">{featured?.time || "4:00 PM - 8:00 PM Prompt"}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <MapPin className="text-vmgef-orange" size={24} />
                  <span className="text-lg font-light">{featured ? featured.location : "Canis Majoris Center, Awoshie - Ghana"}</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm mb-8">
                <h3 className="font-serif text-2xl mb-6 text-vmgef-orange">Event Schedule</h3>
                <ul className="space-y-3 text-white/80 font-light">
                  {featured?.schedule?.length > 0 ? (
                    featured.schedule.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))
                  ) : (
                    <>
                      <li>• VIP Art & Wine Reception</li>
                      <li>• Live Band Entertainment</li>
                      <li>• Impact Report & Mini Documentary</li>
                      <li>• Dinner & NGO Impact Awards</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/events/${featured?.slug?.current || featured?._id}`}
                  className="inline-flex items-center gap-2 bg-white text-vmgef-ink hover:bg-vmgef-orange hover:text-white font-medium px-6 py-4 rounded-full transition-colors shadow-lg"
                >
                  <span>View Full Event Details</span>
                  <ArrowRight size={18} />
                </Link>

                {(featured?.requiresRegistration || featured?.registrationUrl) && (
                  <div>
                    {featured.registrationType === 'external' && featured.registrationUrl ? (
                      <a
                        href={featured.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-vmgef-orange hover:bg-vmgef-orange-dark text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg"
                      >
                        <span>{featured.registrationButtonText || "Register for Event"}</span>
                        <ExternalLink size={18} />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleOpenRegistration(featured)}
                        className="inline-flex items-center gap-3 bg-vmgef-orange hover:bg-vmgef-orange-dark text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg cursor-pointer"
                      >
                        <span>{featured.registrationButtonText || "Register / RSVP Now"}</span>
                        <ArrowRight size={18} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* EVENT IMAGE & TICKET CARD */}
            {(featured?.image || (featured?.tickets && (featured.tickets.regularPrice || featured.tickets.paymentShortCode || featured.tickets.vipPrice || featured.tickets.title))) && (
              <div className="flex flex-col gap-8">
                {featured?.image && (
                  <div className="fade-up rounded-3xl overflow-hidden shadow-2xl relative bg-vmgef-ink/10">
                    <img 
                      src={urlForImage(featured.image)?.url() || ""} 
                      alt={featured.title} 
                      className="w-full h-auto block rounded-3xl"
                    />
                  </div>
                )}
                
                {featured?.tickets && (featured.tickets.regularPrice || featured.tickets.paymentShortCode || featured.tickets.vipPrice || featured.tickets.title) && (
                  <div className="fade-up bg-white text-vmgef-ink p-10 shadow-2xl relative rounded-3xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-vmgef-ink rounded-b-full"></div>
                    
                    <div className="text-center mb-10">
                      <h3 className="font-serif text-3xl mb-2">{featured.tickets.title || "Secure Your Seat"}</h3>
                      {featured.tickets.subtitle && <p className="text-vmgef-ink-light font-light">{featured.tickets.subtitle}</p>}
                    </div>

                    {(featured.tickets.regularPrice || featured.tickets.vipPrice) && (
                      <div className="flex flex-col sm:flex-row gap-6 mb-10">
                        {featured.tickets.regularPrice && (
                          <div className="flex-1 border border-vmgef-ink/10 p-6 text-center hover:border-vmgef-orange transition-colors rounded-2xl">
                            <span className="block text-sm tracking-widest uppercase text-vmgef-ink-light mb-2">Regular</span>
                            <span className="font-serif text-4xl text-vmgef-orange">{featured.tickets.regularPrice}<span className="text-xl">GHC</span></span>
                          </div>
                        )}
                        {featured.tickets.vipPrice && (
                          <div className="flex-1 bg-vmgef-ink text-white p-6 text-center relative overflow-hidden rounded-2xl">
                            <div className="absolute top-0 right-0 bg-vmgef-orange text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 transform translate-x-4 translate-y-2 rotate-45">VIP</div>
                            <span className="block text-sm tracking-widest uppercase text-white/70 mb-2">VIP Access</span>
                            <span className="font-serif text-4xl text-vmgef-orange">{featured.tickets.vipPrice}<span className="text-xl">GHC</span></span>
                          </div>
                        )}
                      </div>
                    )}

                    {featured.tickets.paymentShortCode && (
                      <div className="bg-vmgef-bg p-6 text-center mb-8 rounded-2xl">
                        <span className="block text-sm uppercase tracking-widest text-vmgef-ink-light mb-2">Short Code for Payment</span>
                        <span className="font-mono text-3xl font-bold text-vmgef-ink">{featured.tickets.paymentShortCode}</span>
                      </div>
                    )}

                    {(featured.tickets.inquiriesPhone || featured.tickets.inquiriesEmail) && (
                      <div className="text-center">
                        <p className="text-sm text-vmgef-ink-light font-light mb-2">For sponsorships and inquiries:</p>
                        {featured.tickets.inquiriesPhone && <p className="font-medium">{featured.tickets.inquiriesPhone}</p>}
                        {featured.tickets.inquiriesEmail && <p className="font-medium">{featured.tickets.inquiriesEmail}</p>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PAST & COMMUNITY EVENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="fade-up mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-vmgef-ink mb-4">
              {eventsPageData?.communityEvents?.title || "Community & Past Events"}
            </h2>
            <p className="text-xl text-vmgef-ink-light font-light">
              {eventsPageData?.communityEvents?.subtitle || "Beyond the gala, we are active in the community year-round."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events && events.length > 0 ? (
              events.filter(e => !e.isFeatured).map((event: any, idx: number) => (
                <div key={event._id || idx} className={`fade-up border border-vmgef-ink/10 overflow-hidden hover:shadow-xl transition-shadow duration-500 rounded-3xl ${new Date(event.date) > new Date() ? 'bg-vmgef-bg border-vmgef-orange/20' : ''}`}>
                  {event.image && (
                    <div className="w-full overflow-hidden bg-vmgef-ink/5 rounded-t-3xl">
                      <img 
                        src={urlForImage(event.image)?.url() || ""} 
                        alt={event.title} 
                        className="w-full h-auto block transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">
                    {new Date(event.date) > new Date() ? "Upcoming • " : ""}
                    {new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <h3 className="font-serif text-2xl text-vmgef-ink mb-4">{event.title}</h3>
                  <RichText value={event.description} className="text-vmgef-ink-light font-light mb-6 prose prose-vmgef prose-sm line-clamp-3" />
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-vmgef-ink/10 mt-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                      {event.location && event.location.toLowerCase().includes('online') ? (
                        <Ticket size={16} className="text-vmgef-orange" />
                      ) : (
                        <MapPin size={16} className="text-vmgef-orange" />
                      )} 
                      {event.location}
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/events/${event.slug?.current || event._id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vmgef-ink hover:text-vmgef-orange transition-colors"
                      >
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </Link>

                      {(event.requiresRegistration || event.registrationUrl) && (
                        <div>
                          {event.registrationType === 'external' && event.registrationUrl ? (
                            <a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vmgef-orange hover:text-vmgef-orange-dark transition-colors"
                            >
                              <span>{event.registrationButtonText || "Register"}</span>
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            <button
                              onClick={() => handleOpenRegistration(event)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-vmgef-orange text-white px-4 py-2 rounded-full hover:bg-vmgef-orange-dark transition-colors cursor-pointer"
                            >
                              <span>{event.registrationButtonText || "RSVP"}</span>
                              <ArrowRight size={14} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="fade-up border border-vmgef-ink/10 p-8 hover:shadow-xl transition-shadow duration-500 rounded-3xl">
                <p className="text-vmgef-ink-light font-light">No additional events available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* REGISTRATION MODAL */}
      {registeringEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vmgef-ink/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-vmgef-ink w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden relative border border-vmgef-ink/10">
            {/* Header */}
            <div className="bg-vmgef-ink text-white p-8 relative">
              <button
                onClick={handleCloseRegistration}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close registration modal"
              >
                <X size={20} />
              </button>
              <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold block mb-2">
                Event Registration / RSVP
              </span>
              <h3 className="font-serif text-3xl pr-8">{registeringEvent.title}</h3>
              {registeringEvent.date && (
                <p className="text-sm text-white/70 mt-2 font-light flex items-center gap-2">
                  <Calendar size={14} className="text-vmgef-orange" />
                  {new Date(registeringEvent.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  {registeringEvent.time && ` • ${registeringEvent.time}`}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif text-3xl text-vmgef-ink">You're Registered!</h4>
                  <p className="text-vmgef-ink-light font-light max-w-md mx-auto">
                    Thank you, <strong className="font-semibold text-vmgef-ink">{formData.fullName}</strong>. We've recorded your registration ({formData.guestsCount} guest{parseInt(formData.guestsCount) > 1 ? 's' : ''}) for <strong className="font-semibold text-vmgef-ink">{registeringEvent.title}</strong>.
                  </p>
                  <p className="text-xs text-vmgef-ink-light italic">
                    A confirmation email has been sent to {formData.email}.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={handleCloseRegistration}
                      className="bg-vmgef-ink text-white px-8 py-3 rounded-full hover:bg-vmgef-orange transition-colors font-medium text-sm cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitRegistration} className="space-y-5">
                  <p className="text-sm text-vmgef-ink-light font-light mb-4">
                    Please fill out the form below to register and secure your spot for this event.
                  </p>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-vmgef-ink-light mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-vmgef-ink/40" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 bg-vmgef-bg border border-vmgef-ink/10 rounded-2xl focus:outline-none focus:border-vmgef-orange text-sm text-vmgef-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-vmgef-ink-light mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-vmgef-ink/40" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full pl-11 pr-4 py-3 bg-vmgef-bg border border-vmgef-ink/10 rounded-2xl focus:outline-none focus:border-vmgef-orange text-sm text-vmgef-ink"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-vmgef-ink-light mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-vmgef-ink/40" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+233 20 000 0000"
                          className="w-full pl-11 pr-4 py-3 bg-vmgef-bg border border-vmgef-ink/10 rounded-2xl focus:outline-none focus:border-vmgef-orange text-sm text-vmgef-ink"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-vmgef-ink-light mb-2">
                      Number of Attendees
                    </label>
                    <div className="relative">
                      <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-vmgef-ink/40" />
                      <select
                        value={formData.guestsCount}
                        onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 bg-vmgef-bg border border-vmgef-ink/10 rounded-2xl focus:outline-none focus:border-vmgef-orange text-sm text-vmgef-ink appearance-none cursor-pointer"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-vmgef-ink-light mb-2">
                      Special Notes / Dietary Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific requests or requirements..."
                      className="w-full p-4 bg-vmgef-bg border border-vmgef-ink/10 rounded-2xl focus:outline-none focus:border-vmgef-orange text-sm text-vmgef-ink resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-4">
                    <button
                      type="button"
                      onClick={handleCloseRegistration}
                      className="px-6 py-3 rounded-full border border-vmgef-ink/10 text-vmgef-ink-light hover:bg-vmgef-bg transition-colors text-sm font-medium cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-vmgef-orange hover:bg-vmgef-orange-dark text-white px-8 py-3 rounded-full transition-colors font-medium text-sm shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Registering..." : "Confirm Registration"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

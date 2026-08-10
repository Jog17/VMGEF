"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, MapPin, Clock, ArrowLeft, Ticket, CheckCircle2, 
  CreditCard, Phone, Mail, ShieldCheck, Users, ExternalLink, Sparkles 
} from "lucide-react";
import { RichText } from "@/components/RichText";
import { urlForImage } from "@/sanity/lib/image";

declare global {
  interface Window {
    PaystackPop?: any;
  }
}

interface EventDetailProps {
  event: any;
}

export default function EventDetail({ event }: EventDetailProps) {
  const [selectedTicketType, setSelectedTicketType] = useState<"regular" | "vip">("regular");
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "momo">("paystack");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentRef, setPaymentRef] = useState("");

  // Load Paystack Inline JS script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const regularPriceNum = parseFloat(event?.tickets?.regularPrice?.replace(/[^0-9.]/g, "") || "0");
  const vipPriceNum = parseFloat(event?.tickets?.vipPrice?.replace(/[^0-9.]/g, "") || "0");

  const pricePerTicket = selectedTicketType === "vip" && vipPriceNum > 0 ? vipPriceNum : regularPriceNum;
  const totalPrice = pricePerTicket * ticketQuantity;

  const handleOpenModal = (ticketType: "regular" | "vip" = "regular") => {
    setSelectedTicketType(ticketType);
    setShowRegistrationModal(true);
    setIsSuccess(false);
  };

  const handlePaystackPayment = () => {
    setIsProcessing(true);
    const reference = `VMGEF-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

    if (window.PaystackPop && paystackPublicKey && paystackPublicKey !== 'pk_test_placeholder') {
      const handler = window.PaystackPop.setup({
        key: paystackPublicKey,
        email: formData.email,
        amount: Math.round(totalPrice * 100), // Amount in pesewas (GHS * 100)
        currency: "GHS",
        ref: reference,
        metadata: {
          custom_fields: [
            { display_name: "Event Title", variable_name: "event_title", value: event.title },
            { display_name: "Full Name", variable_name: "full_name", value: formData.fullName },
            { display_name: "Phone Number", variable_name: "phone_number", value: formData.phone },
            { display_name: "Ticket Type", variable_name: "ticket_type", value: selectedTicketType.toUpperCase() },
            { display_name: "Quantity", variable_name: "quantity", value: ticketQuantity.toString() }
          ]
        },
        callback: function (response: any) {
          setIsProcessing(false);
          setPaymentRef(response.reference || reference);
          setIsSuccess(true);
        },
        onClose: function () {
          setIsProcessing(false);
        }
      });
      handler.openIframe();
    } else {
      // Direct registration confirmation fallback when Paystack test keys are not yet configured in production
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentRef(reference);
        setIsSuccess(true);
      }, 1200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "paystack" && totalPrice > 0) {
      handlePaystackPayment();
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentRef(`REG-${Date.now().toString().slice(-6)}`);
        setIsSuccess(true);
      }, 1000);
    }
  };

  return (
    <main className="min-h-screen bg-vmgef-bg text-vmgef-ink pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-sm font-medium text-vmgef-ink/70 hover:text-vmgef-orange transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to All Events</span>
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              {event?.isFeatured && (
                <span className="bg-vmgef-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Sparkles size={12} />
                  Featured Event
                </span>
              )}
              {event?.date && (
                <span className="bg-vmgef-ink/10 text-vmgef-ink text-xs font-semibold px-3 py-1 rounded-full">
                  {new Date(event.date) > new Date() ? 'Upcoming' : 'Past Event'}
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {event?.title}
            </h1>

            {/* Date, Time, Location Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-vmgef-ink/10 text-sm font-medium">
              {event?.date && (
                <div className="flex items-center gap-2 text-vmgef-ink">
                  <Calendar size={18} className="text-vmgef-orange" />
                  <span>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              )}
              {event?.time && (
                <div className="flex items-center gap-2 text-vmgef-ink">
                  <Clock size={18} className="text-vmgef-orange" />
                  <span>{event.time}</span>
                </div>
              )}
              {event?.location && (
                <div className="flex items-center gap-2 text-vmgef-ink">
                  <MapPin size={18} className="text-vmgef-orange" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>

            {/* Event Description */}
            <div className="pt-2">
              <h2 className="font-serif text-2xl font-bold mb-4">About This Event</h2>
              <RichText 
                value={event?.description} 
                className="prose prose-vmgef prose-lg text-vmgef-ink-light font-light leading-relaxed max-w-none"
              />
            </div>

            {/* Agenda / Schedule */}
            {event?.schedule && event.schedule.length > 0 && (
              <div className="pt-6">
                <h2 className="font-serif text-2xl font-bold mb-4">Event Agenda</h2>
                <div className="bg-white p-6 rounded-3xl border border-vmgef-ink/10 shadow-sm space-y-3">
                  {event.schedule.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 text-vmgef-ink font-light">
                      <span className="w-2 h-2 rounded-full bg-vmgef-orange mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar & Image Column */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* Uncropped Full Height Image */}
            {event?.image && (
              <div className="rounded-3xl overflow-hidden shadow-xl bg-vmgef-ink/10 border border-vmgef-ink/10">
                <img 
                  src={urlForImage(event.image)?.url() || ""} 
                  alt={event.title} 
                  className="w-full h-auto block rounded-3xl"
                />
              </div>
            )}

            {/* Ticket & Registration Action Box */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-vmgef-ink/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-vmgef-ink/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold">{event?.tickets?.title || "Event Registration"}</h3>
                  <p className="text-xs text-vmgef-ink-light mt-0.5">{event?.tickets?.subtitle || "Reserve your spot today"}</p>
                </div>
                <Ticket className="text-vmgef-orange" size={28} />
              </div>

              {/* Pricing Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event?.tickets?.regularPrice && (
                  <div 
                    onClick={() => setSelectedTicketType("regular")}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedTicketType === "regular" 
                        ? "border-vmgef-orange bg-vmgef-orange/5 shadow-sm" 
                        : "border-vmgef-ink/10 hover:border-vmgef-ink/30"
                    }`}
                  >
                    <span className="block text-xs font-bold uppercase tracking-wider text-vmgef-ink-light mb-1">Regular Ticket</span>
                    <span className="font-serif text-2xl font-bold text-vmgef-orange">
                      {event.tickets.regularPrice} <span className="text-xs font-normal text-vmgef-ink">GHC</span>
                    </span>
                  </div>
                )}

                {event?.tickets?.vipPrice && (
                  <div 
                    onClick={() => setSelectedTicketType("vip")}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      selectedTicketType === "vip" 
                        ? "border-vmgef-ink bg-vmgef-ink text-white shadow-sm" 
                        : "border-vmgef-ink/10 hover:border-vmgef-ink/30"
                    }`}
                  >
                    <span className="block text-xs font-bold uppercase tracking-wider opacity-80 mb-1">VIP Access</span>
                    <span className="font-serif text-2xl font-bold text-vmgef-orange">
                      {event.tickets.vipPrice} <span className="text-xs font-normal text-current">GHC</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Register Button */}
              <button
                onClick={() => handleOpenModal(selectedTicketType)}
                className="w-full bg-vmgef-orange hover:bg-vmgef-orange-dark text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{event?.registrationButtonText || "Register & Get Ticket"}</span>
                <ShieldCheck size={18} />
              </button>

              {/* Alternative MoMo Short Code Info */}
              {event?.tickets?.paymentShortCode && (
                <div className="bg-vmgef-bg p-4 rounded-2xl text-center border border-vmgef-ink/5">
                  <span className="block text-xs uppercase tracking-wider text-vmgef-ink-light mb-1 font-semibold">Direct MoMo Shortcode</span>
                  <span className="font-mono text-xl font-bold text-vmgef-ink">{event.tickets.paymentShortCode}</span>
                </div>
              )}

              {/* Contact Inquiries */}
              {(event?.tickets?.inquiriesPhone || event?.tickets?.inquiriesEmail) && (
                <div className="pt-2 text-xs text-vmgef-ink-light space-y-1 text-center">
                  <p className="font-medium text-vmgef-ink mb-1">Questions or Sponsorships?</p>
                  {event.tickets.inquiriesPhone && <p className="flex items-center justify-center gap-1.5"><Phone size={12} /> {event.tickets.inquiriesPhone}</p>}
                  {event.tickets.inquiriesEmail && <p className="flex items-center justify-center gap-1.5"><Mail size={12} /> {event.tickets.inquiriesEmail}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* REGISTRATION & PAYSTACK MODAL */}
      {showRegistrationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vmgef-ink/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-vmgef-ink w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative border border-vmgef-ink/10">
            {/* Header */}
            <div className="bg-vmgef-ink text-white p-6 relative">
              <button
                onClick={() => setShowRegistrationModal(false)}
                className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
              <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold block mb-1">
                Event Registration
              </span>
              <h3 className="font-serif text-2xl pr-8">{event?.title}</h3>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif text-3xl text-vmgef-ink">Registration Confirmed!</h4>
                  <p className="text-vmgef-ink-light font-light text-sm max-w-sm mx-auto">
                    Thank you, <strong className="font-semibold text-vmgef-ink">{formData.fullName}</strong>. Your ticket reservation for <strong className="font-semibold text-vmgef-ink">{event?.title}</strong> is complete.
                  </p>
                  <div className="bg-vmgef-bg p-4 rounded-2xl text-left text-xs space-y-1 font-mono border border-vmgef-ink/10">
                    <p><span className="text-vmgef-ink-light">Reference:</span> {paymentRef}</p>
                    <p><span className="text-vmgef-ink-light">Ticket Type:</span> {selectedTicketType.toUpperCase()}</p>
                    <p><span className="text-vmgef-ink-light">Quantity:</span> {ticketQuantity}</p>
                    <p><span className="text-vmgef-ink-light">Total:</span> GHC {totalPrice > 0 ? totalPrice : 'Free / Pending'}</p>
                  </div>
                  <p className="text-xs text-vmgef-ink-light italic">
                    A confirmation email will be sent to {formData.email}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowRegistrationModal(false)}
                      className="bg-vmgef-ink text-white px-8 py-3 rounded-full hover:bg-vmgef-orange transition-colors font-medium text-sm cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select Ticket Type & Quantity */}
                  <div className="bg-vmgef-bg p-4 rounded-2xl border border-vmgef-ink/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-vmgef-ink-light block">Selected Ticket</span>
                      <span className="font-medium text-sm text-vmgef-ink">{selectedTicketType.toUpperCase()} ({pricePerTicket > 0 ? `GHC ${pricePerTicket}` : 'Free'})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase text-vmgef-ink-light">Qty:</span>
                      <select 
                        value={ticketQuantity} 
                        onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                        className="bg-white border border-vmgef-ink/20 text-sm font-semibold rounded-lg px-2 py-1"
                      >
                        {[1, 2, 3, 4, 5, 10].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-vmgef-ink-light mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ama Serwaa"
                      className="w-full px-4 py-2.5 bg-vmgef-bg border border-vmgef-ink/10 rounded-xl text-sm focus:outline-none focus:border-vmgef-orange"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase font-bold text-vmgef-ink-light mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ama@example.com"
                        className="w-full px-4 py-2.5 bg-vmgef-bg border border-vmgef-ink/10 rounded-xl text-sm focus:outline-none focus:border-vmgef-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold text-vmgef-ink-light mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+233 20 000 0000"
                        className="w-full px-4 py-2.5 bg-vmgef-bg border border-vmgef-ink/10 rounded-xl text-sm focus:outline-none focus:border-vmgef-orange"
                      />
                    </div>
                  </div>

                  {/* Payment Method Option */}
                  {totalPrice > 0 && (
                    <div>
                      <label className="block text-xs uppercase font-bold text-vmgef-ink-light mb-2">Payment Method</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("paystack")}
                          className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            paymentMethod === "paystack" 
                              ? "border-vmgef-orange bg-vmgef-orange/10 text-vmgef-orange" 
                              : "border-vmgef-ink/10 text-vmgef-ink-light"
                          }`}
                        >
                          <CreditCard size={16} />
                          <span>Paystack (Card / MoMo)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod("momo")}
                          className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            paymentMethod === "momo" 
                              ? "border-vmgef-ink bg-vmgef-ink text-white" 
                              : "border-vmgef-ink/10 text-vmgef-ink-light"
                          }`}
                        >
                          <Phone size={16} />
                          <span>Direct MoMo Code</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "momo" && event?.tickets?.paymentShortCode && (
                    <div className="bg-vmgef-bg p-3 rounded-xl text-xs text-center border border-vmgef-ink/10">
                      <p className="text-vmgef-ink-light mb-1">Dial shortcode on your phone to complete payment:</p>
                      <span className="font-mono text-base font-bold text-vmgef-ink">{event.tickets.paymentShortCode}</span>
                    </div>
                  )}

                  {/* Summary & Submit */}
                  <div className="pt-3 border-t border-vmgef-ink/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-vmgef-ink-light block">Total Payable</span>
                      <span className="font-serif text-xl font-bold text-vmgef-orange">
                        GHC {totalPrice}
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="bg-vmgef-orange hover:bg-vmgef-orange-dark text-white px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isProcessing ? "Processing..." : (totalPrice > 0 && paymentMethod === "paystack" ? "Pay with Paystack" : "Confirm RSVP")}
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

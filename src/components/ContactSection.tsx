import React, { useState, FormEvent } from "react";
import { GlowCard } from "./GlowCard";
import { toast } from "sonner";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail, Phone, Github, Linkedin, Instagram, Facebook, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Message couldn't be sent right now. Please email me directly at manujalankanath@gmail.com.");
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Send Email via EmailJS
      const templateParams = {
        from_name: name,
        from_email: email, // Added this
        email: email,      // Added this
        reply_to: email,
        to_email: 'manujalankanath@gmail.com',
        message: message,
        to_name: 'Manuja',
      };

      // 1. Send Notification to Manuja
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // 2. Send Auto-Reply to the User (using the new template)
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          templateParams,
          publicKey
        );
      }

      // 2. Save to Firestore as backup (non-critical)
      try {
        await addDoc(collection(db, "messages"), {
          name,
          email,
          message,
          timestamp: serverTimestamp(),
        });
      } catch (fsError) {
        console.error("Firestore Error (non-critical):", fsError);
        // We don't block the success toast if only Firestore fails
      }

      toast.success("Message sent successfully! I will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong sending your message. Please email me directly at manujalankanath@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0A0A0B] px-5 sm:px-8 md:px-10 py-32 relative z-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6"
          >
            08 / Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D7E2EA] font-black uppercase text-left text-[clamp(3.5rem,10vw,120px)] leading-none tracking-tighter"
          >
            Let's Start A<br /><span className="text-primary">Project.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-[#D7E2EA]/60">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#D7E2EA]/40">Location</span>
                  <span className="text-lg font-medium text-[#D7E2EA]">Colombo, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#D7E2EA]/60">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#D7E2EA]/40">Email</span>
                  <a href="mailto:manujalankanath@gmail.com" className="text-lg font-medium text-[#D7E2EA] hover:text-primary transition-colors">
                    manujalankanath@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#D7E2EA]/60">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#D7E2EA]/40">Phone</span>
                  <a href="tel:+94740107900" className="text-lg font-medium text-[#D7E2EA] hover:text-primary transition-colors">
                    +94 74 010 7900
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-64 rounded-[40px] overflow-hidden border border-white/5 relative group"
            >
              <iframe
                title="Colombo Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58272109409!2d79.78616429726563!3d6.921838600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1715132000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border-[8px] border-transparent rounded-[40px] group-hover:border-primary/20 transition-all" 
                style={{
                  background: "linear-gradient(transparent, rgba(10,10,11,0.5))",
                }}
              />
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[40px] relative overflow-hidden group transition-all"
              style={{
                border: "8px solid transparent",
                background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, linear-gradient(135deg, #06B6D4 0%, #7DD3FC 50%, #FFFFFF 100%) border-box`,
              }}
            >
              <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none group-hover:opacity-15 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #06B6D4 0%, #7DD3FC 100%)",
                  filter: "blur(80px)",
                }}
              />
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[#D7E2EA]/60 text-xs uppercase tracking-[0.2em] font-bold ml-1">Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-[#0C0C0C] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/30"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[#D7E2EA]/60 text-xs uppercase tracking-[0.2em] font-bold ml-1">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-[#0C0C0C] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[#D7E2EA]/60 text-xs uppercase tracking-[0.2em] font-bold ml-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#0C0C0C] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all resize-none placeholder:text-white/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-3 bg-white text-[#0A0A0B] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#D7E2EA] transition-all active:scale-[0.98] disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


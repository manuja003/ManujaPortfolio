import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS keys are missing in .env file.");
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Send Email via EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        email: email,
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

      // 2. Send Auto-Reply to the User
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          templateParams,
          publicKey
        );
      }

      // 2. Also save to Firestore as a backup
      try {
        await addDoc(collection(db, "messages"), {
          name,
          email,
          message,
          timestamp: serverTimestamp(),
        });
      } catch (fsError) {
        console.error("Firestore Error:", fsError);
      }
      
      toast.success('Message sent successfully! I will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      const errorMessage = error?.text || error?.message || "Please check your keys.";
      toast.error(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/manuja-pinsara-lankanath-559a22294/' 
    },
    { 
      icon: <Facebook className="h-5 w-5" />, 
      label: 'Facebook', 
      url: 'https://www.facebook.com/people/Manuja-Pinsara-Lankanath/pfbid023ZB2mtG4L92VxpWTiDtByU3xxBxKVciybQwQAaAyFnS38VBBGwWmuhSDvE3BqQ3Ul/?mibextid=wwXIfr&rdid=JNrYjl9VIT250GqV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A7JvQZTXr%2F%3Fmibextid%3DwwXIfr' 
    },
    { 
      icon: <Github className="h-5 w-5" />, 
      label: 'GitHub', 
      url: 'https://github.com/manuja003' 
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/_manuja_pinsara_/?igsh=MXdqNW14czAzNnJmZw%3D%3D&utm_source=qr#' 
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="section-title text-center mx-auto">Contact Me</h2>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="mb-8">
                <p className="text-foreground/70 leading-relaxed">
                  Feel free to contact me for any inquiries, collaboration opportunities, or just to say hello. 
                  I'm always open to discussing new projects and ideas.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/60 uppercase font-medium">Email</h4>
                    <a 
                      href="mailto:manujalankanath@gmail.com" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      manujalankanath@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/60 uppercase font-medium">Phone</h4>
                    <a 
                      href="tel:+94740107900" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +94 74 010 7900
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-foreground/60 uppercase font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-foreground/70 mb-2"
                    >
                      Your Name
                    </label>
                    <input 
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your Name"
                      autoComplete='off'
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-foreground/70 mb-2"
                    >
                      Your Email
                    </label>
                    <input 
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-foreground/70 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors min-h-[150px]"
                      placeholder="Hello, I'd like to talk about..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg bg-primary text-white font-medium transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-primary/90 hover:shadow-md'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

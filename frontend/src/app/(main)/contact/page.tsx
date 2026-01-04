"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="text-pink-500" size={24} />,
      label: "Email Us",
      value: "hello@nexioncakes.com",
      desc: "Our team will reply within 24 hours.",
    },
    {
      icon: <Phone className="text-pink-500" size={24} />,
      label: "Phone",
      value: "+880 123 456 789",
      desc: "Mon-Sat from 9am to 6pm.",
    },
    {
      icon: <MapPin className="text-pink-500" size={24} />,
      label: "Location",
      value: "Dhanmondi, Dhaka, Bangladesh",
      desc: "Visit our boutique bakery.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-pink-500 font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-800 italic mt-4 mb-6"
          >
            Let’s Talk <span className="text-pink-500">Sweet</span>.
          </motion.h1>
          <p className="text-slate-500 font-medium text-lg max-w-xl">
            আপনার কোনো প্রশ্ন থাকলে বা বিশেষ কোনো ফিডব্যাক দিতে চাইলে আমাদের মেসেজ দিন। আমরা আপনার কথা শুনতে আগ্রহী।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-4 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="bg-white p-8 rounded-[32px] border border-pink-50 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-2">{item.label}</h3>
                <p className="text-lg font-black text-slate-900 mb-1">{item.value}</p>
                <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[<Instagram key="i" />, <Facebook key="f" />, <Twitter key="t" />].map((icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-pink-500 transition-colors shadow-lg">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-[48px] border border-pink-50 shadow-[0_30px_60px_rgba(255,182,193,0.1)] relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-[100px] -z-10 opacity-50" />

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-8 py-4 bg-pink-50/20 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-800 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-8 py-4 bg-pink-50/20 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-800 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?"
                    className="w-full px-8 py-4 bg-pink-50/20 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-800 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-8 py-4 bg-pink-50/20 border border-pink-100 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-800 transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-12 py-5 bg-pink-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-pink-200 flex items-center justify-center gap-3 transition-all hover:bg-pink-600"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="text-pink-500" size={20} />,
      label: "Email Us",
      value: "hello@nexioncakes.com",
      desc: "Reply within 24 hours.",
    },
    {
      icon: <Phone className="text-pink-500" size={20} />,
      label: "Phone",
      value: "+880 123 456 789",
      desc: "Mon-Sat, 9am - 6pm.",
    },
    {
      icon: <MapPin className="text-pink-500" size={20} />,
      label: "Location",
      value: "Dhanmondi, Dhaka",
      desc: "Visit our boutique bakery.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-pink-500 font-black uppercase tracking-[0.3em] text-[9px]"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-800 italic mt-2 mb-4"
          >
            Let’s Talk <span className="text-pink-500">Sweet</span>.
          </motion.h1>
          <p className="text-slate-500 font-medium text-sm max-w-md leading-relaxed">
            আপনার কোনো প্রশ্ন বা ফিডব্যাক থাকলে আমাদের মেসেজ দিন। আমরা আপনার কথা শুনতে আগ্রহী।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="bg-white p-6 rounded-[24px] border border-pink-50 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-400 uppercase text-[9px] tracking-widest mb-1">{item.label}</h3>
                <p className="text-base font-black text-slate-800 mb-0.5">{item.value}</p>
                <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[<Instagram key="i" size={18} />, <Facebook key="f" size={18} />, <Twitter key="t" size={18} />].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-pink-500 transition-all shadow-md active:scale-90">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-pink-50 shadow-sm relative overflow-hidden"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-pink-50/20 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-100 font-bold text-sm text-slate-800 transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 bg-pink-50/20 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-100 font-bold text-sm text-slate-800 transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?"
                    className="w-full px-5 py-3.5 bg-pink-50/20 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-100 font-bold text-sm text-slate-800 transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-5 py-3.5 bg-pink-50/20 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-100 font-bold text-sm text-slate-800 transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-2">
                  <motion.button 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-10 py-4 bg-pink-500 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-pink-100 flex items-center justify-center gap-2 transition-all hover:bg-slate-900"
                  >
                    Send Message
                    <Send size={14} />
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
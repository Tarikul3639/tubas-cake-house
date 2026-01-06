import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0"
    >
      <Link href="/" className="group flex items-center space-x-3">
        {/* Abstract Cake Icon */}
        <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-pink-200 rounded-full group-hover:border-pink-500 transition-colors"
          />
          <div className="bg-gradient-to-br from-pink-500 to-rose-400 p-2 rounded-full shadow-lg shadow-pink-200 group-hover:shadow-pink-400 transition-all">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4V5H10V4C10 2.9 10.9 2 12 2M19 15C19 13.9 18.1 13 17 13H15V11H17C18.1 11 19 10.1 19 9V8C19 6.9 18.1 6 17 6H7C5.9 6 5 6.9 5 8V9C5 10.1 5.9 11 7 11H9V13H7C5.9 13 5 13.9 5 15V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V15Z" />
            </svg>
          </div>
        </div>

        {/* Text Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-slate-800 group-hover:text-pink-600 transition-colors">
            TUBAS
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              CAKE
            </span>
          </span>
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase text-slate-400 group-hover:text-amber-700 transition-colors">
            House of Sweets
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

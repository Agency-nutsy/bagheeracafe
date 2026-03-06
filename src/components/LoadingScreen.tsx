import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

// Update these with your actual Bagheera hero assets
import heroSlide1 from "@/assets/butter-tea.jpg";
import heroSlide2 from "@/assets/butter-tea.jpg";
import heroSlide3 from "@/assets/butter-tea.jpg";
import heroSlide4 from "@/assets/butter-tea.jpg";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 🛠️ SCROLLBAR FIX: Lock the body from scrolling while loading
    document.body.style.overflow = "hidden";

    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    
    const t4 = setTimeout(() => {
      // 🛠️ Release the scroll lock when loading is done
      document.body.style.overflow = "unset";
      onComplete();
    }, 2000);

    return () => {
      // Cleanup to ensure scroll is always restored if component unmounts early
      document.body.style.overflow = "unset"; 
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        // 🦇 Matte Black Spotlight Finish
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PawPrint size={40} className="text-white/10 mb-6" />
        <h1 className="font-display text-4xl sm:text-6xl font-black mb-10 text-white uppercase tracking-[0.2em]">
          Bagheera
        </h1>
      </motion.div>

      {/* Progress Bar Track */}
      <motion.div
        className="w-64 sm:w-80 h-1 rounded-full overflow-hidden"
        style={{ background: "hsla(0,0%,100%,0.1)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Progress Bar Fill */}
        <motion.div
          className="h-full rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      <motion.p
        className="mt-8 text-[10px] font-bold tracking-[0.5em] uppercase text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Lounge & Cafe
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
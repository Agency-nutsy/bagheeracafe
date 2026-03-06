import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Music, Star, ArrowRight, Clock, MapPin, Phone, Sparkles, Instagram, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// 🐆 Assets
import heroSlide1 from "@/assets/hero 1.webp";
import heroSlide2 from "@/assets/hero 2.webp";
import heroSlide3 from "@/assets/hero 3.webp";
import heroSlide4 from "@/assets/hero 4.webp";
import tikkaImg from "@/assets/peri peri.jpg";
import nachosImg from "@/assets/nachos.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import drinkImg from "@/assets/sangriya.jpg";
import gallery1 from "@/assets/hero 1.webp";
import gallery2 from "@/assets/hero 3.webp";

const PHONE = "09910192252";
const PHONE_DISPLAY = "099101 92252";
const INSTAGRAM_URL = "https://www.instagram.com/bagheeracafelounge/?hl=en";
const ADDRESS = "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, Delhi 110033";
const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.141595180633!2d77.2023!3d28.6946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9194b1ae27%3A0xc33b73005f5f6407!2sBagheera%20Cafe%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const specialties = [
  { name: "Peri Peri Tikka", desc: "Zesty, charcoal-grilled chicken with a fiery kick", img: tikkaImg, price: "₹380", tag: "Signature" },
  { name: "Chicken Nachos", desc: "Loaded with house cheese, jalapeños, and fresh salsa", img: nachosImg, price: "₹320", tag: "Lounge Fav" },
  { name: "Yakhni Biryani", desc: "Authentic Moradabadi flavors, slow-cooked to perfection", img: biryaniImg, price: "₹450", tag: "Must Try" },
  { name: "Bagheera Sangriya", desc: "Our signature forest-inspired refreshing mocktail", img: drinkImg, price: "₹240", tag: "Classic" },
];

const reviews = [
  { name: "Amit K.", text: "Best vibe in Hudson Lane! The jungle theme is insane and the Murg Tangdi is out of this world.", rating: 5, avatar: "A" },
  { name: "Sanya M.", text: "Perfect spot for student parties. The music is great and the food presentation is restaurant-quality.", rating: 5, avatar: "S" },
  { name: "Ishaan R.", text: "Amazing service and a very hip atmosphere. Definitely the most premium lounge in North Campus.", rating: 5, avatar: "I" },
];

const stats = [
  { value: "10k+", label: "Guests Served" },
  { value: "40+", label: "Signature Drinks" },
  { value: "4.5★", label: "Google Rating" },
  { value: "1 AM", label: "Open Late" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrentSlide((prev) => (diff > 0 ? (prev + 1) % heroSlides.length : (prev - 1 + heroSlides.length) % heroSlides.length));
    }
  };

  return (
    <div className="bg-background">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="absolute inset-0 z-10 bg-black/40" />
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0">
            <img src={heroSlides[currentSlide]} alt="Bagheera" className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]" style={{ imageRendering: "high-quality" }} />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 container h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>Bagheera</motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 mb-8 font-display italic" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>Step Into The Wild Side of Luxury</motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Link to="/menu" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white hover:bg-white hover:text-black transition-all">Explore Menu <ArrowRight size={18} /></Link>
              <a href={`tel:+91${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all shadow-xl"><Phone size={18} /> Call Now</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative -mt-12 z-30 container pb-8">
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border-r last:border-0 border-black/5">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-[11px] uppercase font-bold text-muted-foreground mt-1 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-xs font-black tracking-widest uppercase">The Experience</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Why Bagheera?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Jungle Theme", desc: "North Delhi's only forest-inspired lounge with a mysterious aesthetic." },
              { icon: Music, title: "Live Vibes", desc: "From late-night DJ sets to acoustic evenings, the music never stops." },
              { icon: UtensilsCrossed, title: "Gourmet Kitchen", desc: "Authentic North Indian, Chinese, and Italian delicacies." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-card border border-border text-center group hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20"><f.icon size={24} className="text-primary" /></div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <ScrollReveal><h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center uppercase">Chef's Picks</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group hover:shadow-lg transition-all duration-300">
                  <img src={s.img} alt={s.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-primary">{s.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img src={gallery1} alt="Bagheera Ambiance" className="rounded-2xl w-full h-80 object-cover shadow-xl" />
              <img src={gallery2} alt="Lounge vibes" className="absolute -bottom-6 -right-4 w-40 h-40 object-cover rounded-2xl border-4 border-background shadow-lg" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="md:pl-4">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 uppercase">Step Into The Wild</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">Born from a love for adventure, Bagheera brings the mystery of the jungle to Hudson Lane. We provide an escape from the city heat with signature flavors and an electric lounge experience.</p>
              <Link to="/menu" className="group inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">Explore The Full Menu <ArrowRight size={16} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal><h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center uppercase">What The Pack Says</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="flex gap-1 mb-4">{Array.from({ length: r.rating }).map((_, j) => (<Star key={j} size={14} className="fill-[#FFD700] text-[#FFD700]" />))}</div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">{r.avatar}</div>
                    <p className="font-bold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION SECTION ── */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter">Visit The Jungle</h2>
              <div className="space-y-4">
                <a href={MAPS_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-[1.5rem] bg-card border border-border hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"><MapPin size={24} /></div>
                  <div className="flex-1"><h4 className="font-black text-[10px] uppercase text-primary mb-1">Our Location</h4><p className="text-black text-sm font-bold">{ADDRESS}</p></div>
                </a>
                <div className="flex items-center gap-6 p-6 rounded-[1.5rem] bg-card/50 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center shrink-0"><Clock size={24} className="text-black" /></div>
                  <div><h4 className="font-black text-[10px] uppercase text-black/40 mb-1">We Are Open</h4><p className="text-black text-sm font-bold uppercase">Mon – Sun: 11:00 AM – 1:00 AM</p></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <a href={`tel:+91${PHONE}`} className="group flex items-center gap-4 p-6 rounded-[1.5rem] bg-black text-white hover:bg-primary transition-all shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Phone size={20} /></div>
                    <div><h4 className="font-bold text-[9px] uppercase text-white/50 mb-1">Call Now</h4><p className="font-bold text-sm whitespace-nowrap">{PHONE_DISPLAY}</p></div>
                  </a>
                  {/* 🛠️ FIXED INSTAGRAM BUTTON */}
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-[1.5rem] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-[1.02] transition-all shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0"><Instagram size={20} /></div>
                    <div><h4 className="font-bold text-[9px] uppercase text-white/70 mb-1">Follow Us</h4><p className="font-bold text-sm">@bagheera</p></div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl h-[450px] group relative">
              <iframe src={MAPS_EMBED} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Bagheera Maps" className="grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-5" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase">Hungry for the Wild?</h2>
            <p className="text-white/60 mb-8 text-base max-w-lg mx-auto">Visit us in Hudson Lane or book your table now for an unforgettable experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:+91${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-4 font-bold hover:scale-105 transition-all">Call for Reservations</a>
              <Link to="/menu" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 transition-all">Explore The Menu</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
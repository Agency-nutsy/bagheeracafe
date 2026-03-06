import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Leaf, Music, Star, ArrowRight, Clock, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
import gallery1 from "@/assets/butter-tea.jpg";
import gallery2 from "@/assets/butter-tea.jpg";

const PHONE = "09910192252";
const PHONE_DISPLAY = "099101 92252";
const ADDRESS = "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, Delhi 110033";
const MAPS_LINK = "https://maps.app.goo.gl/Lxwj73bFELRHevfw6";
// 📍 Your Specific Embed Link
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8327455165877!2d77.20425139999999!3d28.6946494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf094b1ae2f%3A0xb37be3005f8e6407!2sBagheera%20Cafe%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1772806528628!5m2!1sen!2sin";

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
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="Bagheera Lounge"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-accent" />
                Premium Jungle Lounge & Cafe
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bagheera
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/80 mb-2 font-display italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Step Into The Wild Side of Luxury
            </motion.p>

            <motion.p
              className="text-primary-foreground/60 mb-10 text-lg max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              North Delhi's premier destination for multicuisine dining, signature mocktails, and an electric lounge experience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Phone size={18} />
                Book a Table
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">The Experience</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Why Bagheera?</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Jungle Theme", desc: "North Delhi's only forest-inspired lounge with a mysterious, upscale aesthetic." },
              { icon: Music, title: "Live Vibes", desc: "From late-night DJ sets to acoustic evenings, the music never stops at Bagheera." },
              { icon: UtensilsCrossed, title: "Gourmet Kitchen", desc: "Not just a lounge — our chefs prepare authentic North Indian, Chinese, and Italian delicacies." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Signature Menu</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Chef's Recommendations</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND US / MAP SECTION ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Location</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Visit The Jungle</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Address</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Operating Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday – Sunday: 11:00 AM – 1:00 AM</p>
                    </div>
                  </div>
                  <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Reservations</h4>
                      <p className="text-sm text-muted-foreground font-medium">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Maps Embed */}
            <ScrollReveal direction="right">
              <div className="rounded-3xl overflow-hidden border-4 border-card shadow-2xl h-[450px]">
                <iframe 
                  src={MAPS_EMBED} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bagheera Cafe Google Maps"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Guest Reviews</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What The Pack Says</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="absolute -top-3 left-8 text-6xl text-primary/10 font-display">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{r.avatar}</div>
                    <p className="font-semibold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
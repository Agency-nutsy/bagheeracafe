import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "09910192252";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const showSolid = scrolled || !isHome;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-background border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {/* Clean branding: Charcoal on Beige, White on Hero */}
          <span className={showSolid ? "text-foreground" : "text-primary-foreground"}>
            Bagheera
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                style={{ fontFamily: "'Lato', sans-serif" }}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  location.pathname === l.to
                    ? showSolid ? "text-primary" : "text-primary-foreground"
                    : showSolid ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {l.label}
                {location.pathname === l.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full ${showSolid ? "bg-primary" : "bg-primary-foreground"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <a
          href={`tel:${PHONE}`}
          style={{ fontFamily: "'Lato', sans-serif" }}
          className={`hidden md:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
            showSolid
              ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
              : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
          }`}
        >
          <Phone size={16} />
          Book Table
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors duration-300 ${showSolid ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === l.to
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href={`tel:${PHONE}`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold text-center mt-2"
                >
                  <Phone size={16} />
                  Book Table
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const PHONE = "09910192252";
const PHONE_DISPLAY = "099101 92252";
const ADDRESS = "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, 110033";
const MAPS_LINK = "https://maps.app.goo.gl/Lxwj73bFELRHevfw6";

const Footer = () => (
  /* Changed to bg-[#0A0A0A] for that Jet Black Matte Finish */
  <footer className="bg-[#0A0A0A] text-white/90 relative overflow-hidden bg-grain">
    {/* Subtle Matte Border */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />
    
    <div className="container py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-bold mb-4 tracking-tight text-white">
            Bagheera
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
            North Delhi's premier jungle-themed lounge offering an exquisite blend of North Indian, Chinese, and Continental delicacies.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/bagheeracafelounge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-500"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/30">Navigate</h4>
          <ul className="space-y-4 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 hover:text-white transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Items */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/30">Signatures</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="hover:text-white transition-colors cursor-default">Moradabadi Biryani</li>
            <li className="hover:text-white transition-colors cursor-default">Stuffed Murg Tangdi</li>
            <li className="hover:text-white transition-colors cursor-default">Peri Peri Tikka</li>
            <li className="hover:text-white transition-colors cursor-default">Chicken Nachos</li>
            <li className="hover:text-white transition-colors cursor-default">Bagheera Sangriya</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/30">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="shrink-0 text-white/40" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-white/20 tracking-widest uppercase">
          © {new Date().getFullYear()} Bagheera Cafe & Lounge
        </p>
        <p className="text-[10px] text-white/20 tracking-widest uppercase">
          Open Daily: 11:00 AM – 01:00 AM
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Phone, Utensils, Flame, PawPrint, BookOpen, Pizza, Soup, Coffee, ArrowRight, ArrowLeft } from "lucide-react";

const PHONE = "09910192252";

// ── FULL CATEGORIZED DATA (UNTOUCHED) ──
const menuData = [
  {
    id: "starters",
    category: "Starters",
    emoji: "🥗",
    icon: Utensils,
    veg: [
      { name: "Cheese Corn Balls", price: "399", desc: "Grated cheese crush corn with balls in mayo pesto dip" },
      { name: "Nachos With Cheese", price: "399", desc: "Nachos with salsa and cheese" },
      { name: "French Fries", price: "399", desc: "Peri-Peri French Fries" }
    ],
    nonVeg: [
      { name: "Chicken Nuggets", price: "499", desc: "Chopped chicken, capsicum with peri-peri dips" },
      { name: "Chicken Spinach Fetta", price: "499", desc: "Spinach wrapped in chicken with feta cheese" },
      { name: "Harisha Chicken", price: "499", desc: "Marinated chicken with harisha sauce" }
    ]
  },
  {
    id: "tandoori",
    category: "Tandoori Starter",
    emoji: "🔥",
    icon: Flame,
    veg: [
      { name: "Chatpate Aloo Tikki", price: "399" }, { name: "Stuffed Potato", price: "399" },
      { name: "Mashroom Mastana", price: "399" }, { name: "Malai Chaap", price: "399" },
      { name: "Hara-Bhara Kebab", price: "399" }, { name: "Masala Chaap", price: "399" },
      { name: "Paneer Tikka", price: "399" }, { name: "Veg Seek Kebab", price: "399" },
      { name: "Paneer Pahadi Tikka", price: "399" }, { name: "Bagheera Spl. Veg Platter", price: "399" },
      { name: "Afghani Paneer Tikka", price: "399" }
    ],
    nonVeg: [
      { name: "Murg Tandoori", price: "599" }, { name: "Murgh Malai Tikka", price: "599" },
      { name: "Tangri Kebab", price: "599" }, { name: "Chicken Seekh Kebab", price: "599" },
      { name: "Murg Tikka", price: "599" }, { name: "Fish Finger", price: "799" },
      { name: "Fish Tikka", price: "599" }
    ]
  },
  {
    id: "chinese",
    category: "Chinese Starter",
    emoji: "🥢",
    icon: PawPrint,
    veg: [
      { name: "Veg Manchurian (Dry/Gravy)", price: "399" }, { name: "Chilli Potato", price: "399" },
      { name: "Honey Chilli Potato", price: "399" }, { name: "Veg Spring Roll", price: "399" },
      { name: "Paneer Crispy", price: "399" }, { name: "Paneer Chilli Dry", price: "399" },
      { name: "Bagheera Spl. Starter", price: "599", desc: "Mushroom, brocoli, paneer, babycorn, chilli dry" }
    ],
    nonVeg: [
      { name: "Chicken Lollipop", price: "599" }, { name: "Chicken Chilli Gravy", price: "599" },
      { name: "Chicken Chilli Dry", price: "599" }, { name: "Shreeded Chicken Hot Garlic", price: "599" },
      { name: "Chicken Crispy", price: "599" }, { name: "Drums Of Heaven", price: "599" },
      { name: "Chicken Manchurian Dry", price: "599" }, { name: "Lemon Chicken", price: "599" }
    ]
  },
  {
    id: "pizza",
    category: "Pizza",
    emoji: "🍕",
    icon: Pizza,
    veg: [
      { name: "Veg Farm Fresh", price: "499", desc: "Mushroom, bell pepper, jalapeno and onion" },
      { name: "Paneer Makhani", price: "499", desc: "Capsicum, onion, red papeika paneer tikka in tandoori sauce" },
      { name: "Classic Margherita", price: "499", desc: "Cheesy tomato, basil with mozzarella" },
      { name: "China Gate", price: "499", desc: "Paneer, schezwan, baby corn, spring onion and capsicum" },
      { name: "Veg Lovers", price: "499", desc: "Exotic veggies, mozzarella cheese with tomato sauce" },
      { name: "Maggie Pizza", price: "499", desc: "Maggie, tomato, olives, three type of capsicum, jalapeno, onion" },
      { name: "Momos Pizza", price: "499", desc: "Momos, Exotic veggies, mozzarella cheese with tomato sauce" }
    ],
    nonVeg: [
      { name: "Roasted Chicken Herb Pizza", price: "599", desc: "Roasted chicken, onion, mushroom, fresh herbs with mozzarella" },
      { name: "Peri-Peri Spiced Pizza", price: "599", desc: "Peri-peri chicken with peri-peri spilled onion, mushroom" },
      { name: "Spicy Chicken Tikka Pizza", price: "599", desc: "Smoked chicken tikka, capsicum onion with mozzarella" },
      { name: "BBQ Pizza", price: "599", desc: "Boneless chicken, pepperoncini pepper s, onion, cilantro" },
      { name: "Butter Chicken Pizza", price: "599", desc: "Chicken cooked in traditional makhani sauce, onion with mozzarella" },
      { name: "Momos Pizza", price: "599", desc: "Chicken momos, Exotic veggies, mozzarella cheese with tomato sauce" }
    ]
  },
  {
    id: "burger-sandwich",
    category: "Burger & Sandwich",
    emoji: "🍔",
    icon: Utensils,
    veg: [
      { name: "Veg Burger", price: "349" }, { name: "Cheese Burger", price: "359" },
      { name: "Cheese Garlic Burger", price: "359" }, { name: "Crispy Burger", price: "359" },
      { name: "Grilled Veg Sandwich", price: "399" }, { name: "Grilled Paneer Sandwich", price: "399" },
      { name: "Grilled Cheese Sandwich", price: "399" }, { name: "Club Sandwich", price: "399" }
    ],
    nonVeg: [
      { name: "Chicken Burger", price: "359" }, { name: "Chicken Cheese Burger", price: "359" },
      { name: "Chicken Crispy Burger", price: "359" }, { name: "Chicken Garlic Burger", price: "359" },
      { name: "Grilled Chicken Sandwich", price: "399" }
    ]
  },
  {
    id: "momos-platter",
    category: "Momos & Platter",
    emoji: "🥟",
    icon: PawPrint,
    veg: [
      { name: "Veg Momos", price: "399" }, { name: "Veg Tandoori Momos", price: "399" },
      { name: "Veg Crispy Momos", price: "399" }, { name: "Cheese Tandoori Momos", price: "399" },
      { name: "Cheese Momos", price: "399" }, { name: "Cheese Corn Tandoori Momos", price: "399" },
      { name: "Cheese Corn Momos", price: "399" }, { name: "Tandoori Veg Fully Loaded Platter", price: "799" },
      { name: "Chinese Veg Platter", price: "799" }
    ],
    nonVeg: [
      { name: "Chicken Momos", price: "499" }, { name: "Chicken Crispy Momos", price: "499" },
      { name: "Chicken Tandoori Momos", price: "499" }, { name: "Tandoori Non-Veg Platter", price: "999" },
      { name: "Chinese Non-Veg Platter", price: "999" }
    ]
  },
  {
    id: "pasta",
    category: "Pasta",
    emoji: "🍝",
    icon: Utensils,
    veg: [
      { name: "Alfredo Pasta", price: "399" }, { name: "Aglio Olio", price: "399" },
      { name: "Arrabiata Pasta", price: "399" }, { name: "Lasagna", price: "399" },
      { name: "Mama Rosa", price: "399" }, { name: "Pesto", price: "399" },
      { name: "Spaghetti Pasta", price: "399" }
    ],
    nonVeg: [
      { name: "Alfredo Pasta", price: "499" }, { name: "Aglio Olio", price: "499" },
      { name: "Arrabiata Pasta", price: "499" }, { name: "Lasagna", price: "499" },
      { name: "Mama Rosa", price: "499" }, { name: "Pesto", price: "499" },
      { name: "Spaghetti Pasta", price: "499" }
    ]
  },
  {
    id: "rice-noodles",
    category: "Rice & Noodles",
    emoji: "🍚",
    icon: Soup,
    veg: [
      { name: "Steamed Rice", price: "399" }, { name: "Noodles", price: "499" },
      { name: "Kashmiri Pulao", price: "499" }, { name: "Fried Rice", price: "499" },
      { name: "Schezwan Fried Rice", price: "499" }, { name: "Combination Fried Rice", price: "499" },
      { name: "Biryani", price: "499" }, { name: "Hakka Noodles", price: "499" },
      { name: "Butter Chilli Garlic Noodles", price: "499" }, { name: "Singapori Noodles", price: "499" },
      { name: "Schezwan Noodles", price: "499" }
    ],
    nonVeg: [
      { name: "Street Chicken Biryani", price: "499" }
    ]
  },
  {
    id: "salad",
    category: "Salad",
    emoji: "🥗",
    icon: Utensils,
    veg: [
      { name: "Veg Pasta Salad", price: "399", desc: "Penne pasta with bell pepper dressed in cocktail sauce" },
      { name: "Veg Oriental Salad", price: "399", desc: "Cucumber, tomato, paneer, bell pepper with vineger dressing" },
      { name: "Sprouted Fruity Beans Salad", price: "399", desc: "Fruits, beans, sprouts in honey mustard sauce" },
      { name: "Bagheera Spl. Nutty Harvest", price: "399", desc: "Low fat cottage cheese or tofu with nutritious salad mix" },
      { name: "Vegan Garden", price: "399", desc: "Nutritious salad mix topped with chick peas and pomegranates" }
    ],
    nonVeg: [
      { name: "Chicken Mix Fruit Salad", price: "499", desc: "Apple, Pomegrananete, lettuce, brocoli walnut, cashew nuts" },
      { name: "Chicken Nicoise Salad", price: "499", desc: "Chicken, boiled egg, corn, onion, capsicum, dry fruit" },
      { name: "Chicken Pasta Salad", price: "499", desc: "Penne pasta with chicken, bell pepper dressed in coctail sauce" },
      { name: "Bagheera Spl. Cajun Spiced Chicken", price: "499", desc: "Grilled chicken breast served with nutritious salad mix" },
      { name: "Chicken Greek Salad", price: "499", desc: "Cettuce, carrot, capsicum, olive, walnut, cashew added chicken" }
    ]
  },
  {
    id: "sizzlers",
    category: "Sizzlers",
    emoji: "💨",
    icon: Flame,
    veg: [
      { name: "Cottage Cheese Shaslik Sizzler", price: "499", desc: "Toosed butter, parsley rice, exotic vegetable, french fries" },
      { name: "Mix Veg Grilled Sizzler", price: "499", desc: "Chilli spiced rice, exotic veg stick, french fries with spicy chilli sauce" },
      { name: "Veg Delight Sizzler", price: "499", desc: "Spicy maxicon rice, exotic vegetable, mashed tomato with cheese sauce" },
      { name: "Veg Satellite Sizzler", price: "499", desc: "Indian style masala rice, veg-steak, french fries" },
      { name: "Peri-Peri Sizzler", price: "499", desc: "Crumbe fried cottage cheese with chilli rice" },
      { name: "Chottage Cheese Sizzler", price: "499", desc: "Wok tossed noodels, burnt garlic vegetables, masala fries" },
      { name: "BBQ Sizzler", price: "499", desc: "Barbequed mashroom with spaghatti noodels" }
    ],
    nonVeg: [
      { name: "Chicken Paprika Sizzler", price: "599", desc: "Peprica rice, exotic vegetable, french fries, grilled chicken" },
      { name: "Char Grilled Breast Sizzler", price: "599", desc: "Dami rice, chicken breast, exotic vegetable, french fries" },
      { name: "Chicken Satellite Sizzler", price: "599", desc: "Indian style masala rice, chicken steak, french fries" },
      { name: "Peri-Peri Sizzler", price: "599", desc: "Crumbe fried cottage cheese / grilled chicken with chilli rice" },
      { name: "BBQ Sizzler", price: "599", desc: "BBQ chicken with spaghatti noodels, sauteed vegetables" }
    ]
  },
  {
    id: "main-course",
    category: "Main Course",
    emoji: "🥘",
    icon: Soup,
    veg: [
      { name: "Dal Makhni", price: "349" }, { name: "Mix Vegetable", price: "250" },
      { name: "Shahi Paneer", price: "389" }, { name: "Gobhi Masala Adraki", price: "240" },
      { name: "Paneer Lababdar", price: "349" }, { name: "Mashroom Taka-Tak", price: "280" },
      { name: "Kadhai Paneer", price: "349" }, { name: "Bagheera Spl. Roasted Paneer", price: "340" }
    ],
    nonVeg: [
      { name: "Punjabi Chicken Masala", price: "480" }, { name: "Kadhai Chicken", price: "480" },
      { name: "Home Style Chicken", price: "460" }, { name: "Chicken Patiala", price: "470" },
      { name: "Chicken Handi", price: "490" }, { name: "Chicken Lababdar", price: "490" },
      { name: "Butter Chicken", price: "480" }
    ]
  },
  {
    id: "breads-extras",
    category: "Breads & Extras",
    emoji: "🫓",
    icon: Pizza,
    veg: [
      { name: "Tanduri Roti", price: "20" }, { name: "Stuff Naan", price: "89" },
      { name: "Butter Roti", price: "25" }, { name: "Laccha Paratha", price: "69" },
      { name: "Plain Naan", price: "35" }, { name: "Butter Naan", price: "69" },
      { name: "Fry Papad", price: "59" }, { name: "Masala Papad", price: "79" },
      { name: "Roasted Papad", price: "39" }, { name: "Cheese Masala Papad", price: "99" },
      { name: "Masala Peanut", price: "160" }
    ],
    nonVeg: []
  },
  {
    id: "dessert-beverage",
    category: "Dessert & Beverages",
    emoji: "☕",
    icon: Coffee,
    veg: [
      { name: "Ice Cream", price: "149" }, { name: "Gulab Jamun", price: "149" },
      { name: "Mineral Water", price: "on MRP" }, { name: "Masala Tea", price: "79" },
      { name: "Hot Coffee", price: "99" }, { name: "Boondi Raita", price: "99" },
      { name: "Plain Curd", price: "50" }, { name: "Mix Veg Raita", price: "99" },
      { name: "Pine Apple Raita", price: "119" }
    ],
    nonVeg: []
  }
];

// ── 📚 THE MENU BOOK (UNTOUCHED) ──
const bookPages = [
  { title: "Veg Momos", items: [{name: "Veg Momos", price: "399"}, {name: "Veg Crispy Momos", price: "399"}, {name: "Cheese Momos", price: "399"}, {name: "Cheese Corn Momos", price: "399"}] },
  { title: "Non-Veg Momos", items: [{name: "Chicken Momos", price: "499"}, {name: "Chicken Crispy", price: "499"}, {name: "Chicken Tandoori", price: "499"}] },
  { title: "Platters", items: [{name: "Tandoori Veg Platter", price: "799"}, {name: "Chinese Veg Platter", price: "799"}, {name: "Tandoori Non-Veg", price: "999"}, {name: "Chinese Non-Veg", price: "999"}] },
  { title: "Veg Main Course", items: [{name: "Dal Makhni", price: "349"}, {name: "Shahi Paneer", price: "389"}, {name: "Paneer Lababdar", price: "349"}, {name: "Kadhai Paneer", price: "349"}] },
  { title: "Non-Veg Main Course", items: [{name: "Punjabi Chicken", price: "480"}, {name: "Home Style Chicken", price: "460"}, {name: "Butter Chicken", price: "480"}, {name: "Chicken Handi", price: "490"}] },
  { title: "Veg Sizzlers", items: [{name: "Cheese Shaslik", price: "499"}, {name: "Veg Delight", price: "499"}, {name: "Veg Satellite", price: "499"}] },
  { title: "Non-Veg Sizzlers", items: [{name: "Chicken Paprika", price: "599"}, {name: "Char Grilled Breast", price: "599"}, {name: "Chicken Satellite", price: "599"}] },
  { title: "Dessert & Sips", items: [{name: "Ice Cream", price: "149"}, {name: "Gulab Jamun", price: "149"}, {name: "Masala Tea", price: "79"}, {name: "Hot Coffee", price: "99"}] }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openPage, setOpenPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const pageRef = useRef(0);
  const bookSectionRef = useRef(null);
  const isBookInView = useInView(bookSectionRef, { amount: 0.5 });

  // ── 🛠️ NEW: SCROLL TO TOP ON CATEGORY CLICK ──
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── AUTO-PLAY SEQUENTIAL LOGIC ──
  useEffect(() => {
    let interval;
    if (isBookInView && isAutoPlaying) {
      interval = setInterval(() => {
        setOpenPage((prev) => {
          const next = prev < bookPages.length + 1 ? prev + 1 : prev;
          pageRef.current = next;
          return next;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isBookInView, isAutoPlaying]);

  const turnPage = (direction) => {
    setIsAutoPlaying(false);
    if (direction === "next" && pageRef.current < bookPages.length + 1) {
      pageRef.current += 1;
      setOpenPage(pageRef.current);
    } else if (direction === "prev" && pageRef.current > 0) {
      pageRef.current -= 1;
      setOpenPage(pageRef.current);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") turnPage("next");
      if (e.key === "ArrowLeft") turnPage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredMenu = activeCategory === "All" ? menuData : menuData.filter(cat => cat.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#f5f2eb] min-h-screen overflow-clip select-none">
      <div className="container relative flex flex-col lg:flex-row gap-10 items-start">
        
        {/* ── FIXED SIDEBAR ── */}
        <aside className="lg:sticky lg:top-32 w-full lg:w-[280px] z-30 flex-shrink-0 self-start">
          <div className="bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-xl">
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">Sections</h3>
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto no-scrollbar lg:overflow-visible">
              <button 
                onClick={() => handleCategoryClick("All")} 
                className={`px-6 py-4 rounded-[1.25rem] text-[13px] font-black uppercase transition-all flex-shrink-0 text-center w-full justify-center flex items-center ${activeCategory === "All" ? "bg-black text-white shadow-xl" : "bg-[#f3f0e8] text-black hover:bg-[#e8e4db]"}`}
              >
                ALL ITEMS
              </button>
              {menuData.map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => handleCategoryClick(cat.category)} 
                  className={`px-6 py-4 rounded-[1.25rem] text-[13px] font-black uppercase transition-all flex-shrink-0 text-left w-full flex items-center gap-4 ${activeCategory === cat.category ? "bg-black text-white shadow-xl" : "bg-[#f3f0e8] text-black hover:bg-[#e8e4db]"}`}
                >
                   <span className="text-xl">{cat.emoji}</span> 
                   <span>{cat.category}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ── MAIN MENU (FULL LIST) ── */}
        <main className="flex-1 w-full">
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-5xl font-display font-black text-black uppercase tracking-tighter">Bagheera Menu</h1>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24">
              {filteredMenu.map(cat => (
                <div key={cat.id} className="space-y-10">
                  <h2 className="text-3xl font-display font-black uppercase text-black">{cat.category}</h2>
                  
                  {/* VEG SECTION */}
                  {cat.veg && cat.veg.length > 0 && (
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-sm">
                      <h3 className="text-[10px] font-black uppercase text-green-700 mb-8 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-700" /> Veg Selection
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {cat.veg.map((item, i) => (
                          <div key={i} className="flex justify-between border-b border-black/[0.05] pb-5 text-black">
                            <div className="flex-1 pr-4">
                              <h4 className="font-bold text-sm">{item.name}</h4>
                              {item.desc && <p className="text-[10px] text-black/40 italic mt-1">{item.desc}</p>}
                            </div>
                            <span className="font-black text-sm tabular-nums">
                              {item.price === "on MRP" ? "MRP" : `₹${item.price}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NON-VEG SECTION */}
                  {cat.nonVeg && cat.nonVeg.length > 0 && (
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-sm">
                      <h3 className="text-[10px] font-black uppercase text-red-700 mb-8 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-700" /> Non-Veg Selection
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {cat.nonVeg.map((item, i) => (
                          <div key={i} className="flex justify-between border-b border-black/[0.05] pb-5 text-black">
                            <div className="flex-1 pr-4">
                              <h4 className="font-bold text-sm">{item.name}</h4>
                              {item.desc && <p className="text-[10px] text-black/40 italic mt-1">{item.desc}</p>}
                            </div>
                            <span className="font-black text-sm tabular-nums">₹{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── FIXED SEQUENTIAL BOOK SECTION (UNTOUCHED) ── */}
          <div ref={bookSectionRef} className="mt-40 py-24 flex flex-col items-center">
            <h2 className="text-4xl font-display font-black text-black uppercase mb-12">Signature Collection</h2>
            
            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-[320px] h-[500px] md:max-w-[480px] md:h-[650px]" style={{ perspective: "3000px" }}>
                <div className="absolute inset-0 bg-[#1A1A1A] rounded-r-2xl border-2 shadow-2xl" />
                
                {bookPages.map((page, index) => {
                  const pageNum = index + 1;
                  return (
                    <motion.div key={index} className="absolute inset-0 origin-left" 
                      style={{ transformStyle: "preserve-3d", zIndex: bookPages.length - index }} 
                      animate={{ rotateY: openPage > pageNum ? -155 : 0 }} 
                      transition={{ duration: 1.2, ease: "easeInOut" }}>
                      
                      <div className="absolute inset-0 bg-[#FDF5E6] rounded-r-2xl border p-12 backface-hidden border-black/10 shadow-xl" style={{ backfaceVisibility: "hidden" }}>
                          <h3 className="text-xl md:text-2xl font-display font-black text-black border-b-2 border-black/10 pb-4 mb-8 uppercase">{page.title}</h3>
                          <div className="space-y-6">
                            {page.items.map((item, i) => (
                              <div key={i} className="flex justify-between items-center border-b border-black/5 pb-2 text-[12px] font-black text-black uppercase">
                                <span>{item.name}</span> <span className="text-primary">₹{item.price}</span>
                              </div>
                            ))}
                          </div>
                      </div>
                      <div className="absolute inset-0 bg-[#141414] rounded-l-2xl border" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }} />
                    </motion.div>
                  );
                })}

                <motion.div className="absolute inset-0 z-50 origin-left cursor-pointer" style={{ transformStyle: "preserve-3d" }} 
                  animate={{ rotateY: openPage > 0 ? -165 : 0 }} transition={{ duration: 1.4, ease: "easeInOut" }} 
                  onClick={() => turnPage(openPage === 0 ? "next" : "prev")}>
                  <div className="absolute inset-0 bg-[#0A0A0A] rounded-r-2xl border-r-8 border-black/40 shadow-2xl flex flex-col items-center justify-center p-12" style={{ backfaceVisibility: "hidden" }}>
                    <div className="border-4 border-white/10 p-10 flex flex-col items-center w-full">
                      <PawPrint size={80} className="text-white mb-8" />
                      <h2 className="text-4xl font-display font-black text-white tracking-widest uppercase">Bagheera</h2>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#141414] rounded-l-2xl border shadow-inner" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }} />
                </motion.div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-16">
              <button onClick={() => turnPage("prev")} className="p-6 rounded-full bg-black text-white shadow-2xl hover:bg-primary transition-all"><ArrowLeft size={24} /></button>
              <button onClick={() => turnPage("next")} className="p-6 rounded-full bg-black text-white shadow-2xl hover:bg-primary transition-all"><ArrowRight size={24} /></button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;
import { useState, useEffect } from "react";
import GroovinMovinLogo from "./assets/GroovinMovinLogo.png";
import boxes from "./assets/boxes.png";
import cleaning from "./assets/cleaning.png";
import family from "./assets/family.png";
import piano from "./assets/piano.png";
import { SiFacebook, SiInstagram, SiYelp, SiYoutube } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import { MotionBackground } from "./components/MotionBackground";

const cities = [
  "Vancouver",
  "Ridgefield",
  "La Center",
  "Camas",
  "Battle Ground",
];

function App() {
  const [cityIndex, setCityIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCityIndex((prev) => (prev + 1) % cities.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 lg:h-20 items-center">
            <div className="flex items-center gap-2">
              <img src={GroovinMovinLogo} alt="Groovin Movin Logo" className="h-12 lg:h-20 w-auto" />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="material-icons text-3xl">menu</span>
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#services"
              >
                Services
              </a>
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#about"
              >
                About
              </a>
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#reviews"
              >
                Reviews
              </a>
              <a
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#faq"
              >
                FAQ
              </a>
              <a
                className="flex items-center gap-2 px-6 py-3 rounded-full font-extrabold hover:bg-white hover:text-black transition-all shadow-xl text-lg bg-primary text-white shadow-primary/20"
                href="tel:3604876564"
              >
                <span className="material-icons">call</span>Call Now: (360)
                487-6564
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white dark:bg-slate-900 z-[100] lg:hidden p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <img 
                  src="https://raw.githubusercontent.com/apavlex/GroovinMovin/main/public/GroovinMovinLogo.png" 
                  alt="Groovin Movin Logo" 
                  className="h-10 w-auto" 
                />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-slate-900 dark:text-white"
                >
                  <span className="material-icons text-4xl">close</span>
                </button>
              </div>
              <div className="my-auto flex flex-col space-y-12">
                <div className="flex flex-col space-y-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
                  <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Services</a>
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</a>
                  <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Reviews</a>
                  <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">FAQ</a>
                  <a 
                    href="#quote-form" 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-primary text-white py-5 rounded-2xl text-center shadow-xl shadow-primary/30 mt-4 hover:bg-white hover:text-black transition-all"
                  >
                    Get a Quote
                  </a>
                </div>
                <div className="pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-xs sm:text-sm text-slate-500 mb-1 sm:mb-2 uppercase tracking-widest font-bold">Call us any day 8am-10pm</p>
                  <a href="tel:3604876564" className="flex items-center justify-center gap-2 sm:gap-3 text-primary font-black text-xl sm:text-2xl">
                    <span className="material-icons text-lg sm:text-2xl">call</span>
                    (360) 487-6564
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        <MotionBackground />
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern Home"
            className="w-full h-full object-cover opacity-10 dark:opacity-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmhjQnFW6NZgw2r7ZWEV2PeAK_2hgOLWHisLYO47Mx2AcvpgKACJJ76eDLeZcBXH4izDAX1fGNp-JXSa4s8-1I42DkIKj49-Oj-kEuy5prE7rv5E8nr14_LLxVseT_aIBaCQfhtg6wTEC68W7YKoc3wnBHXEfJgyID4wgJ47ZGV4Cxd7SdbPsJ5bk5-a5kIbza2OsgNbFj32JOieZEZmx3ognS-Erzv7v6ND3Ayb86TK5wwAO-Fa6Vo_urhsFY7KP8z2qpcpAD8Q"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-logo-blue/10 text-logo-blue font-bold text-sm uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-logo-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-logo-blue"></span>
                </span>
                <span className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                  Serving {cities[cityIndex]} & surrounding areas
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                Get Your <span className="text-primary">Stress-Free</span> Quote
                Today!
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                The ultimate 3-in-1 moving solution. We handle the{" "}
                <strong>moving</strong>, the <strong>cleaning</strong>, and the{" "}
                <strong>junk removal</strong> so you don't have to.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex -space-x-3">
                  <img
                    alt="User 1"
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    alt="User 2"
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    alt="User 3"
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 items-center justify-start gap-2">
                    <div className="flex">
                      <span className="material-icons text-sm">star</span>
                      <span className="material-icons text-sm">star</span>
                      <span className="material-icons text-sm">star</span>
                      <span className="material-icons text-sm">star</span>
                      <span className="material-icons text-sm">star_half</span>
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      4.6 | Google Reviews
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    2,500+ Happy Customers
                  </span>
                </div>
              </div>
            </div>
            <div id="quote-form" className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <h3 className="font-display text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Get a Free Instant Quote
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                      placeholder="(555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Email (Optional)
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Service Required
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all">
                    <option>Moving + Cleaning + Junk Removal</option>
                    <option>Moving Only</option>
                    <option>Cleaning Only</option>
                    <option>Junk Removal Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Tell us about your needs
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                    placeholder="What are you moving? Where to?"
                    rows={3}
                  ></textarea>
                </div>
                <button
                  className="w-full text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all shadow-xl transform hover:-translate-y-0.5 bg-black shadow-black/30 border-transparent"
                  type="submit"
                >
                  Get Free Quote Now
                </button>
              </form>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                Or call us directly at{" "}
                <a
                  className="font-bold text-primary underline"
                  href="tel:3604876564"
                >
                  (360) 487-6564
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden" id="services">
        <MotionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              A Full-Service Solution
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We didn't just stop at moving. We built a company that takes the
              entire headache out of relocation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                <span className="material-icons text-3xl">local_shipping</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Expert Moving
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Local and long-distance moving with professional care. We handle
                your belongings as if they were our own.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Packing & Unpacking
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Furniture Disassembly
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Piano & Special Care
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-logo-blue/10 dark:bg-logo-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-logo-blue">
                <span className="material-icons text-3xl">
                  cleaning_services
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Move-In/Out Cleaning
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Leave your old place spotless or make sure your new home is
                fresh and ready for your arrival.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Deep Cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Eco-friendly Products
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  100% Satisfaction Guarantee
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-logo-yellow/10 dark:bg-logo-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-logo-yellow">
                <span className="material-icons text-3xl">delete_sweep</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Junk Removal
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Don't move things you don't need. We'll haul away old furniture,
                debris, and unwanted items responsibly.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Responsible Disposal
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Donation Drop-offs
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Same-day Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <MotionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 aspect-video cursor-pointer group"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/UMoBLZbB0-o/maxresdefault.jpg" 
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <span className="material-icons text-5xl pl-1">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-3 md:gap-4 z-10">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-xl">
                    <span className="material-icons text-primary text-xl md:text-2xl">groups</span>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-extrabold dark:text-white">
                      2,500+
                    </p>
                    <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Successful Moves
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 animate-pulse"></div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-logo-blue font-bold tracking-widest uppercase text-sm">
                  Our Difference
                </span>
                <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Why{" "}
                  <span
                    className={`text-primary underline decoration-primary/20 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    {cities[cityIndex]}
                  </span>{" "}
                  Chooses Groovin Movin
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  We are a reliable and trustworthy moving company serving
                  Vancouver, WA and surrounding areas. We offer a range of moving and cleaning
                  services to meet your specific needs.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                    <span className="material-icons">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Licensed & Insured
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      Fully licensed and insured for your peace of mind. Your
                      belongings are always protected.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                    <span className="material-icons">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Affordable Rates
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      Competitive pricing without compromising on quality. No
                      hidden fees, ever.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                    <span className="material-icons">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Reliable & On-Time
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      We show up when we say we will. Punctual, dependable
                      service every single time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
        id="service-areas"
      >
        <MotionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <span className="text-logo-blue font-bold tracking-widest uppercase text-sm">
                  Coverage
                </span>
                <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Our Service <span className="text-primary">Areas</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  We proudly serve Vancouver and the surrounding communities in
                  Clark County. Wherever you're moving in Southwest Washington,
                  Groovin Movin is ready to help.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                  >
                    <span className="material-icons text-primary">
                      location_on
                    </span>
                    <span className="font-bold dark:text-white">{city}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  Don't see your city? Give us a call to see if we can help with
                  your move!
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178496.53675005934!2d-122.7530514214588!3d45.639144365792944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af63c85914f9%3A0x84565fd81186e24!2sVancouver%2C%20WA!5e0!3m2!1sen!2sus!4v1709943481234!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale opacity-80 mix-blend-multiply dark:mix-blend-lighten"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/MABxBZfmtbFmQywz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex text-center items-center justify-center bg-transparent group"
                  aria-label="Open location in Google Maps"
                >
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors pointer-events-none"></div>
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="relative bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full shadow-2xl">
                      <span className="material-icons text-3xl">
                        local_shipping
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              See Our Work in <span className="text-primary">Action</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 uppercase tracking-widest text-sm font-bold">
              Professional moving services you can trust
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              alt="Moving Truck"
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              src={family}
            />
            <img
              alt="Boxes"
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              src={boxes}
            />
            <img
              alt="Team Work"
              className="rounded-2xl h-64 w-full object-cover object-top hover:scale-105 transition-transform duration-500"
              src={piano}
            />
            <img
              alt="Cleaning"
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              src={cleaning}
            />
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden" id="reviews">
        <MotionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-logo-blue font-bold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-16">
            What Our{" "}
            <span className="text-primary underline underline-offset-8 decoration-primary/20">
              Customers
            </span>{" "}
            Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl relative text-left">
              <span className="material-icons text-primary/10 text-6xl absolute top-4 right-8">
                format_quote
              </span>
              <div className="flex text-yellow-400 mb-4">
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic mb-8 relative z-10">
                "Groovin Movin made our move so easy! The team was professional,
                on time, and handled our furniture with care. Highly
                recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  SM
                </div>
                <div>
                  <p className="font-bold dark:text-white">Sarah M.</p>
                  <p className="text-xs text-slate-500">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl relative text-left">
              <span className="material-icons text-primary/10 text-6xl absolute top-4 right-8">
                format_quote
              </span>
              <div className="flex text-yellow-400 mb-4">
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic mb-8 relative z-10">
                "Best moving company in Vancouver! Affordable prices and the
                crew was super friendly. They made what I thought would be a
                stressful day actually enjoyable."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  JP
                </div>
                <div>
                  <p className="font-bold dark:text-white">James P.</p>
                  <p className="text-xs text-slate-500">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl relative text-left">
              <span className="material-icons text-primary/10 text-6xl absolute top-4 right-8">
                format_quote
              </span>
              <div className="flex text-yellow-400 mb-4">
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic mb-8 relative z-10">
                "I've used several movers in the past but Groovin Movin is by
                far the best. Quick, efficient, and nothing was damaged. Will
                use again!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  LK
                </div>
                <div>
                  <p className="font-bold dark:text-white">Linda K.</p>
                  <p className="text-xs text-slate-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden" id="faq">
        <MotionBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-logo-blue font-bold tracking-widest uppercase text-sm">
              FAQ
            </span>
            <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Get answers to your questions about moving. Still need help?{" "}
              <a className="text-primary font-bold underline" href="tel:3604876564">
                Give us a call!
              </a>
            </p>
          </div>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 open:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg dark:text-white">
                What areas do you serve?
                <span className="material-icons transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-700 pt-4">
                We primarily serve Vancouver, WA and the surrounding areas in
                Clark County. Contact us to see if we cover your specific
                location!
              </div>
            </details>
            <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 open:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg dark:text-white">
                How much does a move cost?
                <span className="material-icons transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-700 pt-4">
                Pricing depends on the size of your move, distance, and
                additional services like cleaning or junk removal. Get a free
                quote above for an accurate estimate!
              </div>
            </details>
            <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 open:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg dark:text-white">
                Are you licensed and insured?
                <span className="material-icons transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-700 pt-4">
                Yes! We are fully licensed and insured in the state of
                Washington for your protection and peace of mind.
              </div>
            </details>
            <details className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 open:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg dark:text-white">
                How far in advance should I book?
                <span className="material-icons transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-700 pt-4">
                We recommend booking at least 2-4 weeks in advance, especially
                during the busy summer months. However, we occasionally have
                last-minute openings.
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Make Your Move Stress-Free?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Get a free, no-obligation quote today and let us handle the heavy
            lifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all shadow-xl"
              href="#"
            >
              Get Free Quote
            </a>
            <a
              className="px-10 py-4 rounded-xl font-black text-xl hover:bg-white hover:text-black transition-all shadow-2xl flex items-center justify-center gap-2 bg-logo-yellow text-black"
              href="tel:3604876564"
            >
              <span className="material-icons">call</span>(360) 487-6564
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={GroovinMovinLogo} alt="Groovin Movin Logo" className="h-8 w-auto mb-6" />
              <p className="max-w-sm mb-6">
                Your trusted local movers in Vancouver, WA and surrounding areas. Making every move
                smooth and stress-free with our 3-in-1 service approach.
              </p>
              <div className="flex gap-6">
                <a className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="https://www.facebook.com/541945605957657" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Facebook</span>
                  <SiFacebook size={24} />
                </a>
                <a className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="https://www.instagram.com/groovinm" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Instagram</span>
                  <SiInstagram size={24} />
                </a>
                <a className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="https://www.yelp.com/biz/groovin-movin-vancouver-3" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Yelp</span>
                  <SiYelp size={24} />
                </a>
                <a className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" href="https://www.youtube.com/watch?v=UMoBLZbB0-o" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">YouTube</span>
                  <SiYoutube size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Welcome
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#services"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#about"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#reviews"
                  >
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#faq"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-icons text-primary text-lg">
                    call
                  </span>
                  <a
                    className="hover:text-white transition-colors"
                    href="tel:3604876564"
                  >
                    <span className="font-black text-lg text-white">
                      (360) 487-6564
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons text-primary text-lg">
                    schedule
                  </span>
                  <span>Any day 8am - 10pm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary text-lg">
                    location_on
                  </span>
                  <span>
                    Vancouver, WA
                    <br />
                    Serving Clark County
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons text-primary text-lg">
                    email
                  </span>
                  <a
                    className="hover:text-white transition-colors"
                    href="mailto:info@groovinmovin.com"
                  >
                    info@groovinmovin.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© 2026 Groovin Movin. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Website Design & Powered by <a href="https://adhello.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">AdHello.ai</a>
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a className="hover:text-white" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <a
        className={`fixed bottom-6 right-6 z-50 p-5 rounded-full shadow-2xl bg-primary text-white animate-pulse-red lg:hidden flex items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        href="tel:3604876564"
      >
        <span className="material-icons text-2xl">call</span>
      </a>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110]"
            >
              <span className="material-icons text-4xl">close</span>
            </button>
            <div className="w-full max-w-6xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                src="https://www.youtube.com/embed/UMoBLZbB0-o?autoplay=1"
                title="Groovin Movin Video"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

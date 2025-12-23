import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Quiz from './pages/Quiz';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Studios from './pages/Studios';
import Policies from './pages/Policies';
import About from './pages/About';
import AIChat from './AIChat';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Faceless Frames Studio', path: '/studios' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Packages', path: '/packages' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Policies', path: '/policies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 glass shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">F</div>
              <span className="text-lg font-bold tracking-tight luxury-text hidden sm:block">
                Faceless Frames <span className="text-violet-400">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2 py-2 rounded-md text-[11px] xl:text-[12px] font-semibold tracking-wide transition-all whitespace-nowrap uppercase ${
                    location.pathname === link.path 
                      ? 'text-violet-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/book" className="px-6 py-2.5 rounded-full bg-violet-600 text-white font-bold hover:bg-violet-500 transition-all transform hover:scale-105 active:scale-95 text-xs shadow-lg lavender-glow uppercase tracking-wider">
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass absolute w-full left-0 top-20 border-t border-white/5 py-6 px-4 space-y-2 overflow-y-auto max-h-[85vh] animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 rounded-2xl text-base font-bold uppercase tracking-widest transition-all ${
                location.pathname === link.path 
                  ? 'bg-violet-600/20 text-violet-400 border border-violet-500/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-5 rounded-2xl bg-violet-600 text-white font-black uppercase tracking-widest shadow-xl lavender-glow"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#05010a] pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-bold text-lg">F</div>
            <span className="text-2xl font-bold tracking-tight luxury-text">Faceless Frames <span className="text-violet-400">AI</span></span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
            Pioneering the next generation of business efficiency through luxury AI implementations. We build the digital backbone of tomorrow's industry leaders.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest">Services</h4>
          <ul className="space-y-4">
            <li><Link to="/solutions" className="text-gray-400 hover:text-violet-400 transition-colors">AI Voice Agents</Link></li>
            <li><Link to="/studios" className="text-gray-400 hover:text-violet-400 transition-colors">Faceless Frames Studio</Link></li>
            <li><Link to="/solutions" className="text-gray-400 hover:text-violet-400 transition-colors">Workflow Automation</Link></li>
            <li><Link to="/solutions" className="text-gray-400 hover:text-violet-400 transition-colors">Digital Avatars</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="/policies" className="text-gray-400 hover:text-violet-400 transition-colors">Policies & Terms</Link></li>
            <li><Link to="/policies" className="text-gray-400 hover:text-violet-400 transition-colors">FAQ</Link></li>
            <li><Link to="/policies" className="text-gray-400 hover:text-violet-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-violet-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2025 Faceless Frames AI Solutions. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
          <Link to="/policies" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/policies" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0b041a]">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/studios" element={<Studios />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </HashRouter>
  );
};

export default App;
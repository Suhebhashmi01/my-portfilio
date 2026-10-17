import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data/profile';

export const Navbar = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'QA & Testing', href: '#qa' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md py-3.5 border-b border-border shadow-md'
          : 'bg-transparent py-4 md:py-6 border-b-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className={`text-lg sm:text-xl font-bold font-sans tracking-tight uppercase transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          SUHEB HASHMI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`flex items-center gap-3 lg:gap-4 border-l pl-5 lg:pl-6 ${
              isScrolled ? 'border-border' : 'border-white/10'
            }`}
          >
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-foreground hover:bg-secondary'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isScrolled
                  ? 'bg-foreground text-background hover:opacity-90'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Toggle Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden top-[57px] sm:top-[65px]"
            />

            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-2xl border-b border-border shadow-2xl z-50 md:hidden max-h-[calc(100vh-65px)] overflow-y-auto"
            >
              <div className="flex flex-col py-5 px-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-base sm:text-lg font-medium text-foreground/90 hover:text-blue-500 py-2 border-b border-border/40 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex justify-center items-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-xl shadow-lg"
                  >
                    Let's Talk
                  </a>

                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex justify-center items-center gap-2 w-full px-4 py-2.5 bg-secondary text-foreground text-sm font-medium rounded-xl border border-border"
                  >
                    View Resume <ArrowUpRight size={16} />
                  </a>

                  {/* Mobile Socials */}
                  <div className="flex justify-center items-center gap-6 pt-3 pb-2 text-muted-foreground">
                    <a
                      href={PROFILE.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={20} />
                    </a>
                    <a
                      href={PROFILE.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-[#0A66C2] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a
                      href={PROFILE.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-[#E1306C] transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

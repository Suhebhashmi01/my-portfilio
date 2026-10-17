import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full bg-[#05050A] text-white overflow-hidden flex items-center justify-center font-sans" id="hero">
      
      {/* Center Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] bg-[#6B21A8]/40 blur-[90px] md:blur-[140px] rounded-full pointer-events-none z-0"></div>
      
      {/* Top Left subtle glow */}
      <div className="absolute top-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] bg-[#3B82F6]/20 blur-[80px] md:blur-[110px] rounded-full pointer-events-none z-0"></div>

      {/* Desktop Portrait Cutout Image */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] lg:max-w-[540px] xl:max-w-[580px] h-[75vh] md:h-[82vh] lg:h-[86vh] z-20 pointer-events-none items-end justify-center"
      >
        <img 
          src="/profile.png" 
          alt="Mohammad Suheb Hashmi" 
          className="w-full h-full object-cover object-bottom"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-5 sm:px-8 md:px-12 w-full min-h-[100svh] relative z-30 flex flex-col justify-between pt-24 pb-8 sm:pb-12 md:pb-0 md:justify-center">
        
        {/* Mobile & Desktop Hero Info */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/5 lg:w-1/2 text-left pointer-events-auto z-40"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-4 sm:mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for opportunities</span>
            </div>

            <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2 tracking-wide uppercase">
              Hello, I'm
            </p>
            
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
              MOHAMMAD <br className="hidden sm:inline" />
              SUHEB <br className="hidden sm:inline" />
              HASHMI
            </h1>
            
            <div className="inline-block text-left mb-6 sm:mb-8">
              <p className="text-[#9CA3AF] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1">
                Specialization
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#38BDF8]">
                  Creative Developer
                </span> <br/>
                <span className="text-white">& QA Engineer</span>
              </h2>
            </div>

            {/* Mobile CTAs & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 md:mb-0">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                Let's Talk
              </a>
              <a 
                href={PROFILE.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 glass hover:bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
              >
                Resume <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Mobile Socials Row */}
            <div className="flex md:hidden items-center gap-4 pt-2 text-gray-400">
              <a 
                href={PROFILE.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={PROFILE.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={PROFILE.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram profile"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Mobile Profile Photo Card (Visible on mobile & tablet portrait) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:hidden w-full flex justify-center mt-6 mb-2"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-blue-600/20 to-transparent rounded-full blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30 shadow-[0_0_40px_rgba(107,33,168,0.3)] bg-gradient-to-b from-[#181824] to-[#0a0a10]">
                <img 
                  src="/profile.png" 
                  alt="Mohammad Suheb Hashmi" 
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Desktop Bottom Left Socials */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden md:flex absolute bottom-10 lg:bottom-12 left-6 md:left-12 flex-col gap-5 z-40"
      >
        <a 
          href={PROFILE.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} />
        </a>
        <a 
          href={PROFILE.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
        <a 
          href={PROFILE.socials.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
        </a>
      </motion.div>

      {/* Desktop Bottom Right Resume Link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden md:flex absolute bottom-10 lg:bottom-12 right-6 md:right-12 z-40"
      >
        <a 
          href={PROFILE.resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors tracking-widest uppercase hover:translate-x-0.5 transition-transform"
        >
          RESUME <ArrowUpRight size={16} />
        </a>
      </motion.div>

    </section>
  );
};

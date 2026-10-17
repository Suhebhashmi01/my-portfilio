import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { BookOpen, GraduationCap, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-16 md:py-24 relative" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 sm:mb-4">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-base sm:prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              {PROFILE.aboutText}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              My focus is not just on writing code, but on engineering solutions that are scalable, maintainable, and thoroughly tested. I believe that good software is built on a foundation of solid architecture and rigorous quality assurance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="glass-card p-5 sm:p-6 rounded-xl border border-border">
              <GraduationCap className="text-blue-400 mb-3 sm:mb-4" size={28} />
              <h3 className="font-semibold text-base sm:text-lg mb-1">B.Tech CSE</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">Babu Banarasi Das University</p>
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                <span>CGPA: 8.3 / 10</span>
                <span className="bg-secondary px-2 py-0.5 rounded text-xs">2027</span>
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-xl border border-border">
              <BookOpen className="text-purple-400 mb-3 sm:mb-4" size={28} />
              <h3 className="font-semibold text-base sm:text-lg mb-1">Focus</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Software Development</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Full Stack Architecture & Testing</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-xl border border-border sm:col-span-2 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Experience</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Full Stack Development Internship</p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <MapPin className="text-blue-400" size={18} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

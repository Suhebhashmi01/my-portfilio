import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/education';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-16 md:py-24" id="education">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-border relative overflow-hidden group hover:border-blue-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start sm:items-center justify-between mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-blue-500/10 text-blue-500 rounded-xl sm:rounded-2xl shrink-0 mt-0.5 sm:mt-0">
                  <GraduationCap size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-foreground leading-snug">{EDUCATION.degree}</h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-1">{EDUCATION.institution}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2.5 sm:gap-2 w-full sm:w-auto text-left sm:text-right">
                <div className="bg-secondary px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-border">
                  <p className="text-[11px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider">CGPA</p>
                  <p className="text-base sm:text-lg font-bold text-foreground">{EDUCATION.cgpa}</p>
                </div>
                <div className="bg-secondary px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-border">
                  <p className="text-[11px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider">Graduation</p>
                  <p className="text-base sm:text-lg font-bold text-foreground">{EDUCATION.graduation}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {EDUCATION.coursework.map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-background rounded-full text-xs sm:text-sm font-medium border border-border text-foreground hover:border-blue-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

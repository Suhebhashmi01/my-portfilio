import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/education';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-16 md:py-24" id="education">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden group hover:border-blue-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">{EDUCATION.degree}</h2>
                  <p className="text-lg text-muted-foreground mt-1">{EDUCATION.institution}</p>
                </div>
              </div>
              
              <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-right">
                <div className="bg-secondary px-4 py-2 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">CGPA</p>
                  <p className="text-lg font-bold text-foreground">{EDUCATION.cgpa}</p>
                </div>
                <div className="bg-secondary px-4 py-2 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Graduation</p>
                  <p className="text-lg font-bold text-foreground">{EDUCATION.graduation}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-3">
                {EDUCATION.coursework.map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-background rounded-full text-sm font-medium border border-border text-foreground hover:border-blue-500/30 transition-colors"
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

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12 pb-8">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-background"></div>
              
              <div className="glass-card p-6 md:p-8 rounded-xl border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mt-1 font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full w-max">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';
import { Code, Layout, Server, Database, ShieldCheck, Briefcase } from 'lucide-react';

const iconMap = {
  'code': Code,
  'layout': Layout,
  'server': Server,
  'database': Database,
  'shield-check': ShieldCheck,
  'briefcase': Briefcase,
};

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="skills">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 sm:mb-4">Technical Stack</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto px-2">
            A comprehensive toolkit for building, scaling, and verifying robust software applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {SKILLS.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.icon] || Code;
            
            return (
              <motion.div 
                key={idx} 
                variants={item}
                className="glass-card p-5 sm:p-6 rounded-xl border border-border group hover:border-blue-500/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex items-center gap-3 mb-4 sm:mb-6 relative">
                  <div className="p-2 rounded-lg bg-secondary text-foreground group-hover:text-blue-400 transition-colors">
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold tracking-wide text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 relative">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-2.5 py-1 text-xs sm:text-sm font-medium rounded-md bg-secondary/80 border border-border text-foreground hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP } from '../data/leadership';
import { Users, Trophy } from 'lucide-react';

export const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="leadership">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Leadership & Responsibility</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {LEADERSHIP.map((item, idx) => {
            const Icon = idx === 0 ? Users : Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass-card p-8 rounded-2xl border border-border hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                  <div className={`p-3 rounded-xl ${idx === 0 ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">{item.title}</h3>
                    <p className="text-muted-foreground">{item.organization}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${idx === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

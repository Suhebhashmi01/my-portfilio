import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Bug, Activity } from 'lucide-react';

export const QASection = () => {
  const metrics = [
    {
      value: "30+",
      label: "End-to-End Test Cases",
      icon: Activity,
      color: "text-blue-400"
    },
    {
      value: "5",
      label: "Major API Payload Bugs Identified",
      icon: Bug,
      color: "text-red-400"
    },
    {
      value: "25%",
      label: "Reported Runtime Error Reduction",
      icon: ShieldAlert,
      color: "text-green-400"
    }
  ];

  const skills = [
    "Manual Testing", "API Testing", "Test Case Design", 
    "Functional Verification", "Defect Tracking", "Bug Reporting"
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-foreground text-background" id="qa">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
              I Don't Just Build Software. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">I Test It.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Engineering reliable software requires a critical eye. I bridge the gap between development and quality assurance to deliver robust applications.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-blue-400/50 hover:bg-blue-900/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-colors"
                >
                  <div className={`p-4 bg-background/50 rounded-xl border border-white/5 ${metric.color}`}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className={`text-4xl font-bold font-display tracking-tight mb-1 ${metric.color}`}>
                      {metric.value}
                    </h3>
                    <p className="text-gray-400 font-medium">{metric.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

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
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#07070F] text-white border-y border-white/10" id="qa">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-[90px] md:blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-3 sm:mb-4">
              <span>Quality Assurance & Reliability</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display mb-4 sm:mb-6 leading-tight">
              I Don't Just Build Software. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                I Test It.
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Engineering reliable software requires a critical eye. I bridge the gap between development and quality assurance to deliver robust applications.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm font-medium text-gray-200 hover:border-blue-400/50 hover:bg-blue-900/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3.5 sm:gap-5">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center gap-4 sm:gap-6 group hover:bg-white/10 transition-colors"
                >
                  <div className={`p-3 sm:p-4 bg-black/40 rounded-xl border border-white/5 shrink-0 ${metric.color}`}>
                    <Icon size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight mb-0.5 sm:mb-1 ${metric.color}`}>
                      {metric.value}
                    </h3>
                    <p className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">{metric.label}</p>
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

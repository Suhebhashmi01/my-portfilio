import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ExternalLink, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-24 bg-secondary/30 relative" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-border h-full flex flex-col hover:border-blue-500/50 transition-all duration-500 relative">
                
                {/* Image Placeholder */}
                <div className="h-64 bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted/30 font-display transform group-hover:scale-110 transition-transform duration-700">
                    {project.imagePlaceholder}
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-full border border-border text-foreground">
                      {project.id}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative z-20 -mt-10 bg-background/90 backdrop-blur-md rounded-t-3xl border-t border-border/50">
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-500 text-sm font-medium mb-4">{project.role}</p>
                  
                  <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground border border-border">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground border border-border">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors mt-auto pt-4 border-t border-border">
                    View Project Details
                    <ArrowUpRight className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl border border-border shadow-2xl z-10 custom-scrollbar"
              role="dialog"
              aria-modal="true"
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-secondary rounded-full text-muted-foreground hover:text-foreground transition-colors z-20"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="h-48 md:h-64 bg-secondary flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-muted/30 font-display absolute z-0 text-center px-4">
                  {selectedProject.imagePlaceholder}
                </h2>
              </div>

              <div className="px-6 md:px-10 pb-10 relative z-20 -mt-16">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="text-blue-500 font-mono text-sm font-semibold block mb-2">Project {selectedProject.id}</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-display">{selectedProject.title}</h2>
                  </div>
                  <div className="flex gap-3">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg text-sm font-medium transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code
                    </a>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-foreground text-background hover:bg-foreground/90 rounded-lg text-sm font-medium transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 border-b border-border pb-2">Problem Statement</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 border-b border-border pb-2">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedProject.leadership && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 border-b border-border pb-2">Leadership & Impact</h3>
                        <p className="text-muted-foreground leading-relaxed">{selectedProject.leadership}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 border-b border-border pb-2">Role</h3>
                      <p className="text-foreground font-medium">{selectedProject.role}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 border-b border-border pb-2">Testing & QA</h3>
                      <ul className="space-y-2">
                        {selectedProject.testing.map((test, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 border-b border-border pb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs bg-secondary px-2.5 py-1.5 rounded-md text-foreground border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

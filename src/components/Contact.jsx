import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's Build Something Useful.</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              I'm open to software development, full-stack development, QA/testing, internship, and entry-level opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Phone</p>
                  <a href={`tel:${PROFILE.phone}`} className="text-lg font-medium hover:text-purple-400 transition-colors">
                    +91 {PROFILE.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 glass border border-border rounded-xl">
              <h3 className="text-xl font-bold font-display mb-2">Want the complete picture?</h3>
              <p className="text-muted-foreground mb-6">Explore my experience, technical skills, projects, and development background.</p>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-95"
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-border"
          >
            <form
              action={`mailto:${PROFILE.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-foreground resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

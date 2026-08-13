import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { FEATURED_PROJECTS, type ProjectItem } from '../data/siteData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-cream-100 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold text-sage-600 uppercase tracking-widest">
              RECENT PROJECTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
              Real projects. <br className="hidden sm:block" />
              Real results.
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-charcoal-900 hover:text-sage-600 uppercase tracking-widest transition-colors group self-start sm:self-auto"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 text-sage-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 5 Card Portfolio Grid (Matching Reference Image Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FEATURED_PROJECTS.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-cream-300 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image showing actual concrete work */}
              <div className="relative h-48 overflow-hidden bg-cream-200">
                <img
                  src={project.image}
                  alt={`${project.title} concrete project in ${project.location}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-forest-900/80 backdrop-blur-sm text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {project.category}
                </div>
              </div>

              {/* Title & Location Footer */}
              <div className="p-4 space-y-1 bg-white">
                <h3 className="font-sans font-bold text-charcoal-900 text-sm group-hover:text-sage-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-charcoal-500">
                  <MapPin className="w-3 h-3 text-sage-600 shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

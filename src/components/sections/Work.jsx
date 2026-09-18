// src/components/sections/Work.jsx
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../animations/FadeIn";
import { projects } from "../../data/projects";

export function Work() {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Selected Work
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.2}>
              <div className="group" id={`project-${project.id}`}>
                <div
                  className={`grid md:grid-cols-3 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`md:col-span-2 ${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                      <Link to={`/project/${project.id}`} className="block">
                        <img
                          src={project.photo.large}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover bg-slate-100 transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {project.type && (
                        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 rounded-full px-3 py-1">
                          {project.type}
                        </span>
                      )}
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {project.excerpt}
                    </p>

                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="text-lg font-medium">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="text-lg font-medium">{project.date}</p>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {project.type === "Blog Post" ? "Read Post" : "View Live Site"}{" "}
                        <Icons.ExternalLink size={18} />
                      </a>
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                      >
                        View Details <Icons.ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

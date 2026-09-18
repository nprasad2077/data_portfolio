// src/pages/ProjectDetail.jsx
import * as Icons from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import { projects } from "../data/projects";

function ProjectDescription({ description }) {
  return (
    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
      {description.intro && <p>{description.intro}</p>}
      {description.sections?.map((section) => (
        <div key={section.heading}>
          <h3 className="font-bold my-2 text-lg text-gray-900">
            {section.heading}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      {description.conclusion && <p>{description.conclusion}</p>}
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation} strict>
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <Link
            to={`/#project-${project.id}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-12"
          >
            <Icons.ArrowLeft size={20} />
            Back to Work
          </Link>

          <div className="max-w-4xl mx-auto">
            {project.type && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-4">
                {project.type}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{project.date}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Project URL</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
                >
                  {project.type === "Blog Post" ? "Read Post" : "Visit Site"}{" "}
                  <Icons.ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="aspect-[16/9] overflow-hidden rounded-xl mb-12">
                <img
                  src={project.photo.large}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <ProjectDescription description={project.description} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
    </LazyMotion>
  );
}

export default ProjectDetail;

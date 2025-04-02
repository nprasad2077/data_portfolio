// src/components/sections/Work.jsx
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../animations/FadeIn";
import nbaScoreboardImage from "../../assets/images/nba_scoreboard.png";
import ecommerceImage from '../../assets/images/vibe_store.png'

// Projects data
const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    excerpt:
      "A comprehensive analytics platform leveraging machine learning to provide actionable insights for business intelligence.",
    description:
      "Built with React, TensorFlow.js, and D3.js, this dashboard provides real-time data visualization and predictive analytics.",
    role: "Lead Frontend Developer",
    date: "2024",
    url: "https://example.com/analytics-dashboard",
    photo: {
      large: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
      small: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
  },
  {
    id: 2,
    title: "NBA Scoreboard",
    excerpt:
      "A comprehensive full-stack basketball solution featuring a responsive React frontend paired with a robust FastAPI backend.",
    description:
      "A full-stack solution that marries a cutting-edge FastAPI backend with a dynamic React front-end to deliver an immersive, real-time NBA experience.",
    role: "Full Stack Developer",
    date: "2025",
    url: "https://scoreboard.server.nbaapi.com/",
    photo: {
      large: nbaScoreboardImage,
      small: nbaScoreboardImage,
    },
  },
  {
    id: 3,
    title: "Vibes Store E-Commerce Platform",
    excerpt:
      "A full-featured e-commerce solution with React frontend and Django REST backend.",
    description:
      "Developed a modern e-commerce platform featuring a React frontend with Framer Motion animations and Tailwind CSS styling, complemented by a robust Django REST Framework backend. The frontend implements an intuitive shopping experience with animated transitions, detailed product pages, review systems, and a complete checkout flow managed through React Context API. The backend provides comprehensive API endpoints secured with JWT authentication, supporting advanced product operations, user management, and order processing with shipping and payment tracking. The application is containerized with Docker and Nginx for production deployment, connecting to PostgreSQL for reliable data persistence.",
    role: "Full Stack Developer",
    date: "2024",
    url: "https://shop.nikhil.engineer/",
    photo: {
      large:
        ecommerceImage,
      small:
        ecommerceImage,
    },
  },
];

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
              <div className="group">
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
                          className="w-full h-full object-cover bg-slate-100 transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
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
                        View Live Site <Icons.ExternalLink size={18} />
                      </a>
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

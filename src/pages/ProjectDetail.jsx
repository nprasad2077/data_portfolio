// src/pages/ProjectDetail.jsx
import * as Icons from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import medicareImage from "../assets/images/medicare_dashboard.png";
import nbaApiImage from "../assets/images/nba_api_architecture.svg";
import NLPImage from "../assets/images/NLP_diagram.png";

const sampleProjects = [
  {
    id: 2,
    title: "Medicare Enrollment Dashboard",
    excerpt:
      "An interactive analytics dashboard visualizing CMS Medicare enrollment data across all US states and counties with real-time API integration.",
    description: {
      intro:
        "The Medicare Enrollment Dashboard transforms raw CMS Medicare Monthly Enrollment data into an interactive analytics experience, enabling users to explore enrollment trends, plan type breakdowns, and geographic penetration rates at national, state, and county levels.",
      sections: [
        {
          heading: "Key Features",
          items: [
            "Dual view modes: Hospital/Medical (MA vs FFS) and Prescription Drug (MAPD vs PDP)",
            "Interactive choropleth map with state-level penetration rates and click-to-drill-down",
            "County-level breakdown with enrollment counts and penetration bars",
            "Yearly and 12-month trend charts showing enrollment count and percent-of-total",
            "Summary KPI cards: total enrollment, plan type counts, and penetration rate",
            "Live data from the data.cms.gov API with react-query caching",
          ],
        },
        {
          heading: "Technical Stack",
          items: [
            "Frontend: React 19, Vite 8, Tailwind CSS 4",
            "Charting: Recharts (line, bar, stacked bar charts)",
            "Mapping: Leaflet + react-leaflet with GeoJSON choropleth layers",
            "Data: Live CMS API with NetworkFirst caching via Service Worker",
            "State Management: React Query for server state, useState for UI",
            "UI Components: Radix UI primitives, Lucide icons, Inter typography",
            "PWA: Installable with offline support via vite-plugin-pwa",
          ],
        },
        {
          heading: "Impact & Design",
          items: [
            "Makes complex federal healthcare data accessible to non-technical users",
            "Modernized analytics UI based on Figma dashboard templates",
            "Responsive 3-column layout adapting from desktop to mobile",
            "Accessible color scales for penetration rate visualization",
            "Production-deployed on Vercel with analytics and speed insights",
          ],
        },
      ],
      conclusion:
        "This project demonstrates the ability to build data-intensive analytics applications that combine live government APIs, geographic visualization, and interactive drill-down exploration, making complex enrollment data immediately understandable.",
    },
    role: "Data Engineer",
    date: "2025",
    url: "https://medicare-enrollment-dashboard.vercel.app/",
    photo: { large: medicareImage, small: medicareImage },
  },
  {
    id: 3,
    title: "NBA Statistics REST API",
    excerpt:
      "A high-performance, load-balanced REST API serving comprehensive NBA statistics to thousands of daily users with full observability and containerized deployment.",
    description: {
      intro:
        "The NBA Statistics REST API is a production-grade backend system built to serve comprehensive basketball data at scale. Requests flow through an NGINX reverse proxy that distributes traffic across 3 Go (Fiber) instances via round-robin load balancing, each backed by a shared PostgreSQL 15 database with optimized indexes. The entire stack is containerized with Docker Compose, monitored by Prometheus, and visualized through pre-provisioned Grafana dashboards. With 45+ GitHub stars, 70+ Reddit upvotes, and 99+ Postman collection forks, it has become a trusted resource for developers building NBA applications.",
      sections: [
        {
          heading: "Architecture & Performance",
          items: [
            "3 Go (Fiber) API instances behind NGINX round-robin load balancer",
            "Handles thousands of daily requests with sub-100ms response times",
            "Per-IP rate limiting (20 req/min per instance, ~60 effective per client)",
            "PostgreSQL 15 with GORM ORM and optimized query patterns",
            "Docker containerized stack with health checks and auto-restart",
            "Production deployment on Coolify with external database",
          ],
        },
        {
          heading: "API Features",
          items: [
            "Paginated endpoints: player totals, advanced stats, shot charts, game box scores",
            "Flexible filtering by season, team, player ID, date, and playoff status",
            "Nested association loading (line scores, player/team stats per game)",
            "Interactive Swagger documentation for all endpoints",
            "Optional API key authentication with admin management",
            "Data scraped from Basketball Reference via goquery",
          ],
        },
        {
          heading: "Observability & DevOps",
          items: [
            "Prometheus metrics: request counters, latency histograms, DB operation tracking",
            "Pre-provisioned Grafana dashboards for real-time monitoring",
            "Custom load testing tool with configurable concurrency and logging",
            "Makefile-driven development workflow",
            "Automated data import pipeline (migrations + full season scraping)",
          ],
        },
        {
          heading: "Community Impact",
          items: [
            "45+ GitHub stars with active community contributions",
            "70+ upvotes on Reddit API showcase threads",
            "99+ forks of the public Postman collection",
            "Continuously updated with new NBA seasons and stat categories",
            "Used by indie developers, data scientists, and fantasy basketball apps",
          ],
        },
      ],
      conclusion:
        "This project exemplifies building robust, scalable API infrastructure from scratch, combining high-performance Go, production-grade load balancing, full observability, and developer-friendly documentation into a system that serves a growing community of users.",
    },
    role: "Backend Engineer",
    date: "2025",
    url: "https://api.server.nbaapi.com/",
    photo: { large: nbaApiImage, small: nbaApiImage },
  },
  {
    id: 1,
    title: "In-Network Transformer Model for Healthcare Benefit Extraction",
    excerpt:
      "A specialized NLP system utilizing BERT for extracting and validating financial information from healthcare insurance benefit descriptions.",
    description: {
      intro:
        "The In-Network Transformer Model represents a sophisticated NLP solution that automates the extraction and validation of critical financial information from unstructured healthcare benefit descriptions.",
      sections: [
        {
          heading: "Key Features",
          items: [
            "Named entity recognition for monetary amounts, percentages, and coverage limits",
            "Automated validation of copayment and coinsurance values",
            'Processing of complex numeric ranges (e.g., "$120-350")',
            "Distinction between in-network and out-of-network benefits",
            "Structured data extraction from varied text formats",
          ],
        },
        {
          heading: "Technical Stack",
          items: [
            "Model: BERT-base-cased fine-tuned for token classification",
            "Framework: Hugging Face Transformers, PyTorch",
            "Data Processing: Custom BIO encoding, entity alignment",
            "Training: Early stopping based on F1 score optimization",
            "Inference: Specialized post-processing for entity reconstruction",
          ],
        },
      ],
      conclusion:
        "This project demonstrates how transformer-based models can be applied to domain-specific information extraction tasks, converting complex healthcare text into structured, actionable data while maintaining high accuracy for downstream validation processes.",
    },
    role: "NLP Engineer",
    date: "2024",
    url: "https://github.com/nprasad2077",
    photo: { large: NLPImage, small: NLPImage },
  },
];

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
  const project = sampleProjects.find((p) => p.id.toString() === id);

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
                  Visit Site <Icons.ExternalLink size={16} />
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

// src/pages/ProjectDetail.jsx
import * as Icons from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import nbaScoreboardImage from "../assets/images/nba_scoreboard.png";
import ecommerceImage from "../assets/images/vibe_store.png";
import NLPImage from "../assets/images/NLP_diagram.png";

const sampleProjects = [
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
  {
    id: 2,
    title: "NBA Scoreboard",
    excerpt:
      "A comprehensive full-stack basketball solution featuring a responsive React frontend paired with a robust FastAPI backend.",
    description: {
      intro:
        "NBA Scoreboard is a full-stack solution that marries a cutting-edge FastAPI backend with a dynamic React front-end to deliver an immersive, real-time NBA experience.",
      sections: [
        {
          heading: "Key Features",
          items: [
            "Real-time game updates and live scores",
            "Interactive box scores and statistics",
            "Play-by-play analysis",
            "Player statistics and league standings",
            "WebSocket integration for live updates",
          ],
        },
        {
          heading: "Technical Stack",
          items: [
            "Frontend: React.js",
            "Backend: FastAPI",
            "Real-time Updates: WebSockets",
            "Data Management: REST APIs",
            "Mobile-First Design",
          ],
        },
        {
          heading: "Implementation Highlights",
          items: [
            "Intelligent data progression handling",
            "Comprehensive error recovery",
            "Responsive design for all devices",
            "Production-ready system architecture",
            "Consistent data synchronization",
          ],
        },
      ],
    },
    role: "Full Stack Developer",
    date: "2025",
    url: "https://scoreboard.server.nbaapi.com/",
    photo: { large: nbaScoreboardImage, small: nbaScoreboardImage },
  },
  {
    id: 3,
    title: "Vibes Store E-Commerce Platform",
    excerpt:
      "A modern full-stack e-commerce solution with React frontend and Django REST backend.",
    description: {
      intro:
        "Vibes Store is a comprehensive e-commerce platform built with React and Django REST Framework, providing a seamless shopping experience with modern UI and robust backend services.",
      sections: [
        {
          heading: "Core Features",
          items: [
            "Product catalog with search, filtering and category navigation",
            "User authentication and personalized account management",
            "Shopping cart with persistent storage",
            "Product reviews and rating system",
            "Complete checkout flow with shipping and payment processing",
            "Order history and tracking",
            "Admin dashboard for inventory and user management",
          ],
        },
        {
          heading: "Technical Details",
          items: [
            "React frontend with Framer Motion animations",
            "Tailwind CSS for responsive, modern styling",
            "React Context API for global state management",
            "Django REST Framework backend with comprehensive API endpoints",
            "JWT authentication for secure user management",
            "PostgreSQL database for reliable data persistence",
            "Docker and Nginx containerization for production deployment",
            "Modular architecture separating user, product, and order operations",
          ],
        },
      ],
      conclusion:
        "This project demonstrates the ability to create a production-ready e-commerce solution with attention to both user experience and system architecture, balancing performance, security, and scalability while maintaining a polished frontend experience.",
    },
    role: "Full Stack Developer",
    date: "2024",
    url: "https://shop.nikhil.engineer/",
    photo: { large: ecommerceImage, small: ecommerceImage },
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
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <Link
            to="/#work"
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
  );
}

export default ProjectDetail;

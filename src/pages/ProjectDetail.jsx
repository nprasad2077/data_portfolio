// src/pages/ProjectDetail.jsx
import * as Icons from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import nbaScoreboardImage from "../assets/images/nba_scoreboard.png";
import ecommerceImage from "../assets/images/vibe_store.png";
import NLPImage from "../assets/images/NLP_diagram.png"

// Import the sample projects data
const sampleProjects = [
  {
    id: 1,
    title: "In-Network Transformer Model for Healthcare Benefit Extraction",
    excerpt:
      "A specialized NLP system utilizing BERT for extracting and validating financial information from healthcare insurance benefit descriptions.",
    description: `
      <p>The In-Network Transformer Model represents a sophisticated NLP solution that automates the extraction and validation of critical financial information from unstructured healthcare benefit descriptions.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Named entity recognition for monetary amounts, percentages, and coverage limits</li>
        <li>Automated validation of copayment and coinsurance values</li>
        <li>Processing of complex numeric ranges (e.g., "$120-350")</li>
        <li>Distinction between in-network and out-of-network benefits</li>
        <li>Structured data extraction from varied text formats</li>
      </ul>

      <h3 class='font-bold my-2 text-lg'>Technical Stack:</h3>
      <ul>
        <li>Model: BERT-base-cased fine-tuned for token classification</li>
        <li>Framework: Hugging Face Transformers, PyTorch</li>
        <li>Data Processing: Custom BIO encoding, entity alignment</li>
        <li>Training: Early stopping based on F1 score optimization</li>
        <li>Inference: Specialized post-processing for entity reconstruction</li>
      </ul>

      <p>This project demonstrates how transformer-based models can be applied to domain-specific information extraction tasks, converting complex healthcare text into structured, actionable data while maintaining high accuracy for downstream validation processes.</p>
    `,
    role: "NLP Engineer",
    date: "2024",
    url: "https://github.com/nprasad2077",
    photo: {
      large: NLPImage,
      small: NLPImage,
    },
  },
  {
    id: 2,
    title: "NBA Scoreboard",
    excerpt:
      "A comprehensive full-stack basketball solution featuring a responsive React frontend paired with a robust FastAPI backend.",
    description: `
      <p>NBA Scoreboard is a full-stack solution that marries a cutting-edge FastAPI backend with a dynamic React front-end to deliver an immersive, real-time NBA experience.</p>
      <br />
      <h3>Key Features:</h3>
      <br />
      <ul>
        <li>Real-time game updates and live scores</li>
        <li>Interactive box scores and statistics</li>
        <li>Play-by-play analysis</li>
        <li>Player statistics and league standings</li>
        <li>WebSocket integration for live updates</li>
      </ul>
      <br />

      <h3>Technical Stack:</h3>
      <br />
      <ul>
        <li>Frontend: React.js</li>
        <li>Backend: FastAPI</li>
        <li>Real-time Updates: WebSockets</li>
        <li>Data Management: REST APIs</li>
        <li>Mobile-First Design</li>
      </ul>
      <br />

      <h3 class='font-bold my-2 text-lg'>Implementation Highlights:</h3>
      <ul>
        <li>Intelligent data progression handling</li>
        <li>Comprehensive error recovery</li>
        <li>Responsive design for all devices</li>
        <li>Production-ready system architecture</li>
        <li>Consistent data synchronization</li>
      </ul>
    `,
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
      "A modern full-stack e-commerce solution with React frontend and Django REST backend.",
    description: `
      <p>Vibes Store is a comprehensive e-commerce platform built with React and Django REST Framework, providing a seamless shopping experience with modern UI and robust backend services.</p>
      
      <h3>Core Features:</h3>
      <ul>
        <li>Product catalog with search, filtering and category navigation</li>
        <li>User authentication and personalized account management</li>
        <li>Shopping cart with persistent storage</li>
        <li>Product reviews and rating system</li>
        <li>Complete checkout flow with shipping and payment processing</li>
        <li>Order history and tracking</li>
        <li>Admin dashboard for inventory and user management</li>
      </ul>
      <br />
      <h3 class='font-bold my-2 text-lg'>Technical Details:</h3>
      <ul>
        <li>React frontend with Framer Motion animations</li>
        <li>Tailwind CSS for responsive, modern styling</li>
        <li>React Context API for global state management</li>
        <li>Django REST Framework backend with comprehensive API endpoints</li>
        <li>JWT authentication for secure user management</li>
        <li>PostgreSQL database for reliable data persistence</li>
        <li>Docker and Nginx containerization for production deployment</li>
        <li>Modular architecture separating user, product, and order operations</li>
      </ul>

      <p>This project demonstrates the ability to create a production-ready e-commerce solution with attention to both user experience and system architecture, balancing performance, security, and scalability while maintaining a polished frontend experience.</p>
    `,
    role: "Full Stack Developer",
    date: "2024",
    url: "https://example.com/vibes-store",
    photo: {
      large: ecommerceImage,
      small: ecommerceImage,
    },
  },
];

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

            {/* Project Metadata */}
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

            {/* Project Content */}
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
                <div
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default ProjectDetail;

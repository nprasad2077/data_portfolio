// src/pages/ProjectDetail.jsx
import * as Icons from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import nbaScoreboardImage from '../assets/images/nba_scoreboard.png';

// Import the sample projects data
const sampleProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    excerpt:
      "A comprehensive analytics platform leveraging machine learning to provide actionable insights for business intelligence.",
    description: `
      <p>The AI-Powered Analytics Dashboard represents a breakthrough in business intelligence tools, combining advanced machine learning capabilities with intuitive data visualization.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time data processing and visualization</li>
        <li>Machine learning-powered predictive analytics</li>
        <li>Customizable dashboards and reporting</li>
        <li>Integration with multiple data sources</li>
      </ul>

      <h3>Technical Stack:</h3>
      <ul>
        <li>Frontend: React.js, D3.js</li>
        <li>Machine Learning: TensorFlow.js</li>
        <li>Data Processing: Python, Pandas</li>
        <li>Backend: Node.js, Express</li>
      </ul>

      <p>This project showcases the power of modern web technologies in creating sophisticated business tools that are both powerful and user-friendly.</p>
    `,
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

      <h3>Implementation Highlights:</h3>
      <br />
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
    title: "Healthcare Management System",
    excerpt:
      "A comprehensive healthcare management solution for clinics and small hospitals.",
    description: `
      <p>The Healthcare Management System is a HIPAA-compliant solution designed to streamline clinical operations and improve patient care.</p>
      
      <h3>Core Features:</h3>
      <ul>
        <li>Electronic Health Records (EHR) management</li>
        <li>Appointment scheduling and reminders</li>
        <li>Billing and insurance processing</li>
        <li>Secure patient portal</li>
      </ul>

      <h3>Technical Details:</h3>
      <ul>
        <li>HIPAA-compliant data storage</li>
        <li>Real-time notifications</li>
        <li>Integration with laboratory systems</li>
        <li>Mobile-responsive interface</li>
      </ul>

      <p>This project showcases the ability to create complex, secure systems while maintaining user-friendly interfaces for both healthcare providers and patients.</p>
    `,
    role: "Full Stack Developer",
    date: "2023",
    url: "https://example.com/healthcare-system",
    photo: {
      large:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600",
      small:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
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

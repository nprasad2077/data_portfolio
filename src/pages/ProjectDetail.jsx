// src/pages/ProjectDetail.jsx
import * as Icons from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { FadeIn } from '../components/animations/FadeIn';

// Import the sample projects data
const sampleProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    excerpt: "A comprehensive analytics platform leveraging machine learning to provide actionable insights for business intelligence.",
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
      small: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    }
  },
  {
    id: 2,
    title: "E-commerce Platform Redesign",
    excerpt: "A complete overhaul of an e-commerce platform focusing on user experience and conversion optimization.",
    description: `
      <p>The E-commerce Platform Redesign project focused on modernizing an existing online store while significantly improving the user experience and conversion rates.</p>
      
      <h3>Achievements:</h3>
      <ul>
        <li>40% increase in conversion rate</li>
        <li>25% reduction in cart abandonment</li>
        <li>60% improvement in mobile user engagement</li>
      </ul>

      <h3>Key Improvements:</h3>
      <ul>
        <li>Streamlined checkout process</li>
        <li>Responsive design implementation</li>
        <li>Enhanced product search and filtering</li>
        <li>Improved product recommendations</li>
      </ul>

      <p>The project demonstrates how thoughtful UX design and modern development practices can transform an e-commerce business.</p>
    `,
    role: "UX Designer & Developer",
    date: "2024",
    url: "https://example.com/ecommerce-redesign",
    photo: {
      large: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1600",
      small: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800"
    }
  },
  {
    id: 3,
    title: "Healthcare Management System",
    excerpt: "A comprehensive healthcare management solution for clinics and small hospitals.",
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
      large: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600",
      small: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    }
  }
];

function ProjectDetail() {
  const { id } = useParams();
  const project = sampleProjects.find(p => p.id.toString() === id);

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
// src/components/sections/Work.jsx
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "../animations/FadeIn";
import medicareImage from "../../assets/images/medicare_dashboard.png";
import nbaApiImage from "../../assets/images/nba_api_architecture.svg";
import nbaStreamlitImage from "../../assets/images/nba_streamlit.png";
import NLPImage from "../../assets/images/NLP_diagram.png"

// Projects data
const projects = [
  {
    id: 2,
    title: "Medicare Enrollment Dashboard",
    excerpt:
      "An interactive analytics dashboard visualizing CMS Medicare enrollment data across all US states and counties, featuring real-time API integration, choropleth maps, and drill-down trend analysis.",
    description:
      "Built an interactive analytics dashboard that transforms raw CMS Medicare Monthly Enrollment data into actionable insights. Features dual-view modes for Hospital/Medical and Prescription Drug enrollment, an interactive choropleth map with state-to-county drill-down, and trend charts showing yearly and 12-month enrollment patterns. Powered by live data from the data.cms.gov API with react-query caching for performance.",
    role: "Data Engineer",
    date: "2026",
    url: "https://medicare-enrollment-dashboard.vercel.app/",
    photo: {
      large: medicareImage,
      small: medicareImage,
    },
  },
  {
    id: 3,
    title: "NBA Statistics REST API",
    excerpt:
      "A high-performance, load-balanced REST API serving comprehensive NBA statistics to thousands of daily users. Built with Go (Fiber), PostgreSQL, and NGINX across 3 containerized instances with full Prometheus and Grafana observability. 45+ GitHub stars, 70+ Reddit upvotes, and 99+ Postman forks.",
    description:
      "Engineered a production-grade NBA statistics API that routes requests through an NGINX load balancer to 3 Go (Fiber) instances backed by PostgreSQL. Serves paginated endpoints for player stats, game box scores, and shot chart data scraped from Basketball Reference. Includes Prometheus + Grafana observability, rate limiting, API key auth, Swagger docs, and containerized deployment. Continuously updated with new seasons and performance improvements. Adopted by 45+ GitHub stargazers, 70+ Reddit upvoters, and 99+ Postman collection forks.",
    role: "Backend Engineer",
    date: "2025",
    url: "https://documenter.getpostman.com/view/25652688/2sB34Zs4xZ",
    photo: {
      large: nbaApiImage,
      small: nbaApiImage,
    },
  },
  {
    id: 4,
    title: "NBA Analytics Dashboard",
    excerpt:
      "An end-to-end analytics platform featuring a Streamlit dashboard with advanced player metrics, shot charts, and season comparisons, powered by dbt-modeled star schema data refreshed on a continuous schedule.",
    description:
      "Built an interactive Streamlit analytics dashboard on top of a dbt-core data warehouse with star schema modeling. The platform ingests live NBA data from the Go API, transforms it through a medallion architecture pipeline, and presents advanced metrics including shot charts, player comparisons, and season-over-season trends. Data is refreshed on a continuous schedule with sub-100ms p99 query response times.",
    role: "Analytics Engineer",
    date: "2025",
    url: "https://dbtnba.streamlit.app/",
    photo: {
      large: nbaStreamlitImage,
      small: nbaStreamlitImage,
    },
  },
  {
    id: 1,
    title: "Transformer Model for Healthcare Benefit Extraction",
    excerpt:
      "This project employs a fine-tuned BERT model to extract critical financial information from healthcare benefit descriptions, automating validation of copayment and coinsurance values in insurance documentation. The transformer-based solution processes messages to identify and extract monetary amounts, percentages, coverage limits, and network status indicators, converting them into structured data for downstream validation processes.",
    description:
      "This NLP solution uses a BERT-based token classification model to extract and validate financial values from healthcare insurance benefit descriptions. The system processes complex benefit text containing copays, percentages, and policy limits, using custom entity recognition and post-processing logic to handle numerical ranges and varied text formats. Built with the Hugging Face Transformers library, the pipeline includes specialized tokenization, BIO encoding, and production-ready inference capabilities for real-time benefit validation.",
    role: "NLP Engineer",
    date: "2024",
    url: "https://github.com/nprasad2077",
    photo: {
      large: NLPImage,
      small: NLPImage,
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

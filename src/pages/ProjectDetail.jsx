// src/pages/ProjectDetail.jsx
import * as Icons from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import medicareImage from "../assets/images/medicare_dashboard_opt.webp";
import nbaApiImage from "../assets/images/nba_api_architecture.svg";
import nbaStreamlitImage from "../assets/images/nba_streamlit_opt.webp";
import NLPImage from "../assets/images/NLP_diagram.png";
import postgresReadsImage from "../assets/images/postgres_read_scaling_opt.webp";

const sampleProjects = [
  {
    id: 5,
    type: "Blog Post",
    title: "Scaling PostgreSQL Reads Without Sharding",
    excerpt:
      "A published engineering article on replacing a contended single Postgres instance with a three-node streaming-replication cluster, a Layer-4 proxy, and one very opinionated planner setting.",
    description: {
      intro:
        "This published article documents how a read-heavy analytical workload — roughly 3.5 million rows across 17 tables of basketball telemetry — was taken off a single contended PostgreSQL instance and moved onto a three-node streaming-replication cluster. The core observation is that the workload is overwhelmingly read-heavy and the reads tolerate slight staleness, which makes horizontal read scaling a better fit than sharding. The result is one primary handling writes, two hot standbys serving analytics, and a Layer-4 HAProxy split that makes read/write intent explicit in the application.",
      sections: [
        {
          heading: "The Problem",
          items: [
            "One Postgres instance was serving two incompatible workloads: nightly bulk ingestion and long analytical scans",
            "Analytical queries (full-season aggregates, 366,601 shot coordinates for a single player) held buffers and CPU while ingestion tried to write",
            "The root cause was concurrency contention, not data volume — 3.5M rows fit comfortably on one machine",
          ],
        },
        {
          heading: "Why Read Replicas Instead of Shards",
          items: [
            "Sharding solves a data-size problem; replicas solve a concurrency problem",
            "Avoids cross-shard joins, a schema-aware routing layer, and a rebalancing story",
            "Costs exactly one thing — a bounded amount of staleness — which the workload already tolerates",
            "Physical streaming replication: standbys replay page-level WAL changes rather than re-executing SQL",
          ],
        },
        {
          heading: "Replication Slots and Disk Safety",
          items: [
            "Replication slots bookmark consumed WAL so a disconnected standby can catch up instead of needing a rebuild",
            "wal_keep_size = 1GB sets a retention floor; max_slot_wal_keep_size = 2GB caps how much WAL a single slot can hold hostage",
            "Bounded retention turns a catastrophic primary disk-fill into a loud, local standby rebuild",
            "Standbys bootstrap with pg_basebackup (-R, -X stream, -S <slot>, -c fast) and only re-clone when PGDATA is absent",
          ],
        },
        {
          heading: "The Cost of Asynchronous Replication",
          items: [
            "synchronous_standby_names is deliberately unset, so the primary acknowledges commits before any standby sees them",
            "Trade-off 1: a primary failure can lose recently committed transactions — recoverable for nightly-ingested analytics, not for payments",
            "Trade-off 2: read-your-writes is not guaranteed, so consistency-critical reads go directly to the primary",
            "Measured replication lag: 0 bytes, with replay lag around 0.0006s under normal load",
            "hot_standby_feedback = on prevents vacuum from canceling long standby queries, at the cost of possible table bloat",
          ],
        },
        {
          heading: "Layer-4 Routing with HAProxy",
          items: [
            "HAProxy in mode tcp forwards raw bytes with no SQL parsing and well under a millisecond of overhead",
            "Explicit application intent beats proxy guesswork with CTEs that write, side-effecting procedures, and SELECT ... FOR UPDATE",
            "Write pool to :5437 (min 5 / max 25); read pool to :5438 (min 10 / max 50) fanning round-robin across two standbys",
            "30-minute client and server timeouts accommodate legitimate multi-minute aggregations",
            "TCP health checks evict dead backends in ~6 seconds, but cannot detect a standby stalled on WAL replay, and there is no automatic primary promotion",
          ],
        },
        {
          heading: "Making Each Node Faster",
          items: [
            "Identical tuning on all three nodes: shared_buffers 1GB, effective_cache_size 3GB, work_mem 16MB, maintenance_work_mem 128MB",
            "random_page_cost lowered from the 4.0 default to 1.1 to describe NVMe storage accurately and stop the planner bypassing composite indexes",
            "Seven CONCURRENTLY-built composite indexes matched to real query predicates",
            "Partial indexes with WHERE deleted_at IS NULL keep soft-deleted rows out of index blocks entirely",
            "CLUSTER on (game_id, player_id) collapses hundreds of scattered block reads into 20-30 contiguous pages; VACUUM (ANALYZE) follows to enable index-only scans",
          ],
        },
        {
          heading: "Observability and Measured Results",
          items: [
            "pg_stat_statements and pg_stat_io are per-node and do not replicate, so tooling must query the read pool and primary together",
            "Operational make targets: top-queries, cache-health, io-stats, table-bloat, reset-stats",
            "Edge-cache middleware in the Go API emits Immutable / SemiDynamic / Realtime / NoCache strategies and forces no-store on non-GET/HEAD",
            "300-request benchmark: 64ms average latency at 295 req/s with 100% success",
          ],
        },
      ],
      conclusion:
        "The article is as much about trade-offs as throughput. It delivers horizontal read scaling, read high availability, and predictable write performance, but deliberately accepts manual failover, eventual consistency, incomplete TCP health checks, and periodic CLUSTER maintenance. The full write-up is published on the Space City Dev Blog.",
    },
    role: "Author",
    date: "2026",
    url: "https://blog.space-city.dev/posts/2026/scaling-postgres-reads/",
    photo: { large: postgresReadsImage, small: postgresReadsImage },
  },
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
    id: 4,
    title: "NBA Analytics Dashboard",
    excerpt:
      "An end-to-end analytics platform with a Streamlit dashboard powered by dbt-modeled star schema data.",
    description: {
      intro:
        "The NBA Analytics Dashboard is a full analytics platform that combines a dbt-core data warehouse with an interactive Streamlit frontend. Data flows from the Go REST API through a medallion architecture pipeline (Bronze, Silver, Gold) into a star schema optimized for analytical queries, then surfaces through an interactive dashboard with sub-100ms query performance.",
      sections: [
        {
          heading: "Dashboard Features",
          items: [
            "Advanced player metrics and efficiency ratings",
            "Interactive shot charts with coordinate-level data",
            "Season-over-season player comparisons",
            "Team performance breakdowns and rankings",
            "Historical trend analysis across 70+ NBA seasons",
          ],
        },
        {
          heading: "Data Pipeline",
          items: [
            "dbt-core models with star schema (fact tables + dimensions)",
            "Medallion architecture: raw ingestion, cleaned, analytics-ready",
            "Continuous data refresh schedule from the Go API",
            "Incremental materialization for efficient processing",
            "Data quality tests and schema validation in dbt",
          ],
        },
        {
          heading: "Technical Stack",
          items: [
            "Frontend: Streamlit (Python)",
            "Modeling: dbt-core with Jinja templating",
            "Database: PostgreSQL with optimized indexes",
            "API Source: Go (Fiber) REST API",
            "Deployment: Streamlit Cloud with automated refresh",
          ],
        },
      ],
      conclusion:
        "This project demonstrates end-to-end analytics engineering: ingesting raw data, modeling it with industry-standard practices (Kimball, medallion), and delivering self-service analytics through an interactive dashboard.",
    },
    role: "Analytics Engineer",
    date: "2025",
    url: "https://dbtnba.streamlit.app/",
    photo: { large: nbaStreamlitImage, small: nbaStreamlitImage },
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

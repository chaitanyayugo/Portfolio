export type Project = {
  slug: string;
  name: string;
  stack: string[];
  summary: string;
  impact: string[];
  problem: string;
  role: string;
  architecture: string[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "low-stock",
    name: "Low-Stock Intelligence System",
    stack: ["Python", "Odoo XML-RPC", "SMTP"],
    summary:
      "A production inventory intelligence engine that pulls live Odoo data, generates HTML reports, and emails low-stock alerts daily.",
    impact: [
      "952-line production Python app",
      "681 products tracked",
      "84 sub-categories",
      "Daily alerts sent to up to 5 recipients"
    ],
    problem:
      "Leadership needed a dependable morning inventory brief without manually checking Odoo or spreadsheets.",
    role:
      "Built the full Python application, report generator, HTML rendering logic, and email delivery flow.",
    architecture: [
      "Odoo XML-RPC API fetch",
      "Category split and data enrichment",
      "HTML report generation with product images",
      "SMTP alert dispatch"
    ],
    outcome: [
      "Reduced manual inventory review",
      "Improved low-stock visibility",
      "Delivered leadership-ready reporting every morning"
    ]
  },
  {
    slug: "live-stock-dashboard",
    name: "Live Stock Dashboard",
    stack: ["Alpine.js", "Tailwind CSS", "GitHub Actions"],
    summary:
      "A real-time stock dashboard with tabbed views, master SKU search, and automated CI/CD sync for the store team.",
    impact: [
      "Used by 15 staff daily",
      "2,500 products visible",
      "10 category tabs",
      "Automated sync with GitHub Actions"
    ],
    problem:
      "Store teams needed a fast visual stock layer beyond the ERP interface.",
    role:
      "Designed and implemented the frontend, tab navigation, search flow, and automated data refresh pipeline.",
    architecture: [
      "Static UI layer in Alpine.js",
      "Tailwind-based visual system",
      "GitHub Actions data sync",
      "SKU search and category tabs"
    ],
    outcome: [
      "Centralized stock visibility",
      "Faster operational lookups",
      "Reduced dependency on repetitive manual checks"
    ]
  },
  {
    slug: "pdf-to-pptx",
    name: "PDF-to-PPTX Conversion Service",
    stack: ["FastAPI", "Redis", "Python"],
    summary:
      "An async file conversion service that replaced a paid third-party tool and handled large jobs with queue-based processing.",
    impact: [
      "Handles files up to 1 GB",
      "UUID job tracking",
      "Redis job queue",
      "Used 28 times across departments"
    ],
    problem:
      "Sales and design teams needed a reliable, internal file conversion workflow.",
    role:
      "Built the API, queue system, async processing, status tracking, and download delivery.",
    architecture: [
      "FastAPI request entry",
      "Redis-backed background jobs",
      "Async file conversion",
      "Job status and download endpoint"
    ],
    outcome: [
      "Removed paid-tool dependency",
      "Improved throughput for large files",
      "Made conversion accessible to non-technical teams"
    ]
  },
  {
    slug: "zifto-revenue-pipeline",
    name: "Zifto Revenue Pipeline",
    stack: ["Airtable", "Make", "Zoho", "Razorpay", "Interact", "Blue Dart"],
    summary:
      "A 15-automation closed-loop revenue and lead management system spanning orders, payments, delivery, and lead follow-up.",
    impact: [
      "9 Airtable tables",
      "6 external platforms",
      "~6,000 orders in one year",
      "Built solo in 1.5 months"
    ],
    problem:
      "The business needed one unified operational pipeline from lead capture through delivery closure.",
    role:
      "Architected the automations, data model, platform handoffs, and monitoring logic.",
    architecture: [
      "Lead capture and order merge logic",
      "Zoho order and webhook sync",
      "Razorpay payment reconciliation",
      "Blue Dart delivery updates",
      "Interact lead messaging",
      "Make workflow orchestration"
    ],
    outcome: [
      "Eliminated 4 hours of daily manual work",
      "Reduced operational handoffs",
      "Created real-time delivery and payment visibility"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

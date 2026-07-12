import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faCode,
  faPlug,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Developers | FragmentTrails - API Documentation & Integration";
const description =
  "Access FragmentTrails API documentation, integration guides, and developer resources for connecting with student information systems and educational platforms.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails api",
    "integration documentation",
    "developer resources",
    "student information system integration",
    "api reference",
    "webhook documentation",
    "authentication guide",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/developers/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/developers/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "FragmentTrails Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | FragmentTrails`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function DevelopersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Developers", path: "/developers/" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 sm:text-base">
            Developers
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            API Documentation & Integration
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Build powerful integrations with FragmentTrails using our comprehensive API documentation, integration guides, and developer resources. Connect with student information systems, CRM platforms, and custom applications.
          </p>
        </div>
      </section>

      {/* API Overview */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">API Overview</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faCode} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                RESTful API
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Comprehensive REST API for managing evaluations, candidates, committees, and analytics. Standard JSON responses with consistent error handling and pagination.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faPlug} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Webhooks
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Real-time event notifications through webhooks for evaluation updates, candidate submissions, and committee decisions. Configure endpoints for automated workflows.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                OAuth 2.0
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Secure authentication using OAuth 2.0 with support for client credentials and authorization grants. Token management and refresh capabilities for enterprise integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Key API Endpoints</h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <code className="text-sm font-mono text-blue-600">GET /api/v1/evaluations</code>
              <p className="mt-2 text-sm text-slate-600">Retrieve all evaluations with filtering and pagination options</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <code className="text-sm font-mono text-green-600">POST /api/v1/candidates</code>
              <p className="mt-2 text-sm text-slate-600">Create new candidate records and initiate evaluation processes</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <code className="text-sm font-mono text-blue-600">GET /api/v1/committees/:id/members</code>
              <p className="mt-2 text-sm text-slate-600">Access committee member information and assignment details</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <code className="text-sm font-mono text-amber-600">PUT /api/v1/evaluations/:id/scores</code>
              <p className="mt-2 text-sm text-slate-600">Submit evaluation scores and feedback for candidate assessments</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <code className="text-sm font-mono text-blue-600">GET /api/v1/analytics/reports</code>
              <p className="mt-2 text-sm text-slate-600">Generate comprehensive analytics reports and performance metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Guides */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Integration Guides</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Student Information System Integration</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Comprehensive guide for integrating FragmentTrails with popular student information systems including Canvas, Blackboard, and custom SIS platforms. Covers data synchronization, single sign-on configuration, and automated candidate import processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">CRM Platform Integration</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Documentation for connecting FragmentTrails with CRM systems like Salesforce, HubSpot, and custom donor management platforms. Includes workflow automation, contact synchronization, and reporting integration patterns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Custom Application Development</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Resources for developers building custom applications on top of FragmentTrails API. Includes SDK documentation, sample applications, and best practices for secure integration and error handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Authentication & Security</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">OAuth 2.0 Implementation</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                FragmentTrails uses OAuth 2.0 for secure API authentication. Developers can register applications, obtain client credentials, and implement authorization flows following standard OAuth 2.0 patterns. Token refresh and revocation are fully supported.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">API Key Management</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                For simpler integrations, API keys provide an alternative authentication method. Keys can be generated, rotated, and revoked through the developer portal. Rate limiting and usage monitoring help ensure secure and efficient API usage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Data Encryption</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                All API communications are encrypted using TLS 1.3. Sensitive data is encrypted at rest using industry-standard encryption algorithms. Our security practices comply with educational privacy regulations including FERPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">SDKs & Libraries</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Python SDK</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Official Python SDK for FragmentTrails API integration. Includes comprehensive documentation, examples, and support for async operations.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  pip install fragmenttrails
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">JavaScript SDK</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                JavaScript/TypeScript SDK for browser and Node.js environments. Full TypeScript definitions and React hooks included.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                  npm install @fragmenttrails/sdk
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">REST Client</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Generic REST client for any programming language. OpenAPI specification available for generating custom clients.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  OpenAPI Spec
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Ready to Integrate?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Access our full API documentation and start building your integration today. Contact our developer team for enterprise integration support.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Developers
            </Link>
            <Link
              href="/resources/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

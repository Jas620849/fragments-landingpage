import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faShieldAlt,
  faLock,
  faCertificate,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Security | FragmentTrails - Data Protection & Compliance";
const description =
  "Learn about FragmentTrails security measures, data protection practices, and compliance with FERPA and other educational privacy regulations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails security",
    "data protection",
    "ferpa compliance",
    "educational privacy",
    "data encryption",
    "security practices",
    "compliance documentation",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/security/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/security/") : undefined,
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

export default function SecurityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Security", path: "/security/" },
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
            Security
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Data Protection & Compliance
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Enterprise-grade security measures and compliance with educational privacy regulations. Learn how FragmentTrails protects student and candidate data while enabling fair, defensible assessments.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Security Framework</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
            <div className="text-center">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-base font-semibold text-secondary">
                Data Encryption
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                TLS 1.3 for transit, AES-256 for at rest
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faLock} className="h-10 w-10 text-teal-600 mx-auto" />
              <h3 className="mt-4 text-base font-semibold text-secondary">
                Access Control
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Role-based permissions and MFA
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faCertificate} className="h-10 w-10 text-amber-600 mx-auto" />
              <h3 className="mt-4 text-base font-semibold text-secondary">
                Compliance
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                FERPA and privacy regulation compliant
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faFileContract} className="h-10 w-10 text-purple-600 mx-auto" />
              <h3 className="mt-4 text-base font-semibold text-secondary">
                Audit Trails
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Complete logging and monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Data Protection Measures</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Encryption Standards</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                FragmentTrails employs industry-standard encryption to protect data in transit and at rest. All API communications use TLS 1.3 with perfect forward secrecy. Data stored in our databases is encrypted using AES-256 encryption algorithms. Encryption keys are managed through a secure key management system with regular rotation policies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Access Controls</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Role-based access control ensures users only access data necessary for their roles. Multi-factor authentication is required for administrative access. Access requests are logged and reviewed regularly. Principle of least privilege is enforced across all systems and applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Data Retention</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Data retention policies align with institutional requirements and legal obligations. Institutions can configure retention periods for different data types. Automated deletion processes remove data according to configured policies. Data export capabilities support institutional data management requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Backup and Recovery</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Automated daily backups with point-in-time recovery capabilities. Backups are encrypted and stored in geographically distributed locations. Recovery time objectives and recovery point objectives are defined and tested regularly. Disaster recovery procedures ensure business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Compliance Framework</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">FERPA Compliance</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                FragmentTrails is designed to comply with the Family Educational Rights and Privacy Act (FERPA). Our platform includes features for directory information management, consent tracking, and parental access controls. Data minimization practices limit collection to educationally relevant information. Regular compliance reviews ensure ongoing adherence to FERPA requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">GDPR Considerations</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                For institutions serving international students, FragmentTrails incorporates GDPR-compliant practices including data subject rights, cross-border data transfer mechanisms, and privacy by design principles. Data processing agreements clarify responsibilities between FragmentTrails and institutional data controllers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Security Certifications</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Our infrastructure maintains SOC 2 Type II compliance through regular third-party audits. Security practices align with NIST cybersecurity framework standards. Penetration testing and vulnerability assessments are conducted annually by independent security firms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Institutional Compliance Support</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                FragmentTrails provides documentation and support for institutional compliance processes. This includes security assessment questionnaires, audit trail exports, and compliance documentation. Our team works with institutional legal and compliance offices to address specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Incident Response</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Monitoring and Detection</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                24/7 security monitoring detects potential threats and anomalies. Automated alerting notifies security teams of suspicious activities. Security information and event management (SIEM) systems correlate events across our infrastructure. Regular vulnerability scanning identifies potential security issues proactively.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Response Procedures</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Documented incident response procedures outline roles, responsibilities, and escalation paths. Security incidents are classified according to severity and impact. Response timelines meet industry best practices. Post-incident reviews identify improvement opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Breach Notification</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                In the event of a data breach, FragmentTrails follows legal and contractual notification requirements. Affected institutions are notified promptly with relevant information about the incident and recommended actions. Coordination with institutional security teams ensures comprehensive response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Security Questions?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Our security team is available to answer questions about our security practices, compliance measures, and data protection policies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Security Team
            </Link>
            <Link
              href="/resources/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Security Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

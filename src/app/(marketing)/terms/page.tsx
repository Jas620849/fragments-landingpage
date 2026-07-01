import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terms of Service | FragmentTrails",
  description: "Read FragmentTrails Terms of Service to understand your rights and responsibilities when using our platform for scholarly discussions and educational content.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "platform rules",
    "user responsibilities",
    "acceptable use policy",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/terms/") }
    : undefined,
};

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Legal</p>
          <h1 className="frag-hero-h1 mt-1.5">Terms of Service</h1>
          <p className="frag-hero-lead max-w-2xl">
            Last updated: January 1, 2026. By using FragmentTrails, you agree to these terms governing your use of our structured discussion platform for educational assessments and scholarship interviews.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using FragmentTrails, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              FragmentTrails is a discussion-based learning platform that enables educators, institutions, and learners to engage in structured scholarly discourse through fragment trails. Our services include:
            </p>
            <ul>
              <li>Creating and participating in structured discussions</li>
              <li>Educational content sharing and collaboration</li>
              <li>AI-powered content moderation and quality control</li>
              <li>Scholarship interview and evaluation tools</li>
              <li>Candidate assessment and scoring systems</li>
            </ul>

            <h2>3. User Accounts</h2>
            <h3>3.1 Account Registration</h3>
            <p>To use certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
            
            <h3>3.2 Account Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
            
            <h3>3.3 Account Termination</h3>
            <p>We reserve the right to suspend or terminate your account at any time for any reason, including but not limited to violation of these terms.</p>

            <h2>4. Acceptable Use Policy</h2>
            <h3>4.1 Permitted Uses</h3>
            <p>You may use FragmentTrails for legitimate educational and scholarly purposes, including:</p>
            <ul>
              <li>Creating and sharing educational content</li>
              <li>Participating in scholarly discussions</li>
              <li>Using our evaluation tools for fair assessment</li>
              <li>Collaborating with other users for learning purposes</li>
            </ul>

            <h3>4.2 Prohibited Uses</h3>
            <p>You agree not to use our service to:</p>
            <ul>
              <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Post or transmit any content that infringes upon the intellectual property rights of any third party</li>
              <li>Use our service for any commercial purpose without our express written consent</li>
              <li>Interfere with or disrupt our service or servers connected to our service</li>
              <li>Attempt to gain unauthorized access to any portion of our service</li>
              <li>Use our service to collect or store personal data about other users without their consent</li>
            </ul>

            <h2>5. Content and Intellectual Property</h2>
            <h3>5.1 User Content</h3>
            <p>You retain ownership of any content you post on FragmentTrails. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, display, and distribute such content in connection with our service.</p>
            
            <h3>5.2 Intellectual Property Rights</h3>
            <p>FragmentTrails and its original content, features, and functionality are and will remain the exclusive property of FragmentTrails and its licensors. Our service is protected by copyright, trademark, and other laws.</p>

            <h2>6. Privacy Policy</h2>
            <p>Your use of our service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs our service and informs users of our data collection practices.</p>

            <h2>7. Paid Services</h2>
            <h3>7.1 Subscription Plans</h3>
            <p>FragmentTrails offers various subscription plans with different features and pricing. By subscribing to a paid plan, you agree to pay the applicable fees in accordance with the billing terms in effect at the time of your subscription.</p>
            
            <h3>7.2 Refund Policy</h3>
            <p>We offer a 30-day money-back guarantee on all subscription plans. To request a refund, contact our support team within 30 days of your initial subscription date.</p>

            <h2>8. Disclaimers and Limitations of Liability</h2>
            <h3>8.1 Disclaimer</h3>
            <p>Our service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no representations or warranties of any kind, express or implied, regarding the operation of our service or the information, content, materials, or products included on our service.</p>
            
            <h3>8.2 Limitation of Liability</h3>
            <p>In no event shall FragmentTrails, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

            <h2>9. Indemnification</h2>
            <p>You agree to indemnify and hold harmless FragmentTrails and its affiliates, officers, directors, employees, agents, and partners from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of your use of our service or violation of these terms.</p>

            <h2>10. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the federal or state courts located in San Francisco, California.</p>

            <h2>11. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and sending email notifications to registered users. Your continued use of our service after such modifications constitutes your acceptance of the new terms.</p>

            <h2>12. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <ul>
              <li>Email: support@fragmenttrails.com</li>
              <li>Address: 123 Education Lane, Suite 400, San Francisco, CA 94102, United States</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>

            <h2>13. Educational Use Compliance</h2>
            <p>Users utilizing FragmentTrails for educational institutions, scholarship programs, or assessment purposes agree to comply with all applicable educational regulations, including FERPA (Family Educational Rights and Privacy Act) in the United States and equivalent data protection laws in other jurisdictions. Institutions are responsible for obtaining necessary consents and maintaining compliance with their own institutional policies.</p>

            <h2>14. Service Level Agreement</h2>
            <p>For institutional subscribers, we commit to maintaining 99.5% service availability, excluding scheduled maintenance windows. In the event of significant service disruptions affecting evaluation processes, we will provide affected institutions with documentation suitable for administrative review and extension of subscription terms as appropriate.</p>
          </div>
        </div>
      </section>
    </>
  );
}

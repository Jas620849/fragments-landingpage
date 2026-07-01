import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | FragmentTrails",
  description: "Learn how FragmentTrails protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and security practices.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "data security",
    "GDPR compliance",
    "CCPA compliance",
    "student data privacy",
    "educational data protection",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/privacy/") }
    : undefined,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Legal</p>
          <h1 className="frag-hero-h1 mt-1.5">Privacy Policy</h1>
          <p className="frag-hero-lead max-w-2xl">
            Last updated: January 1, 2026. FragmentTrails is committed to protecting your privacy and ensuring the security of your personal information in compliance with GDPR, CCPA, and other applicable data protection regulations.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2>1. Introduction</h2>
            <p>
              FragmentTrails (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. Data We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect, use, store and transfer different kinds of personal data about you, which we group together as follows:</p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Profile Data:</strong> includes your username, profile picture, bio, and preferences.</li>
              <li><strong>Technical Data:</strong> includes IP address, browser type, browser version, device type, operating system, and referring website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>

            <h3>2.2 Data Collection Methods</h3>
            <p>We collect data about you in the following ways:</p>
            <ul>
              <li><strong>Data provided by you:</strong> We collect data you provide directly to us when you create an account, participate in discussions, or contact us.</li>
              <li><strong>Automatic data collection:</strong> We automatically collect certain data when you visit our website using cookies and similar technologies.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To provide and maintain our services to you</li>
              <li>To facilitate your participation in scholarly discussions and fragment trails</li>
              <li>To send you technical notices, updates, security alerts, and support messages</li>
              <li>To respond to your comments, questions, and customer service requests</li>
              <li>To monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>To detect, prevent, and address technical issues and fraud</li>
              <li>To comply with our legal obligations and protect our rights</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal data we process. However, please note that the transmission of information via the internet is not completely secure. While we strive to protect your personal data, we cannot guarantee the security of your data transmitted to our services.</p>

            <h2>5. Data Retention</h2>
            <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your personal data, and the applicable legal requirements.</p>

            <h2>6. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li><strong>Request access</strong> to your personal data</li>
              <li><strong>Request correction</strong> of your personal data</li>
              <li><strong>Request erasure</strong> of your personal data</li>
              <li><strong>Object to processing</strong> of your personal data</li>
              <li><strong>Request restriction</strong> of processing your personal data</li>
              <li><strong>Data portability</strong> of your personal data</li>
              <li><strong>Withdraw consent</strong> at any time where we rely on consent</li>
            </ul>

            <h2>7. Third-Party Services</h2>
            <p>We may employ third-party companies and services to facilitate our services, to provide the services on our behalf, to perform services-related services, or to assist us in analyzing how our services are used. These third parties have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>Our services are not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.</p>

            <h2>9. International Data Transfers</h2>
            <p>We may transfer the personal data we collect about you to countries other than the country in which the data was originally collected. These transfers are necessary to provide our services globally. When we transfer your data, we ensure similar protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
            <ul>
              <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission; or</li>
              <li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe; or</li>
              <li>Where we use processors based in the US, we may transfer data to them if they are part of the Privacy Shield which requires them to provide similar protection to personal data shared between Europe and the US.</li>
            </ul>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.</p>

            <h2>11. Contact Us</h2>
            <p>If you have any questions about this privacy policy, our data practices, or your rights under data protection laws, please contact us at:</p>
            <ul>
              <li>Email: support@fragmenttrails.com</li>
              <li>Address: 123 Education Lane, Suite 400, San Francisco, CA 94102, United States</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>

            <h2>12. California Consumer Privacy Act (CCPA)</h2>
            <p>If you are a resident of California, you have specific rights regarding your personal information under the CCPA:</p>
            <ul>
              <li><strong>Right to know:</strong> You may request details about the categories of personal information we have collected about you.</li>
              <li><strong>Right to delete:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
              <li><strong>Right to opt-out:</strong> You may request that we not sell your personal information. FragmentTrails does not sell personal information.</li>
              <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
            </ul>

            <h2>13. General Data Protection Regulation (GDPR)</h2>
            <p>For users in the European Union, we comply with GDPR requirements. Your rights under GDPR include:</p>
            <ul>
              <li><strong>Lawful basis for processing:</strong> We process your data based on consent, contract performance, legitimate interests, or legal obligations.</li>
              <li><strong>Data protection officer:</strong> You may contact our data protection officer for privacy-related inquiries.</li>
              <li><strong>Cross-border data transfers:</strong> We ensure appropriate safeguards when transferring data outside the EEA.</li>
              <li><strong>Breach notification:</strong> We will notify you within 72 hours if we become aware of a data breach affecting your personal information.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

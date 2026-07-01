import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Cookie Policy | FragmentTrails",
  description: "Learn about how FragmentTrails uses cookies and similar technologies to enhance your experience, analyze usage, and comply with privacy regulations including GDPR and CCPA.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking technologies",
    "GDPR cookie consent",
    "CCPA cookie policy",
    "privacy",
    "data collection",
    "browser cookies",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/cookies/") }
    : undefined,
};

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookies/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Legal</p>
          <h1 className="frag-hero-h1 mt-1.5">Cookie Policy</h1>
          <p className="frag-hero-lead max-w-2xl">
            Last updated: January 1, 2026. This Cookie Policy explains how FragmentTrails uses cookies and similar technologies to enhance your experience while respecting your privacy preferences.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by enabling the website to remember your actions and preferences over time. Similar technologies include web beacons, pixels, and local storage, which serve similar purposes.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>FragmentTrails uses cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, including maintaining your session and enabling secure access to your account.</li>
              <li><strong>Performance Cookies:</strong> Collect information about how visitors use our website, such as which pages are visited most frequently, to help us improve site performance and user experience.</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings, such as language selection or display options, to provide a more personalized experience.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant advertisements and measure the effectiveness of ad campaigns. These cookies may be set by third-party advertising services.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our website by collecting anonymous usage data for analysis and reporting.</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <h3>3.1 Session Cookies</h3>
            <p>These cookies are temporary and expire when you close your browser. They are essential for maintaining your session while you navigate the website.</p>

            <h3>3.2 Persistent Cookies</h3>
            <p>These cookies remain on your device for a specified period or until you delete them. They help us remember your preferences for future visits.</p>

            <h3>3.3 First-Party Cookies</h3>
            <p>Cookies set directly by FragmentTrails to provide core functionality and improve your experience on our website.</p>

            <h3>3.4 Third-Party Cookies</h3>
            <p>Cookies set by third-party services we use, such as analytics providers, advertising networks, and social media platforms. These third parties may collect information about your online activities across different websites.</p>

            <h2>4. Third-Party Services</h2>
            <p>We may use the following third-party services that may set cookies on your device:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
              <li><strong>Cloudflare:</strong> For website security and performance optimization</li>
              <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
            </ul>

            <h2>5. Managing Your Cookie Preferences</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.</p>

            <h3>5.1 Browser Settings</h3>
            <p>Most web browsers allow you to control cookies through their settings. You can typically find these options in the browser&apos;s privacy or security settings. Common browsers provide instructions on their websites for managing cookies.</p>

            <h3>5.2 Cookie Consent Banner</h3>
            <p>When you first visit our website, you will see a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time by accessing the cookie settings link in the footer of our website.</p>

            <h2>6. GDPR and Cookie Consent</h2>
            <p>For users in the European Union, we comply with GDPR requirements regarding cookie consent:</p>
            <ul>
              <li>We obtain your consent before setting non-essential cookies</li>
              <li>We provide clear information about the purpose of each cookie</li>
              <li>We offer the ability to withdraw consent at any time</li>
              <li>We maintain records of your consent preferences</li>
            </ul>

            <h2>7. CCPA and Do Not Sell</h2>
            <p>For residents of California, we respect your right to opt-out of the sale of your personal information. FragmentTrails does not sell personal information to third parties. However, third-party advertising services may use cookies for interest-based advertising. You can opt-out of interest-based advertising through the Digital Advertising Alliance&apos;s opt-out portal.</p>

            <h2>8. Cookie Lifespan</h2>
            <p>The duration for which cookies remain on your device varies depending on the type of cookie:</p>
            <ul>
              <li><strong>Session cookies:</strong> Expire when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Typically expire after 30 days to 2 years, depending on their purpose</li>
              <li><strong>Authentication cookies:</strong> Expire after 7 days of inactivity for security purposes</li>
            </ul>

            <h2>9. Security of Cookies</h2>
            <p>We implement appropriate security measures to protect cookies from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is completely secure. We recommend that you keep your browser and security software up to date to protect your device.</p>

            <h2>10. Updates to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in our use of cookies or applicable laws. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.</p>

            <h2>11. Contact Us</h2>
            <p>If you have any questions about this Cookie Policy or our use of cookies, please contact us at:</p>
            <ul>
              <li>Email: support@fragmenttrails.com</li>
              <li>Address: 123 Education Lane, Suite 400, San Francisco, CA 94102, United States</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

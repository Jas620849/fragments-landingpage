import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Cookie Policy | FragmentTrails",
  description: "Learn about how FragmentTrails uses cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking cookies",
    "GDPR cookies",
    "cookie consent",
    "browser cookies",
    "data collection",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/cookie-policy/") }
    : undefined,
};

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookie-policy/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Legal</p>
          <h1 className="frag-hero-h1 mt-1.5">Cookie Policy</h1>
          <p className="frag-hero-lead max-w-2xl">
            Last updated: January 1, 2026. This policy explains how FragmentTrails uses cookies and similar technologies.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies allow us to recognize you when you return to our website and remember your preferences.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and authentication.</li>
              <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting information about pages visited, time spent on pages, and error messages.</li>
              <li><strong>Functionality Cookies:</strong> These cookies remember your preferences and choices to provide enhanced features, such as remembering your login details or language preferences.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> These cookies track your browsing habits to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <h3>3.1 Session Cookies</h3>
            <p>Session cookies are temporary cookies that expire when you close your browser. They are used to maintain your session and track your activity during a single visit.</p>
            
            <h3>3.2 Persistent Cookies</h3>
            <p>Persistent cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and settings for future visits.</p>
            
            <h3>3.3 First-Party Cookies</h3>
            <p>First-party cookies are set by our website directly. They are used to improve your experience and provide essential functionality.</p>
            
            <h3>3.4 Third-Party Cookies</h3>
            <p>Third-party cookies are set by external services we use on our website, such as analytics tools, advertising networks, and social media platforms.</p>

            <h2>4. Specific Cookies We Use</h2>
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_session</td>
                  <td>Session</td>
                  <td>Maintains user session</td>
                  <td>Until browser close</td>
                </tr>
                <tr>
                  <td>_preferences</td>
                  <td>Persistent</td>
                  <td>Stores user preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>_analytics</td>
                  <td>Persistent</td>
                  <td>Tracks website usage</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_marketing</td>
                  <td>Persistent</td>
                  <td>Tracks marketing campaigns</td>
                  <td>90 days</td>
                </tr>
              </tbody>
            </table>

            <h2>5. Managing Cookies</h2>
            <p>You have several options to manage cookies:</p>
            <ul>
              <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can block all cookies, accept only first-party cookies, or delete existing cookies.</li>
              <li><strong>Cookie Consent Banner:</strong> Our website displays a cookie consent banner that allows you to accept or reject non-essential cookies.</li>
              <li><strong>Opt-Out Links:</strong> Some third-party services provide opt-out links that allow you to decline their cookies.</li>
            </ul>

            <h2>6. Browser-Specific Instructions</h2>
            <h3>6.1 Google Chrome</h3>
            <p>Go to Settings &gt; Privacy and security &gt; Cookies and other site data. You can choose to block all cookies, block third-party cookies, or clear cookies.</p>
            
            <h3>6.2 Mozilla Firefox</h3>
            <p>Go to Options &gt; Privacy & Security &gt; Cookies and Site Data. You can block cookies, clear cookies, or manage exceptions.</p>
            
            <h3>6.3 Safari</h3>
            <p>Go to Preferences &gt; Privacy. You can choose to block all cookies, block third-party cookies, or manage website data.</p>
            
            <h3>6.4 Microsoft Edge</h3>
            <p>Go to Settings &gt; Cookies and site permissions. You can block cookies, clear cookies, or manage exceptions.</p>

            <h2>7. Impact of Disabling Cookies</h2>
            <p>If you disable cookies, some features of our website may not function properly. You may experience:</p>
            <ul>
              <li>Inability to log in or maintain your session</li>
              <li>Loss of personalized preferences and settings</li>
              <li>Reduced website performance and functionality</li>
              <li>Inability to use certain interactive features</li>
            </ul>

            <h2>8. Third-Party Services</h2>
            <p>We use the following third-party services that may set cookies:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and user behavior tracking</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and authentication</li>
            </ul>
            <p>Each third-party service has its own privacy policy and cookie policy. We encourage you to review these policies to understand how they use your data.</p>

            <h2>9. Updates to This Policy</h2>
            <p>We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this cookie policy or our use of cookies, please contact us at:</p>
            <ul>
              <li>Email: support@fragmenttrails.com</li>
              <li>Address: [Your Business Address]</li>
              <li>Phone: [Your Phone Number]</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

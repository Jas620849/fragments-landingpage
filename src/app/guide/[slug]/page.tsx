import { Metadata } from "next";
import { generateProgrammaticMetadata } from "@/lib/metadata-generator";
import { canonicalUrl } from "@/lib/site";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import ArticleSchema from "@/app/components/ArticleSchema";
import FAQPageSchema from "@/app/components/FAQPageSchema";

interface GuidePageProps {
  params: {
    slug: string;
  };
}

// Parse the slug to extract type and subject
const parseSlug = (slug: string) => {
  const types = ["what-is", "how-does", "difference-between", "advantages-of", "history-of"];
  for (const type of types) {
    if (slug.startsWith(`${type}-`)) {
      const subject = slug.slice(type.length + 1).replace(/-/g, " ");
      return { type: type as any, subject };
    }
  }
  return null;
};

// Generate content based on type and subject
const generateGuideContent = (type: string, subject: string) => {
  const titleMap: Record<string, string> = {
    "what-is": "What Is",
    "how-does": "How Does",
    "difference-between": "Difference Between",
    "advantages-of": "Advantages Of",
    "history-of": "History Of",
  };

  const title = `${titleMap[type]} ${subject}`;
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

  const contentTemplates: Record<string, string> = {
    "what-is": `
      <h1>What Is ${capitalizedSubject}?</h1>
      <p>${capitalizedSubject} is a fundamental concept that plays a crucial role in its respective field. Understanding ${subject} is essential for anyone looking to deepen their knowledge in this area.</p>
      
      <h2>Definition and Overview</h2>
      <p>${capitalizedSubject} can be defined as the study, practice, or application of principles related to ${subject}. It encompasses various aspects that contribute to our understanding and utilization of this concept.</p>
      
      <h2>Key Components</h2>
      <ul>
        <li><strong>Core Principles:</strong> The fundamental rules and concepts that govern ${subject}</li>
        <li><strong>Applications:</strong> How ${subject} is applied in real-world scenarios</li>
        <li><strong>Benefits:</strong> The advantages of understanding and using ${subject}</li>
        <li><strong>Challenges:</strong> Common difficulties and how to overcome them</li>
      </ul>
      
      <h2>Why It Matters</h2>
      <p>Understanding ${subject} is important because it provides a foundation for more advanced concepts and practical applications. Whether you're a student, professional, or enthusiast, knowledge of ${subject} can enhance your capabilities and open new opportunities.</p>
      
      <h2>Getting Started</h2>
      <p>To begin learning about ${subject}, start with the basics and gradually build up your understanding. Practice and application are key to mastering this concept.</p>
    `,
    "how-does": `
      <h1>How Does ${capitalizedSubject} Work?</h1>
      <p>Understanding the mechanics of ${subject} is essential for practical application and deeper knowledge. This guide breaks down the working principles step by step.</p>
      
      <h2>Basic Mechanism</h2>
      <p>At its core, ${subject} operates through a series of processes and interactions. These can be broken down into fundamental components that work together to achieve the desired outcome.</p>
      
      <h2>Step-by-Step Process</h2>
      <ol>
        <li><strong>Initialization:</strong> The process begins with setting up the necessary conditions for ${subject}</li>
        <li><strong>Execution:</strong> The main operations of ${subject} are carried out according to established principles</li>
        <li><strong>Processing:</strong> Data or inputs are transformed through the mechanism of ${subject}</li>
        <li><strong>Output:</strong> The final result or outcome is produced based on the processing</li>
      </ol>
      
      <h2>Key Factors</h2>
      <p>Several factors influence how ${subject} works:</p>
      <ul>
        <li>Environmental conditions</li>
        <li>Input parameters and variables</li>
        <li>System constraints and limitations</li>
        <li>External influences</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>Understanding how ${subject} work enables you to apply this knowledge in various contexts, from academic research to practical problem-solving.</p>
    `,
    "difference-between": `
      <h1>Difference Between ${capitalizedSubject}</h1>
      <p>Understanding the distinctions between related concepts is crucial for accurate knowledge and application. This guide explores the key differences.</p>
      
      <h2>Overview</h2>
      <p>While these concepts may seem similar, they have distinct characteristics, applications, and implications. Recognizing these differences helps in choosing the right approach for specific situations.</p>
      
      <h2>Key Differences</h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Concept A</th>
            <th>Concept B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Definition</strong></td>
            <td>Primary definition of the first aspect</td>
            <td>Primary definition of the second aspect</td>
          </tr>
          <tr>
            <td><strong>Application</strong></td>
            <td>How the first aspect is typically used</td>
            <td>How the second aspect is typically used</td>
          </tr>
          <tr>
            <td><strong>Benefits</strong></td>
            <td>Advantages of the first aspect</td>
            <td>Advantages of the second aspect</td>
          </tr>
        </tbody>
      </table>
      
      <h2>When to Use Each</h2>
      <p>Choosing between these concepts depends on specific requirements, constraints, and desired outcomes. Consider the context and objectives when making your decision.</p>
      
      <h2>Common Misconceptions</h2>
      <p>Many people confuse these concepts or use them interchangeably. This guide clarifies the distinctions to ensure accurate understanding and application.</p>
    `,
    "advantages-of": `
      <h1>Advantages Of ${capitalizedSubject}</h1>
      <p>${capitalizedSubject} offers numerous benefits that make it valuable in various contexts. Understanding these advantages helps in making informed decisions about its adoption and use.</p>
      
      <h2>Primary Benefits</h2>
      <ul>
        <li><strong>Efficiency:</strong> ${capitalizedSubject} streamlines processes and improves productivity</li>
        <li><strong>Cost-Effectiveness:</strong> Reduces expenses while maintaining or improving quality</li>
        <li><strong>Scalability:</strong> Can be adapted to different scales and requirements</li>
        <li><strong>Reliability:</strong> Provides consistent and dependable results</li>
      </ul>
      
      <h2>Strategic Advantages</h2>
      <p>Beyond immediate benefits, ${subject} offers strategic advantages:</p>
      <ul>
        <li>Competitive edge in the market</li>
        <li>Long-term sustainability</li>
        <li>Enhanced capabilities and opportunities</li>
        <li>Future-proofing against changes</li>
      </ul>
      
      <h2>Quantifiable Benefits</h2>
      <p>Studies and research have demonstrated measurable advantages of implementing ${subject}:</p>
      <ul>
        <li>Improved performance metrics</li>
        <li>Higher satisfaction rates</li>
        <li>Better resource utilization</li>
        <li>Reduced error rates</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>To maximize the advantages of ${subject}, proper implementation and integration are essential. Consider your specific context and requirements.</p>
    `,
    "history-of": `
      <h1>History Of ${capitalizedSubject}</h1>
      <p>Exploring the history of ${subject} provides valuable insights into its development, evolution, and significance. This journey through time reveals the milestones and contributors who shaped this field.</p>
      
      <h2>Origins</h2>
      <p>The concept of ${subject} has roots that trace back to early civilizations and foundational discoveries. Initial observations and theories laid the groundwork for what would become a comprehensive field of study.</p>
      
      <h2>Key Milestones</h2>
      <ul>
        <li><strong>Early Discoveries:</strong> Initial breakthroughs that established the foundation</li>
        <li><strong>Theoretical Developments:</strong> Formation of core theories and principles</li>
        <li><strong>Practical Applications:</strong> Transition from theory to real-world use</li>
        <li><strong>Modern Advances:</strong> Recent innovations and current state</li>
      </ul>
      
      <h2>Influential Figures</h2>
      <p>Throughout history, numerous individuals have contributed significantly to the development of ${subject}. Their work and discoveries have advanced our understanding and capabilities.</p>
      
      <h2>Evolution Over Time</h2>
      <p>${capitalizedSubject} has evolved significantly from its early beginnings to its current state. This evolution reflects changes in technology, knowledge, and societal needs.</p>
      
      <h2>Historical Significance</h2>
      <p>Understanding the history of ${subject} provides context for its current importance and helps predict future developments. It also reveals patterns and lessons that can inform current practices.</p>
    `,
  };

  return {
    title,
    content: contentTemplates[type] || contentTemplates["what-is"],
  };
};

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  
  if (!parsed) {
    return {
      title: "Guide Not Found | Fragment Trails",
    };
  }

  return generateProgrammaticMetadata({
    type: parsed.type,
    subject: parsed.subject,
  });
}

export default function GuidePage({ params }: GuidePageProps) {
  const parsed = parseSlug(params.slug);

  if (!parsed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-gray-600">The guide you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const { title, content } = generateGuideContent(parsed.type, parsed.subject);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: title, path: `/guide/${params.slug}` },
  ];

  const faqs = [
    {
      question: `What is the main purpose of ${parsed.subject}?`,
      answer: `The main purpose of ${parsed.subject} is to provide a framework for understanding and applying related concepts in various contexts.`,
    },
    {
      question: `How can I learn more about ${parsed.subject}?`,
      answer: `You can learn more about ${parsed.subject} through academic resources, online courses, practical application, and engaging with the Fragment Trails community.`,
    },
    {
      question: `What are the practical applications of ${parsed.subject}?`,
      answer: `${parsed.subject} has numerous practical applications across various fields, from research and education to industry and everyday problem-solving.`,
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        title={title}
        description={`Comprehensive guide about ${title}. Learn the fundamentals, applications, and importance of ${parsed.subject}.`}
        publishedDate={new Date().toISOString()}
        slug={params.slug}
      />
      <FAQPageSchema
        pageUrl={`/guide/${params.slug}`}
        pageName={title}
        faqs={faqs}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/guides" className="hover:text-blue-600">Guides</a>
          <span>/</span>
          <span className="text-gray-900">{title}</span>
        </nav>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={`/guide/what-is-${parsed.subject.replace(/\s+/g, "-")}`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold">What Is {parsed.subject}</h3>
            </a>
            <a href={`/guide/how-does-${parsed.subject.replace(/\s+/g, "-")}`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold">How Does {parsed.subject} Work</h3>
            </a>
            <a href={`/guide/advantages-of-${parsed.subject.replace(/\s+/g, "-")}`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold">Advantages Of {parsed.subject}</h3>
            </a>
            <a href={`/guide/history-of-${parsed.subject.replace(/\s+/g, "-")}`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold">History Of {parsed.subject}</h3>
            </a>
          </div>
        </section>

        {/* Join Discussion CTA */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Discuss ${parsed.subject}</h2>
          <p className="text-lg mb-6">
            Join our community to discuss ${parsed.subject}, ask questions, and share your knowledge
          </p>
          <a
            href={`/topic/${parsed.subject.replace(/\s+/g, "-")}`}
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Discussion
          </a>
        </section>
      </div>
    </div>
  );
}

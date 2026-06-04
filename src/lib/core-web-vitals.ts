/**
 * Core Web Vitals Optimization Configuration
 * 
 * Targets:
 * - LCP (Largest Contentful Paint) < 2.5s
 * - CLS (Cumulative Layout Shift) < 0.1
 * - INP (Interaction to Next Paint) < 200ms
 */

export const CORE_WEB_VITALS_CONFIG = {
  // Image optimization
  images: {
    lazy: true,
    priority: false,
    placeholder: "blur",
    formats: ["webp", "avif"],
    sizes: {
      thumbnail: 150,
      small: 300,
      medium: 600,
      large: 1200,
      hero: 1920,
    },
  },

  // Font optimization
  fonts: {
    display: "swap",
    preload: true,
    subset: ["latin"],
  },

  // Script loading
  scripts: {
    defer: true,
    async: true,
    preload: false,
  },

  // CSS optimization
  css: {
    inlineCritical: true,
    preload: true,
  },

  // Resource hints
  resourceHints: {
    dnsPrefetch: ["https://www.google-analytics.com"],
    preconnect: ["https://www.google-analytics.com", "https://fonts.googleapis.com"],
    preload: [],
  },
};

/**
 * Generate preload link tags for critical resources
 */
export function generatePreloadLinks(): string[] {
  const links: string[] = [];

  // Preload critical fonts
  links.push(
    `<link rel="preload" href="/fonts/plus-jakarta-sans-400.woff2" as="font" type="font/woff2" crossorigin>`
  );
  links.push(
    `<link rel="preload" href="/fonts/plus-jakarta-sans-600.woff2" as="font" type="font/woff2" crossorigin>`
  );

  // Preconnect to external domains
  CORE_WEB_VITALS_CONFIG.resourceHints.preconnect.forEach((domain) => {
    links.push(`<link rel="preconnect" href="${domain}">`);
  });

  return links;
}

/**
 * Generate DNS prefetch links
 */
export function generateDnsPrefetchLinks(): string[] {
  const links: string[] = [];

  CORE_WEB_VITALS_CONFIG.resourceHints.dnsPrefetch.forEach((domain) => {
    links.push(`<link rel="dns-prefetch" href="${domain}">`);
  });

  return links;
}

/**
 * Image optimization utilities
 */
export function getImageProps(
  src: string,
  width: number,
  height: number,
  priority: boolean = false
) {
  return {
    src,
    width,
    height,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
    decoding: priority ? "sync" : "async",
  };
}

/**
 * CLS prevention utilities
 */
export function preventCLS() {
  // Reserve space for dynamic content
  const styles = `
    /* Reserve space for images before they load */
    img[loading="lazy"] {
      min-height: 200px;
      background-color: #f3f4f6;
    }
    
    /* Reserve space for ads and dynamic content */
    .dynamic-content {
      min-height: 100px;
    }
    
    /* Prevent layout shift from fonts */
    body {
      font-display: swap;
    }
  `;

  return styles;
}

/**
 * LCP optimization utilities
 */
export function optimizeLCP(): string[] {
  const optimizations: string[] = [
    // Preload hero image
    `<link rel="preload" as="image" href="/hero-image.jpg" fetchpriority="high">`,
    
    // Inline critical CSS
    // This should be done during build time
    
    // Remove render-blocking resources
    // Use async/defer for non-critical scripts
  ];

  return optimizations;
}

/**
 * INP optimization utilities
 */
export function optimizeINP(): string[] {
  const optimizations: string[] = [
    // Use passive event listeners
    // Avoid long tasks
    // Code splitting
    // Lazy load components
  ];

  return optimizations;
}

/**
 * Generate performance monitoring script
 */
export function generatePerformanceScript() {
  return `
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      // Report Web Vitals
      const reportWebVital = (metric) => {
        console.log(metric);
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', metric.name, {
            value: metric.value,
            event_category: 'Web Vitals',
          });
        }
      };

      // Use web-vitals library if available
      if (typeof webVitals !== 'undefined') {
        webVitals.getCLS(reportWebVital);
        webVitals.getFID(reportWebVital);
        webVitals.getLCP(reportWebVital);
        webVitals.getINP(reportWebVital);
      }
    }
  `;
}

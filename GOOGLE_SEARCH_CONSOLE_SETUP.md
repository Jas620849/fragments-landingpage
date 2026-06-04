# Google Search Console Setup Guide

## Step 1: Set Base URL Environment Variable

To ensure your sitemap and canonical URLs work correctly, you need to set the `NEXT_PUBLIC_SITE_URL` environment variable.

### Option A: Using .env.local (Recommended for Development)

Create or update `.env.local` in your project root:

```bash
NEXT_PUBLIC_SITE_URL=https://fragmenttrails.com
```

### Option B: Using .env (For Production)

Create or update `.env` in your project root:

```bash
NEXT_PUBLIC_SITE_URL=https://fragmenttrails.com
```

### Option C: Using Deployment Platform Environment Variables

If deploying to Vercel, Netlify, or another platform:

1. Go to your deployment platform's dashboard
2. Navigate to Environment Variables settings
3. Add: `NEXT_PUBLIC_SITE_URL` = `https://fragmenttrails.com`

## Step 2: Verify Sitemap Configuration

Your sitemap is already configured at `/sitemap.xml` and includes:

- **Static Pages**: Home, About, Blog, Contact, How It Works, Pricing, Services
- **Category Pages**: All 19 academic categories (Science, Physics, Chemistry, Biology, etc.)
- **Topic Pages**: Sample topics (What Is Electricity, Atomic Structure, Newton Laws, etc.)
- **Thread Pages**: Sample discussion threads
- **Blog Posts**: All blog posts

### Access Your Sitemap

Once deployed, access your sitemap at:
```
https://fragmenttrails.com/sitemap.xml
```

## Step 3: Submit Sitemap to Google Search Console

### 3.1 Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add a property"
3. Select "URL prefix"
4. Enter: `https://fragmenttrails.com/`
5. Click "Continue"

### 3.2 Verify Ownership

Choose one of the verification methods:

**Option A: HTML File Upload**
1. Download the HTML verification file
2. Upload it to your public folder
3. Click "Verify"

**Option B: HTML Tag**
1. Copy the meta tag provided
2. Add it to your `src/app/layout.tsx` in the verification section
3. Click "Verify"

**Option C: Google Analytics**
1. If you have GA4 set up, you can verify through it
2. Click "Verify"

### 3.3 Submit Sitemap

1. In Google Search Console, select your property
2. Navigate to **Sitemaps** in the left sidebar
3. Enter: `sitemap.xml`
4. Click **Submit**

### 3.4 Request Indexing for Important Pages

After submitting the sitemap, request indexing for key pages:

1. Navigate to **URL Inspection** in the left sidebar
2. Enter important URLs one by one:
   - `https://fragmenttrails.com/`
   - `https://fragmenttrails.com/category/physics/`
   - `https://fragmenttrails.com/category/machine-learning/`
   - `https://fragmenttrails.com/topic/what-is-electricity`
   - `https://fragmenttrails.com/guide/what-is-electricity`
3. Click **Request Indexing** for each

## Step 4: Monitor Indexing Status

### Check Indexed Pages

1. Go to **Indexing** → **Pages** in Google Search Console
2. Monitor:
   - **Submitted**: URLs in your sitemap
   - **Indexed**: URLs actually indexed by Google
   - **Excluded**: URLs not indexed (with reasons)

### Common Issues and Solutions

**Issue: "Submitted but not indexed"**
- Wait 24-48 hours for Google to process
- Ensure pages have quality content
- Check for crawl errors

**Issue: "Crawled - currently not indexed"**
- Improve page content quality
- Add internal links to the page
- Ensure page is accessible (no authentication required)

**Issue: "Page with redirect"**
- Check for redirect chains
- Ensure canonical URLs are correct

## Step 5: Optimize for Faster Indexing

### 5.1 Update robots.txt

Your `robots.txt` is already configured to allow crawling of:
- `/topic/*` - Topic pages
- `/thread/*` - Discussion threads
- `/category/*` - Category pages
- `/guide/*` - Programmatic SEO pages
- `/blog/*` - Blog posts

### 5.2 Ensure Internal Linking

Your pages already include:
- Breadcrumb navigation
- Related topics/threads
- Category navigation
- Minimum 10 internal links per page

### 5.3 Create XML Sitemap Variations (Optional)

For large sites, consider creating separate sitemaps:

- `sitemap-topics.xml` - All topic pages
- `sitemap-threads.xml` - All discussion threads
- `sitemap-categories.xml` - All category pages
- `sitemap-guides.xml` - All programmatic SEO pages

## Step 6: Monitor Performance

### Key Metrics to Track

1. **Coverage**: Number of indexed pages
2. **Performance**: Search queries and clicks
3. **Enhancements**: Structured data and AMP
4. **Mobile Usability**: Mobile-friendliness
5. **Core Web Vitals**: LCP, FID, CLS

### Set Up Alerts

1. Go to **Settings** → **Preferences**
2. Enable email alerts for:
   - Coverage issues
   - Security issues
   - Manual actions

## Step 7: Regular Maintenance

### Weekly Tasks

- Check indexing status
- Review new crawl errors
- Monitor performance metrics

### Monthly Tasks

- Update sitemap with new content
- Review and fix coverage issues
- Analyze top-performing pages

### Quarterly Tasks

- Review and update structured data
- Optimize low-performing pages
- Plan new content based on search queries

## Additional SEO Features Implemented

Your site includes:

### Schema Markup
- **DiscussionForumPosting** - For discussion threads
- **QAPage** - For Q&A content
- **FAQPage** - For FAQ sections
- **Article** - For blog posts and guides
- **BreadcrumbList** - For navigation
- **Organization** - For company info
- **WebSite** - With search action
- **LocalBusiness** - For local SEO

### International SEO
- **Hreflang tags** for 15 target countries:
  - Primary: US, Canada, UK, Australia, New Zealand
  - Secondary: Germany, Netherlands, Sweden, Norway, France, Singapore
  - Additional: Pakistan, India, UAE

### Dynamic Metadata
- Auto-generated meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### Content Silos
- 19 academic categories with dedicated landing pages
- Category-specific keywords and descriptions
- Internal linking between related content

### Programmatic SEO
- Guide templates for:
  - "What Is [Topic]"
  - "How Does [Topic] Work"
  - "Difference Between [Topic A] and [Topic B]"
  - "Advantages Of [Topic]"
  - "History Of [Topic]"

## Next Steps

1. **Set the environment variable** (Step 1)
2. **Deploy your site** to production
3. **Verify ownership** in Google Search Console
4. **Submit sitemap** to Google Search Console
5. **Request indexing** for important pages
6. **Monitor indexing** status regularly
7. **Create quality content** to attract organic traffic

## Support Resources

- [Google Search Console Help](https://support.google.com/webmasters/answer/34592)
- [Google's SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

**Last Updated**: June 4, 2026
**Site**: Fragment Trails
**Base URL**: https://fragmenttrails.com

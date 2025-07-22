# Professional Company Website

![App Preview](https://imgix.cosmicjs.com/96f27fc0-671e-11f0-a051-23c10f41277a-photo-1556742049-0cfed4f6a45d-1753204152444.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, high-performance company website built with Astro and powered by Cosmic CMS. This website showcases professional services, team members, client testimonials, and detailed case studies with lightning-fast loading times and excellent SEO.

## Features

- **Lightning-Fast Performance** - Astro's static site generation with minimal JavaScript
- **Responsive Design** - Mobile-first approach that works on all devices
- **Service Portfolio** - Showcase Web Development, Digital Marketing, and Business Consulting services
- **Team Profiles** - Professional team member pages with social media links
- **Client Testimonials** - Dynamic testimonial display with star ratings
- **Case Studies** - Detailed project showcases with results and galleries
- **SEO Optimized** - Built-in meta tags and structured data
- **Content Management** - Easy content updates through Cosmic CMS

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=687fc50f1ce9637c5b43b8e4&clone_repository=687fc6991ce9637c5b43b905)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> Set up an Astro website powered by my existing content. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Astro** - Static site generator for optimal performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- Bun package manager
- Cosmic account with your content bucket

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd company-website
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Cosmic credentials to `.env`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Start the development server:
```bash
bun run dev
```

6. Open [http://localhost:4321](http://localhost:4321) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '../lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This website uses Cosmic as a headless CMS with the following content types:

- **Services** - Professional services offered (Web Development, Digital Marketing, Business Consulting)
- **Team Members** - Staff profiles with photos, bios, and contact information
- **Testimonials** - Client reviews with ratings and project types
- **Case Studies** - Detailed project showcases with challenges, solutions, and results

The content is fetched at build time for optimal performance and SEO benefits.

## Deployment Options

### Vercel
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Other Platforms
This Astro site can be deployed to any static hosting platform that supports Node.js build processes.

For production, make sure to set your environment variables in your hosting platform's dashboard.
<!-- README_END -->
import { createBucketClient } from '@cosmicjs/sdk'
import type { Service, TeamMember, Testimonial, CaseStudy } from '../types'

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG as string,
  readKey: import.meta.env.COSMIC_READ_KEY as string,
  writeKey: import.meta.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Fetch all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching services:', error)
    throw new Error('Failed to fetch services')
  }
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching team members:', error)
    throw new Error('Failed to fetch team members')
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching testimonials:', error)
    throw new Error('Failed to fetch testimonials')
  }
}

// Fetch all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CaseStudy[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching case studies:', error)
    throw new Error('Failed to fetch case studies')
  }
}

// Fetch single case study by slug
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as CaseStudy
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null
    }
    console.error('Error fetching case study:', error)
    throw new Error('Failed to fetch case study')
  }
}

// Fetch single service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Service
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null
    }
    console.error('Error fetching service:', error)
    throw new Error('Failed to fetch service')
  }
}

// Fetch single team member by slug
export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'team-members', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as TeamMember
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null
    }
    console.error('Error fetching team member:', error)
    throw new Error('Failed to fetch team member')
  }
}
import { client } from './client'
import { projectId } from '../env'

const isConfigured = projectId !== 'your-project-id'

export async function getPrograms() {
  if (!isConfigured) return [];
  try {
    return await client.fetch(`*[_type == "program"] | order(_createdAt desc)`)
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}

export async function getEvents() {
  if (!isConfigured) return [];
  try {
    return await client.fetch(`*[_type == "event"] | order(date asc)`)
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getFeaturedEvents() {
  if (!isConfigured) return [];
  try {
    return await client.fetch(`*[_type == "event" && isFeatured == true] | order(date asc)`)
  } catch (error) {
    console.error("Error fetching featured events:", error);
    return [];
  }
}

export async function getTestimonials() {
  if (!isConfigured) return [];
  try {
    return await client.fetch(`*[_type == "testimonial"] | order(_createdAt desc)`)
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function getTeamMembers() {
  if (!isConfigured) return [];
  try {
    return await client.fetch(`*[_type == "teamMember"] | order(_createdAt asc)`)
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}

export async function getHomePage() {
  if (!isConfigured) return null;
  try {
    return await client.fetch(`*[_type == "homePage"][0]`)
  } catch (error) {
    console.error("Error fetching home page:", error);
    return null;
  }
}

export async function getAboutPage() {
  if (!isConfigured) return null;
  try {
    return await client.fetch(`*[_type == "aboutPage"][0]`)
  } catch (error) {
    console.error("Error fetching about page:", error);
    return null;
  }
}

import { client } from './client'

export async function getPrograms() {
  try {
    return await client.fetch(`*[_type == "program"] | order(_createdAt desc)`)
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}

export async function getEvents() {
  try {
    return await client.fetch(`*[_type == "event"] | order(date asc)`)
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getFeaturedEvents() {
  try {
    return await client.fetch(`*[_type == "event" && isFeatured == true] | order(date asc)`)
  } catch (error) {
    console.error("Error fetching featured events:", error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    return await client.fetch(`*[_type == "testimonial"] | order(_createdAt desc)`)
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function getTeamMembers() {
  try {
    return await client.fetch(`*[_type == "teamMember"] | order(_createdAt asc)`)
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}

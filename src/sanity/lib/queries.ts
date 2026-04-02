import { client } from './client'

export async function getPrograms() {
  return client.fetch(`*[_type == "program"] | order(_createdAt desc)`)
}

export async function getEvents() {
  return client.fetch(`*[_type == "event"] | order(date asc)`)
}

export async function getFeaturedEvents() {
  return client.fetch(`*[_type == "event" && isFeatured == true] | order(date asc)`)
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(_createdAt desc)`)
}

export async function getTeamMembers() {
  return client.fetch(`*[_type == "teamMember"] | order(_createdAt asc)`)
}

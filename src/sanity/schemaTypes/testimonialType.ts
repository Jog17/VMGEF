import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'author', title: 'Author Name', type: 'string' }),
    defineField({ name: 'role', title: 'Author Role', type: 'string' }),
    defineField({ name: 'image', title: 'Author Image', type: 'image', options: { hotspot: true } }),
  ],
})

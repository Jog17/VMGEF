import { defineField, defineType } from 'sanity'

export const programType = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'color', title: 'Background Color Class', type: 'string' }),
    defineField({ name: 'textColor', title: 'Text Color Class', type: 'string' }),
  ],
})

import { defineField, defineType } from 'sanity'

export const programsPageType = defineType({
  name: 'programsPage',
  title: 'Programs Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Programs',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ 
          name: 'titleLines', 
          title: 'Title Lines', 
          type: 'array', 
          of: [{ type: 'string' }] 
        }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
})

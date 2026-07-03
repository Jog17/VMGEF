import { defineField, defineType } from 'sanity'

export const impactPageType = defineType({
  name: 'impactPage',
  title: 'Impact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Impact',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'titleLines', title: 'Title Lines', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'value', title: 'Value (Number)', type: 'number' }),
            defineField({ name: 'suffix', title: 'Suffix (e.g. +, GHS)', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon (lucide-react name)', type: 'string' }),
            defineField({ 
              name: 'style', 
              title: 'Card Style', 
              type: 'string', 
              options: { list: ['white', 'ink', 'orange', 'light'] } 
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'globalExpansion',
      title: 'Global Expansion Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({ name: 'mapImage', title: 'Map Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'flagImage', title: 'Flag Image', type: 'image' }),
      ],
    }),
    defineField({
      name: 'tangibleDifference',
      title: 'Tangible Difference Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'category', title: 'Category (Badge)', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'About',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'history',
      title: 'The Catalyst (History)',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),
    defineField({
      name: 'parallax',
      title: 'Parallax Quote Section',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Leadership' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Who We Are' }),
        defineField({ name: 'headquarters', title: 'Headquarters', type: 'string', initialValue: 'Weija, Accra, Ghana' }),
        defineField({ name: 'teamDetails', title: 'Team Details', type: 'string', initialValue: 'Small core staff & dedicated volunteers' }),
      ],
    }),
  ],
})

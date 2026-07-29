import { defineField, defineType } from 'sanity'

export const galleryPageType = defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Gallery',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Our Visual Journey' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Moments of Impact' }),
        defineField({ name: 'description', title: 'Description', type: 'text', initialValue: 'Browse through the memories, events, and milestones that define VMGEF.' }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ]
        }
      ]
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export const donatePageType = defineType({
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Donate',
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
      name: 'donationOptions',
      title: 'Donation Options',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'momo',
          title: 'Mobile Money Options',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'number', title: 'Number / Details', type: 'string' }),
          ],
        }),
        defineField({
          name: 'online',
          title: 'Online Donation Options',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
            defineField({ name: 'buttonLink', title: 'Button Link', type: 'url' }),
            defineField({ name: 'donorboxUrl', title: 'Donorbox Embed URL (Optional)', type: 'url', description: 'If provided, a Donorbox widget will be embedded directly on the page instead of just a link. E.g. https://donorbox.org/embed/vmgef' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'financialTransparency',
      title: 'Financial Transparency',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'allocations',
          title: 'Allocations',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'percentage', title: 'Percentage', type: 'number' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'volunteer',
      title: 'Volunteer Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'cardTitle', title: 'Card Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'opportunities', title: 'Opportunities', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'time', title: 'Time', type: 'string', description: 'e.g. 4:00 PM - 8:00 PM Prompt' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isFeatured', title: 'Featured Event', type: 'boolean' }),
    defineField({
      name: 'schedule',
      title: 'Event Schedule',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of activities or agenda items'
    }),
    defineField({
      name: 'tickets',
      title: 'Tickets Info',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Secure Your Seat' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string', initialValue: 'Proceeds go directly to VMGEF programs' }),
        defineField({ name: 'regularPrice', title: 'Regular Ticket Price (GHC)', type: 'string' }),
        defineField({ name: 'vipPrice', title: 'VIP Ticket Price (GHC)', type: 'string' }),
        defineField({ name: 'paymentShortCode', title: 'Payment Short Code', type: 'string' }),
        defineField({ name: 'inquiriesPhone', title: 'Inquiries Phone', type: 'string' }),
        defineField({ name: 'inquiriesEmail', title: 'Inquiries Email', type: 'string' }),
      ]
    })
  ],
})

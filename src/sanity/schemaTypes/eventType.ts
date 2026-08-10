import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'URL pathway for event details page'
    }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'time', title: 'Time', type: 'string', description: 'e.g. 4:00 PM - 8:00 PM Prompt' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isFeatured', title: 'Featured Event', type: 'boolean' }),
    defineField({ 
      name: 'isFreeEvent', 
      title: 'Free Event (RSVP)', 
      type: 'boolean',
      description: 'Check if this is a free event (no fee required to attend)' 
    }),
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
    }),
    defineField({
      name: 'requiresRegistration',
      title: 'Requires Registration / RSVP',
      type: 'boolean',
      description: 'Enable registration form or link for this event'
    }),
    defineField({
      name: 'registrationType',
      title: 'Registration Type',
      type: 'string',
      options: {
        list: [
          { title: 'Interactive Form (Built-in Modal)', value: 'form' },
          { title: 'External Link (Google Form / Eventbrite)', value: 'external' }
        ],
        layout: 'radio'
      },
      initialValue: 'form'
    }),
    defineField({
      name: 'registrationUrl',
      title: 'External Registration URL',
      type: 'url',
      description: 'Used if registration type is set to External Link'
    }),
    defineField({
      name: 'registrationButtonText',
      title: 'Registration Button Label',
      type: 'string',
      initialValue: 'Register for Event'
    })
  ],
})

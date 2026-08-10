import { defineField, defineType } from 'sanity'

export const eventRegistrationType = defineType({
  name: 'eventRegistration',
  title: 'Event Attendees / Registrations',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Attendee Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
    }),
    defineField({
      name: 'event',
      title: 'Event Reference',
      type: 'reference',
      to: [{ type: 'event' }],
    }),
    defineField({
      name: 'ticketType',
      title: 'Ticket Type',
      type: 'string',
    }),
    defineField({
      name: 'quantity',
      title: 'Ticket Quantity',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount (GHC)',
      type: 'number',
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Paystack (Card/MoMo)', value: 'paystack' },
          { title: 'Direct MoMo Code', value: 'momo' },
          { title: 'Free RSVP', value: 'free' },
        ],
      },
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Confirmed / Paid', value: 'confirmed' },
          { title: 'Pending MoMo Verification', value: 'pending' },
          { title: 'Free RSVP Confirmed', value: 'free' },
        ],
      },
    }),
    defineField({
      name: 'paymentReference',
      title: 'Reference / Ticket Code',
      type: 'string',
    }),
    defineField({
      name: 'registeredAt',
      title: 'Registration Date & Time',
      type: 'datetime',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'eventTitle',
      email: 'email',
      reference: 'paymentReference',
      status: 'paymentStatus',
    },
    prepare({ title, subtitle, email, reference, status }) {
      return {
        title: title || 'Anonymous Attendee',
        subtitle: `${subtitle || 'Event'} | ${status || 'Registered'} (${email || ''}) - Ref: ${reference || 'N/A'}`,
      }
    },
  },
})

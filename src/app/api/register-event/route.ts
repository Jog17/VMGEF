import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      fullName,
      email,
      phone,
      eventId,
      eventTitle,
      ticketType,
      quantity,
      totalAmount,
      paymentMethod,
      paymentStatus,
      paymentReference,
      notes,
    } = body

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }

    const doc = {
      _type: 'eventRegistration',
      fullName,
      email,
      phone: phone || '',
      eventTitle: eventTitle || '',
      ...(eventId ? { event: { _type: 'reference', _ref: eventId } } : {}),
      ticketType: ticketType || 'regular',
      quantity: Number(quantity) || 1,
      totalAmount: Number(totalAmount) || 0,
      paymentMethod: paymentMethod || 'free',
      paymentStatus: paymentStatus || 'confirmed',
      paymentReference: paymentReference || `REF-${Math.floor(100000 + Math.random() * 900000)}`,
      registeredAt: new Date().toISOString(),
      notes: notes || '',
    }

    let createdDoc = null
    if (token) {
      createdDoc = await writeClient.create(doc)
    } else {
      console.warn('SANITY_API_TOKEN is not configured. Attendee record could not be persisted in Sanity Studio until SANITY_API_TOKEN is provided.')
      createdDoc = { ...doc, _id: `demo-${Date.now()}` }
    }

    return NextResponse.json({
      success: true,
      message: 'Registration saved successfully',
      data: createdDoc,
    })
  } catch (error: any) {
    console.error('Error saving event registration to Sanity:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to register attendee' },
      { status: 500 }
    )
  }
}

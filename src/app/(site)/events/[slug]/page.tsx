import { notFound } from "next/navigation";
import EventDetail from "@/page_components/EventDetail";
import { getEventBySlug, getEvents } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    // If not found by slug directly, try finding from all events list as fallback
    const allEvents = await getEvents();
    const fallbackEvent = allEvents.find((e: any) => e._id === slug || e.slug?.current === slug);
    if (!fallbackEvent) {
      notFound();
    }
    return <EventDetail event={fallbackEvent} />;
  }

  return <EventDetail event={event} />;
}

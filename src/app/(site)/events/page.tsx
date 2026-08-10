import Events from "@/page_components/Events";
import { getEvents, getFeaturedEvents, getEventsPage } from "@/sanity/lib/queries";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const events = await getEvents();
  const featuredEvents = await getFeaturedEvents();
  const eventsPageData = await getEventsPage();
  return <Events events={events} featuredEvents={featuredEvents} eventsPageData={eventsPageData} />;
}

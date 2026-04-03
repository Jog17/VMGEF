import Events from "@/page_components/Events";
import { getEvents, getFeaturedEvents } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const events = await getEvents();
  const featuredEvents = await getFeaturedEvents();
  return <Events events={events} featuredEvents={featuredEvents} />;
}

import Home from "@/page_components/Home";
import { getPrograms, getEvents, getFeaturedEvents, getTestimonials, getHomePage } from "@/sanity/lib/queries";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const programs = await getPrograms();
  const events = await getEvents();
  const featuredEvents = await getFeaturedEvents();
  const testimonials = await getTestimonials();
  const homePageData = await getHomePage();

  return <Home programs={programs} events={events} featuredEvents={featuredEvents} testimonials={testimonials} homePageData={homePageData} />;
}

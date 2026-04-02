import Home from "@/page_components/Home";
import { getPrograms, getFeaturedEvents, getTestimonials } from "@/sanity/lib/queries";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const programs = await getPrograms();
  const featuredEvents = await getFeaturedEvents();
  const testimonials = await getTestimonials();

  return <Home programs={programs} featuredEvents={featuredEvents} testimonials={testimonials} />;
}

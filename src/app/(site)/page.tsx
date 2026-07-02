import Home from "@/page_components/Home";
import { getPrograms, getFeaturedEvents, getTestimonials, getHomePage } from "@/sanity/lib/queries";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const programs = await getPrograms();
  const featuredEvents = await getFeaturedEvents();
  const testimonials = await getTestimonials();
  const homePageData = await getHomePage();

  return <Home programs={programs} featuredEvents={featuredEvents} testimonials={testimonials} homePageData={homePageData} />;
}

import Gallery from "@/page_components/Gallery";
import { getGalleryPage } from "@/sanity/lib/queries";

export const revalidate = 60; // revalidate every 60 seconds

export default async function GalleryRoute() {
  const galleryPageData = await getGalleryPage();
  return <Gallery galleryPageData={galleryPageData} />;
}

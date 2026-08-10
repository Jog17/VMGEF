import Gallery from "@/page_components/Gallery";
import { getGalleryPage } from "@/sanity/lib/queries";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function GalleryRoute() {
  const galleryPageData = await getGalleryPage();
  return <Gallery galleryPageData={galleryPageData} />;
}

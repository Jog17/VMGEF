import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getSiteSettings } from "@/sanity/lib/queries";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();

  return (
    <SmoothScroll>
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer siteSettings={siteSettings} />
    </SmoothScroll>
  );
}

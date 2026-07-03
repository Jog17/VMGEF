import Impact from "@/page_components/Impact";
import { getImpactPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const impactPageData = await getImpactPage();
  return <Impact impactPageData={impactPageData} />;
}

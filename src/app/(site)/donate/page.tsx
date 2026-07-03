import Donate from "@/page_components/Donate";
import { getDonatePage } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const donatePageData = await getDonatePage();
  return <Donate donatePageData={donatePageData} />;
}

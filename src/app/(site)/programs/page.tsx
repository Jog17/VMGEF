import Programs from "@/page_components/Programs";
import { getPrograms, getProgramsPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const programs = await getPrograms();
  const programsPageData = await getProgramsPage();
  return <Programs programs={programs} programsPageData={programsPageData} />;
}

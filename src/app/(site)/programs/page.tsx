import Programs from "@/page_components/Programs";
import { getPrograms } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const programs = await getPrograms();
  return <Programs programs={programs} />;
}

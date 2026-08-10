import About from "@/page_components/About";
import { getTeamMembers, getAboutPage } from "@/sanity/lib/queries";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const teamMembers = await getTeamMembers();
  const aboutPageData = await getAboutPage();
  return <About teamMembers={teamMembers} aboutPageData={aboutPageData} />;
}

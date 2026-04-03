import About from "@/page_components/About";
import { getTeamMembers } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const teamMembers = await getTeamMembers();
  return <About teamMembers={teamMembers} />;
}

import { createClient } from '@sanity/client';

// NOTE: You'll need to set the SANITY_API_TOKEN in your environment or below
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN; // Get this from Sanity > Project > API > Tokens

if (!token) {
  console.error("Missing SANITY_API_TOKEN. Please set it as an environment variable.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-04-02',
  token,
});

async function seed() {
  console.log('Seeding Sanity...');

  const programs = [
    {
      _type: 'program',
      title: "Building an Entrepreneur (BAE)",
      subtitle: "14-Week Course",
      description: "Senior-high entrepreneurship course teaching business planning, culminating in a pitch competition with a GHS 10,000 grant.",
      color: "bg-[#F4F1ED]",
      textColor: "text-vmgef-ink"
    },
    {
      _type: 'program',
      title: "Confident Girls, Bright Futures",
      subtitle: "8-Week Series",
      description: "Junior-high empowerment covering self-confidence, integrity, and emotional growth.",
      color: "bg-vmgef-orange",
      textColor: "text-white"
    },
    {
      _type: 'program',
      title: "Healthcare Outreach",
      subtitle: "Mpatase Clinic Equipment Drive",
      description: "Outfitting a new 7-room rural clinic.",
      color: "bg-[#E8EFE9]",
      textColor: "text-vmgef-ink"
    },
    {
      _type: 'program',
      title: "STEM Scholarships",
      subtitle: "Higher Education",
      description: "4-year university scholarships for young women in science and tech.",
      color: "bg-[#F4F1ED]",
      textColor: "text-vmgef-ink"
    },
    {
      _type: 'program',
      title: "Urban Farming & Reforestation",
      subtitle: "Community Agriculture",
      description: "Teaching climate-smart agriculture and tree-planting through community classes.",
      color: "bg-vmgef-orange",
      textColor: "text-white"
    }
  ];

  for (const program of programs) {
    console.log(`Creating program: ${program.title}...`);
    await client.create(program);
  }

  console.log('Done seeding!');
}

seed().catch(console.error);

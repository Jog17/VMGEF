import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN; 
  
  if (!token) {
    return NextResponse.json({ error: "Missing SANITY_API_TOKEN in API route" }, { status: 500 });
  }

  const client = createClient({
    projectId,
    dataset,
    useCdn: false,
    apiVersion: '2024-04-02',
    token,
  });

  const homePage = {
    _id: 'homePage',
    _type: 'homePage',
    title: 'Home',
    hero: {
      subtitle: 'Vince Memorial Garden & Education Foundation',
      titleLines: ['Education is', 'my Superpower.'],
      description: 'Dedicated to the legacy of Vince. We provide tangible solutions to unemployment through impactful educational programs, empowering Ghanaian youth and women.',
    },
    mission: {
      quote: '"We don\'t just build a foundation. We build futures."',
      description: 'VMGEF addresses the critical issue of youth unemployment in Ghana through targeted interventions in STEM, entrepreneurship, and essential healthcare.'
    },
    videoSection: {
      subtitle: 'Watch Our Impact',
      title: 'The VMGEF Story'
    },
    founderStory: {
      subtitle: 'The Catalyst',
      title: 'A Mother\'s Tribute',
      description: [
        'The Vince Memorial Garden and Education Foundation (VMGEF) was formally incorporated in 2023. It was born from an unimaginable loss, but fueled by an unbreakable spirit.',
        'Jahzara Agyemang, a Ghanaian-American educator and former college professor, launched VMGEF in Accra as a tribute to her son, Vince. Recognizing the critical issue of youth unemployment in Ghana, Jahzara channeled her expertise in education into creating tangible, life-changing solutions.',
        'The organization began by piloting its flagship programs in 2024, including the first Girls\' STEM camp and comprehensive entrepreneurship courses. Since then, the foundation has rapidly expanded its reach nationwide.'
      ]
    },
    partners: {
      title: 'Trusted By',
      partnerNames: ['Accra Technical University', 'JTE Business Consult', 'Awoshie Tech Hub', 'Ghana Education Service']
    },
    impactStats: [
      { _key: 'stat1', number: '1.5k+', label: 'Students', sub: 'Reached' },
      { _key: 'stat2', number: '45', label: 'Scholarships', sub: 'Awarded' },
      { _key: 'stat3', number: '20+', label: 'Local', sub: 'Partners' },
    ],
    finalCta: {
      title: 'Join the Movement.',
      description: 'Whether through a one-time donation, corporate sponsorship, or volunteering your expertise, your support makes our work possible.',
      buttonText: 'Donate Now',
      buttonLink: '/donate'
    }
  };

  const aboutPage = {
    _id: 'aboutPage',
    _type: 'aboutPage',
    title: 'About',
    hero: {
      subtitle: 'Our Story',
      title: 'Turning grief into a powerful engine for impact.',
      quote: '"Dedicated to the legacy of the best man I have ever known, my late son Vince."',
    },
    history: {
      title: 'The Catalyst',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The Vince Memorial Garden and Education Foundation (VMGEF) was formally incorporated in 2023. It was born from an unimaginable loss, but fueled by an unbreakable spirit.',
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Jahzara Agyemang, a Ghanaian-American educator and former college professor, launched VMGEF in Accra as a tribute to her son, Vince. Recognizing the critical issue of youth unemployment in Ghana, Jahzara channeled her expertise in education into creating tangible, life-changing solutions.',
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The organization began by piloting its flagship programs in 2024, including the first Girls\' STEM camp and comprehensive entrepreneurship courses. Since then, the foundation has rapidly expanded its reach nationwide.',
            }
          ]
        }
      ]
    },
    parallax: {
      quote: '"We provide tangible solutions to unemployment through a variety of impactful educational programs."'
    },
    leadership: {
      subtitle: 'Leadership',
      title: 'Who We Are',
      headquarters: 'Weija, Accra, Ghana',
      teamDetails: 'Small core staff & dedicated volunteers'
    }
  };

  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'VMGEF',
    contactEmail: 'info@vmgef.org',
    phoneNumber: '+233 50 8115 739',
    address: 'Weija, Accra, Ghana',
    footerText: 'Dedicated to the legacy of Vince. Empowering Ghanaian youth and women via education and skills training.',
  };

  const programsPage = {
    _id: 'programsPage',
    _type: 'programsPage',
    title: 'Programs',
    hero: {
      subtitle: 'Our Initiatives',
      titleLines: ['Education is', 'My Superpower.'],
      description: 'From entrepreneurship and STEM to healthcare and urban farming, our programs are designed to increase skills, job readiness, and self-reliance in underserved communities.',
    }
  };

  const eventsPage = {
    _id: 'eventsPage',
    _type: 'eventsPage',
    title: 'Events',
    hero: {
      subtitle: 'Marquee Events',
      titleLines: ['A Night of', 'Impact.'],
      description: 'Join us for our annual black-tie fundraising galas. Celebrate art, excellence, and the empowerment of Ghanaian youth.'
    },
    communityEvents: {
      title: 'Community & Past Events',
      subtitle: 'Beyond the gala, we are active in the community year-round.'
    }
  };

  const impactPage = {
    _id: 'impactPage',
    _type: 'impactPage',
    title: 'Impact',
    hero: {
      subtitle: 'Our Impact',
      titleLines: ['Measuring', 'Change.'],
      description: 'We believe in transparency and tangible results. Here is a look at how your support is transforming lives across Ghana and beyond.',
    },
    stats: [
      {
        _key: 'stat1',
        label: 'Students Reached',
        value: 1500,
        suffix: '+',
        icon: 'Users',
        style: 'white'
      },
      {
        _key: 'stat2',
        label: 'Scholarships Awarded',
        value: 45,
        icon: 'GraduationCap',
        style: 'ink'
      },
      {
        _key: 'stat3',
        label: 'In Seed Grants',
        value: 12000,
        suffix: ' GHS',
        icon: 'Heart',
        style: 'orange'
      },
      {
        _key: 'stat4',
        label: 'Trees Planted',
        value: 500,
        suffix: '+',
        icon: 'TreePine',
        style: 'light'
      }
    ],
    globalExpansion: {
      subtitle: 'Global Expansion',
      title: 'Tanzania School Tour',
      description: 'In March 2025, VMGEF is expanding its footprint beyond Ghana. We are embarking on the "Confident Girls Bright Futures" school tour in Ukerewe, Tanzania. This initiative aims to empower young girls with essential life skills, educational resources, and the confidence to pursue their dreams.',
      location: 'Ukerewe Island, Tanzania'
    },
    tangibleDifference: {
      title: 'Tangible Difference',
      description: 'We don\'t just talk about change; we build it. From outfitting rural clinics to providing hands-on STEM education, our projects leave a lasting mark.',
      projects: [
        {
          _key: 'proj1',
          title: 'Mpatase Clinic Outfitting',
          category: 'Healthcare',
          description: 'Equipped a 7-room rural clinic, including a dedicated labor suite, serving thousands in the Western Region.'
        },
        {
          _key: 'proj2',
          title: 'Rural STEM Mentoring',
          category: 'Education',
          description: 'Provided hands-on science and technology education to young women, bridging the gender gap in tech.'
        }
      ]
    }
  };

  const donatePage = {
    _id: 'donatePage',
    _type: 'donatePage',
    title: 'Donate',
    hero: {
      subtitle: 'Take Action',
      titleLines: ['Invest in the', 'Future.'],
      description: 'Your contribution directly funds STEM scholarships, rural clinics, entrepreneurship grants, and empowerment programs for Ghanaian youth and women.',
    },
    donationOptions: {
      title: 'Make a Donation',
      momo: {
        title: 'Mobile Money (MoMo)',
        description: 'The fastest way to support locally in Ghana via MTN Mobile Money.',
        number: '+233 50 8115 739'
      },
      online: {
        title: 'Online Donation',
        description: 'Securely donate from anywhere in the world using your credit or debit card.',
        buttonText: 'Donate via Donorbox',
        buttonLink: 'https://donorbox.org/events/728823/steps/choose_tickets',
        donorboxUrl: 'https://donorbox.org/embed/vince-memorial-garden-education-foundation?default_interval=o'
      }
    },
    financialTransparency: {
      title: 'Where Your Money Goes',
      description: 'We believe in radical transparency. Here is how we allocate every dollar donated to maximize impact.',
      allocations: [
        { _key: 'alloc1', label: 'Direct Programs & Scholarships', percentage: 85 },
        { _key: 'alloc2', label: 'Operations & Sustainability', percentage: 10 },
        { _key: 'alloc3', label: 'Future Expansion & Outreach', percentage: 5 }
      ]
    },
    volunteer: {
      title: 'Give Your Time',
      cardTitle: 'Volunteer with VMGEF',
      description: 'We are always looking for passionate individuals to help us drive impact. Opportunities include:',
      opportunities: [
        'Mentoring students in STEM or Business',
        'Teaching workshops (Financial Literacy, Farming)',
        'Event coordination and logistics'
      ]
    }
  };

  const galleryPage = {
    _id: 'galleryPage',
    _type: 'galleryPage',
    title: 'Gallery',
    hero: {
      subtitle: 'Our Visual Journey',
      title: 'Moments of Impact',
      description: 'Browse through the memories, events, and milestones that define VMGEF.'
    }
  };

  const docs: any[] = [homePage, aboutPage, siteSettings, programsPage, eventsPage, impactPage, donatePage, galleryPage,
    {
      _id: 'event-gala-2nd',
      _type: 'event',
      title: '2nd Annual Gala',
      date: '2025-03-09T16:00:00.000Z',
      location: 'Canis Majoris Center, Awoshie - Ghana',
      description: 'Honoring Women Making an Impact in the Community',
      isFeatured: true
    },
    {
      _id: 'event-gala-1st',
      _type: 'event',
      title: '1st Annual Gala Dinner & Fundraiser',
      date: '2024-03-09T16:00:00.000Z',
      location: 'Accra, Ghana',
      description: 'Our inaugural black-tie event held in Accra, establishing the foundation\'s presence and raising critical funds for our pilot programs.',
      isFeatured: false
    },
    {
      _id: 'event-eeec',
      _type: 'event',
      title: 'EEEC & Youth Job Fair',
      date: '2024-10-15T09:00:00.000Z',
      location: 'St. Giles Center, Accra',
      description: 'Entrepreneurship Education & Empowerment Conference. A 2-day business and mentorship workshop co-hosted with JTE Business Consult.',
      isFeatured: false
    },
    {
      _id: 'event-beach',
      _type: 'event',
      title: 'Community Beach Clean-Up',
      date: '2024-10-20T08:00:00.000Z',
      location: 'Accra, Ghana',
      description: 'A grassroots environmental initiative bringing together volunteers to clean local beaches and promote climate-smart practices.',
      isFeatured: false
    },
    {
      _id: 'event-virtual-info',
      _type: 'event',
      title: 'Virtual Info Session',
      date: '2025-12-01T14:00:00.000Z',
      location: 'Online Event',
      description: 'Information session for the "Confident Girls Bright Futures – Tanzania School Tour 2026".',
      isFeatured: false
    }
  ];

  try {
    for (const doc of docs) {
      await client.createOrReplace(doc);
    }
    return NextResponse.json({ success: true, message: 'Seeded successfully' });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

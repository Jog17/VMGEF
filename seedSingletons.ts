import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN; 

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

async function seedSingletons() {
  console.log('Seeding singletons...');

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
      quote: '"Dedicated to the legacy of the best man I have ever known, my late son Vince."',
      description: 'Founded in 2023 by educator Jahzara Agyemang, M.Ed., our vision is to empower Ghanaian youth and women via education and skills training.',
    },
    featuredInitiatives: [
      {
        _key: 'fi1',
        title: 'Confident Girls Bright Futures Tanzania School Tour',
        subtitle: 'March Event',
        description: 'Click to learn more about the project and ways to donate.',
        link: '/events',
      },
      {
        _key: 'fi2',
        title: 'Our 2025\nImpact',
        subtitle: 'Year in Review',
        description: 'See the tangible difference we are making this year.',
        link: '/impact',
      },
      {
        _key: 'fi3',
        title: '3rd Annual VMGEF Fundraising Gala',
        subtitle: 'July 25',
        description: 'Join us for a night of excellence and impact in Accra.',
        link: '/events',
      },
      {
        _key: 'fi4',
        title: 'Building an Entrepreneur',
        subtitle: 'Flagship Program',
        description: 'Our 14-week course transforming high school students into business leaders.',
        link: '/programs',
      }
    ],
    videoSection: {
      subtitle: 'Watch Our Impact',
      title: 'The VMGEF Story',
    },
    founderStory: {
      subtitle: 'The Founder',
      title: 'Jahzara Agyemang, M.Ed.',
      description: [
        "Also known as Obaa Yaa Papabi, Jahzara is a Philadelphia-raised, Ghana-based educator and entrepreneur. Having served as a professor and nonprofit director in the US and Ghana, her life's work is dedicated to leadership in education and women's empowerment.",
        "After the tragic passing of her beloved son Vince, Jahzara channeled her profound grief into the creation of VMGEF. The foundation stands as a living testament to Vince's compassionate spirit, transforming sorrow into a powerful engine for social change and youth upliftment across West Africa."
      ],
    },
    partners: {
      title: 'Trusted Partners & Affiliates',
      partnerNames: ['Univ. of Education, Winneba', 'STEM Girls Foundation', 'Mpatase Rural Clinic', 'Global Empowerment Network', 'Ghana Tech Hub'],
    },
    impactStats: [
      { _key: 'stat1', number: '14', label: 'Week Entrepreneurship Course', sub: 'Building an Entrepreneur (BAE)' },
      { _key: 'stat2', number: '4', label: 'Year STEM Scholarships', sub: 'Partnering with Univ. of Education, Winneba' },
      { _key: 'stat3', number: '7', label: 'Room Rural Clinic Outfitted', sub: 'Mpatase Clinic Equipment Drive' },
    ],
    finalCta: {
      title: 'Ready to make an impact?',
      description: 'Join us in empowering the next generation of Ghanaian leaders, innovators, and entrepreneurs.',
      buttonText: 'Donate Now',
      buttonLink: '/donate',
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
        buttonLink: 'https://donorbox.org/events/728823/steps/choose_tickets'
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

  const docs: any[] = [homePage, aboutPage, siteSettings, programsPage, eventsPage, impactPage, donatePage];

  for (const doc of docs) {
    console.log(`Creating/updating ${doc._type}...`);
    await client.createOrReplace(doc);
  }

  console.log('Done seeding singletons!');
}

seedSingletons().catch(console.error);

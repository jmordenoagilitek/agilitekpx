

export type NavItem = {
    id: string;
    href: string;
    label: string;
  };
  
  export const nav: NavItem[] = [
    // { id: "benefits", href: "#benefits", label: "Benefits" },
    // { id: "compare", href: "#compare", label: "Compare" },
    // { id: "contact", href: "#contact", label: "Contact" },
  ];  
  
  export const hero = {
    eyebrow: "Agilitek PX",
    title: "Powering Every Deal, Dollar, and Deliverable in Sports Partnerships",
    ctaPrimary: { label: "Learn More", href: "#benefits" },
    trustedBy: [
        {
          name: "CF Montréal",
          src: "/team_logo/cf-montreal.svg",
        },
        {
            name: "Houston Dynamo",
            src: "/team_logo/dynamo.png",
          },
          {
            name: "MNUFC",
            src: "/team_logo/minnesota-united.svg",
          },
          {
            name: "NYCFC",
            src: "/team_logo/nycfc.png",
          },
          {
            name: "STLSC",
            src: "/team_logo/st-louis-city.svg",
          },
          {
            name: "Iowa Wild",
            src: "/team_logo/iowa-wild.png",
          },
          {
            name: "Columbus Crew",
            src: "/team_logo/cleveland-browns.svg",
          },
          {
            name: "Cleveland Browns",
            src: "/team_logo/columbus-crew.png",
          },
      ],
  };
  
  export const problem = {
    title: "Shaped by 20+ years of hands-on industry experience.",
    lines: [
      "So if you’re still stuck managing sponsorships in spreadsheets...",
      "Still chasing updates and hoping nothing slips through the cracks...",
      "Still finding out too late that a small error cost you real revenue...",
    ],
    supporting: "We can confidently say that you’ve outgrown your tools.",
    punch: "It’s time to upgrade.",
  };
  
  
  export const features = [
    {
      title: "Native to Your CRM",
      desc:
        "Work directly inside your CRM, not around it. Centralize partnership data, reporting, and workflows in one system your team already trusts.",
    },
    {
      title: "Control Your Inventory",
      desc:
        "Track every asset across seasons and deal types. Know what’s sold, available, or over-allocated at a glance.",
    },
    {
      title: "Multi-Year Deals, Simplified",
      desc:
        "Handle complex, multi-season agreements with ease. Give sales reps clear visibility, faster workflows, and fewer manual steps from close to renewal.",
    },
    {
      title: "Activate Your Data",
      desc:
        "Move sold assets from contract to execution without friction. Track activations, fulfillment, and delivery so nothing promised ever goes missing.",
    },
  ] as const;
  
  export const crmNativeBand = {
    title: "Native to Salesforce and Dynamics.",
    lines: [
      "Reporting, approvals, workflows, and proof-of-performance are engineered directly into the CRM, keeping data accurate, auditable, and easy to act on.",
      "Advanced reporting gives teams real visibility into sold, activated, and fulfilled assets.",
      " Hands-on training, implementation, and ongoing support ensure teams adopt the system fully and get value fast as complexity grows.",
    ],
    // supporting: "We can confidently say that you’ve outgrown your tools.",
    // punch: "It’s time to upgrade.",
  };  
  
  export const weKnow = {
    title: "We know Partnerships",
    subtitle: "We don’t sell features. We engineer systems that stand up to change and unlock revenue.",
    points: [
      "Multi-year deals, per-season inventory, and evolving assets stay structured even as requirements shift.",
      "Native data models keep sales, operations, and reporting aligned without brittle integrations.",
      "Reps get clear visibility and fewer manual steps, so complex deals move faster, not slower.",
      "Sold assets flow cleanly into activation and fulfillment, ensuring nothing is missed and nothing is left unsold.",
    ],
    cta: { label: "Discover More", href: "#specifications" },
  };
  
  export const why = {
    title: "Why Agilitek?",
    lead: "You need a system that can keep up. That’s why we built Agilitek PX.",
    body: [
      "A modern, CRM-native platform engineered to handle complex partnerships without slowing your team down.",
      "But we’re not just a vendor. We work hands-on in your system and data, proactively identifying gaps, risks, and opportunities to drive more revenue.",
      "Engineering the platform is only part of the work.",
    ],
    cta: { label: "Discover More", href: "#contact" },
  };
  
  export const comparison = {
    leftTitle: "Agilitek PX",
    rightTitle: "Others",
    left: [
      "Native to Salesforce and Dynamics",
      "Just in time inventory",
      "Advanced calculation engine",
      "Fully customizable",
      "Pre-built reports and dashboards",
    ],
    right: [
      "Fast browsing",
      "Basic AI recommendations",
      "Restricts customization",
      "Fast browsing",
    ],
  };
  
  export const testimonial = {
    quote:
      "I think the biggest game-changer for us has been having an easy way to track fulfillments by status. With our previous Partnerships CRM, we were able to add assets to a deal but had to rely on notes or Excel spreadsheets to keep track of fulfillments.",
    name: "John Smith",
    title: "Head of Partnerships",
  };
  
  export const contact = {
    title: "Connect with us",
    subtitle: "Schedule a quick call to learn how Agilitek can help you.",
    cta: { label: "Learn More", href: "#contact" },
  };
  
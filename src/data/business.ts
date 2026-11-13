export const BUSINESS = {
  name: 'All Wired',
  legalName: 'All Wired LLC',
  phone: '(801) 800-2828',
  phoneHref: 'tel:+18018002828',
  website: 'https://www.allwiredamericanfork.com/',
  mapsLink: 'https://maps.app.goo.gl/8q2jbX66YRr7w4si7',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778810.3813490507!2d-111.53591245!3d40.315096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c3f51536f47977d%3A0xff166c070d80595c!2sAll%20Wired!5e0!3m2!1sen!2sin!4v1794200207676!5m2!1sen!2sin',
  address: {
    street: '282 N 300 E, Unit 307',
    city: 'American Fork',
    state: 'UT',
    zip: '84003',
    full: '282 N 300 E, Unit 307, American Fork, UT 84003',
  },
  hours: [
    { day: 'Monday', time: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '8:00 AM - 5:00 PM' },
    { day: 'Thursday', time: '8:00 AM - 5:00 PM' },
    { day: 'Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  license: {
    number: '123184-5502',
    state: 'UT',
    expires: '11/30/2026',
  },
  experience: 'Over 40 years of experience in the electrical industry',
  yearsExperience: '40+',
  rating: '5.0',
  reviewCount: 12,
  reviewSource: 'Google',
  paymentMethods: ['Credit Card'],
  emergencyServices: true,
  freeEstimates: true,
} as const;

export type ServiceSlug =
  | 'electrical-repair'
  | 'electrical-panel-upgrade'
  | 'ev-charger-installation'
  | 'remodel-and-addition-electrical'
  | 'residential-electrician'
  | 'commercial-electrician'
  | 'lighting-installation'
  | 'outlet-and-switch-installation'
  | 'surge-protection'
  | 'electrical-safety-inspection';

export interface ServiceInfo {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  commonIssues: string[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    shortName: 'Electrical Repair',
    tagline: 'Fast, dependable repairs for switches, outlets, and fixtures',
    description:
      'All Wired handles electrical repairs throughout American Fork and nearby Utah County communities. From flickering lights and dead outlets to tripping breakers and faulty switches, we diagnose the problem and make it safe again.',
    icon: 'Wrench',
    image:
      'https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician repairing wiring indoors',
    commonIssues: [
      'Outlets that have stopped working or feel warm to the touch',
      'Switches that flicker, spark, or fail to respond',
      'Circuit breakers that trip repeatedly under normal load',
      'Flickering or dimming lights in one or more rooms',
      'Burning smell or discoloration around outlets and switches',
      'Older two-prong outlets that lack modern grounding',
    ],
    process: [
      {
        title: 'Call and describe the issue',
        description:
          'Tell us what you are seeing or hearing. The more detail you share over the phone, the faster we can prepare before we arrive.',
      },
      {
        title: 'On-site diagnosis',
        description:
          'We inspect the affected circuit, outlet, switch, or fixture, trace the problem to its source, and explain what we find in plain terms.',
      },
      {
        title: 'Repair and safety check',
        description:
          'We complete the repair using quality parts, then test the circuit to confirm everything is working safely before we leave.',
      },
    ],
    faqs: [
      {
        q: 'Does All Wired offer emergency electrical repair?',
        a: 'Yes. All Wired offers emergency electrical services. If you have an urgent safety concern, call (801) 800-2828 and we will discuss availability.',
      },
      {
        q: 'How do I know if an outlet is dangerous?',
        a: 'Warmth, discoloration, a burning smell, sparking, or intermittent power are all signs an outlet needs attention. If you notice any of these, stop using the outlet and call us.',
      },
      {
        q: 'Can you repair older homes with outdated wiring?',
        a: 'Yes. We regularly work on older American Fork homes and can assess whether a repair will solve the issue or whether rewiring is the safer long-term option.',
      },
    ],
    metaTitle: 'Electrical Repair in American Fork, UT | All Wired',
    metaDescription:
      'Need electrical repair in American Fork, UT? All Wired fixes outlets, switches, breakers, and fixtures. Licensed electrician with emergency service. Call (801) 800-2828.',
  },
  {
    slug: 'electrical-panel-upgrade',
    name: 'Electrical Panel Upgrade',
    shortName: 'Panel Upgrade',
    tagline: 'Modernize your panel for safety, capacity, and code compliance',
    description:
      'An outdated or overloaded electrical panel is one of the most common safety issues in older Utah County homes. All Wired installs and upgrades electrical panels to give your home the capacity it needs for today\'s appliances, EV chargers, and remodels.',
    icon: 'Zap',
    image:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician installing a new electrical panel',
    commonIssues: [
      'Panel is 25+ years old or uses obsolete breaker technology',
      'Breakers trip frequently when running multiple appliances',
      'Panel cannot support added loads like an EV charger or AC unit',
      'Visible rust, corrosion, or heat damage inside the panel',
      'Home still has a 100-amp service and needs more capacity',
      'Insurance or inspection requirements demand a panel update',
    ],
    process: [
      {
        title: 'Discuss your needs over the phone',
        description:
          'Tell us about your home, your current panel, and what you are trying to power. We will discuss whether an upgrade is right for you.',
      },
      {
        title: 'Panel assessment and estimate',
        description:
          'We evaluate your existing service, calculate the capacity you need, and provide a free estimate for the panel upgrade.',
      },
      {
        title: 'Professional installation',
        description:
          'We coordinate with the power company, pull permits, install the new panel, and confirm everything passes inspection.',
      },
    ],
    faqs: [
      {
        q: 'How long does an electrical panel upgrade take?',
        a: 'Most residential panel upgrades are completed in a single day, though coordination with the utility company may add time. We will walk you through the timeline when you call.',
      },
      {
        q: 'Do you handle the permit and utility coordination?',
        a: 'Yes. We pull the necessary permits and coordinate with the power company so the process goes smoothly from start to finish.',
      },
      {
        q: 'How do I know if my panel needs upgrading?',
        a: 'Frequent breaker trips, a panel over 25 years old, or plans to add high-draw appliances like an EV charger are all good reasons to call and discuss an upgrade.',
      },
    ],
    metaTitle: 'Electrical Panel Upgrade in American Fork, UT | All Wired',
    metaDescription:
      'Upgrade your electrical panel in American Fork, UT with All Wired. Licensed electrician handling permits, utility coordination, and installation. Call (801) 800-2828.',
  },
  {
    slug: 'ev-charger-installation',
    name: 'EV Charger Installation',
    shortName: 'EV Charger Install',
    tagline: 'Level 2 home charging installed safely and to code',
    description:
      'All Wired installs Level 2 EV charging stations for homeowners throughout American Fork and nearby communities. We handle the service upgrade, wiring, permits, and city coordination so your charger is ready to use.',
    icon: 'BatteryCharging',
    image:
      'https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Home EV charging station installed on a wall',
    commonIssues: [
      'Standard 120V outlet charges too slowly for daily driving',
      'Garage or exterior needs a dedicated 240V circuit for Level 2 charging',
      'Existing panel needs more capacity to support an EV charger',
      'Need a charger installed for a commercial or multi-tenant property',
      'Permit and utility requirements for a safe, code-compliant install',
    ],
    process: [
      {
        title: 'Tell us about your vehicle and home',
        description:
          'Share your EV model, where you park, and your current panel setup. We will discuss the best charging solution for your situation.',
      },
      {
        title: 'Assessment and estimate',
        description:
          'We check your panel capacity, determine whether a service upgrade is needed, and provide a free estimate for the full installation.',
      },
      {
        title: 'Installation and city coordination',
        description:
          'We run the dedicated circuit, mount the charger, handle permits and city coordination, and confirm everything works before we leave.',
      },
    ],
    faqs: [
      {
        q: 'Do I need a panel upgrade to install an EV charger?',
        a: 'It depends on your current panel capacity and what else your home runs. Some homes need a service upgrade first. We will assess this and let you know when you call.',
      },
      {
        q: 'Do you install commercial EV charging stations?',
        a: 'Yes. All Wired installs EV charging stations for businesses as well as homes. Call us to discuss your property and charging needs.',
      },
      {
        q: 'Can you supply the charger, or do I provide my own?',
        a: 'Both options are available. We can install a charger you have already purchased or discuss options when you call.',
      },
    ],
    metaTitle: 'EV Charger Installation in American Fork, UT | All Wired',
    metaDescription:
      'Install a Level 2 EV charger at your American Fork, UT home or business with All Wired. Licensed electrician handling permits and panel upgrades. Call (801) 800-2828.',
  },
  {
    slug: 'remodel-and-addition-electrical',
    name: 'Remodel & Addition Electrical',
    shortName: 'Remodel Electrical',
    tagline: 'Complete wiring for home additions and remodels',
    description:
      'Planning a home addition or remodel in American Fork? All Wired handles the full electrical installation, from rough-in wiring to final fixtures, so your project is safe, up to code, and ready for inspection.',
    icon: 'Home',
    image:
      'https://images.pexels.com/photos/5691495/pexels-photo-5691495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrical wiring installed during a home remodel',
    commonIssues: [
      'New addition needs full electrical rough-in and wiring',
      'Kitchen or bathroom remodel requires updated circuits and outlets',
      'Finished basement needs lighting, outlets, and smoke detectors',
      'Older home remodel needs wiring brought up to current code',
      'Garage conversion requires new circuits and lighting',
    ],
    process: [
      {
        title: 'Discuss your project plans',
        description:
          'Share what you are building, your timeline, and what the space will be used for. We will talk through the electrical scope over the phone.',
      },
      {
        title: 'Rough-in and wiring',
        description:
          'We install the boxes, wiring, and circuits during construction, coordinating with your contractor to stay on schedule.',
      },
      {
        title: 'Final fixtures and inspection',
        description:
          'Once walls are finished, we install outlets, switches, and lighting, then confirm everything passes inspection.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with my contractor or builder?',
        a: 'Yes. We routinely coordinate with general contractors, builders, and homeowners to keep remodel electrical work on schedule and up to code.',
      },
      {
        q: 'Can you handle both residential and commercial remodels?',
        a: 'Yes. All Wired handles electrical work for both home additions and commercial tenant improvements. Call us to discuss your project.',
      },
      {
        q: 'Do you pull permits for remodel electrical work?',
        a: 'Yes. We handle permitting and inspections so your remodel is compliant and ready to pass.',
      },
    ],
    metaTitle: 'Remodel & Addition Electrical in American Fork, UT | All Wired',
    metaDescription:
      'Complete electrical wiring for home additions and remodels in American Fork, UT. Licensed electrician handling rough-in, fixtures, and permits. Call (801) 800-2828.',
  },
  {
    slug: 'residential-electrician',
    name: 'Residential Electrician',
    shortName: 'Residential',
    tagline: 'Trusted home electrical services across Utah County',
    description:
      'All Wired provides residential electrical services throughout American Fork and nearby communities. From small repairs to full rewiring and new installations, we treat every home project with care and personalized attention.',
    icon: 'House',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician working on a residential circuit breaker panel',
    commonIssues: [
      'Outlets, switches, or fixtures that need repair or replacement',
      'Home needs additional circuits for new appliances or rooms',
      'Panel needs upgrading to handle modern electrical loads',
      'Wiring is outdated and needs replacement for safety',
      'New lighting, ceiling fans, or smart home upgrades',
    ],
    process: [
      {
        title: 'Call with your home electrical needs',
        description:
          'Tell us what you are experiencing or planning. We will discuss your options and schedule a visit if needed.',
      },
      {
        title: 'On-site evaluation',
        description:
          'We inspect your home\'s electrical system, identify what is needed, and provide a free estimate for the work.',
      },
      {
        title: 'Quality workmanship',
        description:
          'We complete the work to code, test everything for safety, and leave your home clean and powered.',
      },
    ],
    faqs: [
      {
        q: 'What residential services does All Wired offer?',
        a: 'We handle repairs, panel upgrades, EV charger installation, remodel wiring, lighting, outlets, switches, and more for homes throughout the American Fork area.',
      },
      {
        q: 'Do you offer free estimates for home electrical work?',
        a: 'Yes. All Wired offers free project estimates. Call (801) 800-2828 to discuss your project and get an estimate.',
      },
      {
        q: 'Are you licensed for residential electrical work in Utah?',
        a: 'Yes. All Wired is licensed in Utah, license number 123184-5502, with over 40 years of experience in the electrical industry.',
      },
    ],
    metaTitle: 'Residential Electrician in American Fork, UT | All Wired',
    metaDescription:
      'Residential electrician serving American Fork, UT and nearby areas. Repairs, panel upgrades, EV chargers, remodel wiring, and more. Licensed and experienced. Call (801) 800-2828.',
  },
  {
    slug: 'commercial-electrician',
    name: 'Commercial Electrician',
    shortName: 'Commercial',
    tagline: 'Electrical wiring and panel work for businesses',
    description:
      'All Wired handles commercial electrical projects in American Fork and the surrounding Utah County area. From wiring and panel upgrades for businesses to EV charging stations and tenant improvements, we deliver professional results with minimal disruption.',
    icon: 'Building2',
    image:
      'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician working on a commercial control panel',
    commonIssues: [
      'Business needs a panel upgrade or additional circuits',
      'Commercial space requires wiring for a tenant improvement',
      'Office or retail needs EV charging for customers or fleet',
      'Outlets, lighting, or fixtures need repair or replacement',
      'Building addition or remodel requires full electrical installation',
    ],
    process: [
      {
        title: 'Discuss your business needs',
        description:
          'Tell us about your property, your electrical needs, and your timeline. We will discuss how we can help keep your business running.',
      },
      {
        title: 'Site evaluation and estimate',
        description:
          'We assess your commercial electrical system and provide a free estimate for the scope of work.',
      },
      {
        title: 'Professional installation',
        description:
          'We complete the work efficiently, coordinate with utilities and inspectors, and minimize disruption to your operations.',
      },
    ],
    faqs: [
      {
        q: 'What commercial electrical services do you offer?',
        a: 'All Wired handles commercial wiring and panel upgrades, EV charger installation, tenant improvements, additions and remodels, and general electrical repair for businesses.',
      },
      {
        q: 'Can you install EV chargers at a commercial property?',
        a: 'Yes. We install EV charging stations for businesses, including materials-provided and customer-provided options. Call us to discuss your property.',
      },
      {
        q: 'Do you coordinate with the power company for commercial work?',
        a: 'Yes. We handle coordination with the utility company, permits, and inspections for commercial electrical projects.',
      },
    ],
    metaTitle: 'Commercial Electrician in American Fork, UT | All Wired',
    metaDescription:
      'Commercial electrician in American Fork, UT. Panel upgrades, wiring, EV chargers, and tenant improvements for businesses. Licensed and experienced. Call (801) 800-2828.',
  },
  {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    shortName: 'Lighting',
    tagline: 'Indoor and outdoor lighting installed safely and beautifully',
    description:
      'All Wired installs lighting fixtures for homes throughout American Fork and nearby Utah County communities. From recessed lighting and ceiling fans to exterior and landscape lighting, we handle the wiring, switches, and installation so your lighting looks great and works safely.',
    icon: 'Lightbulb',
    image:
      'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician installing a ceiling light fixture',
    commonIssues: [
      'Recessed can lighting that flickers, buzzes, or has failed',
      'Ceiling fan that wobbles, makes noise, or needs a new mounting box',
      'Outdoor or landscape lighting that needs a dedicated circuit',
      'Kitchen or bathroom lighting upgrade during a remodel',
      'Older fixtures that do not meet current code or efficiency standards',
    ],
    process: [
      {
        title: 'Describe your lighting project',
        description:
          'Tell us what you want to install, where, and whether you have existing wiring in place. We will discuss options and feasibility over the phone.',
      },
      {
        title: 'Assessment and estimate',
        description:
          'We check the existing wiring, switches, and box capacity, then provide a free estimate for the installation.',
      },
      {
        title: 'Installation and testing',
        description:
          'We install the fixture, run any new wiring needed, and test everything to confirm it works safely and looks right.',
      },
    ],
    faqs: [
      {
        q: 'Can you install recessed lighting in an existing ceiling?',
        a: 'Yes. We install recessed lighting in both new construction and existing ceilings. We will assess your ceiling and wiring when you call.',
      },
      {
        q: 'Do you install outdoor and landscape lighting?',
        a: 'Yes. We install exterior lighting, landscape lighting, and dedicated circuits for outdoor fixtures throughout American Fork and nearby areas.',
      },
      {
        q: 'Can you install a ceiling fan where there is no existing box?',
        a: 'Yes. We can install a proper fan-rated mounting box and run wiring as needed. Call us to discuss your situation.',
      },
    ],
    metaTitle: 'Lighting Installation in American Fork, UT | All Wired',
    metaDescription:
      'Lighting installation in American Fork, UT. Recessed lighting, ceiling fans, outdoor lighting, and fixture upgrades. Licensed electrician. Call (801) 800-2828.',
  },
  {
    slug: 'outlet-and-switch-installation',
    name: 'Outlet & Switch Installation',
    shortName: 'Outlets & Switches',
    tagline: 'Safe, code-compliant outlets and switches for any room',
    description:
      'All Wired installs and replaces outlets, switches, and fixtures throughout American Fork and nearby communities. Whether you need GFCI outlets in a kitchen, a smart switch, or additional outlets for a new appliance, we do it safely and to code.',
    icon: 'Plug',
    image:
      'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrical outlet and switch installation',
    commonIssues: [
      'Kitchen, bath, or garage needs GFCI outlets for code compliance',
      'Not enough outlets — relying on power strips and extension cords',
      'Two-prong outlets that need grounding and three-prong upgrades',
      'Switches that are warm, discolored, or do not work reliably',
      'Need a smart switch, dimmer, or timer installed',
    ],
    process: [
      {
        title: 'Tell us what you need',
        description:
          'Describe the outlets or switches you want installed or replaced. We will discuss what is involved and schedule a visit.',
      },
      {
        title: 'On-site assessment',
        description:
          'We check the existing wiring and box capacity, confirm what is needed, and provide a free estimate.',
      },
      {
        title: 'Installation and testing',
        description:
          'We install the outlets or switches to code, test each one, and confirm everything is safe before we leave.',
      },
    ],
    faqs: [
      {
        q: 'Do I need GFCI outlets in my kitchen and bathroom?',
        a: 'Modern code requires GFCI protection in kitchens, bathrooms, garages, and outdoor areas. We can install or upgrade GFCI outlets to bring your home up to code.',
      },
      {
        q: 'Can you install smart switches and dimmers?',
        a: 'Yes. We install smart switches, dimmers, and timer switches. We will check that your wiring is compatible when you call.',
      },
      {
        q: 'Can you add outlets where there are none?',
        a: 'Yes. We run new wiring and install additional outlets where you need them, including for new appliances, TVs, and home offices.',
      },
    ],
    metaTitle: 'Outlet & Switch Installation in American Fork, UT | All Wired',
    metaDescription:
      'Outlet and switch installation in American Fork, UT. GFCI outlets, smart switches, dimmers, and new outlets. Licensed electrician. Call (801) 800-2828.',
  },
  {
    slug: 'surge-protection',
    name: 'Surge Protection',
    shortName: 'Surge Protection',
    tagline: 'Whole-home surge protection for your appliances and electronics',
    description:
      'All Wired installs whole-home surge protection for homeowners in American Fork and nearby Utah County communities. A panel-mounted surge protector guards your appliances, electronics, and EV charger against damaging power surges from lightning and utility switching.',
    icon: 'ShieldCheck',
    image:
      'https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician working on an electrical panel for surge protection',
    commonIssues: [
      'Sensitive electronics damaged by power surges',
      'No whole-home surge protection installed at the panel',
      'Utility power fluctuations in the neighborhood',
      'Expensive appliances and HVAC equipment at risk',
      'Want to protect a newly installed EV charger',
    ],
    process: [
      {
        title: 'Discuss your protection needs',
        description:
          'Tell us about your home, your appliances, and whether you have any existing surge protection. We will explain your options.',
      },
      {
        title: 'Panel assessment',
        description:
          'We check your panel and determine the right surge protector for your electrical system.',
      },
      {
        title: 'Installation and verification',
        description:
          'We install the whole-home surge protector at the panel and confirm it is working correctly.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a power strip and whole-home surge protection?',
        a: 'Power strips only protect devices plugged into them. Whole-home surge protection installs at your panel and protects everything in the house, including appliances and hardwired devices.',
      },
      {
        q: 'Do I still need power strip surge protectors with whole-home protection?',
        a: 'A whole-home protector handles large surges, but point-of-use protectors add an extra layer for very sensitive electronics. We recommend both for maximum protection.',
      },
      {
        q: 'Can you install surge protection with a new panel upgrade?',
        a: 'Yes. We can install a whole-home surge protector at the same time as a panel upgrade. Call us to discuss combining the work.',
      },
    ],
    metaTitle: 'Surge Protection in American Fork, UT | All Wired',
    metaDescription:
      'Whole-home surge protection in American Fork, UT. Protect your appliances and electronics from power surges. Licensed electrician. Call (801) 800-2828.',
  },
  {
    slug: 'electrical-safety-inspection',
    name: 'Electrical Safety Inspection',
    shortName: 'Safety Inspection',
    tagline: 'Thorough inspection to identify hazards before they become problems',
    description:
      'All Wired provides electrical safety inspections for homes in American Fork and nearby Utah County communities. We check your panel, wiring, outlets, and grounding to identify potential hazards and code issues before they become dangerous or expensive problems.',
    icon: 'Search',
    image:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician inspecting a residential fuse box for safety',
    commonIssues: [
      'Home is 25+ years old and has never had an electrical inspection',
      'Planning a remodel, addition, or EV charger installation',
      'Buying or selling a home and want an electrical assessment',
      'Occasional breaker trips, flickering lights, or warm outlets',
      'Insurance or inspection requirements need an electrician sign-off',
    ],
    process: [
      {
        title: 'Describe your home and concerns',
        description:
          'Tell us the age of your home, any issues you have noticed, and why you want an inspection. We will discuss what to expect.',
      },
      {
        title: 'Comprehensive inspection',
        description:
          'We inspect the panel, wiring, outlets, switches, grounding, and key circuits, documenting any safety concerns or code issues.',
      },
      {
        title: 'Findings and recommendations',
        description:
          'We explain what we found in plain terms and recommend any repairs or upgrades, with a free estimate if work is needed.',
      },
    ],
    faqs: [
      {
        q: 'When should I get an electrical safety inspection?',
        a: 'If your home is over 25 years old, you are planning a remodel or EV charger, you are buying or selling, or you have noticed any electrical issues, an inspection is a smart idea.',
      },
      {
        q: 'How long does an inspection take?',
        a: 'A typical residential inspection takes one to two hours, depending on the size and age of the home. We will give you a better estimate when you call.',
      },
      {
        q: 'Will you fix problems you find during the inspection?',
        a: 'We document all findings and provide a free estimate for any recommended repairs. You decide what to have done — there is no obligation.',
      },
    ],
    metaTitle: 'Electrical Safety Inspection in American Fork, UT | All Wired',
    metaDescription:
      'Electrical safety inspection in American Fork, UT. Comprehensive check of your panel, wiring, outlets, and grounding. Licensed electrician. Call (801) 800-2828.',
  },
];

export type LocationSlug =
  | 'american-fork-ut'
  | 'lehi-ut'
  | 'pleasant-grove-ut'
  | 'highland-ut'
  | 'alpine-ut'
  | 'cedar-hills-ut'
  | 'lindon-ut'
  | 'saratoga-springs-ut'
  | 'orem-ut'
  | 'provo-ut'
  | 'draper-ut';

export interface LocationProject {
  title: string;
  description: string;
}

export interface LocationInfo {
  slug: LocationSlug;
  city: string;
  state: 'UT';
  county: string;
  short: string;
  description: string;
  context: string;
  housingProfile: string;
  challenges: string[];
  projects: LocationProject[];
  utilityInfo: {
    powerCompany: string;
    permitsOffice: string;
    notes: string;
  };
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const LOCATIONS: LocationInfo[] = [
  {
    slug: 'american-fork-ut',
    city: 'American Fork',
    state: 'UT',
    county: 'Utah County',
    short: 'American Fork',
    description:
      'All Wired is proudly based in American Fork, UT. Located at 282 N 300 E, we provide dependable residential and commercial electrical repairs, 200A panel upgrades, EV charger installations, and whole-home rewiring across American Fork neighborhoods.',
    context:
      'American Fork serves as the direct headquarters and primary service hub for All Wired LLC. The city features a distinctive mix of historic residential properties near downtown Main Street, established mid-century brick homes from the 1950s and 1970s along 500 East, and contemporary custom subdivisions along 900 West. Because our shop is located right here in town, American Fork homeowners enjoy rapid dispatch, same-day emergency repairs, and electricians who intimately know local Utah building codes.',
    housingProfile:
      'Homes built in American Fork between the 1950s and 1980s frequently feature original 100-amp split-bus electrical panels, ungrounded two-prong receptacles, or early aluminum branch wiring. As modern families add high-draw appliances like central air conditioning, induction ranges, and Level 2 electric vehicle chargers, these older electrical systems become critically overloaded.',
    challenges: [
      'Outdated 60A and 100A main service panels lacking physical breaker space for modern electrical loads',
      'Ungrounded two-prong receptacles in established living areas and bedrooms requiring GFCI/AFCI retrofits',
      'Aluminum branch wiring connections in 1960s-1970s homes requiring Copalum or AlumiConn remediation',
      'Need for whole-home surge protection against regional Rocky Mountain Power grid fluctuations',
    ],
    projects: [
      {
        title: '200-Amp Main Panel Heavy-Up on 300 East',
        description:
          'Replaced a hazardous 100-amp Zinsco split-bus panel with a modern Square D 200-amp service panel, coordinated meter disconnect with Rocky Mountain Power, and passed City of American Fork final inspection in a single day.',
      },
      {
        title: 'Whole-Home Recessed Lighting & Rewiring near Greenwood Skate Park',
        description:
          'Removed older surface-mount fixtures and installed 18 wafer-thin canless LED recessed lights with Lutron smart dimmers, plus dedicated 20-amp kitchen small appliance branch circuits.',
      },
      {
        title: 'Level 2 EV Wall Connector Installation off 900 West',
        description:
          'Ran a dedicated 60-amp 240-volt circuit through protective EMT conduit from the garage panel to power a hardwired Tesla Universal Wall Connector.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power (Utah North Region)',
      permitsOffice: 'City of American Fork Community Development / Building Division',
      notes:
        'We pull all electrical permits directly with American Fork City and coordinate scheduled meter disconnect/reconnects with Rocky Mountain Power.',
    },
    faqs: [
      {
        q: 'Is All Wired locally based in American Fork?',
        a: 'Yes. Our shop and office are located at 282 N 300 E, Unit 307 in American Fork, UT 84003. When you call, you speak directly with local electricians who live and work right here in town.',
      },
      {
        q: 'How quickly can you respond to an electrical emergency in American Fork?',
        a: 'Because our team is based in American Fork, we offer same-day emergency electrical dispatch for dangerous breaker panel failures, burning smells, power loss to heating circuits, and sparking receptacles.',
      },
      {
        q: 'Do you pull permits for panel upgrades in American Fork?',
        a: 'Yes. We manage the entire municipal permitting process with the American Fork Building Division, coordinate the Rocky Mountain Power meter release, and schedule the final city inspection.',
      },
      {
        q: 'Can you upgrade the two-prong outlets in my older American Fork home?',
        a: 'Absolutely. We install modern three-prong tamper-resistant GFCI and AFCI receptacles or pull new grounded copper circuits, ensuring full National Electrical Code compliance.',
      },
    ],
    metaTitle: 'Electrician in American Fork, UT | All Wired LLC',
    metaDescription:
      'Licensed electrician based in American Fork, UT. 40+ years experience providing repairs, 200A panel upgrades, EV chargers, and wiring. Call (801) 800-2828.',
  },
  {
    slug: 'lehi-ut',
    city: 'Lehi',
    state: 'UT',
    county: 'Utah County',
    short: 'Lehi',
    description:
      'All Wired is the trusted residential electrician for Lehi, UT, located just minutes north of our American Fork headquarters. We deliver premier electrical panel upgrades, basement finish electrical rough-ins, and Level 2 EV charging stations throughout Silicon Slopes and Lehi communities.',
    context:
      'Lehi has evolved into Utah’s dynamic Silicon Slopes tech hub, experiencing unprecedented residential expansion. Neighborhoods across Traverse Mountain, Thanksgiving Point, Cold Springs Ranch, and Holbrook Farms feature newer multi-level homes that demand high electrical capacity. From dual-EV families needing high-amperage garage circuits to homeowners finishing spacious basements, All Wired delivers clean, code-certified electrical craftsmanship.',
    housingProfile:
      'While historic Lehi near State Street features older mid-century homes requiring service panel modernization, the majority of Lehi homes were constructed over the last 15 years. These properties frequently have 200A builder-grade panels that are already packed with breakers for central AC, heat pumps, and modern appliances, leaving zero space for basement finishes or EV chargers.',
    challenges: [
      'Builder-grade panels with full bus bars needing 100A sub-panel additions for basement living spaces',
      'High demand for dual Level 2 EV chargers (48A continuous charging) requiring precise load calculations',
      'Finishing unfinished basements with multi-zone recessed lighting, bathroom exhaust fans, and wet bar circuits',
      'Smart electrical upgrades including smart breaker panels, automated lighting scenes, and home server circuits',
    ],
    projects: [
      {
        title: 'Traverse Mountain Dual EV Charger & 100A Subpanel',
        description:
          'Calculated existing residential load, installed a 100-amp sub-panel in the garage, and ran twin dedicated 50-amp circuits for simultaneous Level 2 EV charging.',
      },
      {
        title: 'Full Basement Electrical Rough-In & Trim off 2100 North',
        description:
          'Wired an 1,800 sq ft basement finish including 2 bedrooms with AFCI circuits, full bathroom with GFCI protection, home theater audio/video conduit, and 24 recessed LED wafer lights.',
      },
      {
        title: 'Backyard Hot Tub 50A GFCI Disconnect in Cold Springs Ranch',
        description:
          'Trenched 60 feet of underground direct-burial conduit, installed an exterior weatherproof 50-amp GFCI disconnect panel, and wired a luxury swim spa.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Lehi City Power / Rocky Mountain Power',
      permitsOffice: 'Lehi City Building & Safety Department',
      notes:
        'Lehi operates its own municipal power utility (Lehi City Power) alongside Rocky Mountain Power service areas. We are thoroughly versed in Lehi City Power meter connection specifications and local inspection codes.',
    },
    faqs: [
      {
        q: 'Does All Wired work with Lehi City Power?',
        a: 'Yes. We regularly coordinate meter disconnects, service upgrades, and inspections with Lehi City Power as well as Rocky Mountain Power.',
      },
      {
        q: 'Can you install an EV charger at my Traverse Mountain home?',
        a: 'Yes. We install Tesla Wall Connectors, ChargePoint, and universal Level 2 EV charging stations, handling electrical load calculations to ensure your panel handles continuous charging safely.',
      },
      {
        q: 'Do you wire basement finishes in Lehi?',
        a: 'Basement finishing is one of our primary specialties. We handle complete electrical design, rough-in wiring, sub-panel installation, and final fixture trim-out for Lehi homeowners.',
      },
      {
        q: 'How far is All Wired from Lehi?',
        a: 'Our shop is located right on the American Fork/Lehi border on 300 East. We are less than 7 minutes from Lehi Main Street and Traverse Mountain.',
      },
    ],
    metaTitle: 'Electrician in Lehi, UT | Panel Upgrades & EV Chargers | All Wired',
    metaDescription:
      'Licensed electrician serving Lehi, UT and Silicon Slopes. Expert 200A panel upgrades, basement wiring, and Level 2 EV charger installations. Call (801) 800-2828.',
  },
  {
    slug: 'highland-ut',
    city: 'Highland',
    state: 'UT',
    county: 'Utah County',
    short: 'Highland',
    description:
      'Professional electrician serving Highland, UT, directly west of American Fork along SR-92. All Wired specializes in large-lot residential electrical upgrades, detached workshop sub-panels, whole-home backup generators, and custom home rewiring.',
    context:
      'Highland is an upscale community renowned for spacious half-acre to multi-acre residential parcels, equestrian properties, and custom homes. Highland homeowners often require specialized electrical solutions that standard electrical contractors overlook—such as high-capacity sub-panels for detached woodworking shops, 240V RV electrical pedestals, and whole-home standby generator systems to weather winter canyon gusts coming off Timpanogos.',
    housingProfile:
      'Highland features substantial custom single-family estates built from the 1980s through the 2010s. Homes often encompass 4,000 to 8,000+ square feet with detached garages, outbuildings, heated swimming pools, and high-draw electric HVAC equipment that require 200A to 400A service heavy-ups.',
    challenges: [
      'Detached workshops and barns requiring underground trenching and dedicated 100A sub-panels',
      'Frequent winter power outages caused by canyon winds necessitating standby generator transfer switches',
      'High total ampacity demands from multiple heat pumps, swimming pool pumps, and electric vehicle chargers',
      'Outdoor landscape and driveway architectural lighting across large acreage properties',
    ],
    projects: [
      {
        title: '100-Amp Detached Shop Sub-Panel off Timpanogos Highway',
        description:
          'Excavated a 110-foot trench, placed heavy-duty PVC conduit with copper feeders, and installed a 100A subpanel powering 240V air compressors and metalworking equipment.',
      },
      {
        title: 'Generac 22kW Whole-Home Standby Generator Installation',
        description:
          'Installed a 200A automatic transfer switch (ATS) and poured concrete equipment pad for a standby natural gas generator providing instant whole-home power resilience.',
      },
      {
        title: '240V 50-Amp RV Storage Power Station',
        description:
          'Wired an outdoor weatherproof RV pedestal with dedicated 50A 120/240V NEMA 14-50R and 30A TT-30 receptacles for motorhome climate control.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'Highland City Building Division',
      notes:
        'Highland City requires specific municipal building permits for outbuilding underground feeders and automatic transfer switches. We manage all paperwork and scheduling.',
    },
    faqs: [
      {
        q: 'Can you run electricity from my Highland house to a detached garage or workshop?',
        a: 'Yes. We trench underground conduit, size copper feeder conductors according to distance and voltage drop, and install dedicated sub-panels with full breaker protection.',
      },
      {
        q: 'Do you install whole-home backup generators in Highland?',
        a: 'Yes. We install automatic standby generators and transfer switches so your heating, refrigeration, and well pumps keep running during winter canyon power outages.',
      },
      {
        q: 'What is your service response time in Highland?',
        a: 'Highland directly borders American Fork along 6000 West and SR-92. Our technicians arrive in Highland within 10 to 15 minutes of dispatch.',
      },
    ],
    metaTitle: 'Electrician in Highland, UT | Custom Wiring & Generators | All Wired',
    metaDescription:
      'Licensed electrician serving Highland, UT. High-capacity panel upgrades, detached workshop wiring, backup generators, and EV chargers. Call (801) 800-2828.',
  },
  {
    slug: 'alpine-ut',
    city: 'Alpine',
    state: 'UT',
    county: 'Utah County',
    short: 'Alpine',
    description:
      'Premier residential electrical contractor serving Alpine, UT. Located at the base of the Wasatch Range, All Wired delivers custom luxury home electrical solutions, 400-amp service heavy-ups, high-ceiling chandelier installations, and automatic standby power.',
    context:
      'Nestled along the picturesque slopes of Lone Peak and American Fork Canyon, Alpine is celebrated for its sprawling custom estates and luxury mountain-bench homes. These extraordinary properties require master-level electrical craftsmanship capable of handling intricate multi-switch lighting scenes, high-vaulted ceiling fixtures, heated roof de-icing systems, and sophisticated backup electrical infrastructure.',
    housingProfile:
      'Alpine homes are predominantly large-scale custom builds ranging from 5,000 to over 12,000 square feet. Many properties feature dual 200A electrical services (400A total), multi-story foyers requiring specialized fixture lifting mechanisms, and extensive exterior grounds requiring architectural landscape illumination.',
    challenges: [
      'Vaulted foyer and great room chandelier installations requiring motorized lift systems',
      'Roof eave and valley heat tape circuit installations to combat heavy Wasatch winter snow and ice dams',
      'Mountain canyon weather leading to frequent overhead grid interruptions',
      'Architectural estate landscape lighting with multi-zone dusk-to-dawn astronomical timers',
    ],
    projects: [
      {
        title: 'Motorized Chandelier Lift & Custom LED Dimming on Alpine Bench',
        description:
          'Installed an Aladdin Light Lift motorized hoist in a 24-foot vaulted foyer, safely supporting a 180-pound crystal chandelier with integrated Lutron wireless dimming.',
      },
      {
        title: '400-Amp Dual Panel Service Heavy-Up',
        description:
          'Upgraded an older estate electrical service to dual 200A Square D QO panels with whole-home surge suppression and balanced phase loads for continuous geothermal heat pumps.',
      },
      {
        title: 'Roof Eave Heat Cable & De-Icing Dedicated Circuits',
        description:
          'Installed GFEP (Ground Fault Equipment Protection) 30A circuits controlling self-regulating heat trace cables along roof eaves, preventing winter ice dams and gutter damage.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'Alpine City Building Department',
      notes:
        'Alpine electrical permits require rigorous load calculations for 400A services. We provide engineered schematics and coordinate final municipal inspections.',
    },
    faqs: [
      {
        q: 'Can you safely hang heavy chandeliers in high Alpine entryways?',
        a: 'Yes. We install motorized chandelier lifts and structural steel ceiling boxes rated for fixtures weighing 200+ pounds, making future bulb replacement and cleaning effortless.',
      },
      {
        q: 'How do you protect Alpine homes from lightning surges and power spikes?',
        a: 'We install Type 1 and Type 2 whole-house surge protective devices (SPD) directly inside your main service panel, safeguarding sensitive smart home electronics and high-end appliances.',
      },
      {
        q: 'Do you service homes in the Alpine Cove and Alpine Bench neighborhoods?',
        a: 'Yes, we regularly work on luxury estates throughout Alpine Cove, Box Elder Canyon, and the foothills.',
      },
    ],
    metaTitle: 'Electrician in Alpine, UT | Luxury Home Wiring & 400A Panels | All Wired',
    metaDescription:
      'Premier licensed electrician serving Alpine, UT. 400-amp service upgrades, chandelier installations, backup generators, and custom wiring. Call (801) 800-2828.',
  },
  {
    slug: 'pleasant-grove-ut',
    city: 'Pleasant Grove',
    state: 'UT',
    county: 'Utah County',
    short: 'Pleasant Grove',
    description:
      'All Wired provides licensed electrical repair, panel replacements, EV charger installations, and lighting renovations to Pleasant Grove, UT. Located immediately south of our American Fork base, we are your neighborhood electrician.',
    context:
      'Known as Utah’s City of Trees, Pleasant Grove shares a rich community history with American Fork. From mature residential neighborhoods near Battle Creek and the historic downtown grid to hillside custom homes along the east bench, Pleasant Grove properties represent diverse electrical eras requiring skilled diagnostic capabilities and code compliance.',
    housingProfile:
      'Pleasant Grove contains many mid-century ramblers and split-level homes built between 1960 and 1990. These homes often feature original 100-amp panels that struggle to power modern air conditioning and entertainment systems, as well as outdated wiring lacking modern arc-fault (AFCI) safety protection.',
    challenges: [
      'Outdated Zinsco and Federal Pacific electric panels that present elevated fire hazards',
      'Kitchen and bathroom circuits lacking code-required GFCI protection near water sources',
      'Inefficient incandescent surface lighting ready for modern recessed LED wafer conversions',
      'Dedicated circuits needed for basement accessory apartments (ADUs) and rental finishes',
    ],
    projects: [
      {
        title: 'Federal Pacific Panel Replacement near Battle Creek Falls',
        description:
          'Replaced a hazardous 100A Federal Pacific Stab-Lok panel with a 200A Siemens panel, installed two new 8-foot copper grounding rods, and added whole-house surge protection.',
      },
      {
        title: 'Full Kitchen Remodel Dedicated Circuit Wiring off Center Street',
        description:
          'Routed dedicated circuits for an induction cooktop, double wall oven, microwave drawer, dishwasher, and island GFCI receptacles with under-cabinet LED task lighting.',
      },
      {
        title: 'Accessory Apartment (ADU) Subpanel Installation',
        description:
          'Installed a dedicated 60-amp sub-panel for a permitted basement rental unit, complete with separate AFCI breaker runs for bedrooms and dedicated kitchen appliance lines.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'Pleasant Grove City Community Development',
      notes:
        'We pull all electrical permits directly through Pleasant Grove City and coordinate meter releases with Rocky Mountain Power.',
    },
    faqs: [
      {
        q: 'Are you close to Pleasant Grove?',
        a: 'Yes! Pleasant Grove borders American Fork directly along State Street. Our electricians are typically on-site in Pleasant Grove within 5 to 10 minutes.',
      },
      {
        q: 'Why should I replace a Federal Pacific electrical panel in my Pleasant Grove home?',
        a: 'Federal Pacific Stab-Lok panels are notorious for failing to trip during overloads, creating significant fire hazards. Insurance companies frequently require their replacement before binding home policies.',
      },
      {
        q: 'Can you add recessed lighting to my older textured plaster ceiling?',
        a: 'Yes. We use specialized drywall tools and slim wafer LED fixtures that fit flush into ceilings with minimal disruption to existing plaster or texture.',
      },
    ],
    metaTitle: 'Electrician in Pleasant Grove, UT | Panel Upgrades & Repairs | All Wired',
    metaDescription:
      'Licensed electrician serving Pleasant Grove, UT. Fast repairs, 200A panel upgrades, EV charger installation, and kitchen/bath rewiring. Call (801) 800-2828.',
  },
  {
    slug: 'lindon-ut',
    city: 'Lindon',
    state: 'UT',
    county: 'Utah County',
    short: 'Lindon',
    description:
      'All Wired delivers expert commercial electrical contracting and residential services to Lindon, UT. From 3-phase industrial power distribution in Lindon business parks to home panel upgrades and EV chargers, we handle projects of all scales.',
    context:
      'Lindon occupies a strategic position directly between American Fork and Orem, featuring both expansive residential acreage properties (A Little Bit of Country) and vibrant commercial and tech centers along State Street and 2000 West. Our electricians serve both homeowners needing residential wiring updates and business owners requiring commercial tenant improvements.',
    housingProfile:
      'Residential Lindon features generous half-acre to one-acre home sites with detached shops, barns, and animal facilities, alongside newer high-end custom subdivisions. The commercial corridor houses manufacturing facilities, tech offices, and auto services requiring heavy commercial power.',
    challenges: [
      'Commercial tenant improvements requiring 3-phase 208V/480V power distribution and EMT conduit',
      'Detached hobby shops and workshops requiring high-amperage 240V equipment circuits',
      'High-bay LED lighting retrofits for commercial warehouses and automotive bays',
      'Commercial EV charging station banks for Lindon business fleets and employees',
    ],
    projects: [
      {
        title: 'Commercial Warehouse High-Bay LED Lighting Retrofit off 2000 West',
        description:
          'Replaced 48 outdated 400-watt metal halide fixtures with ultra-efficient 150-watt commercial LED high-bays, cutting warehouse lighting energy consumption by 62%.',
      },
      {
        title: 'Detached 100A Woodworking Shop Wiring on Geneva Road',
        description:
          'Installed a 100A subpanel, 12 dedicated 20A 120V tool circuits, and three 240V 30A outlets for dust collection, table saws, and planer equipment.',
      },
      {
        title: 'Fleet Level 2 Commercial EV Charging Station Bank',
        description:
          'Designed and installed a 4-port commercial Level 2 EV charging station with dual pedestals, load sharing, and bollard impact protection for a local logistics office.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'Lindon City Building Department',
      notes:
        'Lindon requires commercial electrical plan review for tenant upgrades and industrial work. We provide engineered single-line diagrams and manage city approvals.',
    },
    faqs: [
      {
        q: 'Do you handle commercial electrical projects in Lindon?',
        a: 'Yes. We handle commercial tenant buildouts, 3-phase power, LED retrofits, machine hookups, and commercial EV charging stations throughout Lindon business parks.',
      },
      {
        q: 'Can you wire high-draw 240V equipment in my home workshop?',
        a: 'Yes. We size conductors and breakers for air compressors, welders, CNC machinery, and dust collection systems with proper disconnect switches.',
      },
      {
        q: 'How quickly can you get to a service call in Lindon?',
        a: 'Lindon is located immediately south of American Fork down State Street. We can reach any Lindon residential or commercial location in 5 to 10 minutes.',
      },
    ],
    metaTitle: 'Electrician in Lindon, UT | Residential & Commercial | All Wired',
    metaDescription:
      'Licensed electrician serving Lindon, UT. Commercial 3-phase wiring, residential panel upgrades, EV chargers, and shop sub-panels. Call (801) 800-2828.',
  },
  {
    slug: 'cedar-hills-ut',
    city: 'Cedar Hills',
    state: 'UT',
    county: 'Utah County',
    short: 'Cedar Hills',
    description:
      'Dependable licensed electrician serving Cedar Hills, UT. Perched at the mouth of American Fork Canyon, All Wired provides residential panel upgrades, basement electrical finishing, whole-home surge protection, and Level 2 EV charging.',
    context:
      'Cedar Hills is an attractive residential bench community offering panoramic views of Utah Valley and Mount Timpanogos. Bordering American Fork and Highland, Cedar Hills is made up of quiet residential neighborhoods surrounding the Cedar Hills Golf Club. Homeowners here prioritize modern comfort, energy efficiency, and reliable electrical protection against mountain bench weather.',
    housingProfile:
      'Homes in Cedar Hills were primarily constructed from the late 1990s through the 2010s. Many homes feature large unfinished or partially finished daylight basements, multi-car garages ideal for EV charging stations, and builder-grade electrical panels that have reached maximum breaker capacity.',
    challenges: [
      'Builder-grade panels lacking space for basement finishing or hot tubs',
      'High elevation and mountain storms causing electrical grid spikes requiring surge protection',
      'Finishing daylight basements with high-efficiency LED lighting and dedicated circuits',
      'Installing garage EV charging stations with clean conduit routing',
    ],
    projects: [
      {
        title: 'Basement Finish Electrical Wiring near Cedar Hills Golf Club',
        description:
          'Completed full electrical rough-in and trim for a 1,400 sq ft basement including family room, wet bar with GFCI circuits, bedroom AFCI protection, and 16 recessed wafer lights.',
      },
      {
        title: 'Level 2 Tesla Wall Connector Installation on Ironwood Drive',
        description:
          'Installed a 60-amp dedicated breaker in the main panel, routed EMT conduit through the garage, and commissioned a hardwired Tesla Level 2 charger.',
      },
      {
        title: 'Whole-Home Surge Protection & Panel Tune-Up off Canyon Road',
        description:
          'Installed an Eaton 108kA whole-home surge protective device, torqued all panel terminal lugs to specification, and balanced phase loads.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'City of Cedar Hills Building & Safety Division',
      notes:
        'Cedar Hills permits are coordinated through the city building department. We handle all documentation and schedule final inspections.',
    },
    faqs: [
      {
        q: 'Do you wire basements in Cedar Hills?',
        a: 'Yes. Finishing basements is one of our most popular services in Cedar Hills. We handle everything from sub-panels and rough-in wiring to recessed lights and inspection sign-offs.',
      },
      {
        q: 'Why do I need whole-home surge protection in Cedar Hills?',
        a: 'Due to Cedar Hills elevated location near the mouth of the canyon, power lines are exposed to severe weather, lightning, and grid surges that can destroy expensive smart appliances and HVAC boards.',
      },
      {
        q: 'How fast can you arrive in Cedar Hills?',
        a: 'Cedar Hills directly adjoins American Fork. We are typically on-site in Cedar Hills within 5 to 10 minutes.',
      },
    ],
    metaTitle: 'Electrician in Cedar Hills, UT | Panel Upgrades & EV Chargers | All Wired',
    metaDescription:
      'Licensed residential electrician serving Cedar Hills, UT. Basement electrical wiring, 200A panel upgrades, EV chargers, and surge protection. Call (801) 800-2828.',
  },
  {
    slug: 'saratoga-springs-ut',
    city: 'Saratoga Springs',
    state: 'UT',
    county: 'Utah County',
    short: 'Saratoga Springs',
    description:
      'All Wired provides licensed electrical services to Saratoga Springs, UT, located on the northwest shores of Utah Lake just west of Lehi. We specialize in basement finishing electrical wiring, Level 2 EV charging stations, outdoor living power, and hot tub circuits.',
    context:
      'Saratoga Springs is one of Utah’s fastest-growing cities, attracting families and tech professionals commuting to Silicon Slopes. With master-planned lakeside communities such as Harvest Hills, Talon’s Cove, and Saratoga Highlands, homes here require skilled electricians to complete unfinished basements, install EV charging stations, and power backyard living amenities.',
    housingProfile:
      'Almost all homes in Saratoga Springs have been built since 2000, with extensive new construction underway. While panels are modern 200A units, builders often leave panels tightly loaded, requiring careful load calculations and sub-panel additions when homeowners add basement suites, hot tubs, or multiple electric vehicles.',
    challenges: [
      'Unfinished basements requiring complete branch wiring, AFCI protection, and sub-panels',
      'Rapid electric vehicle adoption requiring 40A to 60A Level 2 chargers for daily commuters',
      'Backyard hot tubs, swim spas, and outdoor kitchen electrical feeds requiring GFCI safety disconnects',
      'Whole-home surge protection to protect sensitive home office electronics',
    ],
    projects: [
      {
        title: 'Full Basement Electrical Installation in Harvest Hills',
        description:
          'Designed and wired complete electrical layout for a 1,600 sq ft basement remodel with 2 bedrooms, home gym, theater room, and full bathroom with exhaust ventilation.',
      },
      {
        title: 'Dual EV Charging Setup with Smart Load Management',
        description:
          'Installed two 50A circuits with dynamic power sharing to allow two electric vehicles to charge overnight safely on the home existing 200-amp service.',
      },
      {
        title: 'Lakefront Backyard Hot Tub 50A GFCI Disconnect',
        description:
          'Ran underground conduit from the main panel around the foundation to an exterior weatherproof disconnect box powering a 50-amp outdoor hot tub.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'City of Saratoga Springs Building Division',
      notes:
        'We pull all electrical permits with Saratoga Springs City and schedule all required rough and final inspections.',
    },
    faqs: [
      {
        q: 'Do you service Saratoga Springs from American Fork?',
        a: 'Yes. Saratoga Springs is directly accessible via Pioneer Crossing or SR-73, just 10 to 15 minutes from our American Fork headquarters.',
      },
      {
        q: 'Can my Saratoga Springs home handle a hot tub and an EV charger on a 200A panel?',
        a: 'In most cases, yes! We perform an NEC Article 220 load calculation to verify your panel capacity and install sub-panels or energy management devices if needed.',
      },
      {
        q: 'Do you pull permits for basement wiring in Saratoga Springs?',
        a: 'Yes. We handle the entire city permitting process, ensuring your finished basement is fully code-compliant and safely inspected.',
      },
    ],
    metaTitle: 'Electrician in Saratoga Springs, UT | EV Chargers & Basements | All Wired',
    metaDescription:
      'Licensed electrician serving Saratoga Springs, UT. Expert basement wiring, Level 2 EV chargers, hot tub disconnects, and panel upgrades. Call (801) 800-2828.',
  },
  {
    slug: 'orem-ut',
    city: 'Orem',
    state: 'UT',
    county: 'Utah County',
    short: 'Orem',
    description:
      'All Wired serves Orem, UT with residential and commercial electrical repair, 200-amp panel upgrades, rental property code inspections, and EV charger installations. Dependable, licensed electrical services for Utah’s Family City.',
    context:
      'Orem is one of Utah County’s core communities, home to Utah Valley University and a dense residential population. From mid-century homes near State Street and Center Street to modern developments on the east bench, Orem properties frequently require panel upgrades, rewiring, and modern electrical safety updates.',
    housingProfile:
      'Orem features a substantial number of homes constructed between the 1950s and 1980s. Many of these properties have been converted into student rentals or secondary apartments, placing heavy demands on older 100A electrical services.',
    challenges: [
      'Aging 100-amp electrical panels requiring heavy-ups to 200 amps for modern appliance loads',
      'Rental property electrical safety audits, GFCI/AFCI upgrades, and smoke detector hardwiring',
      'Kitchen and bathroom remodel rewiring in established mid-century brick homes',
      'Commercial electrical maintenance for retail and office facilities along University Parkway',
    ],
    projects: [
      {
        title: '200A Service Heavy-Up & Meter Upgrade off Center Street',
        description:
          'Replaced an obsolete 100A panel with a 200A main service panel, coordinated meter reconnect with Rocky Mountain Power, and passed City of Orem electrical inspection.',
      },
      {
        title: 'Student Housing Electrical Safety Upgrade near UVU',
        description:
          'Installed interconnected hardwired smoke/CO detectors, replaced two-prong outlets with tamper-resistant GFCI receptacles, and labeled all panel circuits.',
      },
      {
        title: 'Commercial Office LED Lighting Retrofit on State Street',
        description:
          'Retrofit 60 fluorescent troffers with energy-saving flat-panel LED lights on occupancy sensor controls.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'City of Orem Development Services / Building Division',
      notes:
        'We pull permits with City of Orem and coordinate all utility disconnects with Rocky Mountain Power.',
    },
    faqs: [
      {
        q: 'Do you service residential and rental properties in Orem?',
        a: 'Yes. We work with homeowners, landlords, and property managers across Orem to perform panel upgrades, safety inspections, and tenant improvement wiring.',
      },
      {
        q: 'How do I upgrade from 100A to 200A in Orem?',
        a: 'We handle everything: load calculations, city permits, Rocky Mountain Power meter drop, panel replacement, and final city inspection.',
      },
    ],
    metaTitle: 'Electrician in Orem, UT | Panel Upgrades & Repairs | All Wired',
    metaDescription:
      'Licensed electrician serving Orem, UT. 200-amp panel upgrades, rental safety inspections, EV chargers, and remodel rewiring. Call (801) 800-2828.',
  },
  {
    slug: 'provo-ut',
    city: 'Provo',
    state: 'UT',
    county: 'Utah County',
    short: 'Provo',
    description:
      'Licensed master electrician serving Provo, UT. From historic home rewiring in the Tree Streets to commercial electrical installations near Brigham Young University, All Wired delivers trusted electrical expertise across Provo.',
    context:
      'As the county seat and home to BYU, Provo has a vibrant mix of historic architecture, multi-family rental units, and modern tech centers. Historic homes near downtown feature unique architectural charm alongside vintage wiring that requires careful, respectful remediation.',
    housingProfile:
      'Provo contains some of Utah County’s oldest homes, including historic Victorians and 1920s cottages with knob-and-tube wiring, cloth insulation, and ungrounded circuits. Newer areas like Grandview and the East Bench feature modern custom homes.',
    challenges: [
      'Historic knob-and-tube and ungrounded wiring replacement without damaging lath and plaster walls',
      'Multi-meter service upgrades for duplexes and rental student housing',
      'Upgrading outdated fuse boxes to modern circuit breaker panels with AFCI protection',
      'Commercial wiring for downtown restaurants, offices, and retail spaces',
    ],
    projects: [
      {
        title: 'Knob-and-Tube Remediation in Historic Tree Streets Home',
        description:
          'Carefully decommissioned active knob-and-tube circuits, fished modern grounded Romex through wall cavities, and installed AFCI breakers while preserving historic plaster.',
      },
      {
        title: 'Duplex Dual 100A to 200A Service Upgrade near BYU',
        description:
          'Installed a dual-meter base, two new 200A service panels, and separate sub-metering for landlord and tenant circuits.',
      },
      {
        title: 'Downtown Provo Restaurant Kitchen Dedicated Circuits',
        description:
          'Wired dedicated commercial 208V 3-phase circuits for commercial convection ovens, walk-in coolers, and GFCI dishwashing stations.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Provo Power (Municipal Electric Utility)',
      permitsOffice: 'City of Provo Community Development / Building Division',
      notes:
        'Provo operates its own municipal utility, Provo Power. We work directly with Provo Power engineering for meter disconnects and service upgrades.',
    },
    faqs: [
      {
        q: 'Do you work with Provo Power?',
        a: 'Yes. We coordinate directly with Provo Power for all residential and commercial service upgrades and meter changes.',
      },
      {
        q: 'Can you replace knob-and-tube wiring in older Provo homes?',
        a: 'Yes. We specialize in minimally invasive rewiring, fishing new cables without tearing down historical plaster and lath.',
      },
    ],
    metaTitle: 'Electrician in Provo, UT | Historic Rewiring & Panels | All Wired',
    metaDescription:
      'Licensed electrician serving Provo, UT. Historic home rewiring, 200A panel upgrades, EV chargers, and commercial electrical work. Call (801) 800-2828.',
  },
  {
    slug: 'draper-ut',
    city: 'Draper',
    state: 'UT',
    county: 'Salt Lake County',
    short: 'Draper',
    description:
      'Licensed electrical contractor serving Draper, UT and the Point of the Mountain. All Wired provides high-capacity 400A panel upgrades, whole-home standby generators, EV chargers, and luxury home electrical services.',
    context:
      'Straddling the border between Utah County and Salt Lake County, Draper includes mountain-bench estates in Corner Canyon and SunCrest, along with corporate tech parks along I-15. Draper properties face high winds and winter snowstorms, making electrical resilience a top priority.',
    housingProfile:
      'Draper consists predominantly of high-end custom homes and expansive subdivisions built over the past 25 years. These luxury homes feature substantial square footage, dual AC systems, finished walkout basements, and multi-vehicle garages.',
    challenges: [
      'High total electrical load requiring 400A service heavy-ups (dual 200A panels)',
      'SunCrest mountain weather causing power interruptions requiring standby generators',
      'Multiple EV charging stations for tech commuter households',
      'Architectural outdoor and landscape lighting on hillside properties',
    ],
    projects: [
      {
        title: 'SunCrest Automatic 24kW Standby Generator Installation',
        description:
          'Poured equipment pad and installed a 200A automatic transfer switch connected to a 24kW Generac natural gas generator for winter grid protection.',
      },
      {
        title: '400-Amp Estate Service Upgrade in Corner Canyon',
        description:
          'Upgraded main service to 400 amps with dual 200A panels to support a heated swimming pool, dual EV chargers, and 3 heat pump systems.',
      },
      {
        title: 'Hillside Architectural Landscape Lighting System',
        description:
          'Installed low-voltage LED pathway, retaining wall step lights, and tree uplights with smart astronomical timers.',
      },
    ],
    utilityInfo: {
      powerCompany: 'Rocky Mountain Power',
      permitsOffice: 'City of Draper Building Division',
      notes:
        'We pull permits directly through Draper City and coordinate Rocky Mountain Power service heavy-ups.',
    },
    faqs: [
      {
        q: 'Do you serve SunCrest and Corner Canyon in Draper?',
        a: 'Yes. We frequently work in SunCrest and throughout Draper, specializing in backup generators, panel heavy-ups, and EV chargers.',
      },
      {
        q: 'Can you upgrade my Draper home to 400A service?',
        a: 'Yes. We handle complete 400A service heavy-ups including utility coordination, dual panels, and city inspection sign-offs.',
      },
    ],
    metaTitle: 'Electrician in Draper, UT | 400A Panels & Generators | All Wired',
    metaDescription:
      'Licensed electrician serving Draper, UT. 400-amp service upgrades, automatic backup generators, EV charger installation, and luxury wiring. Call (801) 800-2828.',
  },
];

export function getService(slug: string): ServiceInfo | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export type CoreServiceSlug =
  | 'electrical-repairs-and-upgrades'
  | 'wiring-and-installations'
  | 'lighting-solutions'
  | 'generators-and-backup-power'
  | 'ev-chargers-and-modern-power';

export interface CoreServiceSection {
  h2: string;
  lead?: string;
  body: string[];
  points?: string[];
}

export interface CoreServiceInfo {
  slug: CoreServiceSlug;
  name: string;
  shortName: string;
  tagline: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  icon: string;
  image: string;
  imageAlt: string;
  sections: CoreServiceSection[];
  faqs: { q: string; a: string }[];
}

export const CORE_SERVICES: CoreServiceInfo[] = [
  {
    slug: 'electrical-repairs-and-upgrades',
    name: 'Electrical Repairs and Upgrades',
    shortName: 'Repairs & Upgrades',
    tagline: 'Reliable troubleshooting, breaker repairs, panel replacements, and safety upgrades in American Fork & Lehi',
    seoTitle: 'Electrical Repair & Panel Upgrades in American Fork, UT | All Wired',
    metaDescription:
      'Professional electrical repair and panel upgrade services in American Fork, UT. Troubleshooting, circuit breaker repairs, panel replacements, and inspections. Call (801) 800-2828.',
    h1: 'Electrical Repair and Panel Upgrade Services in American Fork, UT',
    primaryKeyword: 'Electrical repair American Fork UT',
    secondaryKeywords: [
      'Electrical troubleshooting American Fork',
      'Circuit breaker repair American Fork',
      'Electrical panel upgrade American Fork',
      'Home electrical inspection American Fork',
      'Outlet and switch repair American Fork',
      'Residential electrician Utah County',
    ],
    icon: 'Wrench',
    image: 'https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    imageAlt: 'Licensed electrician diagnosing and repairing electrical panel in American Fork UT',
    sections: [
      {
        h2: 'Residential Electrical Repair Services',
        lead: 'Prompt, dependable residential electrical repairs protecting your home and family.',
        body: [
          'Electrical issues in a home are more than just inconvenient—they pose real fire hazards and safety concerns. All Wired provides complete residential electrical repair services throughout American Fork, Lehi, and surrounding Utah County neighborhoods.',
          'Whether your lights are flickering when appliances kick on, outlets feel warm to the touch, or circuit breakers trip repeatedly, our licensed technicians pinpoint the root cause and execute code-compliant, permanent repairs.',
        ],
        points: [
          'Flickering, dimming, or buzzing light fixtures',
          'Dead outlets and non-responsive wall switches',
          'Breakers that trip instantly or will not reset',
          'Burning plastic smells or scorching around outlets',
          'Outdated two-prong ungrounded receptacles',
        ],
      },
      {
        h2: 'Electrical Troubleshooting and Diagnosis',
        lead: 'Systematic diagnosis using professional multimeters and circuit tracing equipment.',
        body: [
          'Electrical troubleshooting requires deep experience and rigorous safety protocols. Guessing or taking shortcuts with electrical wiring puts property and lives at risk. With over 40 years of electrical experience, All Wired follows a methodical diagnostic process.',
          'We inspect your service drop, panel connections, neutral buses, and individual branch circuits. We isolate hidden shorts, loose neutral wires, open grounds, and overloaded phases so you receive a clear, honest explanation before any repair begins.',
        ],
      },
      {
        h2: 'Circuit Breaker and Electrical Panel Repairs',
        lead: 'Restoring panel safety, replacing damaged breakers, and eliminating hot spots.',
        body: [
          'Your circuit breaker panel is the central nervous system of your home’s electrical system. Over time, breaker bus bars can corrode, screw terminals loosen from thermal expansion, and breakers fail internally.',
          'We repair damaged panel components, replace worn-out single-pole and double-pole breakers, install modern AFCI (Arc Fault Circuit Interrupter) and GFCI breakers, and balance circuit loads across both hot legs to prevent overheating.',
        ],
      },
      {
        h2: 'Electrical Panel Replacement and Upgrades',
        lead: 'Upgrade from outdated 60A or 100A panels to modern 200A and 400A heavy-up services.',
        body: [
          'Many established homes in American Fork and Lehi were built when household electrical demand was a fraction of what it is today. If your home still relies on an outdated 100-amp service—or worse, a dangerous Federal Pacific, Zinsco, or split-bus fuse box—an electrical panel upgrade is critical.',
          'When adding central air conditioning, a heat pump, hot tub, finished basement, or an electric vehicle charger, your panel must have the physical space and amperage capacity to handle continuous loads safely. We handle the entire panel replacement process: load calculations, city permitting, Rocky Mountain Power utility disconnect/reconnect coordination, and final electrical inspection.',
        ],
        points: [
          'Full 200-amp and 400-amp service heavy-ups',
          'Replacement of hazardous Federal Pacific and Zinsco panels',
          'Installation of whole-home surge protection at the panel',
          'New copper grounding rods and bonded water pipe grounding',
        ],
      },
      {
        h2: 'Outlet, Switch and Wiring Repairs',
        lead: 'Code-compliant replacement of faulty receptacles, switches, and damaged branch wiring.',
        body: [
          'Modern building codes require GFCI (Ground Fault Circuit Interrupter) outlets in all wet and exterior locations—kitchens, bathrooms, garages, laundry rooms, and outdoor receptacles. If your outlets lack GFCI protection or your switches spark, we replace them with commercial-grade, tamper-resistant devices.',
          'We also replace worn aluminum-to-copper connections, rewire back-stabbed outlet terminals that have loosened, and install dedicated circuits for high-draw kitchen and workshop appliances.',
        ],
      },
      {
        h2: 'Electrical Safety Inspections',
        lead: 'Comprehensive whole-home safety inspections for home buyers, sellers, and remodelers.',
        body: [
          'Planning a remodel, purchasing an older home, or experiencing mysterious electrical anomalies? Our thorough electrical safety inspection examines every vital component of your system: panel capacity, wire sizing, grounding integrity, smoke/CO detector circuits, and compliance with the National Electrical Code (NEC).',
          'You receive a comprehensive overview of findings and clear, prioritized recommendations with upfront pricing.',
        ],
      },
      {
        h2: 'Electrical Repair Services in American Fork and Lehi',
        lead: 'Fast, local service from master electricians living and working right here in Utah County.',
        body: [
          'All Wired is based right in American Fork, UT. When you call (801) 800-2828, you speak directly with an experienced electrical contractor—not an out-of-state call center. We provide same-day response for urgent repairs and flexible scheduling for panel upgrades throughout American Fork, Lehi, Pleasant Grove, and neighboring communities.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know if my electrical panel needs an upgrade?',
        a: 'Warning signs include circuit breakers that trip frequently, flickering lights when appliances turn on, burning smells around the panel box, panels that feel warm, lack of physical breaker slots, or having a 100-amp or older panel when adding an EV charger, AC, or basement finish.',
      },
      {
        q: 'Do you handle the city permits and utility coordination for panel upgrades?',
        a: 'Yes. All Wired pulls all required electrical permits with American Fork or your local municipality, coordinates with Rocky Mountain Power for meter disconnect/reconnect, and schedules the final city electrical inspection.',
      },
      {
        q: 'What should I do if an outlet stops working or sparks?',
        a: 'Turn off the circuit breaker controlling that outlet immediately to eliminate fire risk. Do not attempt to use the outlet, and call All Wired at (801) 800-2828 for a licensed inspection and repair.',
      },
      {
        q: 'Do you offer emergency electrical repair service in American Fork and Lehi?',
        a: 'Yes. We offer emergency electrical repair services for urgent hazards including buzzing breaker panels, power loss to critical circuits, and exposed or sparking wiring.',
      },
    ],
  },
  {
    slug: 'wiring-and-installations',
    name: 'Wiring and Installations',
    shortName: 'Wiring & Installations',
    tagline: 'New construction wiring, basement finishing, dedicated circuits, and ceiling fan installations',
    seoTitle: 'Electrical Wiring & Installation in American Fork, UT | All Wired',
    metaDescription:
      'Complete residential and commercial electrical wiring in American Fork, UT. New construction, remodel, basement wiring, dedicated circuits, and ceiling fans. Call (801) 800-2828.',
    h1: 'Professional Electrical Wiring and Installation in American Fork, Utah',
    primaryKeyword: 'Electrical wiring American Fork UT',
    secondaryKeywords: [
      'Home electrical wiring American Fork',
      'New construction electrical wiring Utah County',
      'Basement electrical wiring American Fork',
      'Dedicated circuit installation American Fork',
      'Ceiling fan installation American Fork',
      'Commercial electrical wiring American Fork',
    ],
    icon: 'Plug',
    image: 'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    imageAlt: 'Electrician installing residential electrical wiring and junction boxes in American Fork UT',
    sections: [
      {
        h2: 'Residential Electrical Wiring Services',
        lead: 'Safe, code-certified wiring for new builds, additions, remodels, and home upgrades.',
        body: [
          'High quality electrical wiring is the backbone of a safe and reliable home. From running new Romex circuits to replacing outdated cloth-insulated wiring, All Wired provides meticulous residential wiring services throughout American Fork and Utah County.',
          'Every wire we pull is sized correctly for breaker amperage, neatly secured, and terminated inside fire-resistant junction boxes following strict National Electrical Code (NEC) guidelines.',
        ],
      },
      {
        h2: 'New Construction Electrical Wiring',
        lead: 'Complete electrical rough-in and finish wiring for custom homes and new builds.',
        body: [
          'Building a new home in Utah County requires an electrical contractor who understands structural load planning, modern lighting design, and utility code compliance. All Wired delivers turn-key new construction electrical wiring.',
          'From the initial underground conduit and meter base to whole-house rough-in wiring, panel installation, and final fixture trim-out, we coordinate seamlessly with general contractors and homeowners.',
        ],
      },
      {
        h2: 'Home Remodeling and Basement Wiring',
        lead: 'Turn unfinished basements and outdated spaces into fully wired, safe living areas.',
        body: [
          'Finishing a basement or remodeling a kitchen requires significant electrical planning. Kitchens require multiple dedicated small-appliance branch circuits, island receptacles, and GFCI/AFCI protection. Finished basements require sub-panels, bedroom arc-fault circuits, bathroom exhaust circuits, and home theater wiring.',
          'We evaluate your main panel capacity, install sub-panels when appropriate, pull clean branch circuits, and make sure your finished space passes every city building inspection on the first visit.',
        ],
      },
      {
        h2: 'Dedicated Circuit Installation',
        lead: 'Prevent nuisance breaker trips by installing dedicated lines for high-draw appliances.',
        body: [
          'Modern appliances draw substantial electrical current. Sharing circuits between high-draw appliances leads to persistent breaker tripping and dangerous heat buildup. We install dedicated 120V and 240V circuits designed specifically for your equipment.',
        ],
        points: [
          'Electric vehicle Level 2 chargers (40A - 60A 240V)',
          'Central AC units, mini-splits, and heat pumps',
          'Hot tubs, swim spas, and saunas (50A GFCI protected)',
          'Electric ranges, ovens, and induction cooktops',
          'Microwave ovens, refrigerators, and deep freezers',
          'Workshop air compressors, welders, and power tools',
        ],
      },
      {
        h2: 'Ceiling Fan Wiring and Installation',
        lead: 'Secure, wobble-free ceiling fan mounting with proper fan-rated support boxes.',
        body: [
          'Ceiling fans cannot be mounted to standard plastic or lightweight light fixture boxes. Building code requires UL-listed fan-rated metal boxes securely braced to ceiling joists to support dynamic rotating weight.',
          'All Wired installs proper fan boxes, runs new 3-wire Romex cables for independent wall switch control of light and fan speeds, and balances fan blades for silent, reliable cooling.',
        ],
      },
      {
        h2: 'Commercial Electrical Installation',
        lead: 'Power, lighting, and tenant improvements for retail, office, and light commercial spaces.',
        body: [
          'Beyond residential work, All Wired handles commercial electrical installations in American Fork, Lehi, and Lindon. We install commercial conduit (EMT), 3-phase power distribution, dedicated machinery circuits, tenant buildouts, and commercial LED retrofit packages.',
        ],
      },
      {
        h2: 'Our Electrical Installation Process',
        lead: 'Transparent communication, precise estimates, and zero-compromise safety.',
        body: [
          '1. Consultation & Assessment: We discuss your project goals, inspect existing wiring and panel capacity, and provide an upfront, transparent estimate.',
          '2. Code-Compliant Rough-In: We pull high-grade copper wiring, install UL-listed boxes, and secure runs cleanly through studs and joists.',
          '3. Permitting & City Inspections: We handle municipal permits and schedule rough and final inspections.',
          '4. Trim-Out & Testing: We install all outlets, switches, and fixtures, testing every single circuit for polarity, ground fault trip time, and continuous load stability.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What size dedicated circuit do I need for a hot tub?',
        a: 'Most outdoor hot tubs require a 50-amp or 60-amp 240-volt dedicated circuit with an outdoor GFCI disconnect box mounted within sight of the tub (at least 5 feet away from the water edge according to NEC).',
      },
      {
        q: 'Can you wire an unfinished basement to an existing electrical panel?',
        a: 'If your existing panel has sufficient breaker slots and amperage capacity, we can feed basement circuits directly from it. If your panel is full, we install a sub-panel or recommend an electrical panel upgrade.',
      },
      {
        q: 'Why does my microwave or vacuum trip the breaker in the living room?',
        a: 'This happens when multiple outlets share a single 15-amp circuit. High-draw appliances should be on dedicated 20-amp circuits to prevent overloads and tripped breakers.',
      },
    ],
  },
  {
    slug: 'lighting-solutions',
    name: 'Lighting Solutions',
    shortName: 'Lighting Solutions',
    tagline: 'Indoor recessed canless LED lighting, chandeliers, outdoor landscape, and security illumination',
    seoTitle: 'Lighting Installation in American Fork, UT | All Wired LLC',
    metaDescription:
      'Indoor and outdoor lighting installation in American Fork, UT. Recessed LED lighting, chandeliers, landscape lighting, and energy-efficient fixtures. Call (801) 800-2828.',
    h1: 'Indoor and Outdoor Lighting Installation in American Fork, UT',
    primaryKeyword: 'Lighting installation American Fork UT',
    secondaryKeywords: [
      'Indoor lighting installation American Fork',
      'Outdoor lighting electrician American Fork',
      'Recessed lighting installation Utah County',
      'LED lighting upgrades American Fork',
      'Landscape lighting installation American Fork',
      'Ceiling light installation American Fork',
    ],
    icon: 'Lightbulb',
    image: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    imageAlt: 'Electrician installing modern recessed LED ceiling lights in an American Fork home',
    sections: [
      {
        h2: 'Residential Lighting Installation',
        lead: 'Transform your living spaces with expertly designed ambient, task, and accent lighting.',
        body: [
          'Lighting sets the mood, enhances home aesthetics, and dramatically improves daily functionality. All Wired designs and installs residential lighting systems for homeowners across American Fork, Lehi, and Utah County.',
          'Whether replacing builder-grade light fixtures or planning a complete lighting makeover for your kitchen, living room, or home office, our licensed electricians ensure proper wire sizing, junction box support, and smooth dimmer control.',
        ],
      },
      {
        h2: 'Recessed and LED Lighting Upgrades',
        lead: 'Clean, modern, wafer-thin LED canless downlights that eliminate shadows and reduce energy bills.',
        body: [
          'Old can lights with hot halogen or incandescent bulbs waste energy, generate excessive heat in your ceiling, and often flicker. We install ultra-thin, direct-to-drywall canless LED recessed lights.',
          'These sleek fixtures feature selectable color temperatures (warm 2700K to bright daylight 5000K), consume up to 85% less electricity, last 50,000+ hours, and operate smoothly with modern electronic LED dimmer switches.',
        ],
        points: [
          'Kitchen island task lighting and under-cabinet LED tape lighting',
          'Living room perimeter downlighting on smooth dimmers',
          'Basement ceiling recessed light grid layout',
          'Bathroom vanity illumination that eliminates harsh facial shadows',
        ],
      },
      {
        h2: 'Outdoor and Landscape Lighting',
        lead: 'Boost curb appeal, highlight architectural details, and create welcoming outdoor living spaces.',
        body: [
          'Outdoor lighting extends your home’s usable living space into the evening while highlighting your property’s best landscaping features. We install durable, weatherproof exterior lighting solutions.',
          'From low-voltage LED pathway lights and tree uplights to patio string lighting and deck step illumination, we run discreet underground conduit and install automated dusk-to-dawn astronomical timers.',
        ],
      },
      {
        h2: 'Security and Exterior Lighting',
        lead: 'Deter intruders and increase nighttime visibility around driveways, walkways, and entryways.',
        body: [
          'Proper exterior lighting is one of the most effective deterrents against property crime. All Wired installs hardwired motion-activated floodlights, dusk-to-dawn wall sconces, and smart security cameras with integrated lighting.',
          'All exterior fixtures are wired with weatherproof seals, GFCI protection, and durable die-cast aluminum housings built to withstand Utah’s harsh winter freeze-thaw cycles.',
        ],
      },
      {
        h2: 'Ceiling Light and Fixture Installation',
        lead: 'Safe installation for heavy chandeliers, pendant lights, and high-ceiling fixtures.',
        body: [
          'Installing large dining room chandeliers, foyer entry lights, or two-story entryway fixtures requires specialized scaffolding and reinforced ceiling support boxes. We ensure heavy fixtures are mechanically anchored to structural ceiling framing before making safe electrical connections.',
        ],
      },
      {
        h2: 'Energy-Efficient Lighting Solutions',
        lead: 'Save hundreds annually on electric bills with comprehensive LED retrofits and smart controls.',
        body: [
          'Converting your home to high-efficiency LED lighting drastically reduces electrical consumption and lowers summer cooling loads. We can also integrate smart home switches (such as Lutron Caséta) that allow you to schedule lighting, control rooms via smartphone, and create automated scenes.',
        ],
      },
      {
        h2: 'Lighting Services Across Utah County',
        lead: 'Serving American Fork, Lehi, Pleasant Grove, Highland, Alpine, Orem, and Provo.',
        body: [
          'From our headquarters in American Fork, All Wired brings prompt, professional lighting installation to homes throughout Utah County. Call (801) 800-2828 to schedule a free estimate on your lighting project.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you install recessed lighting in an existing ceiling without tearing up the drywall?',
        a: 'Yes! Modern wafer-thin LED recessed lights do not require bulky metal housing cans. We cut precise circular openings, fish wire through joist bays, and install clean, flush-mounted fixtures with minimal to no drywall patching required.',
      },
      {
        q: 'Why do my new LED light bulbs flicker or buzz when dimmed?',
        a: 'This typically happens when old incandescent dimmer switches are used with modern LED bulbs. LED fixtures require compatible trailing-edge or electronic low-voltage (ELV) dimmers designed specifically for LED driver loads.',
      },
      {
        q: 'Do you install exterior landscape lighting on timers or light sensors?',
        a: 'Yes. We install smart timers, photocell dusk-to-dawn sensors, and Wi-Fi enabled controllers so your landscape lights turn on automatically at sunset and off at your chosen hour.',
      },
    ],
  },
  {
    slug: 'generators-and-backup-power',
    name: 'Generators and Backup Power',
    shortName: 'Generators & Backup Power',
    tagline: 'Standby generator installation, manual transfer switches, and reliable backup power solutions in American Fork',
    seoTitle: 'Generator Installation & Backup Power in American Fork, UT',
    metaDescription:
      'Home backup generator installation and standby power solutions in American Fork, UT. Whole-home generators, manual and automatic transfer switches, and emergency wiring. Call (801) 800-2828.',
    h1: 'Home Generator Installation and Backup Power in American Fork, UT',
    primaryKeyword: 'Generator installation American Fork UT',
    secondaryKeywords: [
      'Home backup generator installation Utah County',
      'Standby generator electrician American Fork',
      'Generator electrical connection American Fork',
      'Backup power solutions American Fork',
      'Generator wiring installation Utah',
    ],
    icon: 'Zap',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    imageAlt: 'Whole-home standby generator and electrical transfer switch installation in American Fork UT',
    sections: [
      {
        h2: 'Residential Backup Power Solutions',
        lead: 'Protect your home, food storage, heating, and medical equipment during unexpected outages.',
        body: [
          'Power outages in Utah County can strike without warning—from heavy winter snowstorms and freezing temperatures to high summer winds and overloaded grids. A home backup power system ensures your family remains warm, safe, and fully powered.',
          'All Wired specializes in residential backup power solutions in American Fork and nearby cities. Whether you need a portable generator hookup or a permanently installed whole-home standby generator, we ensure safe, seamless electrical integration.',
        ],
      },
      {
        h2: 'Standby Generator Installation',
        lead: 'Automatic whole-home backup power that starts and transfers within seconds of an outage.',
        body: [
          'A permanent standby generator runs on natural gas or propane and sits outside like a central air conditioner. When utility power from Rocky Mountain Power fails, the system automatically detects the outage, starts the generator engine, and transfers electrical loads in under 15 seconds.',
          'When utility power returns, the system automatically switches your home back to the grid and shuts the generator down. You never have to go outside in a blizzard, run extension cords, or refuel gas tanks in the dark.',
        ],
      },
      {
        h2: 'Generator Electrical Connections',
        lead: 'Safe outdoor inlet boxes and dedicated power feeds for portable generators.',
        body: [
          'For homeowners utilizing portable gas or dual-fuel generators, running extension cords through open windows or doors is dangerous and lets freezing air and toxic exhaust into the home. We install code-compliant outdoor power inlet boxes.',
          'A heavy-duty 30-amp or 50-amp outdoor generator inlet connects via heavy-gauge cable directly to your main electrical panel through an interlock kit or transfer switch, powering essential circuits directly through your home’s existing outlets and light switches.',
        ],
      },
      {
        h2: 'Transfer Switch Installation',
        lead: 'Automatic transfer switches (ATS) and mechanical panel interlock switches.',
        body: [
          'A transfer switch is legally required for generator connections. It isolates your home from the utility grid, preventing deadly electrical backfeeding that can injure or kill utility line workers restoring power down the street.',
          'All Wired installs automatic transfer switches (ATS) for whole-home standby units as well as manual mechanical interlock kits for portable generators. Both configurations guarantee your generator and the electrical grid can never be energized simultaneously.',
        ],
      },
      {
        h2: 'Electrical Safety and Generator Wiring',
        lead: 'Code compliance, carbon monoxide safety, and proper grounding electrode systems.',
        body: [
          'Generator installations must comply strictly with National Electrical Code Article 702 (Optional Standby Systems) and local municipal fire safety codes. We ensure proper clearance from windows and soffits to prevent carbon monoxide intrusion, calculate continuous load capacity, and install dedicated neutral bonding systems.',
        ],
      },
      {
        h2: 'Choosing a Backup Power Solution',
        lead: 'Portable generator hookup vs. permanent standby generator—which is right for you?',
        body: [
          '1. Portable Generator with Interlock Kit: Cost-effective solution. Requires manual start and cable connection during an outage. Powers essential circuits: refrigerator, freezer, furnace blower, sump pump, and key lights.',
          '2. Whole-Home Automatic Standby Generator: Premium, hands-off reliability. Automatically starts and runs your entire house, including central air conditioning, well pumps, and kitchen appliances, even when you are away from home.',
        ],
      },
      {
        h2: 'Generator Installation in American Fork and Nearby Areas',
        lead: 'Local master electricians serving American Fork, Lehi, Highland, Alpine, and Utah County.',
        body: [
          'All Wired provides transparent estimates, permit handling, and expert installation. Call (801) 800-2828 today to discuss the ideal backup power solution for your home.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why do I need a transfer switch instead of just plugging my generator into a wall outlet?',
        a: 'Plugging a generator directly into a wall outlet (known as backfeeding) is extremely dangerous and illegal. It sends high-voltage electricity back into utility power lines, creating deadly hazards for electrical workers. A transfer switch safely isolates your home from the grid.',
      },
      {
        q: 'What size generator do I need to run my home?',
        a: 'To run essential loads (refrigerator, furnace blower, lights, internet, and outlets), a 7,500 to 10,000-watt portable generator is usually sufficient. To run your entire home including central air conditioning and electric water heaters, a 18kW to 24kW whole-home standby generator is recommended.',
      },
      {
        q: 'Can a generator power my furnace in winter?',
        a: 'Yes! When connected via a proper transfer switch or interlock kit, your generator safely powers the furnace blower fan, ignition controls, and thermostat so your family stays warm during winter grid failures.',
      },
    ],
  },
  {
    slug: 'ev-chargers-and-modern-power',
    name: 'EV Chargers and Modern Power',
    shortName: 'EV Chargers & Modern Power',
    tagline: 'Level 2 home electric vehicle charging station installation, 240V circuits, and electrical load evaluations',
    seoTitle: 'EV Charger Installation American Fork, UT | All Wired LLC',
    metaDescription:
      'Professional Level 2 home EV charger installation in American Fork, UT. 240V dedicated circuits, panel load assessments, Tesla & universal chargers. Call (801) 800-2828.',
    h1: 'Professional Home EV Charger Installation in American Fork, UT',
    primaryKeyword: 'EV charger installation American Fork UT',
    secondaryKeywords: [
      'Home EV charger installation Utah County',
      'Level 2 EV charger installation American Fork',
      'Electric vehicle charging station electrician',
      'EV charging outlet installation American Fork',
      'Residential EV charger electrician Utah',
      '240V charger installation American Fork',
    ],
    icon: 'BatteryCharging',
    image: 'https://images.pexels.com/photos/10029867/pexels-photo-10029867.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    imageAlt: 'Electrician installing a Level 2 home EV charging station on a garage wall in American Fork UT',
    sections: [
      {
        h2: 'Home Electric Vehicle Charger Installation',
        lead: 'Fast, reliable overnight charging right in your own garage or driveway in American Fork.',
        body: [
          'Driving an electric vehicle in Utah is convenient and economical, but relying on slow Level 1 120-volt trickle chargers (which only add 3–4 miles of range per hour) leaves your battery undercharged. All Wired installs dedicated Level 2 240-volt home charging systems.',
          'With a professionally installed Level 2 EV charging station, your vehicle charges 5 to 8 times faster, replenishing 30 to 45 miles of range per hour so your vehicle is fully charged and ready every morning.',
        ],
      },
      {
        h2: 'Level 2 EV Charging Solutions',
        lead: 'Universal compatibility with Tesla, Ford, Rivian, Hyundai, Chevy, BMW, and all major EV brands.',
        body: [
          'We install both hardwired charging stations (up to 48-amp continuous charge on a 60-amp circuit) and 240-volt NEMA 14-50 receptacles for plug-in mobile connectors.',
          'Our licensed electricians install all premier EV charging brands, including Tesla Wall Connectors (Universal NACS & J1772), ChargePoint Home Flex, JuiceBox, Emporia, Grizzl-E, and Wallbox units.',
        ],
      },
      {
        h2: 'Electrical Panel Capacity and Load Assessment',
        lead: 'Thorough load calculation to confirm your panel can support continuous 40A to 60A loads safely.',
        body: [
          'An electric vehicle charger is one of the highest continuous electrical loads in a modern home. National Electrical Code mandates that continuous loads not exceed 80% of a circuit breaker’s rating (e.g., a 48A charger requires a dedicated 60A breaker; a 40A charger requires a 50A breaker).',
          'Before installation, All Wired performs an NEC Article 220 residential load calculation. We inspect your main service size (100A, 150A, or 200A), existing heavy appliance loads (HVAC, range, dryer), and panel space to ensure your system can support the charger without nuisance tripping or service overloads.',
        ],
      },
      {
        h2: 'Dedicated EV Charging Circuits',
        lead: 'Heavy-gauge copper conductors, commercial GFCI protection, and durable conduit routing.',
        body: [
          'We pull heavy-duty copper wire (such as 6/2 or 4/3 NM-B or individual THHN conductors inside protective EMT conduit) sized strictly for your charger’s amperage. For plug-in 14-50 outlets, we use heavy-duty commercial-grade receptacles specifically engineered to handle repeated high-current thermal cycles without melting.',
        ],
      },
      {
        h2: 'EV Charger Installation Process',
        lead: 'From consultation to city permit and final safety test in 4 straightforward steps.',
        body: [
          '1. Assessment: We check your panel amperage, discuss preferred mounting locations in your garage or driveway, and evaluate wire run distance.',
          '2. Upfront Estimate: You receive a transparent quote detailing circuit installation, materials, and any necessary panel adjustments.',
          '3. Professional Installation: We run heavy-duty conduit, install the breaker, mount the station cleanly, and torque all connections to manufacturer specifications.',
          '4. Commissioning & Testing: We power up the station, configure Wi-Fi smart features, verify proper ground resistance, and test charging on your vehicle.',
        ],
      },
      {
        h2: 'Residential EV Charging in American Fork and Lehi',
        lead: 'Local electricians keeping Utah County drivers charged, safe, and ready for the road.',
        body: [
          'Utah County is one of the fastest-growing regions for EV adoption in the Mountain West. All Wired provides rapid scheduling, municipal permit management, and expert installation throughout American Fork, Lehi, Pleasant Grove, Highland, and Draper.',
        ],
      },
      {
        h2: 'Frequently Asked Questions About EV Chargers',
        lead: 'Answers to the most common questions about charging an electric vehicle at home.',
        body: [
          'See our frequently asked questions below, or call (801) 800-2828 to discuss your vehicle and home setup directly with a licensed electrician.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can my existing 100-amp electrical panel handle an EV charger?',
        a: 'It depends on your existing home electrical loads. If your home has gas appliances (furnace, water heater, range), a 100-amp panel may have capacity for a 32A or 40A charger. However, if you have electric heating, central AC, and an electric range, an electrical panel upgrade to 200 amps is typically required.',
      },
      {
        q: 'Is it better to hardwire an EV charger or use a NEMA 14-50 outlet?',
        a: 'Hardwiring is generally recommended for modern EV chargers because it allows faster charging (up to 48 amps / 11.5 kW vs. 40 amps on an outlet), eliminates an outlet connection point that can heat up over time, and provides superior outdoor weather resistance.',
      },
      {
        q: 'How fast will a Level 2 charger charge my car at home?',
        a: 'A Level 2 home charger typically adds 30 to 45 miles of driving range per hour of charging. Most electric vehicles will charge from empty to 100% in 6 to 9 hours overnight while you sleep.',
      },
      {
        q: 'Can you install an EV charger outside if I do not have a garage?',
        a: 'Yes. We install weatherproof outdoor-rated Level 2 chargers on exterior walls or dedicated pedestals next to driveways and carports, using weather-tight conduit and GFCI protection.',
      },
    ],
  },
];

export function getCoreService(slug: string): CoreServiceInfo | undefined {
  return CORE_SERVICES.find((s) => s.slug === slug);
}

export function getLocation(slug: string): LocationInfo | undefined {
  const cleanSlug = slug.replace(/^(electrician|electrition)-/, '');
  return LOCATIONS.find((l) => l.slug === cleanSlug || l.slug === slug);
}

export function locationUrl(locationSlug: string): string {
  const clean = locationSlug.replace(/^(electrician|electrition)-/, '');
  return `/electrician-${clean}`;
}

export function serviceLocationUrl(serviceSlug: string, locationSlug: string): string {
  const cleanLocation = locationSlug.replace(/^(electrician|electrition)-/, '');
  return `/${serviceSlug}-${cleanLocation}`;
}

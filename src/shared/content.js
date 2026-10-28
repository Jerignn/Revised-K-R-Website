// All business content for K&R Heating & Cooling, taken from kandrhvac.com.
export const business = {
  name: 'K&R Heating & Cooling',
  phone: '830-792-3993',
  phoneHref: 'tel:830-792-3993',
  city: 'Kerrville, TX',
  address: '410 Cotton Gin Lane',
  addressFull: '410 Cotton Gin Lane, Kerrville, TX 78028, USA',
  zip: '78028',
  hours: 'Monday – Sunday: Open 24 hours',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=410+Cotton+Gin+Lane,+Kerrville,+TX+78028',
  mapEmbed: 'https://maps.google.com/maps?q=410%20Cotton%20Gin%20Lane%2C%20Kerrville%2C%20TX%2078028&z=14&output=embed',
  reviewsUrl: 'https://www.google.com/search?q=k%26r+heating+and+cooling+kerrville+tx#lrd=0x865be39515eae4f3:0xa3e4e24a7b861783,1,,,',
  maintenancePdf: '/assets/docs/maintenance-plan.pdf',
};

export const img = (file) => `/assets/img/${file}`;

export const provides = [
  'We service all makes & models',
  'Free estimates on new installations',
  '24/7 emergency services',
  'Certified technicians',
];

export const guarantee =
  'When you call K&R Heating & Cooling, it’s not a gamble. We back up all of our work with a true 30-day 100% satisfaction guarantee. We want to be the last company you ever need to call. You can be confident knowing that your home comfort is our #1 priority.';

export const whyUs = [
  'At K&R Heating & Cooling our priority is to earn the trust of the community by delivering superior heating and cooling services with an unmatched client experience.',
  'We will never accept past performance as good enough; but will continue to strive every day for new levels of excellence. We look forward to serving you, and earning your trust.',
];

export const services = [
  {
    slug: 'air-conditioners',
    title: 'Air Conditioners',
    icon: 'snow',
    tagline: 'Installation, upgrades, repair & maintenance',
    image: 'air-conditioners.jpg',
    featured: true,
    intro: [
      'No one wants to get stuck in the heat on a hot Texas day. That’s why K&R Heating & Cooling is happy to provide our customers with 24/7 emergency services on all makes and models of air conditioning systems.',
    ],
    blocks: [
      {
        heading: 'Our air conditioning services include',
        items: [
          'Installation of new cooling systems',
          'Upgrading to new or more efficient systems',
          'Repair and maintenance of existing systems to ensure they continue running as efficiently and for as long as possible',
        ],
      },
      {
        heading: 'Benefits of regular maintenance',
        text: [
          'Avoid breakdowns and expensive repairs by regularly maintaining your cooling systems.',
          'When you combine superior products with the outstanding workmanship of our technicians, you can be confident that your comfort systems will consistently meet or exceed your needs, season after comfortable season. We’re fully trained to perform maintenance on any brand.',
        ],
        items: ['Comfort when it matters the most', 'Lower energy costs', 'Longer lifespan on your air conditioning units', 'Cleaner air', 'Less chance of costly repairs'],
      },
    ],
    closing: 'We will never accept past performance as good enough; but will continue to strive every day for new levels of excellence. We look forward to serving you, and earning your trust. Contact us today to book your repair, service or installation.',
  },
  {
    slug: 'furnaces',
    title: 'Furnaces',
    icon: 'flame',
    tagline: 'NATE-certified heating repair, 24/7',
    image: 'furnaces.jpg',
    featured: true,
    intro: [
      'As a homeowner, keeping your home comfortable all year round is your top priority. Our technicians are NATE-certified and ready to repair any brand of system you have 24/7.',
      'At K&R, we work with our customers to provide trusted heating solutions. Heating systems control temperature, humidity, and the general quality of the air in your home or business. Our technicians can assess your space, comfort, and efficiency requirements and provide you with the best solution for your needs.',
    ],
    blocks: [
      {
        heading: 'Our services include',
        items: [
          'Installation of new heating systems',
          'Upgrading to new or more efficient systems',
          'Repair and maintenance of existing systems to ensure they continue to run as efficiently and for as long as possible',
        ],
      },
      {
        heading: 'We will never sell you something you don’t need',
        text: ['Our technicians are not salespeople, and they do not earn commissions. No matter the service, we will never try to sell you something that we don’t truly feel you would benefit from.'],
      },
    ],
    closing: 'At K&R, we want to be the last heating and cooling company you ever need to call. We won’t be satisfied until we are 100% sure that you are. We look forward to serving you and earning your trust!',
  },
  {
    slug: 'air-handlers',
    title: 'Air Handlers',
    icon: 'fan',
    tagline: 'Circulation, humidity & cleaner air',
    image: 'air-handler-new.jpg',
    intro: [
      'Air handlers work with your A/C or heat pump to circulate warm and cool air throughout your home. These systems are designed to keep your home comfortable throughout any season. In addition to helping regulate temperature and improve circulation, air handlers can also help regulate humidity and clean the air as it’s processed.',
    ],
    blocks: [
      {
        heading: 'Our services include',
        cards: [
          ['Repair', 'From minor repairs to emergency fixes.'],
          ['Replacement', 'If a repair is not possible, we provide you with the most effective options that fit your needs.'],
          ['Installation', 'Precise installation performed by our NATE-certified technicians ensures optimal and lasting performance.'],
        ],
      },
      {
        heading: 'Benefits of regular maintenance',
        items: ['Comfort when it matters the most', 'Lower energy costs', 'Longer lifespan of your systems', 'Cleaner air', 'Less chance for costly repairs'],
      },
    ],
  },
  {
    slug: 'ductless-cooling-heating',
    title: 'Ductless Cooling & Heating',
    short: 'Ductless',
    icon: 'wind',
    tagline: 'Mini-split comfort, no ductwork required',
    image: 'ductless.jpg',
    featured: true,
    intro: [
      'Ductless systems, commonly referred to as mini-splits, are able to control the temperature in your entire home or a single room. The benefit of these systems is that they are energy-efficient and can heat and cool without the fuss of ductwork. Whether you live in a newer or older home, or are adding an addition, ductless systems are an efficient way to expand your comfort, no matter the obstacles your space presents.',
    ],
    blocks: [
      {
        heading: 'Why choose ductless?',
        items: [
          'Affordable heating and cooling solution for spaces without ductwork',
          'Efficient energy usage because they operate in selected areas',
          'Savings on energy bills',
          'Simple installation and maintenance',
          'Environmentally friendly',
        ],
      },
      {
        heading: 'Benefits of regular maintenance',
        text: ['K&R Heating & Cooling can assist, whether you require a seasonal tune-up or are unsure of the date your system was last inspected. Maintaining your systems’ functionality is not only wise, but also significantly less expensive than paying for repairs or replacement if a repair is not possible.'],
        items: ['Avoid frequent repairs and the likelihood of system failure', 'Maintain energy-efficiency and keep energy bills down', 'Keep your air clean and healthy'],
      },
    ],
    closing: guarantee,
  },
  {
    slug: 'heat-pumps',
    title: 'Heat Pumps',
    icon: 'drop',
    tagline: 'Two-in-one heating & cooling',
    image: 'heat-pump.jpg',
    intro: [
      'In addition to heating your home, heat pumps provide cooling and humidity control. In the winter, they will pump warm air into your home and move cool air out. In the summer, they will perform the opposite to keep your space cool.',
      'There are a number of benefits of having a heat pump as either your primary or secondary heating and cooling source.',
    ],
    blocks: [
      {
        heading: 'Benefits of a heat pump',
        items: ['Two-in-one heating and cooling unit', 'Energy-efficient operation', 'Reduced wear-and-tear on your furnace and air conditioner'],
        text: ['Using a heat pump is already a great way to increase your heating and cooling efficiency, but by pairing it with a furnace, you can further increase your efficiency and save up to 30% on the energy a furnace alone uses to generate heat.'],
      },
      { heading: 'Our services include', items: ['New installations', 'Repairs', 'Tune-ups & maintenance'] },
    ],
    closing: guarantee,
  },
  {
    slug: 'indoor-air-quality-units',
    title: 'Indoor Air Quality Units',
    short: 'Indoor Air Quality',
    icon: 'shield',
    tagline: 'Air cleaners, humidity control & UV',
    image: 'indoor-air-quality-1.jpg',
    intro: [
      'While having the right temperature is critical to your comfort, the quality of the air circulating can have a significant impact on your comfort and health as well. Allergens, dust, pet dander, chemicals, and other contaminants pollute your indoor air and continue to circulate until they are removed. Too much or too little moisture can also cause a number of issues. Below are some signs that you may benefit from improved indoor air quality.',
    ],
    blocks: [
      {
        heading: 'Signs you may benefit from improved air quality',
        items: ['Respiratory problems', 'Irritated skin and eyes', 'Headaches', 'Mold and mildew', 'Dry, brittle furniture and nosebleeds'],
      },
      {
        heading: 'There are a number of ways to remove these unwanted elements',
        items: ['Whole home air cleaners', 'Humidifiers and dehumidifiers', 'UV treatment', 'And more!'],
      },
    ],
    closing: guarantee,
  },
  {
    slug: 'commercial-hvac-services',
    title: 'Commercial HVAC Services',
    short: 'Commercial HVAC',
    icon: 'building',
    tagline: 'Tailored solutions for every business',
    image: 'commercial.jpg',
    featured: true,
    intro: [
      'If heating or air conditioning fails in a commercial building, you need to act quickly to ensure the comfort of your employees and customers.',
      'At K&R Heating & Cooling our technicians are familiar with all aspects of a commercial HVAC system and can respond quickly and efficiently to all your comfort needs so you can continue working as usual. We’re happy to provide tailored solutions for a wide variety of businesses.',
    ],
    blocks: [
      {
        heading: 'Our commercial HVAC services include',
        items: ['New installation', 'Replacements', 'Repairs', 'Maintenance'],
        text: ['We understand that no two businesses are alike, which is why we offer custom heating and cooling solutions. Our experts have specialized training on all types of HVAC systems and can come up with a configuration that suits your company’s needs.'],
      },
      { heading: 'Types of commercial properties we service', items: ['Retail stores', 'Restaurants', 'Office buildings', 'Warehouses', 'Churches', 'And more'] },
    ],
    closing: guarantee,
  },
];

export const maintenance = {
  intro: 'Our preventative maintenance plan covers the complete inspection/tune-up of your HVAC equipment two times per year.',
  benefits: [
    '10% Parts & Labor Discount',
    'Discounts on New Equipment',
    'Lower Utility Bills',
    'One Emergency Service Call per Year',
    'Priority Service',
    'Extended Equipment Life',
    'Improved System Reliability',
    'One 1″ Filter per Maintenance Check',
  ],
  checklist: [
    'Check Refrigerant Charge', 'Check All Safety Controls', 'Check/Clean Evaporator & Condenser Coils', 'Check For Vibration & Noise',
    'Check Voltages', 'Lubricate Motors, as Necessary', 'Check/Adjust Gas Pressures', 'Check all Capacitors',
    'Seal Leaks in Air Handler/Furnace', 'Check Amp Draws on Motor(s) & Compressor(s)', 'Check Ductwork for Cleanliness & Leaks', 'Clear Condensate Drain Lines',
    'Change Filters', 'Check Thermostat Calibration & Operations', 'Check & Tighten Electrical Connections', 'Check for Proper Combustion',
    'Remove Debris In & Around Condenser', 'Spray Inside Air Handler With Fungicide',
  ],
};

export const promotions = [
  { amount: '15%', unit: 'OFF', title: 'Every Preventative Maintenance Plan', expires: 'September 30', note: 'Call for details.' },
  { amount: '$180', unit: '/YEAR', title: 'Preventative maintenance plans for 2 visits', expires: 'December 31', prefix: 'From' },
  { amount: 'FREE', unit: '', title: 'Second opinion', expires: 'December 31' },
  { amount: 'FREE', unit: '', title: 'Maintenance package with complete system installs', expires: 'December 31' },
  { amount: '$85', unit: '', title: 'Seasonal tune-up', expires: 'December 31' },
];

export const promoMessage = (p) =>
  `I’d like to claim the promotion: ${p.prefix ? p.prefix + ' ' : ''}${p.amount}${p.unit ? ' ' + p.unit.toLowerCase() : ''} — ${p.title}.`;

export const reviews = [
  { name: 'Stacy F.', text: 'Beyond impressed. He was thorough, honest and helpful. The other company went straight to need to replace and we can’t get it operating until you figure out how much you wanna spend. K&R came in with options and got it running. He understood that we needed quality options and gave them to us.' },
  { name: 'Ellysa W.', text: 'I have found the K&R team to be reliable & communicative. They worked on a unit that I sent them out to take care of. They are reasonably priced and are better than the ones that you can get at the boxed stores locally!' },
  { name: 'Kuhler', text: 'Had a complete system replacement. Very pleased with the entire process. Very professional and timely.' },
  { name: 'Shawn C.', text: 'K&R is simply the best! They provide fast reliable service at a fair price. You can trust them with all of your heating and cooling needs.' },
  { name: 'Hayden W.', text: 'Ben was prompt, polite, and proficient. Got us up and running in a jiffy. We were cool again before noon on one of the hottest days of summer so far. Highly recommend.' },
  { name: 'Lynda A.', text: 'The team does a great job of taking care of our air-conditioners and heaters during the annual maintenance checks. K&R just offered a dryer vent clean-out which I had them do and now the dryer works much better. Thank you for all you do to keep my equipment working properly.' },
];

export const financing = {
  intro: [
    'Like most people, you’ve got a lot of financial commitments to meet each month. When you are faced with needing to purchase a new air conditioner or furnace when your budget already feels stretched, we can help.',
    'We provide homeowners with simple and affordable financing options for new heating and cooling systems.',
  ],
  benefits: ['Flexible options', 'Competitive interest rates', 'Monthly payments', 'Fast, convenient application process', 'Potential for long-term savings when purchasing a higher efficiency system'],
};

export const careers = {
  intro: [
    'K&R Heating & Cooling is a trusted heating & cooling service provider with an unmatched client experience. Our goal is to help our team grow through education, support and skilled mentors.',
    'We are always on the lookout for ambitious and skilled professionals to join our ranks. If you are looking for a rewarding career in the heating and cooling service industry please fill out the form below and upload your resume, or give us a call at 830-792-3993. If we feel that you are a good fit, one of our managers will be in touch to schedule an interview!',
  ],
  positions: [
    {
      title: 'HVAC Installer',
      text: [
        'We have an immediate opening for an HVAC installer to accurately install top-of-the-line heating and air conditioning equipment for our customers. As an HVAC Installer, you will travel to our clients’ properties with new HVAC equipment and replace old equipment, inform customers about the new HVAC system, and teach the customer how to use their new thermostat.',
        'A successful candidate will need excellent organizational, troubleshooting, communication, and problem-solving skills. Their essential duty is to provide professional guidance and advice for clients.',
      ],
      duties: [
        'Inspect the effectiveness and safety of current customers’ HVAC systems',
        'Remove and replace HVAC systems in existing and new construction homes and businesses',
        'Perform installation of HVAC related equipment following manufacturer’s specifications',
        'Start up new central systems and troubleshoot any problems on startup',
        'Program and set up t-stats with customers and help them to understand new equipment and t-stat',
        'Comply with service standards, work instructions, and customers’ requirements',
        'Provide necessary support to other team members to be able to complete tasks on time as instructed by management',
        'Create and maintain cordial and collaborative working relationships with both superiors and co-workers',
        'Ensure all paperwork needed for each job is accurately filled out',
      ],
    },
    {
      title: 'HVAC Service Technician',
      text: [
        'The HVAC Technician will be responsible for all aspects of the installation, maintenance, inspection, operation and repair of heating and cooling systems in residential buildings.',
        'Technicians will primarily respond to service calls, but will also do planned maintenance and/or installation as needed. Our company offers on-the-job training and yearly wage increases as your skills develop. Starting pay is determined upon skills and experience.',
      ],
      duties: [
        'Cleaning, adjusting and repairing HVAC systems',
        'Troubleshooting defective HVAC systems and equipment',
        'Performing routine preventative maintenance',
        'Fixing, replacing and adjusting vents and ductwork',
        'Complying with service standards, work instructions and customers’ requirements',
        'Responding to emergency maintenance requests',
      ],
    },
  ],
  perks: ['Health & Dental Benefits', 'Company Truck Provided', 'Bonus & Commission Pay', 'Holidays Off', 'Technical Training Provided'],
};

export const gallery = [1, 2, 3, 4, 5, 6, 7].map((n) => `image-${n}.jpg`);

export const badges = [
  ['nate-1.png', 'NATE Certified'],
  ['ductless-preferred-pro-comp-270x103.png', 'Trane Ductless Preferred Pro'],
  ['tcs-new.png', 'Trane Comfort Specialist'],
  ['google-reviews.png', 'Google Reviews'],
];

// Questions answered only with facts published on kandrhvac.com.
export const faqs = [
  ['Do you offer 24/7 emergency service?', 'Yes. K&R Heating & Cooling provides 24/7 emergency services, and our office line is open Monday – Sunday, 24 hours a day. Call 830-792-3993 any time.'],
  ['What brands do you service?', 'We service all makes & models. Our NATE-certified technicians are fully trained to repair and maintain any brand of heating and cooling system.'],
  ['What does the maintenance plan include?', 'Two complete inspections/tune-ups per year with a 20+ point inspection, plus a 10% parts & labor discount, discounts on new equipment, priority service, one emergency service call per year and a 1″ filter at each visit. Plans start from $180/year.'],
  ['Are estimates free?', 'Yes — we provide free estimates on new installations. We also offer a free second opinion on repairs.'],
  ['Do you offer financing?', 'Yes. We offer simple, affordable financing for new heating and cooling systems, with flexible options, competitive interest rates and monthly payments.'],
  ['Is your work guaranteed?', 'Every job is backed by a true 30-day 100% satisfaction guarantee. Our technicians don’t earn commissions, so we will never sell you something you don’t need.'],
  ['Do you work on commercial buildings?', 'Yes. We install, replace, repair and maintain commercial HVAC systems for retail stores, restaurants, office buildings, warehouses, churches and more.'],
];

export const privacy = [
  ['', 'The following discloses the information gathering and dissemination practices for K&R Heating & Cooling. We reserve the right to modify the information contained herein at any time without prior notice. If we do make changes to our privacy policies, we will modify this page accordingly.'],
  ['Information Collected From Normal Browsing', 'Like many websites, we collect certain information when you access our site. When you browse, read, or download information from this site, data is collected by us, including but not limited to your IP address, URL request, browser type, web pages visited, and date and time of your request. We use this information to generate statistics and measure site activity, so that we can improve the usefulness of the site to our visitors and for other business purposes. For example, we track which pages are most popular among visitors. Currently, we handle this information on an aggregated basis and do not use this information to identify any users.\n\nWe often use analytics companies, such as Webtrends, Google Analytics and others, to assist us, and we may use additional or different service providers in the future.'],
  ['Information You Provide', 'At several places on the site, K&R Heating & Cooling asks you to provide additional information so that we can respond to inquiries from you. For example, we may ask for your name, your email address, and your location, or may ask for other information about you. We will use this information to contact you, administer mailing lists or online communities, or other activities related to the mission or services of K&R Heating & Cooling. You do not have to provide us with this information to use many features of the site, but we will be unable to provide you with certain information unless you do so. We will manage and store this information as an ordinary business record. Should you wish to unsubscribe from receiving future communications from K&R Heating & Cooling, submit a request to be removed from our mailing list.'],
  ['Disclosure of Information', 'Available log records, account information, and all data stored on servers hosting this website, our blogs and any other online sites we use may be accessed by our system administrators who may make the information available to other K&R Heating & Cooling personnel for business purposes.\n\nK&R Heating & Cooling may share information that you have provided to us, including your name and email address, with our affiliated franchisors and with the companies that provide analytical services to us in support of the website. In some circumstances, we may share information that you have provided to one or more of our franchisees located in your area.\n\nIn addition, we may share information that you have provided to us with non-affiliated third parties where we think doing so may allow you to receive information regarding products or and services that may be useful to you.\n\nFinally, we will provide information that you have given us when required by legal process to do so, such as by a subpoena.'],
  ['Cookies', 'Cookies are small computer files placed on your computer by our site. Our site may use both session and permanent cookies. Session cookies make it easier to use our site by, for example, enabling you to move through the site without having to reenter your personal information on each page. Session cookies are deleted automatically when you close your browser.\n\nIn addition, our site also uses permanent cookies to facilitate our registration and login functions, we may also use cookies to recognize when you return to our website. In addition, some cookies may be set by advertising networks that provide advertising services on our website. In some instances, cookies set by those networks may trigger specific advertisements based on the parts of our site, and other websites, that your browser visits.'],
  ['Posting', 'Posting or updating content is a public action, and all content may be publicly visible. All content may be retained for restorative, archival, research or business purposes by K&R Heating & Cooling.'],
  ['Security', 'K&R Heating & Cooling employs reasonable administrative and technical security measures in place to help protect against loss, misuse and alteration of the information under our control. However, as with any Internet website, it is not possible to guarantee that the site will not be attacked or that information you provided may not be compromised.'],
  ['Other Websites', 'This website may contain links to independently run websites outside of this one. K&R Heating & Cooling is not responsible for the privacy practices or content of such websites. We encourage you to read the privacy policies of any websites you visit from this website and its accompanying blog.'],
];

export const serviceOptions = ['Maintenance Plan', ...services.map((s) => s.title), 'Other / Not sure'];

// Site navigation, as paths relative to a design's base URL.
export const serviceLinks = [['maintenance-plans', 'Maintenance Plans'], ...services.map((s) => [`services/${s.slug}`, s.title])];
export const aboutLinks = [
  ['about-us-2', 'About Us'],
  ['careers', 'Careers'],
  ['financing', 'Financing'],
  ['our-work', 'Our Work'],
  ['promotions', 'Promotions'],
];

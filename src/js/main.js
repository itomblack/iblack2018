(function () { 'use strict';

// ********** Project Items *************** //
// ********** ************* *************** //

  var home0 = new Vue({
    el: '#home-proj-2',
    data: {
      title: 'HitSource',
      subTitle: 'Brand, UX, UI',
      imgClass: 'anim-flicker',
      imgSizeClass: 'project-item-wrap-lrg  top-offset',
      internalurl: 'hitsource-project.html',
      externalurl: '',
      imgBackClass: 'img-proj-bg-hit',
      imgpng: 'global/proj-hit-head.png'
    }
  });


  var home1 = new Vue({
    el: '#home-proj-3',
    data: {
      title: 'Travel Supermarket',
      subTitle: 'Strategy, UX, Prototyping',
      imgClass: 'img-proj-travel',
      imgSizeClass: 'project-item-wrap-sml',
      internalurl: 'travel-project.html',
      externalurl: '',
      imgBackClass: 'bg-blue1',
      imgpng: ''
    }
  });

  var home2 = new Vue({
    el: '#home-proj-1',
    data: {
      title: 'Financial Wellbeing',
      subTitle: 'Research, Strategy, Prototyping',
      imgClass: '',
      imgSizeClass: 'project-item-wrap-lrg',
      internalurl: 'finance-project.html',
      externalurl: '',
      imgBackClass: 'bg-blue1',
      imgpng: 'cs/finance/fin-img-phone-1.png'
    }
  });

  var home2 = new Vue({
    el: '#home-proj-4',
    data: {
      title: 'The Living Archive',
      subTitle: 'UX, UI',
      imgClass: '',
      imgSizeClass: 'project-item-wrap-sml top-offset',
      internalurl: 'livingarchive-project.html',
      externalurl: '',
      imgBackClass: 'bg-blue1',
      imgpng: 'cs/archive/archive-img-phone-1.png'
    }
  });

  var home3 = new Vue({
    el: '#home-hack-1',
    data: {
      title: 'Blues Harp Hack',
      subTitle: 'Design, Development',
      imgClass: 'img-proj-harp',
      imgSizeClass: 'project-item-wrap-sml',
      internalurl: '',
      externalurl: 'http://itomblack.github.io/harp/',
      imgBackClass: 'bg-white',
      imgpng: ''
    }
  });

  var home4 = new Vue({
    el: '#home-hack-2',
    data: {
      title: 'Whisky Map Hack',
      subTitle: 'Design, Development',
      imgClass: 'img-proj-whisky',
      imgSizeClass: 'project-item-wrap-sml top-offset',
      internalurl: '',
      externalurl: 'https://itomblack.github.io/whisky-map/',
      imgBackClass: 'bg-white',
      imgpng: ''
    }
  });

  var cvlinks = new Vue({
    el: '#cv-link',
    data: {
      title: 'Working 9-5',
      linktitle: 'View My CV',
      linkurl: 'cv.html'
    }
  });







// ********** CV *************** //
// ********** ** *************** //

var cvtitle = new Vue({
  el: '#page-title-cv',
  data: {
    heading: 'Curriculum Vitae.',
    subheading: 'Ian Black.'
  }
});

var cvjob1 = new Vue({
  el: '#cv-job-1',
  data: {
    company: 'Invoke',
    dates: 'May 2017 - Present',
    role: 'Senior Product Designer',
    bullets: [
      { message: 'Product design for established businesses & startups across North America.' },
      { message: 'Design workshop planning & facilitation for minor celebrities.' },
      { message: 'User research & product definition for the largest Credit Union in Canada.' },
      { message: 'Project scoping & planning.' },
      { message: 'Developing the Invoke brand communications.' }
    ]
  }
});

var cvjob2 = new Vue({
  el: '#cv-job-2',
  data: {
    company: 'Beyond',
    dates: 'Aug 2016 - Jan 2017',
    role: 'Senior UX Designer',
    bullets: [
      { message: 'Defining new business products with the Beyond Strategy team.' },
      { message: 'Developing agile, UX design processes within TravelSupermarket.' },
      { message: 'Leading UX workshops for the UK\'s 2nd largest Supermarket.' },
      { message: 'Mentorship of new designers.' },
      { message: 'Design team recruitment.' }
    ]
  }
});


var cvjob3 = new Vue({
  el: '#cv-job-3',
  data: {
    company: 'Pebble {code}',
    dates: 'Jan 2015 - Jul 2016',
    role: 'UX/UI Designer',
    bullets: [
      { message: 'Performing research, product design & development of enterprise software for the UK\'s largest pharmaceutical company, AstraZeneca.' },
      { message: 'Project & client management, from proposal to production.' },
      { message: 'Organising hack-days to encourage experimentation & rapid prototyping, internally & with clients' },
      { message: 'Contributing to culture by running art classes, blogging & presentations.' }
    ]
  }
});

var cvjob4 = new Vue({
  el: '#cv-job-4',
  data: {
    company: 'Harrison : Fraser',
    dates: 'Jan 2012 - Jul 2014',
    role: 'Designer',
    bullets: [
      { message: 'Creating international brands for this strategic design consultancy.' },
      { message: 'Designing for print, digital & interiors for the retail & leisure industries.' },
      { message: 'Collaborating with brand planners, clients and suppliers to deliver engaging brand experiences.' }
    ]
  }
});



var cvSkills = new Vue({
  el: '#cv-skills',
  data: {
    title: 'Skills',
    color: 'bg-blue1',
    bullets: [
      { message: 'UX Design' },
      { message: 'Interface Design' },
      { message: 'Product Strategy' },
      { message: 'Prototyping' },
      { message: 'Design Workshop Facilitation' },
      { message: 'User Research' },
      { message: 'Graphic Design' },
      { message: 'Branding' },
      { message: 'Wireframing' },
      { message: 'Front-end development' },
      { message: '2D Animation' }
    ]
  }
});

var cvTools = new Vue({
  el: '#cv-tools',
  data: {
    title: 'Digital Toolkit',
    color: 'bg-blue2',
    bullets: [
      { message: 'HTML' },
      { message: 'CSS' },
      { message: 'SCSS' },
      { message: 'Javascript' },
      { message: 'Gulp' },
      { message: 'Sketch' },
      { message: 'InVision' },
      { message: 'Zeplin' },
      { message: 'Illustrator' },
      { message: 'Photoshop' },
      { message: 'Lightroom' },
      { message: 'InDesign' },
      { message: 'After Effects' },
      { message: 'Microsoft Office' },
      { message: 'Google Apps' },
      { message: 'Google Analytics' },
      { message: 'Keynote' },
    ]
  }
});


// ********** Case Studies *************** //
// ********** ************ *************** //

/* Travel Supermarket */

var travelTitle = new Vue({
  el: '#page-title-travel',
  data: {
    heading: 'Travel Supermarket',
    subheading: 'Deal Comparison For Package Holidays.'
  }
});

var travelIntro = new Vue({
  el: '#intro-travel',
  data: {
    heading: 'Delivering A Better Experience',
    subheading: 'This price comparison site for package holidays had a successful history but a rapidly declining audience. A strategic, test-driven approach brought it back on track.',
    roles: [
      { message: 'Strategy' },
      { message: 'UX' },
      { message: 'Design' },
      { message: 'Prototyping' },
    ],
    agency: 'Beyond',
    sitetitle: 'TravelSupermarket.com',
    url: 'https://www.travelsupermarket.com'
  }
});

var travelPhase1 = new Vue({
  el: '#sect-travel-phase-1',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: 'Phase 1',
    subheading: 'Understanding The Problem',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var travelConstraint = new Vue({
  el: '#sect-travel-stakeholder',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: 'bg-white',
    heading: '',
    subheading: 'Stakeholder & Team Interviews',
    para: 'We met with team members across multiple offices. It was clear office dynamics we\'re as important as design to the success of this project.',
    imageurl: 'travel/travel-img-0.jpg',
    imgshadow: 'boxshadow-1'
  }
});


var travelData = new Vue({
  el: '#sect-travel-data',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'Customer Research',
    para: 'Using the client\'s existing reports and analytics, I built up a foundational portrait of the TSM site visitors. This would be continuously adapted and added to as we learned more during the project.',
    imageurl: 'travel/travel-user-postits.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var travelworkshops = new Vue({
  el: '#sect-travel-workshops',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'Design Thinking Workshops',
    para: 'Running creative workshops was a tactic to collect knowledge from the client team.',
    imageurl: 'travel/travel-img-1.jpg',
    imgshadow: 'boxshadow-1'
  }
});


var travelPhase2 = new Vue({
  el: '#sect-travel-phase-2',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: 'Phase 2',
    subheading: 'Designing For Price Comparison',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});


var travelUsers = new Vue({
  el: '#sect-user-data',
  data: {
    largeimages: [
      { deskurl1: 'travel/travel-users-1.jpg' },
      { deskurl1: 'travel/travel-users-2.jpg' }
    ],
    moburl1: '',
    moburl2: ''
  }
});

var travelStrat = new Vue({
  el: '#sect-travel-strat',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'Planning The Product Roadmap',
    para: 'With our understanding of the new business strategy, we highlighted search results as the first design challenge. We broke this down further into testable product changes.',
    imageurl: 'travel/travel-img-phone-1.png',
    imgshadow: ''
  }
});

var travelcompanalysis = new Vue({
  el: '#sect-travel-companalysis',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: 'bg-blue2',
    heading: '',
    subheading: 'Competitive Analsyis',
    para: 'I undertook an analysis of Travel Supermarket and their biggest competitors, identifying the pros and cons of each approach across multiple device sizes.',
    imageurl: 'travel/travel-img-2.jpg',
    imgshadow: ''
  }
});

var travelContent = new Vue({
  el: '#sect-travel-content',
  data: {
    bgCol: 'bg-blue1',
    heading: '',
    subheading: 'A Content-First Approach',
    para: 'A good design is nothing without the right content. I redesigned the results card into sections. First: Intrigue. Second: Inform. Third: Recommend.',
    imageurl: 'travel/travel-img-scroll-1.jpg',
  }
});


var travelCode = new Vue({
  el: '#sect-travel-code',
  data: {
    bgCol: 'bg-ink',
    heading: '',
    subheading: 'Live Prototyping, With Real Data',
    para: 'For true responsive testing I built a prototype results card using HTML & SCSS. To incorporate real data, I used Handlebars.js.',
    imageurl: 'travel/travel-img-handlebar-1.png',
    imgshadow: ''
  }
});

var travelVisuals = new Vue({
  el: '#sect-travel-visuals',
  data: {
    largeimages: [
      { deskurl1: 'travel/travel-img-desktop-1.jpg', }
    ],
    moburl1: 'travel/travel-img-phone-2.jpg',
    moburl2: 'travel/travel-img-phone-3.jpg'
  }
});

var travelTrack = new Vue({
  el: '#sect-travel-track',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: 'bg-blue2',
    heading: '',
    subheading: 'Delivering Results Through A/B Testing',
    para: 'It was important to make sure we met or exceeded our KPIs. New designs were tested & tracked across a segment of users before a full launch.',
    imageurl: 'travel/travel-img-graph-1.png',
    imgshadow: ''
  }
});

var travelIterate = new Vue({
  el: '#sect-travel-iterate',
  data: {
    bgCol: 'bg-white',
    heading: '',
    subheading: 'An Iterative Approach',
    para: 'Redesign No.1 was a success, but we knew we could do better and learn more. My second design delivered greater information up front to the user, and removed the focus on recommedations. It was another hit with users.',
    imageurl: 'travel/tsm-card-animation-test-2.gif',
    imgshadow: 'boxshadow-1'
  }
});


var travelVisuals2 = new Vue({
  el: '#sect-travel-visuals2',
  data: {
    largeimages: [
      { deskurl1: 'travel/travel-img-desktop-2.jpg', }
    ],
    moburl1: 'travel/travel-img-phone-4.jpg',
    moburl2: 'travel/travel-img-phone-5.jpg'
  }
});


/* Phase 3 */

var travelPhase2 = new Vue({
  el: '#sect-travel-phase-3',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 3',
    subheading: 'Leaving A Legacy',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});


var travelEnd = new Vue({
  el: '#sect-travel-end',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'The Product Manual',
    para: 'As our process moved forward, we continued to improve the team\'s communication & collaboration. I documented crucial design knowledge in the product manual, a living sketch file I created to serve both existing a new design team members.',
    imageurl: '',
    imgshadow: ''
  }
});

var travelGuide = new Vue({
  el: '#sect-travel-guide',
  data: {
    largeimages: [
      { deskurl1: 'travel/travel-doc-1.jpg', },
      { deskurl1: 'travel/travel-doc-2.jpg', },
      { deskurl1: 'travel/travel-doc-3.jpg', }
    ],
    moburl1: '',
    moburl2: ''
  }
});


var homeLink = new Vue({
  el: '#home-link',
  data: {
    title: 'What Next?',
    linktitle: 'Return To The Homepage',
    linkurl: 'index.html'
  }
});






/* HitSource */

var hitTitle = new Vue({
  el: '#page-title-hits',
  data: {
    heading: 'HitSource',
    subheading: 'The Music Maker\'s Marketplace.'
  }
});

var hitIntro = new Vue({
  el: '#intro-hits',
  data: {
    heading: 'An Exclusive Source For Beats',
    subheading: 'After leaving the performance side of the hip-hop game, this client dreamt of building an invite-only marketplace for buying & selling beats. My job was to bring it to life.',
    roles: [
      { message: 'Brand' },
      { message: 'UX' },
      { message: 'Design' }
    ],
    agency: 'Invoke',
    sitetitle: 'Coming early 2018',
    url: ''
  }
});


/*Phase 1 */

var hitphase1 = new Vue({
  el: '#sect-hit-phase1',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 1',
    subheading: 'Discovery & Planning',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var hitTalk = new Vue({
  el: '#sect-hit-talk',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: 'bg-blue1',
    heading: '',
    subheading: 'Stakeholder & Industry Research',
    para: 'I partnered with the strategy team to understand the client\'s business, and our intended audience. We interviewed stakeholders, industry professionals, and studied online forums.',
    imageurl: 'hitsource/hit-img-1.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var hitWorkshop = new Vue({
  el: '#sect-hit-workshop',
  data: {
    bgCol: 'bg-blue2',
    heading: '',
    subheading: 'The Design Sprint Workshops',
    para: 'To define an MVP and flesh out the core architecture, I ran a design sprint, including 2 days of workshops. Client, Strategy, Design & Development all gathered together to think about Object Oriented UX and product event-flows.',
    imageurl: 'hitsource/hit-img-2.jpg',
    imgshadow: ''
  }
});

var hitIa = new Vue({
  el: '#sect-hit-ia',
  data: {
    largeimages: [
      { deskurl1: 'hitsource/hit-ia.jpg' }
    ],
    moburl1: '',
    moburl2: ''
  }
});


/* Phase 2 */

var hitphase1 = new Vue({
  el: '#sect-hit-phase2',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 2',
    subheading: 'Building The Brand',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var hitBrand = new Vue({
  el: '#sect-hit-brand',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'Logo. Colour. Typography.',
    para: 'Taking some cues from the client, and influences from Trap music culture, I developed a brand look & feel for the new product. This meant colour palettes, typography & key UI elements. The client loved the fresh look.',
    imageurl: 'hitsource/hit-img-type.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var hitNBrandViz = new Vue({
  el: '#sect-hit-brand-vis',
  data: {
    largeimages: [
      { deskurl1: 'hitsource/hit-img-ui-comps-1.jpg', }
    ],
    moburl1: '',
    moburl2: ''
  }
});



/* Phase 3 */

var hitphase1 = new Vue({
  el: '#sect-hit-phase3',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 3',
    subheading: 'Design & Development',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var hitUXViz = new Vue({
  el: '#sect-hit-ux-vis',
  data: {
    largeimages: [
      { deskurl1: 'hitsource/hit-ux-1.jpg', }
    ],
    moburl1: 'hitsource/hit-phone-ux-1.jpg',
    moburl2: 'hitsource/hit-phone-ux-2.jpg'
  }
});

var hitAgile = new Vue({
  el: '#sect-hit-agile',
  data: {
    bgCol: 'bg-blue1',
    heading: '',
    subheading: 'Agile In Action',
    para: 'Defining UI guidelines up-front meant we could design and build in each sprint. I was always one sprint ahead. Every 2 weeks, my new wireframes were reviewed with the client, before going into production.',
    imageurl: 'hitsource/hit-img-scroll-1.jpg',
  }
});

var hitConvo = new Vue({
  el: '#sect-hit-convo',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: '',
    subheading: 'A Convo-Transactional Experience',
    para: 'Offline, conversation is key to negotiating the sale of a beat. I designed a convo-transactional interface that let that discussion continue online.',
    imageurl: 'hitsource/hit-img-phone-1.png',
    imgshadow: ''
  }
});

var hitTest = new Vue({
  el: '#sect-hit-test',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: 'bg-white',
    heading: '',
    subheading: 'Build. Test. Learn.',
    para: 'When the MVP product is finished, I will be testing the product in the hands of producers to iron out any kinks.',
    imageurl: 'hitsource/hit-img-5.jpg',
    imgshadow: 'boxshadow-1'
  }
});


var hitVisuals = new Vue({
  el: '#sect-hit-visuals',
  data: {
    largeimages: [
      { deskurl1: 'hitsource/hitsource-marketplace-1.jpg' },
      { deskurl1: 'hitsource/hit-ui-beats.jpg' },
      { deskurl1: 'hitsource/hit-img-desktop-1.jpg' },
      { deskurl1: 'hitsource/hit-img-desktop-2.jpg' }
    ],
    moburl1: '',
    moburl2: ''
  }
});


/* Sainsburys Archive */

var archiveTitle = new Vue({
  el: '#page-title-archive',
  data: {
    heading: 'The Living Archive',
    subheading: 'Recording The History Of An Historic Brand.'
  }
});

var archiveIntro = new Vue({
  el: '#intro-archive',
  data: {
    heading: 'Exploring The Archives',
    subheading: 'The UK\'s second largest supermarket chain wanted to digitise their historical assets, allowing future generations to publicly explore their past.',
    roles: [
      { message: 'UX Strategy' },
      { message: 'UI' }
    ],
    agency: 'Beyond',
    sitetitle: '',
    url: ''
  }
});

var archivePitch = new Vue({
  el: '#sect-archive-pitch',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'A Quick Pitch',
    subheading: 'Two Weeks To Concept',
    para: 'To secure project funding, our client needed to sell the concept to the board. Our team had two weeks to investigate their brief, understand the existing tech set-up, explore ideas, and present a solution.',
    imageurl: 'archive/archive-img-phone-1.png',
    imgshadow: ''
  }
});

var archiveOne = new Vue({
  el: '#sect-archive-one',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: 'bg-white',
    heading: 'Out With The Old',
    subheading: 'Replacing Four Old Sites With One Product.',
    para: 'Accessibility to researchers, academia and media was key. I considered how we could provide an engaging new experience, without losing the functionality of the existing archive sites.',
    imageurl: 'archive/archive-img-1.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var archiveRabbit = new Vue({
  el: '#sect-archive-rabbit',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Down A Rabbit Hole',
    subheading: 'Competitor Research On Curated Content',
    para: 'Comparable experiences fell into two buckets: Richly curated linear storytelling experience, or data-driven interlinked content allowing a \'rabbit-hole\' exploration style. I saw opportunities for a combination of the two.',
    imageurl: '',
    imgshadow: ''
  }
});

var archiveOoux = new Vue({
  el: '#sect-archive-ooux',
  data: {
    bgCol: 'bg-white',
    heading: 'Defining Interconnections',
    subheading: 'An Object-Oriented UX Approach',
    para: 'The archive would bring together over 20,000 digitised assets. I worked in Trello to define attributes and relationships for each part of the ecosystem.',
    imageurl: 'archive/archive-img-2.jpg',
    imgshadow: 'boxshadow-1'
  }
});


var travelHmw = new Vue({
  el: '#sect-archive-hmw',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: 'bg-blue2',
    heading: 'How Might We?',
    subheading: 'An Ideation Workshop',
    para: 'To explore ideas for the experience, the whole team engaged in creative exercises around the topics of storytelling & nostalgia. I led a sub-group in sketching these concepts.',
    imageurl: 'archive/archive-img-3.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var archiveVisual = new Vue({
  el: '#sect-archive-design',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: 'A Modern Aesthetic',
    subheading: 'Pair-Designing At Speed',
    para: 'I went straight from the whiteboard into hi-fi designs, working in tandem with another designer. A stripped back palette allowed each object to be the focus of attention. We focussed on key screens that would sell the concept best during the pitch.',
    imageurl: 'archive/archive-img-4.png',
    imgshadow: ''
  }
});

var archiveVisuals = new Vue({
  el: '#sect-archive-visuals',
  data: {
    largeimages: [
      { deskurl1: 'archive/archive-img-desktop-1.jpg', }
    ],
    moburl1: 'archive/archive-img-phone-2.jpg',
    moburl2: 'archive/archive-img-phone-3.jpg'
  }
});









/* Financial Wellbeing */

var finTitle = new Vue({
  el: '#page-title-fin',
  data: {
    heading: 'Financial Wellbeing',
    subheading: 'A Customer-Focussed Approach To Finance'
  }
});

var finIntro = new Vue({
  el: '#intro-fin',
  data: {
    heading: 'A Brand New Banking Product',
    subheading: 'A major financial institution needed to deliver a best-in-class experience for their digitally-savvy, socially-conscious customers. But what did their customers need? I helped them find out.',
    roles: [
      { message: 'Research' },
      { message: 'Strategy' },
      { message: 'Prototyping' }
    ],
    agency: 'Invoke',
    sitetitle: 'Launching 2018',
    url: ''
  }
});


/* Phase 1 */

var finphase1 = new Vue({
  el: '#sect-fin-phase1',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 1',
    subheading: 'Customer Research',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var finA = new Vue({
  el: '#sect-fin-journey',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: '',
    subheading: 'The Customer Journey',
    para: 'Using the expertise of the client team we mapped out the journey of a typical customer. We identified pain points to investigate further through research.',
    imageurl: 'finance/fin-img-1.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var finB = new Vue({
  el: '#sect-fin-research',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: '',
    subheading: 'Face-To-Face Interviews',
    para: 'We took a user-centric approach, running weekly interviews with potential members. It was an eye-opening experience. A wealth of uncomfortable emotions surrounded personal financial management.',
    imageurl: 'finance/fin-img-2.jpg',
    imgshadow: 'boxshadow-1'
  }
});


/* Phase 2 */

var finphase2 = new Vue({
  el: '#sect-fin-phase2',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 2',
    subheading: 'Rapid Prototyping & Testing',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});


var finC = new Vue({
  el: '#sect-fin-save',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: '',
    subheading: 'Spend Less, Save More',
    para: 'The interviews revealed a real need to help people manage their spending habits. It\'s a space fin-techs are already tackling, but the financial institutions are lagging behind. We saw this as a great strategic opportunity.',
    imageurl: 'finance/fin-img-3.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var finD = new Vue({
  el: '#sect-fin-workshop',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: '',
    subheading: 'Design Workshops',
    para: 'I ran design workshops with the team to generate and refine ideas for prototyping. The client team rose to the challenge of the Crazy 8 sketch process in great form!',
    imageurl: 'finance/fin-img-4.jpg',
    imgshadow: 'boxshadow-1'
  }
});


var finE = new Vue({
  el: '#sect-fin-proto',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'Rapid Prototyping',
    para: 'There were plenty of ideas that needed validating. I built prototypes on a weekly basis and ran user testing sessions to get both qualitative and quantitative feedback.',
    imageurl: 'finance/fin-img-phone-1.png',
    imgshadow: ''
  }
});



/* Phase 3 */

var finphase3 = new Vue({
  el: '#sect-fin-phase3',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 3',
    subheading: 'A Strategy For Financial Fitness',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var finF = new Vue({
  el: '#sect-fin-finresearch',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: '',
    subheading: 'Researching Financial Health',
    para: 'In order to understand how to better help our customers, we dug into the online research around financial wellbeing, and pulled out valuable metrics we could build into the app experience.',
    imageurl: 'finance/fin-img-5.jpg',
    imgshadow: 'boxshadow-1'
  }
});




var finG = new Vue({
  el: '#sect-fin-fitbit',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: '',
    heading: '',
    subheading: 'Your Financial Fitbit',
    para: 'Based on our learnings, and current market trends, our strategy focused on building a financial fitness program, that guides people through the various stages of financial understanding and transformation. The final details of this are under wraps and the team believes it will have huge value.',
    imageurl: 'finance/fin-img-6.jpg',
    imgshadow: 'boxshadow-1'
  }
});

/* Phase 4 */

var finphase4 = new Vue({
  el: '#sect-fin-phase4',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Phase 4',
    subheading: 'Integrating Core Banking',
    para: '',
    imageurl: '',
    imgshadow: ''
  }
});

var finH = new Vue({
  el: '#sect-fin-product',
  data: {
    bgCol: 'bg-white',
    heading: '',
    subheading: 'A New Type Of Account',
    para: 'To go with the digital product, the client will be creating a new type of bank account, that helps support the financial habits we aim to encourage.',
    imageurl: 'finance/fin-img-scroll-1.jpg',
  }
});


var finI = new Vue({
  el: '#sect-fin-online',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: '',
    subheading: 'Reimagining The Site Architecture',
    para: 'The new account and app has to integrate with the existing core banking functionality. I worked with the product owner to define the requirements and create a new system architecture.',
    imageurl: 'finance/fin-img-8.jpg',
    imgshadow: 'boxshadow-1'
  }
});

var finJ = new Vue({
  el: '#sect-fin-team',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: '',
    subheading: 'A New Team Structure',
    para: 'To build and launch the product, an Agile Transformation is underway, creating development teams focussed around each segments of the new experience. All systems are go!',
    imageurl: 'finance/fin-img-phone-2.png',
    imgshadow: ''
  }
});

var finK = new Vue({
  el: '#sect-fin-visuals',
  data: {
    largeimages: [
    ],
    moburl1: 'finance/fin-img-phone-2.jpg',
    moburl2: 'finance/fin-img-phone-3.jpg'
  }
});

var finL = new Vue({
  el: '#sect-fin-visuals2',
  data: {
    largeimages: [
      { deskurl1: 'finance/fin-img-desktop-1.jpg', }
    ],
    moburl1: 'finance/fin-img-phone-4.jpg',
    moburl2: 'finance/fin-img-phone-5.jpg'
  }
});







setTimeout(function() {
  new Vue({
    el: '#app',
    data: {
      menuseen: false,
      menutext: 'Menu'
    },
    methods: {
        openclosemenu: function (event) {

         this.menuseen = !this.menuseen;
         if (this.menutext == 'Menu') {
            this.menutext = 'Close';
         } 
         else {
            this.menutext = 'Menu';
         }
        }
      }
  });
}, 500);


// remove loader after page load

setTimeout(function() {
 document.getElementById("loader").remove();
}, 3500);







// ****** Vanilla JS Stuff ****** //

  var animateHTML = function () {
    // only call scroll events every 100ms
    var didScroll = false;
    window.onscroll = doThisStuffOnScroll;
    function doThisStuffOnScroll() {
        didScroll = true;
    }
    setInterval( function() {
        if ( didScroll ) {
            didScroll = false;
            // console.log('You scrolled');
            checkPosition();
            menuShow();
        }
    }, 50);

    //show elements when on screen
    var elems,
      windowHeight;
    var init = function () {
      elems = document.getElementsByClassName('hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
    };
    var addEventHandlers = function () {
      window.addEventListener( 'resize', init );
    };
    //if hidden items have moved onto screen, then show
    var checkPosition = function () {
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= -100 ) {
          elems[i].className = elems[i].className.replace( 'hidden', 'fade-in-element' );
        }
      }
    };
    return {
      init: init
    };
  };
  animateHTML().init();



  // ******** Scrolling Menu - linked to scroll event in animateHTML **** //

  var lastScrollTop = 0;

  var menuShow = function () {  
     var st = window.pageYOffset || document.documentElement.scrollTop;  
     if (st > lastScrollTop) {
        //if menu isnt visible
        if (!document.getElementById("menu-content")) {
            document.getElementById("menu-bar").style.top = "-150px";
          }
     } else {
        document.getElementById("menu-bar").style.top = "0";
     }
     lastScrollTop = st;
  };




}()); // end 'use strict'
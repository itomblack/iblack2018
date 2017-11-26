(function () { 'use strict';


// var menu = new Vue({
//   el: '#menu-bar',
//   data: {
//     message: 'Menu'
//   },
//   computed: {
//     // a computed getter
//     reversedMessage: function () {
//       // `this` points to the vm instance
//       return this.message.split('').reverse().join('')
//     }
//   }
// })

var test = function (){
  console.log(clicked);
}


// ********** Project Items *************** //
// ********** ************* *************** //

  var home1 = new Vue({
    el: '#home-proj-1',
    data: {
      title: 'HitSource',
      subTitle: 'Brand, UX, UI',
      imgClass: 'img-proj-hit',
      imgSizeClass: 'project-item-wrap-lrg',
      internalurl: 'hitsource-project.html',
      externalurl: ''
    }
  });


  var home2 = new Vue({
    el: '#home-proj-2',
    data: {
      title: 'Travel Supermarket',
      subTitle: 'Strategy, UX, Prototyping',
      imgClass: 'img-proj-travel',
      imgSizeClass: 'project-item-wrap-lrg top-offset',
      internalurl: 'travel-project.html',
      externalurl: ''
    }
  });

  var home2 = new Vue({
    el: '#home-proj-3',
    data: {
      title: 'The Living Archive',
      subTitle: 'UX, UI',
      imgClass: 'img-proj-archive',
      imgSizeClass: 'project-item-wrap-sml',
      internalurl: 'livingarchive-project.html',
      externalurl: ''
    }
  });

  var home3 = new Vue({
    el: '#home-hack-1',
    data: {
      title: 'Blues Harp Hack',
      subTitle: 'Design, Development',
      imgClass: 'img-proj-harp',
      imgSizeClass: 'project-item-wrap-sml top-offset',
      internalurl: '',
      externalurl: 'http://itomblack.github.io/harp/'
    }
  });

  var home4 = new Vue({
    el: '#home-hack-2',
    data: {
      title: 'Whisky Map Hack',
      subTitle: 'Design, Development',
      imgClass: 'img-proj-whisky',
      imgSizeClass: 'project-item-wrap-sml',
      internalurl: '',
      externalurl: 'https://itomblack.github.io/whisky-map/'
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
    subHeading: 'Story of my life - Abridged.'
  }
})

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
      { message: 'Project Scoping & Planning.' },
      { message: 'Developing the Invoke brand communications.' }
    ]
  }
})

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
})


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
})

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
})



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
})

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
})


// ********** Case Studies *************** //
// ********** ************ *************** //

/* Travel Supermarket */

var travelTitle = new Vue({
  el: '#page-title-travel',
  data: {
    heading: 'Travel Supermarket',
    subheading: 'Deal Comparison For Package Holidays.'
  }
})

var travelIntro = new Vue({
  el: '#intro-travel',
  data: {
    heading: 'Delivering A Better Experience',
    subheading: 'This price comparison site for package holidays had a successful history but a rapidly declining audience. Our team committed to fixing it.',
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
})

var travelConstraint = new Vue({
  el: '#sect-travel-constraints',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: 'bg-white',
    heading: 'Embracing Constraints',
    subheading: 'The Discovery Phase',
    para: 'We had three months to get the TSM team on board, and deliver a measurable change to their business.',
    imageurl: 'travel/travel-img-0.jpg',
    imgshadow: 'boxshadow-1'
  }
})

var travelInterview = new Vue({
  el: '#sect-travel-interview',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'Shhh. Listen...',
    subheading: 'Stakeholder & Team Interviews',
    para: 'We spent the first week listening to STLs, Data Scientists, BA\'s & Designers across the country. This highlighted where our team could add the most value.',
    imageurl: '',
    imgshadow: ''
  }
})

var travelData = new Vue({
  el: '#sect-travel-data',
  data: {
    bgCol: 'bg-white',
    rhsBgCol: 'bg-blue1',
    heading: 'Mine The Data',
    subheading: 'Quantitative Customer Analysis',
    para: 'Using collected reports and analytics, I built up a foundational portrait of the TSM site visitors. Something to build upon at least.',
    imageurl: 'travel/travel-img-1.jpg',
    imgshadow: 'boxshadow-1'
  }
})

var travelStrat = new Vue({
  el: '#sect-travel-strat',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: 'bg-blue2',
    heading: 'Starting With Strategy',
    subheading: 'Planning The Product Roadmap',
    para: 'With our understanding of the new business strategy, we highlighted search results as the first design challenge. We broke this down further into testable product changes.',
    imageurl: 'travel/travel-img-phone-1.png',
    imgshadow: ''
  }
})

var travelContent = new Vue({
  el: '#sect-travel-content',
  data: {
    bgCol: 'bg-blue1',
    heading: 'The King Is Here',
    subheading: 'A Content-First Approach',
    para: 'A good design is nothing without the right content. I redesigned the results card into sections. First: Intrigue. Second: Inform. Third: Recommend.',
    imageurl: 'travel/travel-img-scroll-1.jpg',
  }
})


var travelCode = new Vue({
  el: '#sect-travel-code',
  data: {
    bgCol: 'bg-white',
    heading: '<h1>Functional Design</h1>',
    subheading: 'Live Prototyping In The Browser',
    para: 'For true responsive testing I built a prototype results card using HTML & SCSS. To incorporate real data, I used Handlebars.js.',
    imageurl: 'travel/travel-img-handlebar-1.png',
    imgshadow: ''
  }
})

var travelTrack = new Vue({
  el: '#sect-travel-track',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: 'bg-blue2',
    heading: 'Track The Data',
    subheading: 'Planning The Product Roadmap',
    para: 'It was important to make sure we met or exceeded our KPIs. New designs were tested & tracked across a segment of users before a full launch.',
    imageurl: 'travel/travel-img-graph-1.png',
    imgshadow: ''
  }
})

var travelIterate = new Vue({
  el: '#sect-travel-iterate',
  data: {
    bgCol: 'bg-white',
    heading: 'Iterate, Iterate, Iterate',
    subheading: 'Because One Is Never Enough',
    para: 'Redesign No.1 was a success, but we wanted even better results. My second design tested a new approach, improving results further.',
    imageurl: 'travel/tsm-card-animation-test-2.gif',
    imgshadow: 'boxshadow-1'
  }
})

var travelEnd = new Vue({
  el: '#sect-travel-end',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: 'End On A High',
    subheading: 'Laying Foundations For Future Success',
    para: 'As our process moved forward, we continued to improve the team\'s communication & collaboration, from faster feedback loops to design team check-ins, and improved product demos. However, the mountains of Vancouver were calling my name and we had to part ways.',
    imageurl: '',
    imgshadow: ''
  }
})

var travelVisuals = new Vue({
  el: '#sect-travel-visuals',
  data: {
    largeimages: [
      { deskurl1: 'travel/travel-img-desktop-1.jpg', }
    ],
    moburl1: 'travel/travel-img-phone-2.jpg',
    moburl2: 'travel/travel-img-phone-3.jpg'
  }
})


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
})

var hitIntro = new Vue({
  el: '#intro-hits',
  data: {
    heading: 'An Exclusive Source For Beats',
    subheading: 'Our ex-rapper client dreamt of building an invite-only marketplace for buying & selling beats. It was my job to bring it to life.',
    roles: [
      { message: 'Brand' },
      { message: 'UX' },
      { message: 'Design' }
    ],
    agency: 'Invoke',
    sitetitle: 'Coming early 2018',
    url: ''
  }
})


var hitTalk = new Vue({
  el: '#sect-hit-talk',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: 'bg-blue2',
    heading: 'Time To Talk',
    subheading: 'Stakeholder & Industry Research',
    para: 'I partnered with the strategy team to understand the client\'s business. While strategists poured over forums, I ran guerilla research of my own with industry professionals to better understand the landscape. This confirmed our assumptions that hip-hop producers would be a key target audience.',
    imageurl: 'hitsource/hit-img-1.jpg',
    imgshadow: 'boxshadow-1'
  }
})

var hitWorkshop = new Vue({
  el: '#sect-hit-workshop',
  data: {
    bgCol: 'bg-white',
    heading: 'Think First',
    subheading: 'The Discovery Phase',
    para: 'To define an MVP and flesh out the core architecture, I ran a design sprint, including 2 days of workshops. This combined Object Oriented UX activities, event-flows and brand discussions.',
    imageurl: 'hitsource/hit-img-2.jpg',
    imgshadow: ''
  }
})

var hitMarket = new Vue({
  el: '#sect-hit-market',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: '',
    heading: 'Hit The Spot',
    subheading: 'A Unique Market Position',
    para: 'The strategy was to market high end, quality beats from vetted producers, with exclusive rights to the music, allowing for higher price points than the average beats marketplace.',
    imageurl: 'hitsource/hit-img-4-1.png',
    imgshadow: ''
  }
})

var hitBrand = new Vue({
  el: '#sect-hit-brand',
  data: {
    bgCol: 'bg-white',
    heading: 'A Fresh Start',
    subheading: 'Logo. Colour. Typography.',
    para: 'Taking some cues from the client, and influences from Trap music culture, I developed a brand look & feel for the new product. This meant palettes, typography & key UI elements.',
    imageurl: 'hitsource/hit-img-3.jpg',
    imgshadow: 'boxshadow-1'
  }
})

var hitAgile = new Vue({
  el: '#sect-hit-agile',
  data: {
    bgCol: 'bg-blue1',
    heading: 'Agile In Action',
    subheading: 'Design & Development Working Together',
    para: 'Defining UI guidelines up-front meant we could design and build in each sprint. Design was always one step ahead. Every 2 weeks, new wireframes were reviewed with the client, before going into production.',
    imageurl: 'hitsource/hit-img-scroll-1.jpg',
  }
})

var hitConvo = new Vue({
  el: '#sect-hit-convo',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: 'We Need To Talk',
    subheading: 'A Conversational Transactional Approach',
    para: 'Offline, conversation is key to negotiating the sale of a beat. I designed a convo-transactional interface that let that discussion continue online.',
    imageurl: 'hitsource/hit-img-phone-1.png',
    imgshadow: ''
  }
})

var hitTest = new Vue({
  el: '#sect-hit-test',
  data: {
    bgCol: 'bg-blue1',
    rhsBgCol: 'bg-white',
    heading: 'Testing...1...2...3',
    subheading: 'An Iterative, User Focused Approach',
    para: 'Once we have the core features built, we plan to put our product into the hands of producers to test & refine the product.',
    imageurl: 'hitsource/hit-img-5.jpg',
    imgshadow: 'boxshadow-1'
  }
})

var hitLaunch = new Vue({
  el: '#sect-hit-launch',
  data: {
    bgCol: 'bg-blue2',
    rhsBgCol: '',
    heading: '3...2...1...Liftoff!',
    subheading: 'In 2018...',
    para: 'The development team are still putting together all the pieces of the puzzle. We plan to launch in early 2018.',
    imageurl: '',
    imgshadow: ''
  }
})


var hitVisuals = new Vue({
  el: '#sect-hit-visuals',
  data: {
    largeimages: [
      { deskurl1: 'hitsource/hit-img-desktop-1.jpg', },
      { deskurl1: 'hitsource/hitsource-marketplace-1.jpg', }
    ],
    moburl1: '',
    moburl2: ''
  }
})


/* Sainsburys Archive */

var archiveTitle = new Vue({
  el: '#page-title-archive',
  data: {
    heading: 'The Living Archive',
    subheading: 'Recording The History Of An Historic Brand.'
  }
})

var archiveIntro = new Vue({
  el: '#intro-archive',
  data: {
    heading: 'Exploring The Archives',
    subheading: 'The UK\'s second largest supermarket chain wanted to digitise their historical assets, allowing future generations to publically explore their past.',
    roles: [
      { message: 'UX Strategy' },
      { message: 'UI' }
    ],
    agency: 'Beyond',
    sitetitle: '',
    url: ''
  }
})

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
})

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
})

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
})

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
})


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
})

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
})

var hitVisuals = new Vue({
  el: '#sect-archive-visuals',
  data: {
    largeimages: [
      { deskurl1: 'archive/archive-img-desktop-1.jpg', }
    ],
    moburl1: 'archive/archive-img-phone-2.jpg',
    moburl2: 'archive/archive-img-phone-3.jpg'
  }
})


// ********** Page Loader *************** //
// ********** ************ *************** //

// var menu = new Vue({
//     el: '#menu-bar',
//     data: {
//       menuseen: false,
//       menutext: 'Menu'
//     },
//     methods: {
//         openclosemenu: function (event) {
//             console.log('test');
//          this.menuseen = !this.menuseen;
//          if (this.menutext == 'Menu') {
//             this.menutext = 'Close';
//          } 
//          else {
//             this.menutext = 'Menu';
//          }
//         }
//       }
//   });


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
      windowHeight
    var init = function () {
      elems = document.getElementsByClassName('hidden')
      windowHeight = window.innerHeight
      addEventHandlers()
    }
    var addEventHandlers = function () {
      window.addEventListener('resize', init)
    }
    //if hidden items have moved onto screen, then show
    var checkPosition = function () {
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top
        if (posFromTop - windowHeight <= -100) {
          elems[i].className = elems[i].className.replace('hidden', 'fade-in-element')
        }
      }
    }
    return {
      init: init
    }
  }
  animateHTML().init()



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
  }







}()); // end 'use strict'
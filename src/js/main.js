(function () { 'use strict';

// ********** Project Items *************** //
// ********** ************* *************** //

  new Vue({
    el: '#home-proj-1',
    data: {
      title: 'HitSource',
      subTitle: 'Brand, UX, UI',
      imgClass: 'img-proj-hit',
      imgSizeClass: 'project-item-wrap-lrg',
      url: '#'
    }
  });


  new Vue({
    el: '#home-proj-2',
    data: {
      title: 'Travel Supermarket',
      subTitle: 'Strategy, UX, Prototyping',
      imgClass: 'img-proj-travel',
      imgSizeClass: 'project-item-wrap-lrg top-offset',
      url: '/travel-project.html'
    }
  });

  new Vue({
    el: '#home-proj-3',
    data: {
      title: 'Blues Harp Hack',
      subTitle: 'Design, Development',
      imgClass: 'img-proj-harp',
      imgSizeClass: 'project-item-wrap-sml',
      url: 'http://itomblack.github.io/harp/'
    }
  });

  new Vue({
    el: '#home-proj-4',
    data: {
      title: 'Whisky Map Hack',
      subTitle: 'Design, Development',
      imgClass: 'img-proj-whisky',
      imgSizeClass: 'project-item-wrap-sml top-offset',
      url: 'https://itomblack.github.io/whisky-map/'
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
      { message: 'Product design for established businesses & fresh startups.' },
      { message: 'Design workshop planning & facilitation for minor celebrities.' },
      { message: 'User research for the largest Credit Union in Canada.' },
      { message: 'Collaborating with strategists, copywriters & developers.' },
      { message: 'Developing the Invoke brand tone of voice.' }
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
      { message: 'Mentoring Junior Designers.' },
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
    company: 'Harrison:Fraser',
    dates: 'Jan 2015 - Jul 2016',
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
    title: 'Tools',
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

var traveltitle = new Vue({
  el: '#page-title-travel',
  data: {
    heading: 'Travel Supermarket',
    subHeading: 'Deal Comparison For Package Holidays.'
  }
})







// ********** Page Loader *************** //
// ********** ************ *************** //

setTimeout(function() {
  new Vue({
    el: '#app'
  });
}, 1000);











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
            console.log('You scrolled');
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




  // menu test !!!!!!!!!! //

  var lastScrollTop = 0;

  var menuShow = function () {  
     var st = window.pageYOffset || document.documentElement.scrollTop;  
     if (st > lastScrollTop){
         document.getElementById("menu-bar").style.top = "-150px";
     } else {
        document.getElementById("menu-bar").style.top = "0";
     }
     lastScrollTop = st;
  }



// document.getElementById("body").classList.remove("no-show");






}()); // end 'use strict'
(function () { 'use strict';

//********** Project Items *************** //

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
      url: '#'
    }
  });

  new Vue({
    el: '#home-proj-3',
    data: {
      title: 'Blues Harp Hack',
      subTitle: 'Design, Development',
      imgClass: '#',
      imgSizeClass: 'project-item-wrap-sml',
      url: '#'
    }
  });

  new Vue({
    el: '#home-proj-4',
    data: {
      title: 'Whisky Map Hack',
      subTitle: 'Design, Development',
       imgClass: '#',
      imgSizeClass: 'project-item-wrap-sml top-offset',
      url: '#'
    }
  });




//********** CV *************** //
var cvjob1 = new Vue({
  el: '#cv-job-1',
  data: {
    company: 'Invoke',
    dates: 'May 2017 - Present',
    role: 'Senior Product Designer',
    bullets: [
      { message: 'Product design for established businesses, & fresh startups.' },
      { message: 'Organizing & facilitating design workshops for clients & minor celebrities.' },
      { message: 'Collaborating with strategists & developers.' },
      { message: 'Developing the Invoke brand tone of voice.' },
      { message: 'Revamping design team recruitment processes.' }

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
      { message: 'Mentoring Junior Designers.' }
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
      { message: 'Designing across print, digital & interiors for the retail & leisure industries.' },
      { message: 'Collaborating with brand planners, clients and suppliers to deliver engaging brand experiences.' }
    ]
  }
})


















// ****** Vanilla JS Stuff ****** //
  



  var animateHTML = function () {
    // only call scroll events every 100ms
    var didScroll = false;
    window.onscroll = doThisStuffOnScroll;
    function doThisStuffOnScroll() {
        didScroll = true;
    }
    setInterval(function() {
        if(didScroll) {
            didScroll = false;
            console.log('You scrolled');
            checkPosition();
        }
    }, 100);

    //show elements when on screen
    var elems,
      windowHeight
    var init = function () {
      elems = document.getElementsByClassName('hidden')
      windowHeight = window.innerHeight
      addEventHandlers()
    }
    var addEventHandlers = function () {
      // window.addEventListener('scroll', _checkPosition)
      window.addEventListener('resize', init)
    }
    var checkPosition = function () {
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top
        if (posFromTop - windowHeight <= -150) {
          elems[i].className = elems[i].className.replace('hidden', 'fade-in-element')
        }
      }
    }
    return {
      init: init
    }
  }
  animateHTML().init()









}()); // end 'use strict'
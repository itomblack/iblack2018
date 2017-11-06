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
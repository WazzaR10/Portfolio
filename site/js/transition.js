//////////////////////// TRANSITION 01
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-1');
    $('.transition-overlay-1').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-1').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
        $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-1');
        // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
        $('.transition-overlay-1').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-1').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});




//////////////////////// TRANSITION 02
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition-2"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-2');
    $('.transition-overlay-2').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-2').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
        $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-2');
        // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
        $('.transition-overlay-2').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-2').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});






//////////////////////// TRANSITION 03
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition-3"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-3');
    $('.transition-overlay-3').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-3').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
        $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-3');
        // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
        $('.transition-overlay-3').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-3').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});








//////////////////////// TRANSITION 04
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition-4"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-4');
    $('.transition-overlay-4').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-4').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
        $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-4');
        // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
        $('.transition-overlay-4').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-4').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});







//////////////////////// TRANSITION 05
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition-5"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-5');
    // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
    $('.transition-overlay-5').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-5').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
          $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-5');
        $('.transition-overlay-5').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-5').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});







//////////////////////// TRANSITION 06
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition-6"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-6');
        
    // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
    $('.transition-overlay-6').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-6').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
          $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-6');
        $('.transition-overlay-6').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-6').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});







//////////////////////// TRANSITION 07
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
   
  $('main').on('click', '[data-type="page-transition-7"]', function(event){
    event.preventDefault();
    var newPage = $(this).attr('href');
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      var newPageArray = location.pathname.split('/'),
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});
	function changePage(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('body').addClass('page-is-changing-7');
    $('.transition-overlay-7').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.transition-overlay-7').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}		
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
  	section.load(url+' .cd-main-content > *', function(event){
      $("html, body").animate({
			scrollTop: 0
		}, 300);
      $('main').html(section);
      var delay = ( transitionsSupported() ) ? 800 : 0;
      setTimeout(function(){
        ( section.hasClass('cd-project-transition') ) ? $('body').addClass('cd-project-transition') : $('body').removeClass('cd-project-transition');
          $('.Yo').addClass('Yo-appearing');
        $('.Yo2').addClass('Yo2-appearing');
        $('body').removeClass('page-is-changing');
        $('body').removeClass('page-is-changing-7');
        // Dans le cas où on clique sur home avec page about open
        $('.a-about').removeClass('a-about-active');
	    $('.about').removeClass('about-active');
	    $('.btn-overflow').removeClass('btn-overflow-active');
	    $('.cd-project').removeClass('black-background');
	    $('.cd-project').removeClass('nav-black-background');
        $('body').removeClass('noscroll');
        $('body').removeClass('about-is-open');
        $('.transition-overlay-7').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.transition-overlay-7').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        window.history.pushState({path: url},'',url);
      }
		});
  }
  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});
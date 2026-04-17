$(document).ready(function () {


    $(function() {
      $('[data-bs-toggle="tooltip"]').tooltip();
    });


  $("#header-1 .navbar-toggler").click(function(){
    $(".header-1-menu").toggleClass("header-1-block");
  });
  $(".header-1-menu .close .close-icon").click(function(){
    $(".header-1-menu").toggleClass("header-1-block");
  });


  $(".search-btn .btn").click(function(){
    $(".search-btn .search-overlay").toggleClass("search-block");
  });
  $(".hamburger-btn").click(function(){
    $(".hamburger-menu").toggleClass("hamburger-block");
  });




  $(function () {
    $(document).scroll(function () {
      var $nav = $("#header-1 .navigation-sticky");
      $nav.toggleClass("fixed-top", $(this).scrollTop() > 10);
    });
  });
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#header-2 .navigation-sticky");
      $nav.toggleClass("fixed-top", $(this).scrollTop() > 10);
    });
  });
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#header-3 .navigation-sticky");
      $nav.toggleClass("fixed-top", $(this).scrollTop() > 10);
    });
  });



  
  $(".dropdown-menu a.drop-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");
    $(this).parent("li").toggleClass("show");
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-menu .show").removeClass("show");
      });
    return false;
  });

  


  $(".style-1").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".style-2").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".style-3").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".style-4").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".testimonial-sliding-1").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".testimonial-sliding-2").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 12,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".testimonial-sliding-3").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 20,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".portfolio-full-width .image-sliding").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".testimonials-slide-2").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".home-banner-2 .image-slider").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true,
    nav: false,
    margin: 20,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });












  $(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});



  
      // Tabs Style 1
      $('.portfolio-tab .tabs-item').masonry({
        itemSelector: '.item',
        layoutMode: 'fitRows'
      });
      $(".portfolio-tab .tabs-item").isotope({
        itemSelector: ".item"
      });
      $(".portfolio-tab .tabs-menu ul li").click(function () {
        $(".portfolio-tab .tabs-menu ul li").removeClass("active");
        $(this).addClass("active");
        var selector;
        selector = $(this).attr("data-filter");
        $(".portfolio-tab .tabs-item").isotope({
          filter: selector,
        });
        return false;
      });






      $('.tabs-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        }
      });

});


 
     
    // Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Team Slider
class TeamSlider {
    constructor() {
        this.slider = document.querySelector('.team-slider');
        this.slides = document.querySelectorAll('.team-slide');
        this.dotsContainer = document.querySelector('.slider-dots');

        if (!this.slider) return; // important fix

        this.realSlidesCount = this.slides.length;
        this.currentSlide = 0;
        this.visibleSlides = this.getVisibleSlides();
        this.isTransitioning = false;

        this.init();
    }

    getVisibleSlides() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 3;
        return 1;
    }

    init() {
        this.cloneSlides();
        this.createDots();
        this.updateSlider(true);

        setInterval(() => this.nextSlide(), 3000);

        window.addEventListener('resize', () => {
            this.visibleSlides = this.getVisibleSlides();
            this.createDots();
            this.updateSlider(true);
        });
    }

    cloneSlides() {
        const slidesArray = Array.from(this.slides);

        const cloneStart = slidesArray.slice(0, this.visibleSlides);
        const cloneEnd = slidesArray.slice(-this.visibleSlides);

        cloneStart.forEach(slide => {
            this.slider.appendChild(slide.cloneNode(true));
        });

        cloneEnd.reverse().forEach(slide => {
            this.slider.insertBefore(slide.cloneNode(true), this.slider.firstChild);
        });

        this.slides = document.querySelectorAll('.team-slide');
        this.currentSlide = this.visibleSlides;
    }

    createDots() {
        this.dotsContainer.innerHTML = '';

        this.totalPositions = Math.ceil(this.realSlidesCount / this.visibleSlides);

        for (let i = 0; i < this.totalPositions; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                this.currentSlide = i + this.visibleSlides;
                this.updateSlider();
            });

            this.dotsContainer.appendChild(dot);
        }

        this.dots = this.dotsContainer.querySelectorAll('.dot');
    }

    updateDots() {
        let index = (this.currentSlide - this.visibleSlides) % this.totalPositions;
        if (index < 0) index += this.totalPositions;

        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        if (this.isTransitioning) return;
        this.currentSlide++;
        this.updateSlider();
    }

    updateSlider(skipAnimation = false) {
        const slideWidth = 100 / this.visibleSlides;
        const translateX = this.currentSlide * slideWidth;

        this.slider.style.transition = skipAnimation ? 'none' : 'transform 0.5s ease';
        this.slider.style.transform = `translateX(-${translateX}%)`;

        this.updateDots();
        this.handleInfinite();
    }

    handleInfinite() {
        this.isTransitioning = true;

        setTimeout(() => {
            const total = this.slides.length;

            if (this.currentSlide >= total - this.visibleSlides) {
                this.slider.style.transition = 'none';
                this.currentSlide = this.visibleSlides;
                this.updateSlider(true);
            }

            if (this.currentSlide < this.visibleSlides) {
                this.slider.style.transition = 'none';
                this.currentSlide = total - (this.visibleSlides * 2);
                this.updateSlider(true);
            }

            this.isTransitioning = false;
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TeamSlider();
});
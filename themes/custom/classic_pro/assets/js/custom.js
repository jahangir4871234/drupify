(function (Drupal, once) {

  Drupal.behaviors.customScripts = {
    attach: function (context, settings) {

      // Mobile menu toggle
      const navToggle = once('navToggle', context.querySelector('.nav-toggle'))[0];
      const navMenu = context.querySelector('.nav-menu');

      if (navToggle && navMenu) {

        navToggle.addEventListener('click', () => {
          navMenu.style.display =
            navMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        context.querySelectorAll('.nav-menu a').forEach(link => {
          link.addEventListener('click', () => {
            navMenu.style.display = 'none';
          });
        });
      }

      // Smooth scroll
      context.querySelectorAll('a[href^="#"]').forEach(anchor => {

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
      if (once('teamSlider', context.querySelector('.team-slider')).length) {

        class TeamSlider {

          constructor() {

            this.slider = document.querySelector('.team-slider');
            this.slides = document.querySelectorAll('.team-slide');
            this.dotsContainer = document.querySelector('.slider-dots');

            if (!this.slider) return;

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

            // ✅ Infinite loop handler
            this.slider.addEventListener('transitionend', () => {
              this.handleInfiniteLoop();
            });

            // ✅ Auto slide
            this.autoSlide = setInterval(() => this.nextSlide(), 3000);
          }

          cloneSlides() {

            const slidesArray = Array.from(this.slides);

            const cloneStart = slidesArray.slice(0, this.visibleSlides);
            const cloneEnd = slidesArray.slice(-this.visibleSlides);

            // Add clones at end
            cloneStart.forEach(slide => {
              this.slider.appendChild(slide.cloneNode(true));
            });

            // Add clones at beginning
            cloneEnd.reverse().forEach(slide => {
              this.slider.insertBefore(
                slide.cloneNode(true),
                this.slider.firstChild
              );
            });

            this.slides = document.querySelectorAll('.team-slide');

            // Start from real first slide
            this.currentSlide = this.visibleSlides;
          }

          createDots() {

            if (!this.dotsContainer) return;

            this.dotsContainer.innerHTML = '';

            this.totalPositions = Math.ceil(
              this.realSlidesCount / this.visibleSlides
            );

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

            let index =
              (this.currentSlide - this.visibleSlides) % this.totalPositions;

            if (index < 0) index += this.totalPositions;

            this.dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === index);
            });
          }

          nextSlide() {
            this.currentSlide++;
            this.updateSlider();
          }

          updateSlider(skipAnimation = false) {

            const slideWidth = 100 / this.visibleSlides;
            const translateX = this.currentSlide * slideWidth;

            this.slider.style.transition =
              skipAnimation ? 'none' : 'transform 0.5s ease';

            this.slider.style.transform =
              `translateX(-${translateX}%)`;

            this.updateDots();
          }

          // ✅ MAIN FIX (infinite loop reset)
          handleInfiniteLoop() {

            const slideWidth = 100 / this.visibleSlides;

            // End reached → jump to start
            if (this.currentSlide >= this.realSlidesCount + this.visibleSlides) {

              this.slider.style.transition = 'none';

              this.currentSlide = this.visibleSlides;

              const translateX = this.currentSlide * slideWidth;
              this.slider.style.transform = `translateX(-${translateX}%)`;
            }

            // Start reached → jump to end
            if (this.currentSlide < this.visibleSlides) {

              this.slider.style.transition = 'none';

              this.currentSlide = this.realSlidesCount;

              const translateX = this.currentSlide * slideWidth;
              this.slider.style.transform = `translateX(-${translateX}%)`;
            }
          }

        }

        new TeamSlider();
      }


      // Stats Counter (scroll trigger)

      const sections =
        context.querySelectorAll(
          ".hero-stats, .stats-showcase"
        );

      const startCounter = (counter) => {

        const target =
          +counter.getAttribute("data-target");

        const suffix =
          counter.textContent.includes("%")
            ? "%"
            : "+";

        let count = 0;

        const updateCount = () => {

          const increment = target / 80;

          if (count < target) {

            count += increment;

            counter.textContent =
              Math.ceil(count) + suffix;

            requestAnimationFrame(updateCount);

          }
          else {

            counter.textContent =
              target + suffix;

          }

        };

        updateCount();

      };


      const observer =
        new IntersectionObserver((entries, observer) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              const counters =
                entry.target.querySelectorAll(".stat-number");

              counters.forEach(counter => {

                if (!counter.classList.contains("counted")) {

                  counter.classList.add("counted");

                  startCounter(counter);

                }

              });

              observer.unobserve(entry.target);

            }

          });

        }, {
          threshold: 0.4
        });


      sections.forEach(section => {
        observer.observe(section);
      });

    }
  };

})(Drupal, once);
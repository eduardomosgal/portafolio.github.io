document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Dynamic Year for Footer Copyright
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Shadow on Scroll
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 3. Intersection Observer for Fade-In Animations
  // Targets all elements with the 'fade-in' class
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return; // Do nothing if not intersecting
      } else {
        // Add the 'appear' class to trigger CSS transition
        entry.target.classList.add('appear');
        // Stop observing the element once it has appeared
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});
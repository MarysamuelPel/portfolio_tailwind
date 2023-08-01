
  // Function to smoothly scroll to the target element
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 100; // Adjust the offset as needed

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Smooth scroll when clicking on navigation links
  const navLinks = document.querySelectorAll('.smooth-scroll-link');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      smoothScroll(target);
    });
  });



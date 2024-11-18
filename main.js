document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // navbar.classList.toggle('scrolling', window.scrollY > 0);
    if (window.scrollY > 30){                        // 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

 //Scrolls to an element with header offset
   
 const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

// to control speed of autosliding carousel

const myCarousel = document.querySelector('#carouselExampleIndicators');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Time in milliseconds between slides
  ride: 'carousel'
});

// for testimonial section

const testimonialCarousel = document.querySelector('#testimonialCarousel');
const testimonialCarouselInstance = new bootstrap.Carousel(testimonialCarousel, {
  interval: 10000, // Time in milliseconds between slides for testimonials
  ride: 'carousel'
});


// Toggle menu visibility

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
    }
}

// Show the starters section by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('menu-starters');
});


// to display the hidden text

// scripts.js
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and the page from reloading

    const isFormValid = this.checkValidity();

    if (isFormValid) {
        // Show the confirmation message
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';

        // Smooth scroll to the confirmation message
        confirmationMessage.scrollIntoView({ behavior: 'smooth' });

        // Optionally, you can clear the form after submission
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUpButton');

    // Show the button when the user scrolls down 100px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // If scrolled more than 100px
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    // navbar.classList.toggle('scrolling', window.scrollY > 0);
    if (window.scrollY > 30) {                        // 50px
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


//

document.querySelectorAll('.menu-list a').forEach(link=>{
    link.addEventListener('click',function(){

        document
            .querySelectorAll('.menu-list a')
            .forEach(a=>a.classList.remove('active'));

        this.classList.add('active');
    });
});

// Show the starters section by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('menu-starters');
});


// to display the hidden text


// event carousel

const events = [
{
    image:"css/images/events-1.jpg",
    tag:"Featured Event",
    title:"Custom Parties",
    price:"$222",
    description:"Host birthdays, anniversaries, and private celebrations with customized menus and oceanfront views."
},
{
    image:"css/images/events-2.jpg",
    tag:"Weekend Event",
    title:"Beach Barbecue Nights",
    price:"$45 per person",
    description:"Enjoy grilled seafood, tropical drinks, and a relaxed evening right on the beach."
},
{
    image:"css/images/events-3.jfif",
    tag:"Guest Favorite",
    title:"Sunset Dinner Cruise",
    price:"$120 per person",
    description:"Sail along the coast at sunset and enjoy a gourmet dinner with breathtaking ocean views."
},
{
    image:"css/images/events-4.jfif",
    tag:"Interactive Event",
    title:"Tropical Cocktail Making Class",
    price:"$35 per person",
    description:"Learn to craft tropical cocktails with expert mixologists in a fun and interactive session."
},
{
    image:"css/images/events-5.jpg",
    tag:"Wellness Event",
    title:"Beach Yoga & Brunch",
    price:"$50 per person",
    description:"Start your morning with beachfront yoga followed by a fresh and healthy brunch."
},
{
    image:"css/images/events-6.jpg",
    tag:"Evening Special",
    title:"Bonfire & S'mores Night",
    price:"$30 per person",
    description:"Enjoy a cozy beachside bonfire with toasted s'mores, warm drinks, and stunning night views."
},
{
    image:"css/images/events-7.jpg",
    tag:"Live Entertainment",
    title:"Live Music & Dance Nights",
    price:"$20 entry fee",
    description:"Dance to live performances from local artists while enjoying cocktails and the energy of the seaside."
},
{
    image:"css/images/events-8.jpg",
    tag:"Themed Night",
    title:"Tiki Night",
    price:"$50 per person",
    description:"Experience island-inspired drinks, themed décor, and a vibrant tropical atmosphere."
},
{
    image:"css/images/events-9.jpg",
    tag:"Movie Night",
    title:"Beach Movie Nights",
    price:"$10 per person",
    description:"Enjoy a classic movie under the stars with beachfront seating, popcorn, and stunning ocean views."
}
];

let currentEvent = 0;

// function updateEvent(){

//     document.getElementById("eventImage").src =
//     events[currentEvent].image;

//     document.getElementById("eventTag").textContent =
//     events[currentEvent].tag;

//     document.getElementById("eventTitle").textContent =
//     events[currentEvent].title;

//     document.getElementById("eventPrice").textContent =
//     events[currentEvent].price;

//     document.getElementById("eventDescription").textContent =
//     events[currentEvent].description;
// }

function updateEvent(){

    const image = document.getElementById("eventImage");
    const content = document.querySelector(".event-content");

    image.style.opacity = "0";
    content.style.opacity = "0";

    setTimeout(() => {

        image.src = events[currentEvent].image;
        document.getElementById("eventTag").textContent = events[currentEvent].tag;
        document.getElementById("eventTitle").textContent = events[currentEvent].title;
        document.getElementById("eventPrice").textContent = events[currentEvent].price;
        document.getElementById("eventDescription").textContent = events[currentEvent].description;

        image.style.opacity = "1";
        content.style.opacity = "1";

    }, 300);
}

document.getElementById("nextEvent").onclick = () => {
    currentEvent = (currentEvent + 1) % events.length;
    updateEvent();
};

document.getElementById("prevEvent").onclick = () => {
    currentEvent = (currentEvent - 1 + events.length) % events.length;
    updateEvent();
};

setInterval(() => {
    currentEvent = (currentEvent + 1) % events.length;
    updateEvent();
}, 5000);


// scripts.js
document.getElementById('booking-form').addEventListener('submit', function (event) {
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


// // testimonials

// const testimonialTrack =
// document.getElementById("testimonialTrack");

// const testimonialCards =
// document.querySelectorAll(".testimonial-card");

// const prevBtn =
// document.getElementById("testimonialPrev");

// const nextBtn =
// document.getElementById("testimonialNext");

// let testimonialIndex = 0;

// function getVisibleCards(){

//     if(window.innerWidth <= 600){
//         return 1;
//     }

//     if(window.innerWidth <= 900){
//         return 2;
//     }

//     return 3;
// }

// function updateTestimonials(){

//     const cardWidth =
//     testimonialCards[0].offsetWidth + 30;

//     testimonialTrack.style.transform =
//     `translateX(-${testimonialIndex * cardWidth}px)`;
// }

// nextBtn.addEventListener("click",()=>{

//     const visible = getVisibleCards();

//     if(testimonialIndex <
//         testimonialCards.length - visible){

//         testimonialIndex++;
//     }else{
//         testimonialIndex = 0;
//     }

//     updateTestimonials();
// });

// prevBtn.addEventListener("click",()=>{

//     const visible = getVisibleCards();

//     if(testimonialIndex > 0){

//         testimonialIndex--;

//     }else{

//         testimonialIndex =
//         testimonialCards.length - visible;
//     }

//     updateTestimonials();
// });

// setInterval(()=>{

//     const visible = getVisibleCards();

//     if(testimonialIndex <
//         testimonialCards.length - visible){

//         testimonialIndex++;

//     }else{

//         testimonialIndex = 0;
//     }

//     updateTestimonials();

// },5000);

// window.addEventListener(
//     "resize",
//     updateTestimonials
// );

// ================= TESTIMONIALS =================

const testimonialTrack =
document.getElementById("testimonialTrack");

const testimonialCards =
document.querySelectorAll(".testimonial-card");

const prevBtn =
document.getElementById("testimonialPrev");

const nextBtn =
document.getElementById("testimonialNext");

let testimonialIndex = 0;

function getVisibleCards() {

    // Mobile
    if (window.innerWidth <= 768) {
        return 1;
    }

    // Tablet
    if (window.innerWidth <= 1024) {
        return 2;
    }

    // Desktop
    return 3;
}

function updateTestimonials() {

    const cardWidth =
        testimonialCards[0].offsetWidth;

    const gap =
        parseInt(
            window.getComputedStyle(testimonialTrack).gap
        ) || 0;

    testimonialTrack.style.transform =
        `translateX(-${testimonialIndex * (cardWidth + gap)}px)`;
}

nextBtn.addEventListener("click", () => {

    const visible = getVisibleCards();

    if (
        testimonialIndex <
        testimonialCards.length - visible
    ) {
        testimonialIndex++;
    } else {
        testimonialIndex = 0;
    }

    updateTestimonials();
});

prevBtn.addEventListener("click", () => {

    const visible = getVisibleCards();

    if (testimonialIndex > 0) {

        testimonialIndex--;

    } else {

        testimonialIndex =
            testimonialCards.length - visible;
    }

    updateTestimonials();
});

setInterval(() => {

    const visible = getVisibleCards();

    if (
        testimonialIndex <
        testimonialCards.length - visible
    ) {

        testimonialIndex++;

    } else {

        testimonialIndex = 0;
    }

    updateTestimonials();

}, 5000);

window.addEventListener("resize", () => {

    const visible = getVisibleCards();

    if (
        testimonialIndex >
        testimonialCards.length - visible
    ) {
        testimonialIndex =
            testimonialCards.length - visible;
    }

    updateTestimonials();
});

updateTestimonials();


// navbar auto close

document.querySelectorAll('.navbar-collapse a').forEach(link => {

    link.addEventListener('click', () => {

        const navbarCollapse =
            document.querySelector('.navbar-collapse');

        const bsCollapse =
            bootstrap.Collapse.getInstance(navbarCollapse);

        if (bsCollapse) {
            bsCollapse.hide();
        }

    });

});
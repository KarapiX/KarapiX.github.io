/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
// Animation logic
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .animate-text-right');

const animateOnScroll = () => {
    elementsToAnimate.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate'); // Optionnel : supprimer si vous voulez une animation unique
        }
    });
};

// Trigger animations on scroll
document.addEventListener('scroll', animateOnScroll);
// Trigger animations on page load
animateOnScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('#services .row.text-center .col-md-3, #services .row.text-center .col-md-6,  #services .row.text-center .col-md-2 ');

    const animateServices = () => {
        services.forEach((service, index) => {
            const rect = service.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    service.classList.add('animate');
                }, index * 200); // Délai entre chaque animation (200ms par élément)
            }
        });
    };

    document.addEventListener('scroll', animateServices);
    animateServices(); // Pour les éléments déjà visibles au chargement
});

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');

    const animatePortfolio = () => {
        portfolioItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 200); // Délai entre chaque animation (200ms par élément)
            }
        });
    };

    document.addEventListener('scroll', animatePortfolio);
    animatePortfolio(); // Pour les éléments déjà visibles au chargement
});

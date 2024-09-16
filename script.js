"use strict";

/**
 * Changes the active navigation bar element to the passed element.
 * @param {Element} el - The element to make active.
 */
function navSelect(el) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    el.classList.add("active");
}

/**
 * Changes the active navigation bar element based on the scroll Y location.
 */
function scrollNavSelect() {
    // Navigation bar button elements:
    const homeNav = document.getElementById("home-nav");
    const aboutNav = document.getElementById("about-nav");
    const experienceNav = document.getElementById("experience-nav");
    const contactNav = document.getElementById("contact-nav");

    // Section anchor Y values:
    var aboutY = document.getElementById("about-me").getBoundingClientRect().top;
    var experienceY = document.getElementById("experience").getBoundingClientRect().top;

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { // If the user has scrolled roughly to the bottom of the webpage...
        navSelect(contactNav);
    } else if (window.scrollY > window.scrollY + experienceY - 10) { // If the user has scrolled below the "experience" section header but not quite to the bottom of the page... (10px offset so the "contact" section isn't 1px tall).
        navSelect(experienceNav);
    } else if (window.scrollY > window.scrollY + aboutY - 10) { // If the user has scrolled below the "about me" section header but not quite to the "experience" section header...
        navSelect(aboutNav);
    } else {
        navSelect(homeNav);
    }
}

window.addEventListener("scroll", scrollNavSelect , false); // On scroll, run scrollNavSelect().
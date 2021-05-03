/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const fragment = document.createDocumentFragment();
const sectionList = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//from stackoverflow
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildTheNavBar(){
  for (let i=0;i < sectionList.length;i++){
    const listItem = document.createElement('li');
    const name = sectionList[i].getAttribute('data-nav');
    const id =sectionList[i].getAttribute('id');
    listItem.innerHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    fragment.appendChild(listItem);
  }
  const navigationBar = document.getElementById('navbar__list');
  navigationBar.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function setActiveClass(){
    for (let i=0; i < sectionList.length; i++){
        if (isElementInViewport(sectionList[i])){
            sectionList[i].classList.add("your-active-class");
        }else{
            sectionList[i].classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event
//from stackoverflow
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildTheNavBar();
// Scroll to section on link click
const navBarList = document.getElementById('navbar__list');
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
});
// Set sections as active
document.addEventListener('scroll', function(){
    setActiveClass();
});

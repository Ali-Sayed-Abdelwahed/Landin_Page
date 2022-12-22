



/**
* Define Global Variables
*
*/
let counter = 0;

const navBar = document.querySelector('#navbar__list');

// const up = document.querySelector(".go-up");

//* End Global Variables


// scroll to the top
// onscroll = function () {
//     scrollY >= 600 ? (up.style.display = "block") : (up.style.display = "none");
// };
// up.onclick = function () {
//     scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     });
// };


// * Begin Main Functions

//create sections dynamically 
//create counter variable to determine the section number  
const createSection = () => {
    //increment the counter 
    counter++;
    // using template literals in ES6 
    let sectionContent = `<section id="section${counter}" data-nav="section${counter}" class="your-active-class">
    <div class="landing__container">
      <h2>Section ${counter}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
  </section>`
    document.querySelector('main').insertAdjacentHTML('beforeend', sectionContent)
}


// build the nav
// create function createNavElements to make items
const createNavElements = () => {
    navBar.innerHTML = '';
    document.querySelectorAll('section').forEach(function (section) {
        let listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu_link">${section.dataset.nav}</a></li>`
        // let listItem = '<li><a href="#' + section.id
        // listItem += '" data-nav="' + section.id
        // listItem += '" class="menu_link">'
        // listItem += section.dataset.nav
        // listItem += '</a></li>'
        navBar.insertAdjacentHTML('beforeend', listItem)

    })
}


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

const observeSections = () => {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            let activeLink = navBar.querySelector(`[data-nav=${entry.target.id}]`)
            if (entry.isIntersecting) {
                //add active class to section
                entry.target.classList.add('your-active-class')
                //add active link to section
                activeLink.classList.add('active-link')
                location.hash = entry.target.id
            }
            else {
                entry.target.classList.remove('your-active-class')
                activeLink.classList.remove('active-link')
            }
        })

    }, {
        threshold: .65,
    })
    //return the part of code
    return document.querySelectorAll('section').forEach((sec) => {
        observer.observe(sec)
    })
}



//  * End Main Functions



// create 5 section 
for (let i = 0; i < 5; i++)createSection();
createNavElements();
observeSections();

// document.getElementById('add-btn').addEventListener('click', function () {
//     createSection();
//     createNavElements();
//     observeSections();
// })


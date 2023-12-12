const texts = ["Designer", "Programmer", "Web Developer", "Video Editor", "Content Creator"];
let index = 0;
let textIndex = 0;
let currentText = "";
let backspace = false;
const element = document.getElementById("typing-text");

function type() {
    if (backspace) {
        currentText = currentText.slice(0, -1);
        element.innerHTML = currentText;
        if (currentText.length === 0) {
            backspace = false;
            textIndex++;
            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    } else {
        currentText += texts[textIndex].charAt(index);
        element.innerHTML = currentText;
        index++;
        if (index === texts[textIndex].length) {
            index = 0;
            backspace = true;
        }
    }
    setTimeout(type, 100);
}

type();

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        asideSectionTogglerBtn(); // Close the aside when a navigation item is clicked
    });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.toggle("open");
    }
}

// Event listener for scrolling
window.addEventListener("scroll", () => {
    removeOpenClasses();
});

function removeOpenClasses() {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove("open");
    }
}
/*------------------------------------------------------------ portfolio --------------------------------------*/
// Function to filter projects based on domains
function filterProjects(domain) {
    const allProjects = document.querySelectorAll('.portfolio-item');
  
    allProjects.forEach(project => {
        project.style.display = 'none';
  
        const projectDomains = project.getAttribute('data-domains').split(',');
  
        if (domain === 'all' || projectDomains.includes(domain)) {
            project.style.display = 'block';
        }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Add portfolio items and domains
    const portfolioItems = [
     //   { link: 'https://stellular-centaur-d3f9fd.netlify.app/', image: '/all-images/portfolio-web dev.png', domains: ['latest'] }
    ];
  
    const portfolioItemsContainer = document.getElementById('portfolio-items');
  
    // Function to create a portfolio item HTML block
    function createPortfolioItemHTML(item) {
        return `
            <div class="portfolio-item padd-15" data-domains="${item.domains.join(',')}">
                <div class="portfolio-item-inner shadow-dark">
                    <div class="portfolio-img">
                        <a href="${item.link}" style="text-decoration: none;" target="_blank">
                            <img src="${item.image}" alt="">
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
  
    // Add portfolio items to the DOM
    portfolioItems.forEach(item => {
        const itemHTML = createPortfolioItemHTML(item);
        portfolioItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
  
    // Initial display of all projects
    filterProjects('all');
  })
      
/*---------------------------------------------------------- emailjs-------------------------------*/

function sendEmail() {
    // Initialize Email.js with your public API key
    emailjs.init("S-qW0rUJ3_70Pjuhx");

    // Get form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("Phone").value,
        message: document.getElementById("message").value
    };

    // Send email using Email.js
    emailjs.send("service_cr18wa3", "template_ls2rh9p", formData)
        .then(
            function (response) {
                console.log("Email sent:", response);
                alert("Message Sent Successfully");
                reset();
            },
            function (error) {
                console.error("Email sending failed:", error);
                alert("Failed to send message");
            }
        );
}

function reset() {
    // Implement code to clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("message").value = "";
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var userName = profile.getName();
    var userImage = profile.getImageUrl();
    
    // Hide login box at the bottom
    document.querySelector('.loginpg').style.display = 'none';
    
    // Hide sign-up div at the top
    document.querySelector('.sign').style.display = 'none';

    // Create a new div for user info
    var userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <img src="${userImage}" alt="User Image" style="width:40px;height:40px;border-radius:50%; margin-right: 10px;">
        <span>${userName}</span>
    `;
    userInfo.style.cssFloat = 'right';
    userInfo.style.display = 'flex';
    userInfo.style.alignItems = 'center';

    // Add user info to the header
    document.querySelector('nav').appendChild(userInfo);
}

function initOAuth() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '913839714010-vj1ujs4rvckma939044d06b1a6ph58d9.apps.googleusercontent.com'
        });
    });
}

initOAuth();

//for nav

document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor links in the navbar
    const navLinks = document.querySelectorAll('nav a');

    // Function to handle smooth scrolling
    function scrollToSection(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Get the target section element
        const targetSection = document.getElementById(targetId);

        // Calculate the offset considering the fixed header
        const headerOffset = document.querySelector('header').offsetHeight;
        const targetOffset = targetSection.offsetTop - headerOffset;

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }

    // Attach click event listeners to each navbar link
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});


function createBullet() {
    const bulletElement = document.createElement('span');
    bulletElement.innerHTML = '&#8226;'; // Unicode bullet character
    bulletElement.classList.add('bullet'); // Add a class for styling
    const size = Math.random() * 10 + 10; // Adjust the size range as needed
    bulletElement.style.fontSize = size + 'px';
    bulletElement.style.left = Math.random() * window.innerWidth + 'px';
    bulletElement.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(bulletElement);

    setTimeout(() => {
        bulletElement.remove();
    }, 4000);
}

setInterval(createBullet, 50); 


const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { 
                applyBulletAnimation(node);
            }
        });
    });
});

// Configuration for the MutationObserver
const config = {
    childList: true,
    subtree: true
};

// Start observing changes to the body
observer.observe(document.body, config);

// Function to apply bullet animation to an element and its descendants
function applyBulletAnimation(element) {
    const bullets = element.querySelectorAll('.bullet');
    bullets.forEach(bullet => {
        bullet.style.left = Math.random() * window.innerWidth + 'px';
        bullet.style.top = Math.random() * window.innerHeight + 'px';
    });
}

//Testimonials
 $(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
})

//imgs 
document.addEventListener('DOMContentLoaded', (event) => {
    const imgContainer = document.getElementById('imgs1');
    const imgInner = document.getElementById('imgs01');

    imgContainer.addEventListener('mouseenter', () => {
        imgInner.style.transform = 'rotateX(80deg)';
    });

    imgContainer.addEventListener('mouseleave', () => {
        imgInner.style.transform = 'rotateX(0deg)';
    });
});

//more imgs

document.querySelectorAll('.social-icon').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-alt-src');

    img.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
        img.src = originalSrc;
    });
});
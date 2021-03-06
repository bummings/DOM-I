const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let navLink = document.querySelectorAll('a');
navLink[0].innerText = 'Services'; 
navLink[0].style.color = 'green';

navLink[1].innerText = 'Product';
navLink[1].style.color = 'green';

navLink[2].innerText = 'Vision';
navLink[2].style.color = 'green';

navLink[3].innerText = 'Features';
navLink[3].style.color = 'green';

navLink[4].innerText = 'About';
navLink[4].style.color = 'green';

navLink[5].innerText = 'Contact';
navLink[5].style.color = 'green';


let nav = document.querySelector('nav');
let navLinks = nav.childNodes;

let navAddition1 = document.createElement('a');
nav.append(navAddition1);
navAddition1.innerText = 'Beartraps'
navAddition1.style.color = 'green';

let navAddition2 = document.createElement('a');
nav.prepend(navAddition2);
navAddition2.innerText = 'Pogosticks'
navAddition2.style.color = 'green';



for (i = 0; i < navLink.length; i++){
  console.log(navLink[i]);

}





let ctaText = document.querySelector('h1');
ctaText.innerText = 'DOM IS AWESOME';


let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', '../img/header-img.png');


let btn = document.querySelector('button');
btn.innerText = 'Get Started'


let headline = document.querySelectorAll('h4');
let featureText = document.querySelectorAll('.text-content p');
// let featureText = document.querySelectorAll('p');

headline[0].innerText = 'Features';
featureText[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


headline[1].innerText = 'About'
featureText[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', '../img/mid-page-accent.jpg');

headline[2].innerText = 'Services';
featureText[2].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

headline[3].innerText = 'Product';
featureText[3].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

headline[4].innerText = 'Vision';
featureText[4].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';




headline[5].innerText = 'Contact';

let contactText = document.querySelectorAll('.contact p');

contactText[0].innerText = '123 Way 456 Street';
contactText[1].innerText = '1 (888) 888-8888';
contactText[2].innerText = 'sales@greatidea.io';


let footerText = document.querySelector('footer p');
footerText.innerText = 'Copyright Great Idea! 2018';

// let testin = document.querySelector('.contact h4');
// testin.style.border = '10px solid red';



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

//? adds nav bar <a></a>
const mainNav = document.getElementsByTagName('a');

mainNav[0].textContent = siteContent['nav']['nav-item-1'];
mainNav[1].textContent = siteContent['nav']['nav-item-2'];
mainNav[2].textContent = siteContent['nav']['nav-item-3'];
mainNav[3].textContent = siteContent['nav']['nav-item-4'];
mainNav[4].textContent = siteContent['nav']['nav-item-5'];
mainNav[5].textContent = siteContent['nav']['nav-item-6'];

let navText = document.querySelector('.nav');
mainNav.style.color = 'green';


//? Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//? adds the image to the right of the header
const newCta = document.getElementById('cta-img');
newCta.setAttribute('src',siteContent['cta']['img-src']);

//? adds the h1 of the header. 
let newCtaText = document.querySelector('h1');
newCtaText.textContent = siteContent['cta']['h1'];

//? adds all the h4's to the page.
const allH4 = document.querySelectorAll('h4');
allH4[0].textContent = siteContent['main-content']['features-h4'];
allH4[1].textContent = siteContent['main-content']['about-h4'];
allH4[2].textContent = siteContent['main-content']['services-h4'];
allH4[3].textContent = siteContent['main-content']['product-h4'];
allH4[4].textContent = siteContent['main-content']['vision-h4'];
allH4[5].textContent = siteContent['contact']['contact-h4'];

//? adds the button on the page.
const mainBtn = document.querySelector('button');
mainBtn.textContent = siteContent['cta']['button'];

//? adds the middle image of the page.
let theMiddleImg = document.querySelector('.middle-img');
theMiddleImg.setAttribute('src',siteContent ['main-content']['middle-img-src']);

//? adds all the paragraphs in the page. 
let allp = document.querySelectorAll('p');
allp[0].textContent = siteContent['main-content']['features-content'];
allp[1].textContent = siteContent['main-content']['about-content'];
allp[2].textContent = siteContent['main-content']['services-content'];
allp[3].textContent = siteContent['main-content']['product-content'];
allp[4].textContent = siteContent['main-content']['vision-content'];
allp[5].textContent = siteContent['contact']['address'];
allp[6].textContent = siteContent['contact']['phone'];
allp[7].textContent = siteContent['contact']['email'];
allp[7].textContent = siteContent['footer']['copyright'];

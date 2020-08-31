const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav bar changes

const navBar = document.querySelector("nav");
navBar.prepend("First");
navBar.append("Last");
// console.log(navBar);

const nav1 = document.querySelector("nav a:nth-of-type(1)");
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav1.style.color = "green";

const nav2 = document.querySelector("nav a:nth-of-type(2)");
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav2.style.color = "green";

const nav3 = document.querySelector("nav a:nth-of-type(3)");
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav3.style.color = "green";

const nav4 = document.querySelector("nav a:nth-of-type(4)");
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav4.style.color = "green";

const nav5 = document.querySelector("nav a:nth-of-type(5)");
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav5.style.color = "green";

const nav6 = document.querySelector("nav a:nth-of-type(6)");
nav6.textContent = siteContent["nav"]["nav-item-6"];
nav6.style.color = "green";

//***<--Michelle's way of doing it and looping -->***//
// const anchors = document.querySelectorAll("a");
// const values = Object.values(siteContent.nav); //create a new variable to call the object that is being given on top.
//object.values gives us the value of the keys.
// for (let i = 0; i < anchors.length; i++) {
//   anchors[i].textContent = values[i];
// }

//selecting the cta tags and images

const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

const titleButton = document.querySelector("button");
titleButton.textContent = siteContent["cta"]["button"];

let img1 = document.querySelector("#cta-img");
img1.setAttribute("src", siteContent["cta"]["img-src"]);

//selecting all the h4's and paragraph tags, by doing so and creating an array, im changing them by calling them in order - super hacky, not happy with how its been done but it 'works'

const h4s = document.querySelectorAll("h4");
const ps = document.querySelectorAll("p");
// console.log(ps);

h4s[0].textContent = siteContent["main-content"]["features-h4"];
ps[0].textContent = siteContent["main-content"]["features-content"];

h4s[1].textContent = siteContent["main-content"]["about-h4"];
ps[1].textContent = siteContent["main-content"]["about-content"];

let contentImg = document.getElementById("middle-img");
contentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

h4s[2].textContent = siteContent["main-content"]["services-h4"];
ps[2].textContent = siteContent["main-content"]["services-content"];

h4s[3].textContent = siteContent["main-content"]["product-h4"];
ps[3].textContent = siteContent["main-content"]["product-content"];

h4s[4].textContent = siteContent["main-content"]["vision-h4"];
ps[4].textContent = siteContent["main-content"]["vision-content"];

h4s[5].textContent = siteContent["contact"]["contact-h4"];
ps[5].textContent = siteContent["contact"]["address"];
ps[6].textContent = siteContent["contact"]["phone"];
ps[7].textContent = siteContent["contact"]["email"];

ps[8].textContent = siteContent["footer"]["copyright"];

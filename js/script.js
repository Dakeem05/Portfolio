const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const iconLight = document.querySelector(".iconLight");
const iconDark = document.querySelector(".iconDark");
const card = document.querySelector(".card-container")
const resume = document.querySelector("#resume")
const cvFileName = 'Edidiong_Samuel.pdf';
hamburger.addEventListener("click", mobileMenu);

resume.addEventListener('click', ()=>{
  // alert('jjj')
  const cvUrl = `assets/${cvFileName}`;
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = cvFileName;
  link.style.display = 'none'; // Hide the link (optional)

  // Append the link to the document body (optional)
  // document.body.appendChild(link);  // Uncomment if needed

  // Simulate a click on the link to trigger download
  link.click();
})

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
    iconLight.classList.add('invisible')
    iconDark.classList.remove('invisible')
    // card.classList.;
    card.classList.remove('card-bgLight');
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
    iconLight.classList.remove('invisible')
    iconDark.classList.add('invisible')
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    iconLight.classList.add('invisible')
    iconDark.classList.remove('invisible')
  } else {
    toggleSwitch.checked = false;
    iconLight.classList.remove('invisible')
    iconDark.classList.add('invisible')
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date();
myDate.innerHTML = yes.getFullYear();

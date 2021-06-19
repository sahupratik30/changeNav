const sections = document.querySelectorAll("section");
const listItems = document.querySelectorAll("nav ul li");
const nav = document.querySelector("nav");
const navHeight = nav.clientHeight;

const animateMenu = () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - navHeight - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  listItems.forEach((listItem) => {
    if (listItem.classList.contains(currentSection)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", animateMenu);

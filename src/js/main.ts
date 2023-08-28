import "virtual:svg-icons-register";
import "../scss/style.scss";
import pressCenter from "./press-center";
import technic from "./technic";
import directions from "./directions";
import introSlider from "./intro-slider";
import cardsStacking from "./cardsStacking";
import fixedSections from "./fixedSections";
import smoothScrolling from "./smoothScrolling";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  pressCenter();
  technic();
  directions();
  introSlider();
  cardsStacking();
  fixedSections();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

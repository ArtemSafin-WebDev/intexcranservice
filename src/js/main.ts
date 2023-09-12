import "virtual:svg-icons-register";
import "../scss/style.scss";
import pressCenter from "./press-center";
import technic from "./technic";
import directions from "./directions";
import introSlider from "./intro-slider";
import cardsStacking from "./cardsStacking";
import fixedSections from "./fixedSections";
import smoothScrolling from "./smoothScrolling";
import accordions from "./accordion";
import menu from "./menu";
import servicesSlider from "./servicesSlider";
import needsService from "./needsService";
import trusted from "./trusted";
import history from "./history";
import tabs from "./tabs";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  tabs();
  smoothScrolling();
  pressCenter();
  technic();
  directions();
  introSlider();
  cardsStacking();
  fixedSections();
  accordions();
  servicesSlider();
  needsService();
  trusted();
  history();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

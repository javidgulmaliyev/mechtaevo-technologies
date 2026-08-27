import Swiper from "swiper";
import { Keyboard, Navigation } from "swiper/modules";

/** @type {HTMLDivElement} */
const technologyFeaturesSlider = document.querySelector(".technology-features-slider");

if (technologyFeaturesSlider) {
  /** @type {HTMLDivElement} */
  const arrow = technologyFeaturesSlider.querySelector(".slider-arrow");

  const swiper = new Swiper(technologyFeaturesSlider, {
    modules: [Keyboard, Navigation],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: arrow,
    },
    spaceBetween: 25,
    rewind: true,
  });
}

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

/** @type {HTMLDivElement} */
const technologyFaqSlider = document.querySelector(".technology-faq-slider");

if (technologyFaqSlider) {
  /** @type {HTMLDivElement} */
  const arrow = technologyFaqSlider.querySelector(".slider-arrow");

  const swiper = new Swiper(technologyFaqSlider, {
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

/** @type {HTMLDivElement} */
const technologiesStandardsSlider = document.querySelector(".technologies-standards-slider");

if (technologiesStandardsSlider) {
  /** @type {HTMLDivElement} */
  const arrow = technologiesStandardsSlider.querySelector(".slider-arrow");

  const swiper = new Swiper(technologiesStandardsSlider, {
    modules: [Keyboard, Navigation],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: arrow,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 2,
      },
      "1440.1": {
        slidesPerView: 3,
      },
    },
    on: {
      resize: (swiper) => {
        swiper.params.spaceBetween = Math.min(Math.max(25, 25 + 50 * ((window.innerWidth - 1440) / 410)), 75);
      }
    },
    slidesPerView: 1,
    spaceBetween: Math.min(Math.max(25, 25 + 50 * ((window.innerWidth - 1440) / 410)), 75),
    rewind: true,
  });
}

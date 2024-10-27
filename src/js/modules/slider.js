import { initSlider } from "./utils.js";

import { sliderConfig } from "./configs.js";

const initSliders = () => {
  initSlider(".main-first", sliderConfig);
  initSlider(".house-slider", sliderConfig.houseSlider);

  // Получаем все парные элементы house-thumbs-slider и house-img-slider
  const thumbsSliders = document.querySelectorAll(".house-thumbs-slider");
  const imgSliders = document.querySelectorAll(".house-img-slider");

  thumbsSliders.forEach((thumbsSlider, index) => {
    // Инициализируем thumbsSlider для текущего imgSlider
    const houseThumbsSwiper = initSlider(
      thumbsSlider,
      sliderConfig.houseThumbsSlider
    );

    // Настраиваем и инициализируем houseImgSlider с текущим houseThumbsSlider
    const houseImgSliderConfig = { ...sliderConfig.houseImgSlider };
    houseImgSliderConfig.thumbs = { swiper: houseThumbsSwiper };

    // Инициализируем houseImgSlider с созданной конфигурацией
    initSlider(imgSliders[index], houseImgSliderConfig);
  });
};

export { initSliders };

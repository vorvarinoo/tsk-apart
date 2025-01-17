const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  houseSlider: {
    watchSlidesProgress: true,
    slidesPerView: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  },
  houseThumbsSlider: {
    watchSlidesProgress: true,
    slidesPerView: 3,
    direction: "vertical",
    spaceBetween: 16,
    freeMode: true,
  },
  houseImgSlider: {
    watchSlidesProgress: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: "is-invalid",
    errorLabelStyle: {
      color: "var(--error)",
      marginTop: "6px",
      fontSize: "12px",
      textAlign: "left",
    },
    errorFormClass: "shaked",
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: " (___) ___ __ __",
  },
};

const observerConfig = {
  scrollTop: {
    rootMargin: "600px",
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: "https://jsonplaceholder.typicode.com/posts",
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};

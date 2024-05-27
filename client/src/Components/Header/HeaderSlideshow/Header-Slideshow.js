import React from "react";
import HeaderSlideshowStyles from "./Header-Slideshow.module.css";
import SlideshowCrossfade from "services/Slideshow-crossfade/Slideshow-crossfade";

const HeaderSlideshow = () => {
  const slideshow = HeaderSlideshowStyles.slideshow;
  const slide01 = HeaderSlideshowStyles.slide01;
  const slide02 = HeaderSlideshowStyles.slide02;
  const slide03 = HeaderSlideshowStyles.slide03;
  const slide03a = HeaderSlideshowStyles.slide03a;
  const slide03b = HeaderSlideshowStyles.slide03b;
  const slide04 = HeaderSlideshowStyles.slide04;
  const slide05 = HeaderSlideshowStyles.slide05;
  const slide05a = HeaderSlideshowStyles.slide05a;

  return (
    <SlideshowCrossfade className={slideshow}>
      <div className={slide03a}></div>
      <div className={slide02}></div>
      <div className={slide03}></div>
      <div className={slide03b}></div>
      <div className={slide01}></div>
      <div className={slide04}></div>
      <div className={slide05}></div>
      <div className={slide05a}></div>
    </SlideshowCrossfade>
  );
};

export default HeaderSlideshow;

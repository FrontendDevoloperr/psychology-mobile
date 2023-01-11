import React from "react";
import { Swiper, Toast, Image } from "antd-mobile";

import "../assets/less/style.css";

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <Image
      onClick={() => {
        Toast.show(`Info---- ${index + 1}`);
      }}
      className="sliderContainer"
      src={
        "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
      }
      height={150}
      fit="cover"
    />
  </Swiper.Item>
));

export const SliderUSers = () => {
  return (
    <>
      {/* 
      <DemoBlock title="自动播放">
        <Swiper autoplay>{items}</Swiper>
      </DemoBlock> */}

      {/*      <DemoBlock title="循环">
        <Swiper loop>{items}</Swiper>
      </DemoBlock> */}

      <Swiper
        style={{
          "--border-radius": "8px",
        }}
        defaultIndex={3}
      >
        {items}
      </Swiper>
    </>
  );
};

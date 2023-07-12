import { MouseEventHandler, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import moshify from '../assets/moshify.png';
import de_banke from '../assets/de_banke.png';
import portfolio from '../assets/portfolio.png';
import Card from '../components/Card';
import SliderButtons from '../components/SliderButtons';

const data = [
  {
    image: moshify,
    title: 'MOSHIFY',
    description: 'This is a cloud hosting website landing page',
    key: 101,
    url: 'https://k-ds.github.io/Moshify',
  },
  {
    image: de_banke,
    title: 'DE BANKE',
    description:
      'This is a finance manager web app, It is used to manage your finances',
    key: 102,
    url: '#',
  },
  {
    image: portfolio,
    title: 'MY BRAND',
    description: 'This is my brand website, one of the first websites I built',
    key: 103,
    url: 'https://k-ds.github.io/My-Brand-David/UI/',
  },
];

const Work = () => {
  return (
    <div
      about="Work"
      className="h-screen flex flex-col justify-center items-center space-y-20"
    >
      <header className="flex flex-col items-center space-y-3">
        <h2 className="text-3xl font-semibold">My Work</h2>
        <p className="text-gray-300">
          These are some of the projects I have worked on.
        </p>
      </header>
      <div className="w-full">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
          }}
          slidesPerView={2}
          centeredSlides
          className="h-full flex flex-col justify-between space-y-16"
        >
          {data.map((item, id) => (
            <SwiperSlide key={id}>
              {({ isActive }) => <Card {...item} active={isActive} />}
            </SwiperSlide>
          ))}
          <SliderButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default Work;

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
    v_url: 'https://k-ds.github.io/Moshify',
    c_url: 'https://github.com/K-Ds/Moshify',
  },
  {
    image: c_portfolio,
    title: 'PORTFOLIO',
    description: 'This is the current website you are on',
    key: 104,
    v_url: 'https://karenzidavid.vercel.app',
    c_url: 'https://github.com/K-Ds/portfolio',
  },
  {
    image: de_banke,
    title: 'Ex-Tracker',
    description:
      'This is a finance manager web app, It is used to manage your finances',
    key: 102,
    v_url: 'https://ex-tracker-nu.vercel.app',
    c_url: 'https://github.com/K-Ds/Ex-Tracker',
  },
];

const Work = () => {
  return (
    <div
      id="Work"
      className="h-screen flex flex-col justify-center items-center space-y-20 section"
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

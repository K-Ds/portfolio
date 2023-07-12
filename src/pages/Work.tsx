import { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import moshify from '../assets/moshify.png';
import de_banke from '../assets/de_banke.png';
import portfolio from '../assets/portfolio.png';
import Card from '../components/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const [imgIndex, setImgIndex] = useState(0);
  const settings: Settings = {
    className: 'center',
    infinite: true,
    centerPadding: '20vw',
    slidesToShow: 2,
    speed: 500,
    beforeChange: (_current, next) => setImgIndex(next),
  };

  return (
    <div className="h-screen flex flex-col justify-around items-center">
      <header className="flex flex-col items-center space-y-3">
        <h2 className="text-3xl font-semibold">My Work</h2>
        <p className="text-gray-300">
          These are some of the projects I have worked on.
        </p>
      </header>
      <div className="w-screen">
        <Slider {...settings}>
          {data.map((item, idx) => (
            <Card {...item} active={idx === imgIndex} />
          ))}
        </Slider>
      </div>
      <div className="flex space-x-5 font-semibold">
        <span>PREV</span>
        <span>NEXT</span>
      </div>
    </div>
  );
};

export default Work;

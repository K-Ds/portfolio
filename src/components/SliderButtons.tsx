import { useSwiper } from 'swiper/react';

const SliderButtons = () => {
  const swiper = useSwiper();
  console.log(swiper, 'cpm');
  return (
    <div className="flex space-x-5 font-semibold w-full justify-center">
      <span onClick={() => swiper?.slidePrev()}>PREV</span>
      <span onClick={() => swiper?.slideNext()}>NEXT</span>
    </div>
  );
};

export default SliderButtons;

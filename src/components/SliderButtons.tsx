import { useSwiper } from 'swiper/react';

const SliderButtons = () => {
  const swiper = useSwiper();
  console.log(swiper, 'cpm');
  return (
    <div className="flex space-x-5 font-semibold w-full justify-center">
      <span className="cursor-pointer" onClick={() => swiper?.slidePrev()}>
        PREV
      </span>
      <span className="cursor-pointer" onClick={() => swiper?.slideNext()}>
        NEXT
      </span>
    </div>
  );
};

export default SliderButtons;

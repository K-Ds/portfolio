import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import db from '../utils/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Card from '../components/Card';
import SliderButtons from '../components/SliderButtons';

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  key: string;
  v_url: string;
  c_url: string;
};

const Work = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'projects'), (snapshot) => {
        const data: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }));

        setProjects(data);
      }),
    []
  );

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
          {projects.map((item) => (
            <SwiperSlide key={item.key}>
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

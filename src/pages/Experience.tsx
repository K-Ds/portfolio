import clsx from 'clsx';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../utils/firebase';

interface ExperienceProps {
  key: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: Array<string>;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [active, setActive] = useState(0);

  useEffect(
    () =>
      onSnapshot(collection(db, 'experiences'), (snapshot) => {
        const data: any[] = snapshot.docs.map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }));

        setExperiences(data);
      }),
    []
  );

  return (
    <div
      id="Experience"
      className="h-screen flex flex-col justify-center items-center space-y-20 pt-32 section"
    >
      <header className="flex flex-col items-center space-y-3">
        <h2 className="text-3xl font-semibold">My Experience</h2>
        <p className="text-gray-300">
          This is my experience so far in the industry
        </p>
      </header>
      {experiences.length && (
        <div className="flex justify-center space-x-9 w-10/12 flex-1">
          <div className="w-1/4">
            {experiences?.map((experience, id) => (
              <div
                key={id}
                className={clsx(
                  'px-2 py-4 text-xl font-bold border-l-4 transition-colors duration-300 ease-in cursor-pointer',
                  id == active
                    ? 'border-orange-500 text-orange-500'
                    : 'border-gray-400 text-gray-400'
                )}
                onClick={() => setActive(id)}
              >
                {experience.company}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start flex-3 w-3/4">
            <h3 className="font-bold text-lg">
              {experiences[active].position}
            </h3>
            <span className="text-gray-400">
              {experiences[active]?.startDate} - {experiences[active]?.endDate}
            </span>
            <div className="flex flex-col space-y-3 mt-5">
              {experiences[active]?.achievements?.map((achievement, idx) => (
                <p key={idx} className="">
                  {achievement}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;

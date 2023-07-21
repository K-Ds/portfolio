import clsx from 'clsx';
import { useState } from 'react';

interface experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: Array<string>;
}

const Experience = () => {
  const [experiences] = useState<experience[]>([
    {
      company: 'Positivo-Sparkpluss',
      position: 'Cross-platform Mobile Developer',
      startDate: 'November 2022',
      endDate: 'Present',
      achievements: [
        'React Native development',
        'Designed and implemented a responsive UI for React Native applications that adhere to industry best practices.',
        'Successfully integrated complex third-party libraries and APIs into React Native applications',
        'Collaborated with cross-functional teams, including UX designers, product managers.',
      ],
    },
    {
      company: 'Andela',
      position: 'Apprentice',
      startDate: 'November 2022',
      endDate: 'Present',
      achievements: [
        'Enrolled in The Andela Technical Leadership Program ',
        'This program gave me a solid foundation in web development and teamwork essentials.',
        'The program was based on active development of team projects to practice our technical skills and collaboration when working with a team',
        'And in the end had a 3months of apprenticeship working with experts in the industry',
      ],
    },
    {
      company: 'FreecodeCamp',
      position: 'Self-Learning',
      startDate: '',
      endDate: '',
      achievements: [
        'This was my entry in software development',
        'I successfully completed a comprehensive series of software development courses provided by FreeCodeCamp.',
        '• Responsive Web Design(HTML & CSS)',
        '• JavaScript Algorithms and Data Structures',
        '• Front End Development Libraries',
      ],
    },
  ]);
  const [active, setActive] = useState(0);

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
      <div className="flex justify-center space-x-9 w-10/12 flex-1">
        <div className="w-1/4">
          {experiences.map((experience, id) => (
            <div
              key={id}
              className={clsx(
                'px-2 py-4 text-xl font-bold border-l-4 transition-colors duration-300 ease-in',
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
          <h3 className="font-bold text-lg">{experiences[active].position}</h3>
          <span className="text-gray-400">
            {experiences[active].startDate} - {experiences[active].endDate}
          </span>
          <div className="flex flex-col space-y-3 mt-5">
            {experiences[active].achievements.map((achievement, idx) => (
              <p key={idx} className="">
                {achievement}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

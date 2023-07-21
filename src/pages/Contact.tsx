import Button from '../components/ButtonOutline';
import ContactImage from '../assets/connection.svg';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

interface contact {
  name: string;
  link: string;
  Icon: IconType;
}

const Contact = () => {
  const [contacts] = useState<contact[]>([
    { name: 'github', link: 'https://github.com/k-ds', Icon: FaGithubSquare },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/david-karenzi',
      Icon: FaLinkedin,
    },
  ]);
  return (
    <div className="section">
      <div className="flex space-x-6 pb-6" id="Contact">
        <div className="flex flex-col flex-1 space-y-10 justify-center items-start rounded-xl">
          <h1 className="font-semibold text-3xl border-b-4 border-orange-500 pr-8 pb-6">
            Contact Me
          </h1>
          <p className="text-gray-400 text-lg w-4/5">
            If you want to get in touch with me for a Job, Collaboration, Ideas,
            Advice or any other interesting stuff.
          </p>
          <div className="flex justify-between items-center space-x-5">
            {contacts.map((contact, index) => (
              <a href={contact.link} key={index} target="_blank">
                <contact.Icon className="text-5xl" />
              </a>
            ))}
          </div>
          <Button text="Email Me" url="mailto:karenzi.davide@gmail.com" />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <img src={ContactImage} className="h-4/5" />
        </div>
      </div>
      <div className="flex space-x-5 divide-gray-300 divide-x-2">
        <a href="https://storyset.com/online" className="text-gray-300">
          Online illustrations by Storyset
        </a>
        <p className="text-gray-300 px-4">Made By KD</p>
      </div>
    </div>
  );
};

export default Contact;

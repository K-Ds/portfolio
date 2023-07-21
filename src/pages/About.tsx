import Button from "../components/ButtonOutline";
import {IconType} from "react-icons/lib";

import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  TbBrandReact,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNextjs,
} from 'react-icons/tb';

type technology = { name: string, Icon: IconType };

const techs:Array<technology> = [
  {
    name: 'React JS',
    Icon: FaReact,
  },
  {
    name: 'React Native',
    Icon: TbBrandReact,
  },
  {
    name: 'Typescript',
    Icon: TbBrandTypescript,
  },
  {
    name: 'Javascript',
    Icon: TbBrandJavascript,
  },
  {
    name: 'Node JS',
    Icon: FaNodeJs,
  },
  {
    name: 'Next JS',
    Icon: TbBrandNextjs,
  },
];

const About = () => {
  return (
    <div
      id="About"
      className="h-screen flex flex-col justify-center space-y-40 section"
    >
      <div className="flex">
        <div className="flex-1">
          <img />
        </div>
        <div className="flex-1 flex flex-col justify-between space-y-10 items-start">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="w-4/5 text-lg">
            Hello there! Welcome to my world. I'm{' '}
            <span className="text-orange-500">David Karenzi</span>, a Software
            Developer specializing in both crafting intuitive interfaces to
            architecting scalable backend systems in either web/mobile, I enjoy
            every aspect of tech, Whether it's exploring the latest technologies
            or diving into coding challenges.
          </p>
          <Button
            text="Resume"
            url="https://drive.google.com/file/d/1go21NCbMmBLSjhXbgQHNpCHlVLZxnDX6/view?usp=sharing"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        {techs.map((tech, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            <tech.Icon className="text-2xl" />
            <p className="text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About
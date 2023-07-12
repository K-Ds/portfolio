import { BsLinkedin, BsGithub } from 'react-icons/bs';
import ContructionImage from '../assets/Under construction-amico.svg';

const Maintenance = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col space-y-5">
      <span className="font-semibold text-lg text-orange-500">
        KD-PORTFOLIO
      </span>
      <h1 className="text-3xl font-bold mb-5">Website Under Maintenance</h1>
      <p>
        I apologize for any inconvenience caused; my website is currently under
        maintenance.
      </p>
      <p>
        In the meantime, please feel free to contact me on my socials for any
        service or inquiries.
      </p>
      <div className="flex space-x-5">
        <a className="text-3xl" href="https://github.com/k-ds">
          <BsGithub />
        </a>
        <a
          className="text-3xl"
          href="https://www.linkedin.com/in/david-karenzi/"
        >
          <BsLinkedin />
        </a>
      </div>
      <img src={ContructionImage} alt="" className="w-10/12" />
      <a href="https://storyset.com/online">Online illustrations by Storyset</a>
    </div>
  );
};

export default Maintenance;

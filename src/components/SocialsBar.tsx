import { FaGithub } from 'react-icons/fa';

const SocialsBar = () => {
  return (
    <div className="flex fixed flex-col items-center">
      <FaGithub />
      <span className="border-r-2 py-10"></span>
    </div>
  );
};

export default SocialsBar;

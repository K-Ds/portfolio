import { MouseEventHandler } from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';

type ArrowNavProps = {
  text: string;
  onClick?: MouseEventHandler;
};

const ArrowNav = ({ text, onClick }: ArrowNavProps) => {
  return (
    <div
      className="flex flex-col text-orange-500 items-center cursor-pointer"
      onClick={onClick}
    >
      <p>{text}</p>
      <BiDownArrowAlt className="text-2xl" />
    </div>
  );
};

export default ArrowNav;

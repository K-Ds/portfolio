import { BiDownArrowAlt } from 'react-icons/bi';

type ArrowNavProps = {
  text: string;
  href: string;
};

const ArrowNav = ({ text, href }: ArrowNavProps) => {
  return (
    <a
      className="flex flex-col text-orange-500 items-center cursor-pointer"
      href={href}
    >
      <p>{text}</p>
      <BiDownArrowAlt className="text-2xl" />
    </a>
  );
};

export default ArrowNav;

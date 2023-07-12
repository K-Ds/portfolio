import Button from "./ButtonOutline";

type NavbarProps = {
  position: string | number;
};

const Navbar = ({ position }: NavbarProps) => {
  const navItems = ['About', 'Work', 'Experience'];
  console.log(position);
  return (
    <nav className="flex justify-between py-4 px-2 items-center fixed lg:w-10/12 2xl:w-3/4 bg-black">
      <span className="font-semibold text-lg text-orange-500">
        KD-PORTFOLIO
      </span>
      <ul className="flex space-x-4 font-normal">
        {navItems.map((item, index) => {
          const style = item == position ? 'text-orange-500' : '';
          return (
            <li key={index}>
              <a href={''} className={style}>
                #{item}
              </a>
            </li>
          );
        })}
      </ul>
      <Button text="Contact Me" />
    </nav>
  );
};

export default Navbar
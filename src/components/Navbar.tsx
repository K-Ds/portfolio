import Button from "./ButtonOutline";

type NavbarProps = {
  position: number
} 

const Navbar = ({position}:NavbarProps) => {
  const navItems = ["About", "Work", "Experience"];

  return (
    <nav className="flex justify-between py-4 px-2 items-center fixed w-11/12 bg-black">
      <span className="font-semibold text-lg text-orange-500">
        KD-PORTFOLIO
      </span>
      <ul className="flex space-x-4 font-normal">
        {navItems.map((item,index) => {
          const style = index+1 == position ? 'text-orange-500' : '';
          return (
            <li key={index}>
              <a href="" className={style}>
                #{item}
              </a>
            </li>
          );
        })
        }
      </ul>
      <Button text="Contact Me" />
    </nav>
  );
}

export default Navbar
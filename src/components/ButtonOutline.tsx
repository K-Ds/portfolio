import { MouseEventHandler } from 'react';

type ButtonProps = {
  text: string;
  onclick?: MouseEventHandler;
  url?: string;
};

const Button = ({ text, onclick, url }: ButtonProps) => {
  return !url ? (
    <div
      className="ring-1 ring-orange-500 px-4 py-2 rounded-md cursor-pointer"
      onClick={onclick}
    >
      {text}
    </div>
  ) : (
    <a
      href={url}
      className="ring-1 ring-orange-500 px-4 py-2 rounded-md cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button;

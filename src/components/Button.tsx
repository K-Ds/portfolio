type ButtonProps = {
  text: string;
  url?: string;
  onclick?: Function;
};

const Button = ({ text, url }: ButtonProps) => {
  return !url ? (
    <div className="bg-orange-500 px-5 py-1.5 rounded-md cursor-pointer">
      {text}
    </div>
  ) : (
    <a
      href={url}
      className="bg-orange-500 px-5 py-1.5 rounded-md cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button;

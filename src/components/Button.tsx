type ButtonProps = {
  text: string;
  url?: string;
  onclick?: Function;
};

const Button = ({ text, url }: ButtonProps) => {
  return url ? (
    <div className="bg-orange-500 px-3 py-2 rounded-md">{text}</div>
  ) : (
    <a href={url} className="bg-orange-500 px-3 py-2 rounded-md">
      {text}
    </a>
  );
};

export default Button;

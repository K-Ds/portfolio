type ButtonProps = {
  text: string;
  onclick?: Function;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <div className="ring-1 ring-orange-500 px-3 py-2 rounded-md">{text}</div>
  );
};

export default Button;
import clsx from 'clsx';
import Button from './Button';

type CardProps = {
  image: string;
  title: string;
  description: string;
  key: string;
  v_url: string;
  c_url: string;
  active: boolean;
};

const Card = ({
  image,
  title,
  description,
  key,
  v_url,
  c_url,
  active,
}: CardProps) => {
  return (
    <div
      className={clsx(
        'group relative transition-transform',
        active ? 'scale-100 opacity-100' : 'opacity-50 scale-75'
      )}
      key={key}
    >
      <img src={image} alt="website-preview" />
      <div className="hidden group-hover:flex absolute top-0 bg-black bg-opacity-80 justify-center items-center flex-col text-center space-y-5 w-full h-full px-5 text-lg">
        <h3 className="font-bold text-xl">{title}</h3>
        <span>{description}</span>
        <div className="flex space-x-6">
          <Button text="Demo" url={v_url} />
          <Button text="Code" url={c_url} />
        </div>
      </div>
    </div>
  );
};

export default Card;

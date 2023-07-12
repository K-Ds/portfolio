import clsx from 'clsx';
import Button from './Button';

type CardProps = {
  image: string;
  title: string;
  description: string;
  key: number;
  url: string;
  active: boolean;
};

const Card = ({ image, title, description, key, url, active }: CardProps) => {
  console.log(active, title);
  return (
    <div
      className={clsx(
        'group relative transition-transform',
        active ? 'scale-100 opacity-100' : 'opacity-50 scale-75'
      )}
      key={key}
    >
      <img src={image} alt="website-preview" />
      <div className="hidden group-hover:flex absolute top-0 bg-black bg-opacity-80 justify-center items-center flex-col text-center space-y-5 w-full h-full">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex space-x-6">
          <Button text="Demo" url={url} />
          <Button text="Code" url={url} />
        </div>
      </div>
    </div>
  );
};

export default Card;

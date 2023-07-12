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
  return (
    <div
      className={clsx(
        'group relative w-4/5 transition-transform delay-300',
        active ? 'scale-110 opacity-100' : 'opacity-50 scale-50'
      )}
      key={key}
    >
      <img src={image} alt="website-preview" className="w-full" />
      <div className="hidden group-hover:flex absolute top-0 bg-black bg-opacity-80 justify-center items-center flex-col text-center space-y-5">
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

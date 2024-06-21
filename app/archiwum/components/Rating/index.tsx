import Image from 'next/image';
import { FC } from 'react';

const Rating: FC<{ rate: 1 | 2 | 3 | 4 | 5}> = ({ rate }) => {
  const emptyStars = 5 - rate;

  return <div className="flex mb-4">
    {Array.from({ length: rate }).map((_, index) => (
      <Image alt="" height={20} width={20} src="/star-filled.svg" key={index} />
    ))}
    {emptyStars > 0 && Array.from({ length: emptyStars }).map((_, index) => (
      <Image alt="" height={20} width={20} src="/star.svg" key={index} />
    ))}
  </div>
}

export default Rating;

import { FC } from 'react';
import Rating from '../Rating'

type Review = {
  text: string;
  rate: 1 | 2 | 3 | 4 | 5;
  name: string;
  date: string;
}

const Review: FC<Review> = ({ text, rate, name, date }) => {
  return (
    <div
      className="
        max-w-[600px]
        w-[600px]
      "
    >
      <Rating rate={rate} />
      <span className="text-gray">{new Date(date).toLocaleDateString('pl-PL')}</span>
      <h4 className="text-xl"><strong>{name}</strong></h4>
      <p className="text-gray-light">{text}</p>
    </div>
  )
}

export default Review;

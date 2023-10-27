import { Event } from '@/app/data/events';
import { calculateEndHour } from '@/app/utils/events';
import { FC } from 'react'

type EventBox = {

} & Event;

const EventBox: FC<EventBox> = ({ title, eventDate, duration, place, description }) => (
  <article className="flex">
    <div>
    {new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long'}).format(eventDate)}
    </div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{new Intl.DateTimeFormat('pl-PL', { timeStyle: 'short'}).format(eventDate)} - {calculateEndHour(eventDate, duration)}</div>
      <div>{place}</div>
    </div>
  </article>
)

export default EventBox;

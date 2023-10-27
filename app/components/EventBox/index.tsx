import { FC } from 'react'

type EventBox = {
  title: string;
  description: string;
  image: string;
  eventDate: Date;
  place: string;
  fbLink: string;
  registrationLink: string;
}

const EventBox: FC<EventBox> = ({ title, description, eventDate, place, fbLink, registrationLink }) => (
  <article className="flex">
    <h3>{title}</h3>
  </article>
)

import { Event } from '../data/events';

export const getClosestEvents = (events: Event[], number = 3): Event[] => {
  const currentDate = new Date();

  const filteredEvents = events
    .filter(event => event.eventDate > currentDate)
    .sort((ev1, ev2) => {
      console.log('ev1.eventDate.getTime()', ev1.eventDate.getTime())
      return ev1.eventDate.getTime() - ev2.eventDate.getTime()
    })
    .filter((_, i) => i < number);

  return filteredEvents;
}

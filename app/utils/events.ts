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

export const calculateEndHour = (eventDate: Date, duration: number): string => {
  const eventStartHour = new Intl.DateTimeFormat('pl-PL', { timeStyle: 'short'}).format(eventDate);

  const [ hours, minutes ] = eventStartHour.split(':');

  const time = +hours + (+minutes / 60);
  const endTime = time + duration;

  const endHour = Math.floor(endTime);
  const endMinutes = Math.round(endTime % 1 * 60);

  return `${endHour}:${endMinutes.toString().padStart(2, '0')}`;
}

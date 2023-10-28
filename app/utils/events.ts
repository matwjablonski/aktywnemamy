import { Event } from '../data/events';

export const DAYS_TO_REGISTRATION_BEFORE_EVENT = 5;

export const getClosestEvents = (events: Event[], number = 3): Event[] => {
  const currentDate = new Date();

  const filteredEvents = events
    .filter(event => event.eventDate > currentDate)
    .sort((ev1, ev2) => ev1.eventDate.getTime() - ev2.eventDate.getTime())
    .filter((_, i) => i < number);

  return filteredEvents;
}

export const getAllSortedEvents = (events: Event[]): Event[] => {
  return events.sort((ev1, ev2) => ev1.eventDate.getTime() - ev2.eventDate.getTime());
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

export const canRegister = (eventDate: Date, daysToRegister = DAYS_TO_REGISTRATION_BEFORE_EVENT): boolean => {
  const difference = Math.floor(((+eventDate - +new Date())) / 1000);
  const days = Math.floor(difference / (3600 * 24));
  const hours = Math.floor((difference % (3600 * 24)) / 3600);

  if (Math.sign(difference) === -1) {
    return false;
  }

  return (days < daysToRegister) || (days === daysToRegister && hours === 0);
}

export const isEventInPast = (eventDate: Date): boolean => {
  const difference = Math.floor(((+eventDate - +new Date())) / 1000);

  return Math.sign(difference) === -1
}

export type LeftTimeObject = { days: number, hours: number, minutes: number, seconds: number };

export const getLeftTimeObject = (eventDate: Date, timespan = 0): LeftTimeObject => {
  const leftTime = Math.floor((((+eventDate - timespan) - +new Date())) / 1000);

  const days = Math.floor(leftTime / (3600 * 24));
  const hours = Math.floor((leftTime % (3600 * 24)) / 3600);
  const minutes = Math.floor(((leftTime % (3600 * 24)) % 3600) / 60);
  const seconds = leftTime % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

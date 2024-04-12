import { DbItem } from './DbItem';

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  trainer: string;
  trainerLink: string;
  place: string;
  fbLink: string;
  maxParticipants: number;
};

export type EventWithMeta = Event & DbItem;

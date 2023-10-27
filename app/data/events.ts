export type Event = {
  title: string;
  eventDate: Date;
  duration: number;
  trainer: string;
}

export const events: Event[] = [
  {
    title: 'Doradztwo zawodowe',
    eventDate: new Date(Date.UTC(2023, 9, 27, 13)),
    duration: 4,
    trainer: 'Joanna Nawój-Połoczańska',
  },
  {
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    eventDate: new Date(Date.UTC(2023, 10, 8, 11)),
    duration: 1,
    trainer: 'Aneta Biadun',
  },
  {
    title: 'Fizjoterapeuta dziecięcy',
    eventDate: new Date(Date.UTC(2023, 10, 2, 12, 30)),
    duration: 2.5,
    trainer: 'Martyna Jóźwiak',
  },
  {
    title: 'Przebranżowienie do IT',
    eventDate: new Date(Date.UTC(2023, 10, 17, 17)),
    duration: 3,
    trainer: 'Mateusz Jabłoński',
  }
]

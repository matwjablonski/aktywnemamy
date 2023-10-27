export type Event = {
  id: string;
  title: string;
  description: string;
  eventDate: Date;
  duration: number;
  trainer: string;
  place: string;
  image: string;
  registrationUrl?: string;
  detailsUrl?: string;
}

export const events: Event[] = [
  {
    id: 'doradztwo-pazdziernik-1',
    title: 'Doradztwo zawodowe',
    description: '',
    eventDate: new Date(2023, 9, 27, 13),
    duration: 4,
    trainer: 'Joanna Nawój-Połoczańska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/doradztwo-pazdziernik-1.jpg',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-1',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Trening medyczny dla mam po okresie połogu w towarzystwie dzieci do 1. roku życia.',
    eventDate: new Date(2023, 10, 8, 11),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-2',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Trening medyczny dla mam po okresie połogu w towarzystwie dzieci do 1. roku życia.',
    eventDate: new Date(2023, 10, 15, 11),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-3',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Trening medyczny dla mam po okresie połogu w towarzystwie dzieci do 1. roku życia.',
    eventDate: new Date(2023, 10, 22, 11),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-4',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Trening medyczny dla mam po okresie połogu w towarzystwie dzieci do 1. roku życia.',
    eventDate: new Date(2023, 10, 29, 11),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
  },
  {
    id: 'psychoterapeuta-listopad-1',
    title: '(Nie)prawda Instagrama - rzeczywistość kontra oczekiwania',
    description: 'Prelekcja z psychoterapeutą na temat macierzyństwa i jego wizerunku przestawianego w media społecznościowych.',
    eventDate: new Date(2023, 10, 13, 10),
    duration: 2,
    trainer: 'Tomasz Chełek',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/nieprawda-instagrama.jpg'
  },
  {
    id: 'fizjoterapeuta-listopad-1',
    title: 'Fizjoterapeuta dziecięcy',
    description: '',
    eventDate: new Date(2023, 10, 2, 12, 30),
    duration: 2.5,
    trainer: 'Martyna Jóźwiak',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/fizjoterapeuta.jpg',
    registrationUrl: 'https://forms.gle/xd4AaR7PxGwUcWci7',
    detailsUrl: 'https://forms.gle/xd4AaR7PxGwUcWci7',
  },
  {
    id: 'neurologopeda-listopad-1',
    title: 'Neurologopeda - karmienie od narodzin do roku',
    description: '',
    eventDate: new Date(2023, 10, 16, 12, 30),
    duration: 2.5,
    trainer: 'Marcelina Żółtowska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/karmienie.jpg',
  },
  {
    id: 'it-listopad-1',
    title: 'Przebranżowienie do IT',
    description: '',
    eventDate: new Date(2023, 10, 17, 17),
    duration: 3,
    trainer: 'Mateusz Jabłoński',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/it.jpg',
  },
  {
    id: 'psycholog-przytulamy-listopad-1',
    title: 'Przytulamy Mamy - jak zaopiekować się sobą w macierzyństwie',
    description: '',
    eventDate: new Date(2023, 10, 21, 17),
    duration: 2,
    trainer: 'Alicja Formaniewicz - Szyndler',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/przytulamy-mamy.jpg'
  },
  {
    id: 'makrama-listopad-1',
    title: 'Makrama',
    description: '',
    eventDate: new Date(2023, 10, 24, 16),
    duration: 2,
    trainer: 'Monika Gorajewska - Czmoch',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/makrama.jpg'
  },
  {
    id: 'dieta-listopad-1',
    title: 'Rozszerzenie diety niemowlaka',
    description: '',
    eventDate: new Date(2023, 10, 28, 16),
    duration: 2,
    trainer: 'Joanna Wójcik',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/dieta-niemowlaka.jpg'
  },
  {
    id: 'male-dzwieki-listopad-1',
    title: 'Małe Dźwięki',
    description: '',
    eventDate: new Date(2023, 10, 9, 12, 30),
    duration: 0.75,
    trainer: 'Joanna Słowińska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/male-dzwieki.jpg',
  },
  {
    id: 'male-dzwieki-listopad-2',
    title: 'Małe Dźwięki',
    description: '',
    eventDate: new Date(2023, 10, 23, 12, 30),
    duration: 0.75,
    trainer: 'Joanna Słowińska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/male-dzwieki.jpg',
  },
]

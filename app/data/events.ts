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
    id: 'pierwsza-pomoc-pazdziernik-1',
    title: 'Pierwsza pomoc u noworodków i niemowląt',
    description: 'Zajęcia z pierwszej pomocy u noworodków i niemowląt prowadzone przez ratownika medycznego składające się z części teoretycznej i praktycznej wraz z pokazem i ćwiczeniami na fantomie.',
    trainer: 'Wojciech Łukaszuk',
    eventDate: new Date('Mon, 23 Oct 2023 14:00:00 GMT'),
    duration: 3,
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/pierwsza-pomoc.jpg',
    detailsUrl: 'https://www.facebook.com/events/866498558013241',
  },
  {
    id: 'male-dzwieki-pazdziernik-1',
    title: 'Małe Dźwięki',
    description: 'Zajęcia umuzykalniające dla dzieci od 4. do 12 miesiąca życia. Zajęcia prowadzone są wykorzystując m.in. teorię edukacji muzycznej prof. Edwina E. Gordona. Dzięki nim, stymulujemy układ nerwowy, kształtujemy koordynację słuchowo-ruchową a także pozwalamy naszym maluchom na kontakty z rówieśnikami.',
    eventDate: new Date('Thu, 26 Oct 2023 10:30:00 GMT'),
    duration: 0.75,
    trainer: 'Joanna Słowińska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/male-dzwieki.jpg',
    detailsUrl: 'https://www.facebook.com/events/712797734203906',
  },
  {
    id: 'doradztwo-pazdziernik-1',
    title: 'Doradztwo zawodowe',
    description: 'Doradztwo zawodowe to warsztaty skierowane dla kobiet planujących powrót do pracy po urlopie macierzyńskim/wychowawczym. Poruszone zostaną tematy związane z budowaniem strategii zarządzania karierą oraz plan indywidualnego powrotu/wejścia na rynek pracy.',
    eventDate: new Date('Fri, 27 Oct 2023 11:00:00 GMT'),
    duration: 4,
    trainer: 'Joanna Nawój-Połoczańska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/doradztwo-pazdziernik-1.jpg',
    detailsUrl: 'https://www.facebook.com/events/642466967972093/',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-1',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Prowadzone zajęcia pozwolą na odbudowę funkcji po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji), koordynacji nerwowo-mięśniowej oraz postawy ciała. Przygotowują młode mamy do powrotu do sportu. Jest to świetna okazja na spędzenie czasu z dzieckiem, budowanie relacji społecznych oraz pierwsze interakcje maluszków z rówieśnikami.',
    eventDate: new Date('Wed, 08 Nov 2023 10:00:00 GMT'),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
    registrationUrl: 'https://forms.gle/J2Hi6HsSjvCZSovZ9',
    detailsUrl: 'https://www.facebook.com/events/1083763255837566/1083766759170549?ref=newsfeed',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-2',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Prowadzone zajęcia pozwolą na odbudowę funkcji po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji), koordynacji nerwowo-mięśniowej oraz postawy ciała. Przygotowują młode mamy do powrotu do sportu. Jest to świetna okazja na spędzenie czasu z dzieckiem, budowanie relacji społecznych oraz pierwsze interakcje maluszków z rówieśnikami.',
    eventDate: new Date('Wed, 15 Nov 2023 10:00:00 GMT'),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
    registrationUrl: 'https://forms.gle/14T9qgJrXxaboetW8',
    detailsUrl: 'https://www.facebook.com/events/1083763255837566/1083766762503882?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22user_timeline%22%7D%2C%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D]%2C%22ref_notif_type%22%3Anull%7D'
  },
  {
    id: 'cwiczenia-ruchowe-listopad-3',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Prowadzone zajęcia pozwolą na odbudowę funkcji po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji), koordynacji nerwowo-mięśniowej oraz postawy ciała. Przygotowują młode mamy do powrotu do sportu. Jest to świetna okazja na spędzenie czasu z dzieckiem, budowanie relacji społecznych oraz pierwsze interakcje maluszków z rówieśnikami.',
    eventDate: new Date('Wed, 22 Nov 2023 10:00:00 GMT'),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
    registrationUrl: 'https://forms.gle/JSax9yTgUaU8dTESA',
    detailsUrl: 'https://www.facebook.com/events/1083763255837566/1083766769170548?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22unknown%22%2C%22surface%22%3A%22user_timeline%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D]%2C%22ref_notif_type%22%3Anull%7D',
  },
  {
    id: 'cwiczenia-ruchowe-listopad-4',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Prowadzone zajęcia pozwolą na odbudowę funkcji po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji), koordynacji nerwowo-mięśniowej oraz postawy ciała. Przygotowują młode mamy do powrotu do sportu. Jest to świetna okazja na spędzenie czasu z dzieckiem, budowanie relacji społecznych oraz pierwsze interakcje maluszków z rówieśnikami.',
    eventDate: new Date('Wed, 29 Nov 2023 10:00:00 GMT'),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
    registrationUrl: 'https://forms.gle/kyiWKowHKRHALPKe6',
    detailsUrl: 'https://www.facebook.com/events/1083763255837566/1083766765837215?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D]%2C%22ref_notif_type%22%3Anull%7D',
  },
  {
    id: 'psychoterapeuta-listopad-1',
    title: '(Nie)prawda Instagrama - rzeczywistość kontra oczekiwania',
    description: 'Dzisiejsze czasy poza „tradycyjną” presją społeczną, dokładają presję ze strony mediów społecznościowych. Młode Mamy są szczególnie narażone na naciski z obu tych źródeł. Powodują one pogorszenia nastroju, samooceny, co w konsekwencji prowadzić może do dużo poważniejszych problemów. Są to poważne wyzwania, z którymi chcemy walczyć i pokazać jak się na nie uodpornić. Dlatego na spotkaniu opowiemy, jak sprawić, by lukrowany świat Instagrama, oraz oczekiwania innych względem wychowania naszych dzieci nie wpływały negatywnie na nas samych.',
    eventDate: new Date('Mon, 13 Nov 2023 09:00:00 GMT'),
    duration: 2,
    trainer: 'Tomasz Chełek',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/nieprawda-instagrama.jpg',
    registrationUrl: 'https://forms.gle/JxX71JiXrFo3fCqD6',
    detailsUrl: 'https://www.facebook.com/events/837664974819791',
  },
  {
    id: 'fizjoterapeuta-listopad-1',
    title: 'Fizjoterapeuta dziecięcy',
    description: 'Warsztat składający się z części teoretycznej i praktycznej. Omówione zostaną etapy rozwoju niemowląt, wzmożone i obniżone napięcie mięśniowe, kontakt wzrokowy, pielęgnacja. W części praktycznej pokazane zostaną ćwiczenia wspierające rozwój.',
    eventDate: new Date('Thu, 02 Nov 2023 11:30:00 GMT'),
    duration: 2.5,
    trainer: 'Martyna Jóźwiak',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/fizjoterapeuta.jpg',
    registrationUrl: 'https://forms.gle/xd4AaR7PxGwUcWci7',
    detailsUrl: 'https://www.facebook.com/events/898182618396438',
  },
  {
    id: 'neurologopeda-listopad-1',
    title: 'Neurologopeda - karmienie od narodzin do roku',
    description: 'Podczas warsztatów zostaną poruszone tematy związane z fizjologią od ssania po gryzienia i mówienie, karmieniem, oraz rozszerzaniem diety i rozwojem mowy.',
    eventDate: new Date('Thu, 16 Nov 2023 11:30:00 GMT'),
    duration: 2.5,
    trainer: 'Marcelina Żółtowska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/karmienie.jpg',
    registrationUrl: 'https://forms.gle/sD39QkYLJdabRRjN8',
    detailsUrl: 'https://www.facebook.com/events/1371173986802594/',
  },
  {
    id: 'it-listopad-1',
    title: 'Przebranżowienie do IT',
    description: 'Z warsztatów dowiesz się: Czy branża IT jest dla Ciebie? Jak (naprawdę) działa Twój komputer? Jakie kompetencje musisz opanować, aby zostać programistką / testerką? Jak wygląda codzienna praca w projektach programistycznych?',
    eventDate: new Date('Fri, 17 Nov 2023 16:00:00 GMT'),
    duration: 3,
    trainer: 'Mateusz Jabłoński',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/it.jpg',
    registrationUrl: 'https://forms.gle/XpNr8VzXwhKKcFed9',
    detailsUrl: 'https://www.facebook.com/events/175524118886254/',
  },
  {
    id: 'psycholog-przytulamy-listopad-1',
    title: 'Przytulamy Mamy - jak zaopiekować się sobą w macierzyństwie',
    description: 'Często zapominamy, że wraz z narodzinami dziecka rodzi się jeszcze jeden zupełnie nowy człowiek- Jego Mama. Dla kobiety to zmiana dotychczasowego życia o 180 stopni. Nowa rzeczywistość jest piękna- ale bywa też zaskakująca, niezrozumiała, pełna wyzwań i czasami trudna. Młoda mama słyszy wtedy dobre rady: "zadbaj o siebie". Ale jak to zrobić po nieprzespanej nocy, gdy w brzuchu burczy, w domu bałagan, w tle płacze niemowlę, a ciepła kawa to miłe wspomnienie sprzed kilku miesięcy? O tym właśnie porozmawiamy w gronie Mam. O blaskach i cieniach współczesnego macierzyństwa i związanych z nim emocjach - dlaczego wszystkie są ważne, potrzebne i mamy do nich prawo. O odnajdywaniu swoich potrzeb, praktykowaniu życzliwości wobec siebie, uważności pozwalajacej znaleźć wytchnienie w malych rzeczach i o tym, co każda z nas może zrobić dla siebie, by zaopiekować się sobą na tym nowym etapie życia.',
    eventDate: new Date('Tue, 21 Nov 2023 16:00:00 GMT'),
    duration: 2,
    trainer: 'Alicja Formaniewicz - Szyndler',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/przytulamy-mamy.jpg',
    registrationUrl: 'https://forms.gle/he1KVxKHggHC165R6',
    detailsUrl: 'https://www.facebook.com/events/1296252367751215/',
  },
  {
    id: 'makrama-listopad-1',
    title: 'Makrama',
    description: 'Podczas 2-godzinnych warsztatów poznasz podstawowe sploty oraz stworzysz makramowe zawieszki do doniczek.',
    eventDate: new Date('Fri, 24 Nov 2023 15:00:00 GMT'),
    duration: 2,
    trainer: 'Monika Gorajewska - Czmoch',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/makrama.jpg',
    registrationUrl: 'https://forms.gle/qryYqvMHwghzJ6it5',
    detailsUrl: 'https://www.facebook.com/events/2261003167430804',
  },
  {
    id: 'dieta-listopad-1',
    title: 'Rozszerzenie diety niemowlaka',
    description: 'Warsztat  dotyczący odżywiania kobiet po porodzie oraz rozszerzenie diety niemowlaka.  W swobodnej atmosferze porozmawiamy o początkach rozszerzania diety, o tym jak prawidłowo bilansować posiłki uwzględniając sezonowość produktów a także przedstawione zostaną przykładowe jadłospisy.',
    eventDate: new Date('Tue, 28 Nov 2023 15:00:00 GMT'),
    duration: 2,
    trainer: 'Joanna Wójcik',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/dieta-niemowlaka.jpg',
    registrationUrl: 'https://forms.gle/hnAJwXt3oCirEQKNA',
    detailsUrl: 'https://www.facebook.com/events/269727792728751',
  },
  {
    id: 'male-dzwieki-listopad-1',
    title: 'Małe Dźwięki',
    description: 'Zajęcia umuzykalniające dla dzieci od 4. do 12 miesiąca życia. Zajęcia prowadzone są wykorzystując m.in. teorię edukacji muzycznej prof. Edwina E. Gordona. Dzięki nim, stymulujemy układ nerwowy, kształtujemy koordynację słuchowo-ruchową a także pozwalamy naszym maluchom na kontakty z rówieśnikami.',
    eventDate: new Date('Thu, 09 Nov 2023 11:30:00 GMT'),
    duration: 0.75,
    trainer: 'Joanna Słowińska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/male-dzwieki.jpg',
    registrationUrl: 'https://forms.gle/2tXBiNBNDH8pvFtE9',
    detailsUrl: 'https://www.facebook.com/events/6584466771664635',
  },
  {
    id: 'male-dzwieki-listopad-2',
    title: 'Małe Dźwięki',
    description: 'Zajęcia umuzykalniające dla dzieci od 4. do 12 miesiąca życia. Zajęcia prowadzone są wykorzystując m.in. teorię edukacji muzycznej prof. Edwina E. Gordona. Dzięki nim, stymulujemy układ nerwowy, kształtujemy koordynację słuchowo-ruchową a także pozwalamy naszym maluchom na kontakty z rówieśnikami.',
    eventDate: new Date('Thu, 23 Nov 2023 11:30:00 GMT'),
    duration: 0.75,
    trainer: 'Joanna Słowińska',
    place: 'Świetlica wiejska w Dąbrowie',
    image: '/events/male-dzwieki.jpg',
    registrationUrl: 'https://forms.gle/EH5DRrTXWCSDpcZr8',
    detailsUrl: 'https://www.facebook.com/events/1479769299249971/',
  },
  {
    id: 'zaprogramuj-swoj-zwiazek-grudzien-kobieta',
    title: 'Zaprogramuj swój związek - o relacji z kobietą',
    description: 'Zapraszamy na cykl spotkań o relacji w związku, skierowanym do mężczyzn. Dowiesz się na nim o budowaniu relacji i występujących w niej trudnych momentach. Po spotkaniu będziesz wiedział jak je nazwać i jak na nie reagować. Równe i sprawiedliwe relacje w związku są niezwykle ważne, a ich budowanie wymaga stałego treningu i pracy. Chcemy Ciebie w tym wesprzeć, dlatego zapraszamy na warsztaty.',
    eventDate: new Date('Mon, 04 Dec 2023 17:00:00 GMT'),
    duration: 2,
    trainer: 'Tomasz Chełek',
    place: 'Online',
    image: '/events/zaprojektuj-zwiazek.jpg',
    registrationUrl: 'https://forms.gle/KWhjCG4FtyhWSKSb7',
    detailsUrl: 'https://www.facebook.com/events/714556650293394/',
  },
  {
    id: 'cwiczenia-ruchowe-grudzien-1',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Prowadzone zajęcia pozwolą na odbudowę funkcji po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji), koordynacji nerwowo-mięśniowej oraz postawy ciała. Przygotowują młode mamy do powrotu do sportu. Jest to świetna okazja na spędzenie czasu z dzieckiem, budowanie relacji społecznych oraz pierwsze interakcje maluszków z rówieśnikami.',
    eventDate: new Date('Wed, 06 Dec 2023 10:00:00 GMT'),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
    registrationUrl: 'https://forms.gle/iWm8fycvokXNNY8XA',
    detailsUrl: 'https://www.facebook.com/events/1281489235974341/1281489245974340/',
  },
  {
    id: 'male-dzwieki-grudzien-1',
    title: 'Małe Dźwięki',
    description: 'Zajęcia umuzykalniające dla dzieci od 4. do 12 miesiąca życia. Zajęcia prowadzone są wykorzystując m.in. teorię edukacji muzycznej prof. Edwina E. Gordona. Dzięki nim, stymulujemy układ nerwowy, kształtujemy koordynację słuchowo-ruchową a także pozwalamy naszym maluchom na kontakty z rówieśnikami.',
    eventDate: new Date('Thu, 07 Dec 2023 11:30:00 GMT'),
    duration: 0.75,
    trainer: 'Joanna Słowińska',
    place: 'Świetlica w Dąbrowie',
    image: '/events/male-dzwieki.jpg',
    registrationUrl: 'https://forms.gle/D6TryqjosJdyyKK3A',
    detailsUrl: 'https://www.facebook.com/events/870272437925394/',
  },
  {
    id: 'zaprojektuj-prezent-canva-grudzien-1',
    title: 'Zaprojektuj swój Bożonarodzeniowy prezent w Canva',
    description: 'Warsztat składać będzie się z krótkiej prezentacji narzędzia Canva, jego możliwości i popularnych zastosowań. Omówione zostaną proste funkcje, które uczestnicy będą wykorzystywać podczas warsztatów. W części praktycznej instruktorka przeprowadzi krok po kroku uczestników przez proces projektowania prezentu świątecznego w Canva.',
    eventDate: new Date('Fri, 08 Dec 2023 16:00:00 GMT'),
    duration: 2,
    trainer: 'Anna Gavrylina',
    place: 'Świetlica w Dąbrowie',
    image: '/events/canva-prezent.png',
    registrationUrl: 'https://forms.gle/4LgRFvCvsSArWLJb7',
    detailsUrl: 'https://www.facebook.com/events/884268606269900',
  },
  {
    id: 'zaprogramuj-swoj-zwiazek-grudzien-mezczyzna',
    title: 'Zaprogramuj swój związek - o relacji z mężczyzną',
    description: 'Zapraszamy na cykl spotkań o relacji w związku, skierowanym do kobiet. Dowiesz się na nim o budowaniu relacji i występujących w niej trudnych momentach. Po spotkaniu będziesz wiedziała jak je nazwać i jak na nie reagować. Równe i sprawiedliwe relacje w związku są niezwykle ważne, a ich budowanie wymaga stałego treningu i pracy. Chcemy Ciebie w tym wesprzeć, dlatego zapraszamy na warsztaty.',
    eventDate: new Date('Mon, 11 Dec 2023 09:00:00 GMT'),
    duration: 2,
    trainer: 'Tomasz Chełek',
    place: 'Świetlica w Dąbrowie',
    image: '/events/zaprojektuj-zwiazek.jpg',
    registrationUrl: 'https://forms.gle/DuQNm9vMKMSiJVmUA',
    detailsUrl: 'https://www.facebook.com/events/337001802419072',
  },
  {
    id: 'doradztwo-prawne-grudzien',
    title: 'Doradztwo prawne (prawo rodzinne)',
    description: 'Spotkanie dla Mam z adwokatem dotyczące prawa rodzinnego. Podczas spotkania będzie możliwość poruszenia tematów dotyczących m.in. ustalania warunków rozstania/rozwodu, alimentów, kontaktów z dzieckiem i innych tematów z obszaru prawa rodzinnego, które mogą zastanawiać Mamy - będzie to dobry wstęp do tego, by dowiedzieć się "co dalej?" i jakie są mozliwosci w różnego rodzaju trudnych sytuacjach.',
    eventDate: new Date('Tue, 12 Dec 2023 17:00:00 GMT'),
    duration: 1,
    trainer: 'Adam Szyndler',
    place: 'Świetlica w Dąbrowie',
    image: '/events/prawo-rodzinne.jpg',
    registrationUrl: 'https://forms.gle/RRejMkZaQuDK5vhB8',
    detailsUrl: 'https://www.facebook.com/events/712367353873160/',
  },
  {
    id: 'cwiczenia-ruchowe-grudzien-2',
    title: 'Ćwiczenia ruchowe Aktywna Mama',
    description: 'Prowadzone zajęcia pozwolą na odbudowę funkcji po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji), koordynacji nerwowo-mięśniowej oraz postawy ciała. Przygotowują młode mamy do powrotu do sportu. Jest to świetna okazja na spędzenie czasu z dzieckiem, budowanie relacji społecznych oraz pierwsze interakcje maluszków z rówieśnikami.',
    eventDate: new Date('Wed, 13 Dec 2023 10:00:00 GMT'),
    duration: 0.833,
    trainer: 'Aneta Biadun',
    place: 'Świetlica w Dąbrowie',
    image: '/events/aktywna-mama-cwiczenia.jpg',
    registrationUrl: 'https://forms.gle/nQJnXqCzfPwHnDi58',
    detailsUrl: '',
  },
  {
    id: 'fizjoterapeuta-grudzien-1',
    title: 'Fizjoterapeuta dziecięcy',
    description: 'Warsztat składający się z części teoretycznej i praktycznej. Omówione zostaną etapy rozwoju niemowląt, wzmożone i obniżone napięcie mięśniowe, kontakt wzrokowy, pielęgnacja. W części praktycznej pokazane zostaną ćwiczenia wspierające rozwój.',
    eventDate: new Date('Thu, 14 Dec 2023 11:30:00 GMT'),
    duration: 2.5,
    trainer: 'Martyna Jóźwiak',
    place: 'Świetlica w Dąbrowie',
    image: '/events/fizjoterapeuta.jpg',
    registrationUrl: 'https://forms.gle/WzigmYEkGpfwDqJBA',
    detailsUrl: 'https://www.facebook.com/events/868349311483683/',
  },
  {
    id: 'spotkanie-mam-styczen',
    title: 'Spotkanie Mam',
    description: 'Witamy w Nowym Roku! Zapraszamy Was na wyjątkowe spotkanie, które odbędzie się w ramach inicjatywy "Aktywna Mama" dedykowanej wszystkim Paniom z maluszkami z Gminy Dopiewo. Chcemy, aby to wydarzenie było nie tylko okazją do integracji, ale także do dzielenia się naszymi talentami i pasjami. Dlatego też zachęcamy Was do podzielenia się waszymi talentami cukierniczymi z nami ;) Jeśli macie ochotę i czas, przygotujcie swoje ulubione ciasto, które umili nam wspólny czas. Inicjatywa "Aktywna Mama" powstała z myślą o Was, zainicjowana przez nas. Wiemy, że macie wiele do zaoferowania - nie tylko jako opiekunki, ale również jako kobiety pełne pasji i talentów. Dlatego też zachęcamy Was, drogie Mamy, abyście mogły coś dać od siebie, byśmy wszyscy mogli skorzystać. Spotkanie to nie tylko okazja do rozmów, ale także do budowania wspólnoty, dzielenia się doświadczeniami i wspierania się nawzajem. Razem możemy stworzyć miejsce, gdzie każda Mama poczuje się doceniona i zrozumiana. Bądźcie z nami na tym wyjątkowym spotkaniu, abyśmy razem mogły rozpocząć nowy rok pełne energii, inspiracji i wzajemnego wsparcia.',
    eventDate: new Date('Wed, 17 Jan 2024 09:00:00 GMT'),
    duration: 1.5,
    trainer: 'Aktywne Mamy',
    place: 'Świetlica w Dąbrowie',
    image: '/events/coffee.jpg',
    registrationUrl: 'https://forms.gle/MDqixA5LerodMs8r9',
    detailsUrl: 'https://facebook.com/events/s/spotkanie-mam-luzne-rozmowy/2326668167519645/',
  },
  {
    id: 'moja-pierwsza-strona-styczen-1',
    title: 'Moja pierwsza strona internetowa. 1/3 spotkań',
    description: 'Celem warsztatów jest pokazanie możliwości tworzenia prostych stron internetowych bez pisania kodu z wykorzystaniem systemu zarządzania treścią Wordpress. Umiejętności zdobyte podczas warsztatów pozwolą na budowanie stron www zarówno do celów prywatnych, jak i zawodowych. W dzisiejszych czasach Internet jest niezbędnym narzędziem w codziennym życiu, a strony internetowe są nadal podstawowym narzędziem zaistnienia w Sieci. Warsztat składa się z cyklu 3 spotkań. W ramach całego cyklu będziesz budować bloga o swoich zainteresowaniach. Po zakończeniu cyklu otrzymasz certyfikat ukończenia kursu podstawowego zarządzania stronami zbudowanymi na systemie Wordpress.',
    eventDate: new Date('Fri, 19 Jan 2024 16:00:00 GMT'),
    duration: 2.5,
    trainer: 'Mateusz Jabłoński',
    place: 'Świetlica w Dąbrowie',
    image: '/events/wp.png',
    registrationUrl: 'https://forms.gle/vLu9Z2C8JjT2uSgQ8',
    detailsUrl: 'https://facebook.com/events/s/moja-pierwsza-strona-interneto/1051074996121399/',
  },
  {
    id: 'czat-GPT-styczen',
    title: 'Wykorzystanie Sztucznej Inteligencji i Czatu GPT w pracy i codziennym życiu: Kreatywne podejście dla Mam',
    description: 'Szkolenie "Wykorzystanie Sztucznej Inteligencji i Czatu GPT w Pracy i Codziennym Życiu: Kreatywne Podejścia dla Mam" to fascynująca podróż przez świat nowoczesnych technologii, dedykowana mamom, które chcą zwiększyć swoją efektywność w pracy i umiejętnie zarządzać codziennym życiem rodzinny. W trakcie szkolenia uczestniczki zdobędą wiedzę na temat podstaw Sztucznej Inteligencji i Czatu GPT, a następnie skoncentrują się na praktycznych zastosowaniach. Dowiedzą się, jak wykorzystać te technologie do szybkiego pisania tekstów, tworzenia przepisów kulinarnych, organizacji harmonogramów rodzinnych, a nawet do rozwijania kreatywności i rozrywki w domu. Szkolenie zachęca do lekkiego podejścia do nowoczesnych narzędzi, umożliwiając mamom odkrywanie nowych, innowacyjnych sposobów ułatwiania sobie życia zarówno w pracy, jak i w domu.',
    eventDate: new Date('Wed, 24 Jan 2024 09:00:00 GMT'),
    duration: 1.666,
    trainer: 'Anna Gavrylina',
    place: 'Świetlica w Dąbrowie',
    image: '/events/chat.jpg',
    registrationUrl: 'https://forms.gle/bwqucnt4pKWoivA88',
    detailsUrl: 'https://facebook.com/events/s/szkolenie-z-chatgpt/306976245678546/',
  },
  {
    id: 'moja-pierwsza-strona-styczen-2',
    title: 'Moja pierwsza strona internetowa. 2/3 spotkań',
    description: 'Celem warsztatów jest pokazanie możliwości tworzenia prostych stron internetowych bez pisania kodu z wykorzystaniem systemu zarządzania treścią Wordpress. Umiejętności zdobyte podczas warsztatów pozwolą na budowanie stron www zarówno do celów prywatnych, jak i zawodowych. W dzisiejszych czasach Internet jest niezbędnym narzędziem w codziennym życiu, a strony internetowe są nadal podstawowym narzędziem zaistnienia w Sieci. Warsztat składa się z cyklu 3 spotkań. W ramach całego cyklu będziesz budować bloga o swoich zainteresowaniach. Po zakończeniu cyklu otrzymasz certyfikat ukończenia kursu podstawowego zarządzania stronami zbudowanymi na systemie Wordpress.',
    eventDate: new Date('Fri, 26 Jan 2024 16:00:00 GMT'),
    duration: 2.5,
    trainer: 'Mateusz Jabłoński',
    place: 'Świetlica w Dąbrowie',
    image: '/events/wp.png',
    registrationUrl: 'https://forms.gle/xooLKYZaheAkHmZT8',
    detailsUrl: 'https://facebook.com/events/s/moja-pierwsza-strona-interneto/414015517627480/',
  },
  {
    id: 'psychoterapeuta-styczen',
    title: '"Zaprogramuj swój związek - o relacji z mężczyzną" (warsztat dla kobiet) kontynuacja"',
    description: 'Zapraszamy na cykl spotkań o relacji w związku, skierowanym do kobiet. Dowiesz się na nim o budowaniu relacji i występujących w niej trudnych momentach. Po spotkaniu będziesz wiedziała jak je nazwać i jak na nie reagować. Równe i sprawiedliwe relacje w związku są niezwykle ważne, a ich budowanie wymaga stałego treningu i pracy. Chcemy Ciebie w tym wesprzeć, dlatego zapraszamy na warsztaty.',
    eventDate: new Date('Mon, 29 Jan 2024 09:00:00 GMT'),
    duration: 2,
    trainer: 'Tomasz Chełek',
    place: 'Świetlica w Dąbrowie',
    image: '/events/relations.jpg',
    registrationUrl: 'https://forms.gle/2AQAfZ82JxVsgkup7',
    detailsUrl: 'https://facebook.com/events/s/zaprogramuj-swoj-zwiazek-o-rel/360700263255160/',
  },
  {
    id: 'make-up-Patrycja-styczen',
    title: 'Makijaż dzienny - ukrywajacy oznaki zmęczenia ;)',
    description: 'Hej nazywam się Patrycja Przybylska z wykształcenia jestem kosmetologiem a od 9 lat zajmuje się głównie Makijażem. Zapraszam was serdecznie na warsztaty z makijażu dziennego , podczas którego postaram wam się przekazać jak w łatwy i szybki sposób wykonać makijaż który ukryje nieprzespane noce młodych mam ❤️',
    eventDate: new Date('Wed, 31 Jan 2024 09:00:00 GMT'),
    duration: 1.75,
    trainer: 'Patrycja Przybylska',
    place: 'Świetlica w Dąbrowie',
    image: '/events/makeup.jpg',
    registrationUrl: 'https://forms.gle/jSgAKHPs7yzkdNHQ7',
    detailsUrl: 'https://facebook.com/events/s/makijaz-dzienny-ktory-ukryje-o/748338683501215/',
  },
  {
    id: 'moja-pierwsza-strona-luty-3',
    title: 'Moja pierwsza strona internetowa. 3/3 spotkań',
    description: 'Celem warsztatów jest pokazanie możliwości tworzenia prostych stron internetowych bez pisania kodu z wykorzystaniem systemu zarządzania treścią Wordpress. Umiejętności zdobyte podczas warsztatów pozwolą na budowanie stron www zarówno do celów prywatnych, jak i zawodowych. W dzisiejszych czasach Internet jest niezbędnym narzędziem w codziennym życiu, a strony internetowe są nadal podstawowym narzędziem zaistnienia w Sieci. Warsztat składa się z cyklu 3 spotkań. W ramach całego cyklu będziesz budować bloga o swoich zainteresowaniach. Po zakończeniu cyklu otrzymasz certyfikat ukończenia kursu podstawowego zarządzania stronami zbudowanymi na systemie Wordpress.',
    eventDate: new Date('Fri, 02 Feb 2024 16:00:00 GMT'),
    duration: 2.5,
    trainer: 'Mateusz Jabłoński',
    place: 'Świetlica w Dąbrowie',
    image: '/events/wp.png',
    registrationUrl: 'https://forms.gle/1uKuWtRR5FWgZyrC6',
    detailsUrl: 'https://www.facebook.com/events/1383764935567146/',
  },
  {
      id: 'fizjoterapeuta-dzieci-luty-1',
      title: 'Fizjoterapeuta dziecięcy 2-6 m.ż.',
      description: 'Zapraszamy na inspirujące warsztaty, podczas którego będziemy miały przyjemność gościć Aleksandrę Tabaczyńską, doświadczoną terapeutkę dziecięcą specjalizującą się w fizjoterapii pediatrycznej w koncepcji NDT-Bobath.',
      eventDate: new Date('Tue, 06 Feb 2024 9:00:00 GMT'),
      duration: 1.5,
      trainer: 'Aleksandra Tabaczyńska BabySteps',
      place: 'Świetlica w Dąbrowie',
      image: '/events/fizjo3m.jpg',
      registrationUrl: 'https://forms.gle/HcEpWtCgnfaY8zrb7',
      detailsUrl: 'https://www.facebook.com/events/7197175106988238/',
    },
    {
      id: 'trening-luty-1',
      title: 'Ćwiczenia ruchowe Aktywna Mama',
      description: 'Zajęcia te to trening medyczny dla MAM po okresie połogu w towarzystwie dzieci do 1.roku życia. Ten trening to przestrzeń na: odbudowę funkcji ciała po ciąży i porodzie, poprawę świadomości ciała, kontroli ruchu (stabilizacji) i koordynacji nerwowo-mięśniową oraz postawę ciała, przygotowanie organizmu do powrotu do sportu, okazję do spędzenia czasu z dzieckiem i zacieśnienia więzi emocjonalnej, budowanie relacji społecznej i zwiększenie poczucia wspólnoty z innymi mamami, pierwsze interakcje dzieci z rówieśnikami.',
      eventDate: new Date('Wed, 07 Feb 2024 10:00:00 GMT'),
      duration: 0.833,
      trainer: 'Aneta Biadun',
      place: 'Świetlica w Dąbrowie',
      image: 'events/aktywna-mama-cwiczenia.jpg',
      registrationUrl: 'https://forms.gle/ACLMxSHd2MD2K3KK6',
      detailsUrl: 'https://www.facebook.com/events/3558949637727280/',
    },
    {
      id: 'kawa-z-aktywnymi-mamami-luty-1',
      title: 'Kawa z Aktywnymi Mamami',
      description: 'Zapraszamy Was na wyjątkowe spotkanie, które odbędzie się w ramach inicjatywy "Aktywna Mama", dedykowanej wszystkim Paniom z maluszkami z Gminy Dopiewo. Chcemy, aby to wydarzenie nie tylko integrowało nas, ale także umożliwiło dzielenie się naszymi talentami i pasjami. Dlatego też serdecznie zachęcamy do podzielenia się waszymi umiejętnościami cukierniczymi z nami ;) Jeśli macie ochotę i czas, przygotujcie swoje ulubione ciasto, które umili nam wspólny czas. Inicjatywa "Aktywna Mama" powstała z myślą o Was i została zainicjowana przez nas. Wiemy, że macie wiele do zaoferowania - nie tylko jako opiekunki, ale również jako kobiety pełne pasji i talentów. Dlatego też zachęcamy Was, drogie Mamy, abyście mogły podzielić się czymś od siebie, byśmy wszyscy mogli skorzystać. Spotkanie to nie tylko okazja do rozmów, ale także do budowania wspólnoty, dzielenia się doświadczeniami i wzajemnego wsparcia. Razem możemy stworzyć miejsce, gdzie każda Mama poczuje się doceniona i zrozumiana. Bądźcie z nami na tym wyjątkowym spotkaniu, abyśmy razem mogły rozpocząć nowy rok pełne energii, inspiracji i wzajemnego wsparcia.',
      eventDate: new Date('Fri, 09 Feb 2024 16:00:00 GMT'),
      duration: 2.5,
      trainer: 'Aktywne Mamy',
      place: 'Świetlica w Dąbrowie',
      image: '/events/coffee.jpg',
      registrationUrl: 'https://forms.gle/ckVZM9pBhirurehE8',
      detailsUrl: 'https://www.facebook.com/events/1112970423470679/',
    },
    {
      id: 'diagnostyka-luty',
      title: 'Samsiezbadaj - diagnostyka w domu',
      description: 'Prezentacja Martyny Żyłki, która przybliży nam różnorodne testy diagnostyczne, umożliwiające kontrolę zdrowia dzieci w domowym zaciszu.',
      eventDate: new Date('Wed, 14 Feb 2024 9:00:00 GMT'),
      duration: 1,
      trainer: 'Martyna Żyłka',
      place: 'Świetlica w Dąbrowie',
      image: '/events/testdiagno.jpg',
      registrationUrl: 'https://forms.gle/aLdSTTTuHWwg8VuU7',
      detailsUrl: 'https://www.facebook.com/events/1123518948559667/',
    },
    {
      id: 'neurologopeda-luty',
      title: 'Wykład z neurologopedą dla mam -"Co mogę zrobić,aby moje dziecko pięknie mówiło? Uwarunkowania rozwoju mowy u dzieci od 0 do 3 roju życia."',
      description: 'Wykład z neurologopedą dla mam -"Co mogę zrobić,aby moje dziecko pięknie mówiło? Uwarunkowania rozwoju mowy u dzieci od 0 do 3 roju życia.". Prowadząca:DR MAGDALENA MAGIERSKA-KRZYSZTOŃ, Klinika Neurorozwoju Medicari, Plewiska. Doświadczony logopeda oraz surdologopeda',
      eventDate: new Date('Wed, 16 Feb 2024 15:30:00 GMT'),
      duration: 1,
      trainer: 'dr Magdalena Magierska-Krzysztoń, Klinika Neurorozwoju Medicari, Plewiska',
      place: 'Świetlica w Dąbrowie',
      image: '/events/mowa.jpg',
      registrationUrl: 'https://forms.gle/fHu94xYEbAoz3pH78',
      detailsUrl: 'https://www.facebook.com/events/1080671536356887/',
    },
    {
      id: 'fizjoterapeuta-dzieci-luty-2',
      title: 'Fizjoterapeuta dziecięcy 7-12 m.ż.',
      description: 'Zapraszamy na inspirujące warsztaty, podczas którego będziemy miały przyjemność gościć Aleksandrę Tabaczyńską, doświadczoną terapeutkę dziecięcą specjalizującą się w fizjoterapii pediatrycznej w koncepcji NDT-Bobath.',
      eventDate: new Date('Tue, 20 Feb 2024 9:00:00 GMT'),
      duration: 1.5,
      trainer: 'Aleksandra Tabaczyńska BabySteps',
      place: 'Świetlica w Dąbrowie',
      image: '/events/fizjo12m.jpg',
      registrationUrl: 'https://forms.gle/mzAADigaGNtggL7BA',
      detailsUrl: 'https://www.facebook.com/events/936315611345756/',
    },
    {
      id: 'rekruter-luty-cz.1',
      title: 'Mama na rynku pracy. Jak przyciągnąć uwagę rekrutera? Cz.1.',
      description: 'Inspirujący wykład Pauliny Gąsiorowskiej (doświadczony HR Manager z 14-letnim stażem w obszarze zarządzania zasobami ludzkimi) o roli mam na rynku pracy, wyzwaniach i możliwościach. Praktyczne wskazówki dotyczące tworzenia efektywnego CV pod kątem konkretnych ofert pracy. Analiza perspektywy rekrutacyjnej - jak przygotować się do rozmowy rekrutacyjnej, zwracając uwagę na oczekiwania rekrutera. Praktyczne scenariusze i techniki radzenia sobie z trudnymi pytaniami podczas rozmów kwalifikacyjnych.',
      eventDate: new Date('Fri, 23 Feb 2024 16:30:00 GMT'),
      duration: 2,
      trainer: 'Paulina Gąsiorowska',
      place: 'Świetlica w Dąbrowie',
      image: '/events/mamawpracy.jpg',
      registrationUrl: 'https://forms.gle/jNcEawyvgr65XiTf6',
      detailsUrl: 'https://www.facebook.com/events/1411066366462061/',
    },
    {
      id: 'psycholog-luty-1',
      title: 'Warsztaty z psycholożką, psychoterapeutką i Aktywną Mamą :) "Techniki relaksacyjne i radzenie sobie ze stresem - apteczka pierwszej pomocy psychologicznej dla mam".',
      description: '',
      eventDate: new Date('Tue, 27 Feb 2024 16:30:00 GMT'),
      duration: 1.5,
      trainer: 'Alicja Formaniewicz-Szyndler, Klinika Neurorozwoju Medicari, Plewiska.',
      place: 'Świetlica w Dąbrowie',
      image: '/events/relaks.jpg',
      registrationUrl: 'https://forms.gle/RV1K4ndfYZSnfyETA',
      detailsUrl: 'https://www.facebook.com/events/4117425528489406/',
    },
    // {
    //   id: 'fitoterapia-dzieci-MARZEC',
    //   title: 'Bezpieczna fitoterapia i suplementacja u dzieci.',
    //   description: 'W trakcie wykładu poruszone zostaną najważniejszy aspekty związane z bezpieczeństwem i skutecznością stosowania leczniczych preparatów roślinnych u dzieci w częstych dolegliwościach (m.in. infekcjach górnych dróg oddechowych i schorzeniach przewodu pokarmowego), w tym: dobór preparatów (na co zwracać uwagę podczas zakupu – czym różni się lek od suplementu diety); sposób przygotowywania/stosowania/dawkowania/łączenia z lekami. Przedstawione zostaną ponadto popularne „domowe” metod leczenia najmłodszych – czy zawsze są skuteczne i bezpieczne? Jak rozsądnie z nich korzystać i wspierać naturalne funkcje obronne organizmu dziecka? Odpowiemy także na pytanie na czym polega racjonalna suplementacja u najmłodszych.',
    //   eventDate: new Date('Wed, 06 Mar 2024 9:00:00 GMT'),
    //   duration: 1.5,
    //   trainer: 'Paulina Znajdek-Awiżeń',
    //   place: 'Świetlica w Dąbrowie',
    //   image: '',
    //   registrationUrl: 'https://forms.gle/fNzZUxngZZKfUNjx8',
    //   detailsUrl: ,
    // },
    //{
    //   id: 'joga-MARZEC',
    //   title: '"Poranek z jogą"',
    //   description: '',
    //   eventDate: new Date('Wed, 20 Mar 2024 9:30:00 GMT'),
    //   duration: 1,
    //   trainer: 'Yogalena na macie',
    //   place: 'Świetlica w Dąbrowie',
    //   image: '',
    //   registrationUrl: 'https://forms.gle/ywFPKjtGU778EXUx5',
    //   detailsUrl: ,
    // },
];

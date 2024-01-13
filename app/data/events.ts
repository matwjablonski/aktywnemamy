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
    id: 'moja-pierwsza-strona-styczen-1',
    title: 'Moja pierwsza strona 1/3 spotkań',
    description: 'Cykl wrsztatów składających się z części teoretycznej i praktycznej, podczas których uczestnicy nabędą wiedzę do zakodowania swojej pierwszej prostej strony internetowej na bazie WordPress. ',
    eventDate: new Date('Fri, 19 Jan 2023 16:00:00 GMT'),
    duration: 2.5,
    trainer: 'Mateusz Jabłoński',
    place: 'Świetlica w Dąbrowie',
    image: '/events/it.jpg',
    registrationUrl: '',
    detailsUrl: '',
  },
]

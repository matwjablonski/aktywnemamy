export type Review = {
  name: string;
  text: string;
  rate: 1 | 2 | 3 | 4 | 5;
  date: string;
}

export const reviews: Review[] = [
  {
     name: 'Monika',
     text: 'Wspaniała inicjatywa! Zdecydowanie takie akcje wyróżniają naszą gminę na tle innych. Warto żeby takie warsztaty były kontynuowane w kolejnych latach😊',
     rate: 5,
     date: '2023-12-10 11:59:07',
  },
  {
    name: 'Jolanta',
    text: 'Doceniam różnorodność tematòw istotnych dla młodych mam oraz bardzo dobrze prowadzone zajęcia fizyczne! Atmosfera na spotkaniach była przyjazna, luźna i można było poczuć kobiecą solidarność w tym pięknym, ale jednocześnie trudnym czasie opieki nad kilkumiesięcznym maleństwem. Poza tym miejsce warsztatòw - świetlica w Dąbrowie - świetnie nadaje się do tego typu inicjatyw, jest dostosowana do potrzeb mamy z dzieckiem. ',
    rate: 5,
    date: '2023-12-10 14:56:47',
  },
  {
    name: 'Aneta',
    text: 'Duża różnorodność poruszonych tematów na różnych warsztatach czyni tą inicjatywę niezwykle wartościową.',
    rate: 5,
    date: '2023-12-10 15:44:50',
  },
  {
    name: 'Jagoda',
    text: 'Aneta posiada ogrom wiedzy. W skuteczny sposób ratuje plecy młodych mam w przemiłej atmosferze.',
    rate: 5,
    date: '2023-12-10 15:51:11',
  },
  {
    name: 'Lucyna',
    text: 'Było fantastycznie! Fajnie byłoby, gdyby gmina dofinansowała takie działania w dłuższej perspektywie. Frekwencja na zajęciach pokazała, że taki projekt jest potrzebny mieszkankom naszej gminy. Można było poznać wiele ciekawych mam. Moja córka zyskała nowe znajomości, ma teraz dużo nowych kolegów i koleżanek! Dziękuję Aktywnym Mamom za możliwość uczestnictwa w zajęciach. Trzymam kciuki, aby można było kontynuować takie działanie, powodzenia!',
    rate: 5,
    date: '2023-12-10 16:15:01',
  },
  {
    name: 'Karolina',
    text: 'Było super ! Chce się więcej! Bardzo ważne i przydatne informacje.',
    rate: 5,
    date: '2023-12-10 17:01:34',
  },
  {
    name: 'Alicja',
    text: 'Fantastyczna inicjatywa, mnóstwo ciekawych warsztatów i nowej wiedzy, a także motywacja do wyjścia z domu z bobasem i spotkania innych mam, podzielenia się doświadczeniami. Czekamy na więcej!',
    rate: 5,
    date: '2023-12-10 17:27:50',
  },
  {
    name: 'Edyta',
    text: 'Świetne zajęcia dla maluszków i integracjai mam z gminy, czekam na kolejne. Uważam, że są potrzebne!!!',
    rate: 5,
    date: '2023-12-10 19:07:28',
  },
  {
    name: 'Żaneta',
    text: 'Wspaniała inicjatywa, niezwykle potrzebna młodym mamom i ich pociechom ;) Tematyka zajęć, ich różnorodność, prowadzący, jak również organizacja na najwyższym poziomie ;)',
    rate: 5,
    date: '2023-12-10 20:04:59',
  },
  {
    name: 'Zuzanna Marciniak-Mula',
    text: 'Super inicjatywa, ciekawe tematy każda mama mogła znaleźć coś dla siebie',
    rate: 5,
    date: '2023-12-10 20:29:22',
  },
  {
    name: 'Zuzanna',
    text: 'Super inicjatywa! Z córką spędziłyśmy fajnie czas i poznałyśmy nowych znajomych. Zajęcia umilały nam wolne dni i zapewniały rozrywkę. Super, że miałyśmy okazję uczestniczyć w różnych warsztatach ;)',
    rate: 5,
    date: '2023-12-10 23:48:48',
  },
  {
    name: 'Agnieszka',
    text: 'Cudowna inicjatywa wspierająca nas kobiety i niejednokrotnie poruszająca trudne tematy. To ogromna pomoc i wsparcie dla nas. Miło spędzony czas i spora dawka wiedzy. Tu poza dużą aglomeracją bardzo potrzebne są tego typu wydarzenia, jednoczą nas jako społeczność i nie pozostawiają na uboczy.',
    rate: 5,
    date: '2023-12-11 08:48:53',
  },
  {
    name: 'Karolina',
    text: 'Rewelacyjny pomysł, wspaniała inicjatywa, oby w przyszłości każda mama mogła skorzystać z takich zajęć i warsztatów.',
    rate: 5,
    date: '2023-12-12 09:36:10',
  },
  {
    name: 'Anna',
    text: 'Jestem bardzo zadowolona z udziału w zajęciach ""Aktywne Mamy"". To fantastyczna inicjatywa, która umożliwia mamom spędzenie aktywnego czasu z dzieckiem, jednocześnie zdobywając cenne informacje i uczestnicząc w fascynujących wykładach. Jednym z najważniejszych atutów tych spotkań jest możliwość wzięcia dziecka ze sobą na zajęcia. To niewątpliwie ułatwia udział w wydarzeniach, dając nam, mamom, swobodę i komfort. Wykłady są niezwykle ciekawe, a przedstawiane informacje są nie tylko pomocne, ale również inspirujące. Dużo przydatnych wskazówek i porad, które można zastosować w codziennym życiu rodzinnym. To dla mnie nie tylko okazja do aktywności fizycznej, ale także do poszerzania wiedzy na temat macierzyństwa i wychowywania dzieci. Dziękuję organizatorom za stworzenie tego wyjątkowego miejsca, gdzie jako mama mogę rozwijać się zarówno fizycznie, jak i intelektualnie, czerpiąc radość z czasu spędzonego z dzieckiem. Polecam "Aktywne Mamy" z całego serca!',
    rate: 5,
    date: '2023-12-12 09:39:26',
  },
  {
    name: 'Jarosław',
    text: 'Bardzo polecam zajęcia dla ojców dotyczące budowania dobrej relacji partnerskiej w nowej roli rodzica. Dzięki nim lepiej rozumiem moją partnerkę i czuję, że nasza wspólna przygoda jako rodzice staje się jeszcze bardziej spójna. Warto wziąć udział!',
    rate: 5,
    date: '2023-12-12 09:42:51',
  },
  {
    name: 'Marta',
    text: 'Wspaniała inicjatywa. Miło jest się spotkać z innymi mamami i choć na trochę oderwać się od codziennych obowiązków. Świetnie dobrana tematyka spotkań. No i cudowna atmosfera. Oby więcej spotkań.',
    rate: 5,
    date: '2023-12-12 10:23:02',
  },
  {
    name: 'Monika',
    text: 'Niezwykle wartościowa Inicjatywa! Bardzo potrzebna mamom i ich maleństwom. Różnorodność zajęć i warsztatów wpływała pozytywnie na poprawę zdrowia zarówno fizycznego i psychicznego. Atmosfera panujacą na zajeciach była bardzo wspierajaca, pokazywala niezywkla sile kobiet i mam. Świetlica w Dąbrowie dala przyjazna dzieciom przestrzen do organizacji Inicjatywy. Trzymam kciuki aby takie działania udało się kontynuować.',
    rate: 5,
    date: '2023-12-12 10:33:41',
  },
  {
    name: 'Paula',
    text: 'Bardzo ciekawa inicjatywa, która powinna być kontynuowana. Fantastyczne zajęcia z ćwiczeniami. Oby więcej było takich wydarzeń w naszej gminie:)',
    rate: 5,
    date: '2023-12-12 10:55:10',
  },
];

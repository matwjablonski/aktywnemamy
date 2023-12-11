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
];

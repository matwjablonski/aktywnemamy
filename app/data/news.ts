export type News = {
  date: string;
  title: string;
  shortText: string;
  link: string;
  magazine: string;  
}

export const news: News[] = [
  {
    date: '2023-10-20',
    title: '"Aktywne Mamy" działają!',
    shortText: 'Aktywne Mamy to Inicjatywa Oddolna, której podstawowym założeniem jest wyjście naprzeciw potrzebom mam z dziećmi do 1 roku życia, mieszkankom terenu Gminy Dopiewo.',
    link: 'https://pulsgminy.pl/pl/681_strefa-kobiet/4188_aktywne-mamy-dzialaja.html',
    magazine: 'Puls Gminy'
  },
  {
    date: '2023-11-02',
    title: 'Bezpłatne Warsztaty, treningi i szkolenia dla mam!',
    shortText: 'Celem inicjatywy jest aktywizacja i zrzeszanie młodych mam wraz dziećmi do 1 roku życia, które mieszkają na terenie Gminy Dopiewo, wokół tematów związanych z macierzyństwem, zdrowiem fizycznym i psychicznym, samorozwojem, jak i rozrywką.',
    link: 'https://dopiewo.pl/aktualnosci/2023-11-02/bezplatne-warsztaty-treningi-szkolenia-dla-mam',
    magazine: 'Gmina Dopiewo'
  },
];

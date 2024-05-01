export type Partner = {
  name: string;
  logo: string;
  website: string;
};

export const AnetaBiadun: Partner = {
  name: 'Aneta Biadun',
  logo: '/partners/aneta-biadun.png',
  website: 'https://www.facebook.com/p/Aneta-Biadun-100063737821374/',
};

export const Fizjobroszka: Partner = {
  name: 'fizjobroszka',
  logo: '/partners/fizjobroszka.jpg',
  website: 'https://www.instagram.com/fizjobroszka/',
};

export const Yogalena: Partner = {
  name: 'Yogalena na macie',
  logo: '/partners/yogalena.png',
  website: 'http://yogalenanamacie.pl',
};

export const Medicari: Partner = {
  name: 'MEDICARI Klinika Neurorozwoju',
  logo: '/partners/medicari.png',
  website: 'https://medicari.pl',
};

export const Jablonski: Partner = {
  name: 'Mateusz Jabłoński',
  logo: '/partners/jablonski.svg',
  website: 'https://mateuszjablonski.com',
};

export const Integra: Partner = {
  name: 'Integra Diagnostic',
  logo: '/partners/integra-diagnostic.svg',
  website: 'https://integradiagnostic.pl',
};

export const BabySteps: Partner = {
  name: 'Baby Steps',
  logo: '/partners/babysteps.jpg',
  website: 'https://baby-steps.pl',
};

export const Roza: Partner = {
  name: 'Róża',
  logo: '/partners/roza.jpg',
  website: 'https://www.facebook.com/ciastaroza',
};

export const Nowaczyk: Partner = {
  name: 'Nowaczyk',
  logo: '/partners/nowaczyk.png',
  website: 'http://piekarnia-nowaczyk.pl',
};

export const Rawa: Partner = {
  name: 'Rawa',
  logo: '/partners/rawa.jpg',
  website: 'https://www.facebook.com/piekarniacukierniarawa',
};

export const CUS: Partner = {
  name: 'Centrum Usług Społecznych w Dopiewie',
  logo: '/partners/cusdopiewo-logo.png',
  website: 'https://cusdopiewo.pl',
};

export const OPSDopiewo: Partner = {
  name: 'Ośrodek Pomocy Społecznej w Dopiewie',
  logo: '/partners/logo-opsdopiewo.png',
  website: 'https://cusdopiewo.pl',
};

export const MON: Partner = {
  name: 'Ministerstwo Obrony Narodowej',
  logo: '/partners/mon.png',
  website: 'https://www.gov.pl/web/obrona-narodowa',
};

export const partners: { month: string, partners: Partner[] }[] = [
  {
    month: '2024-05',
    partners: [
      AnetaBiadun,
      MON,
      CUS,
      Jablonski,
    ],
  },
  {
    month: '2024-04',
    partners: [
      AnetaBiadun,
      Fizjobroszka,
    ],
  },
  {
    month: '2024-03',
    partners: [
      Yogalena,
      Medicari,
    ],
  },
  {
    month: '2024-02',
    partners: [
      Jablonski,
      Medicari,
      Integra,
      BabySteps,
      AnetaBiadun,
    ],
  },
  {
    month: '2024-01',
    partners: [
      CUS,
      Jablonski,
    ],
  },
  {
    month: '2023-12',
    partners: [
      Rawa,
      OPSDopiewo,
    ],
  },
  {
    month: '2023-11',
    partners: [
      Rawa,
      OPSDopiewo,
      Jablonski,
    ],
  },
  {
    month: '2023-10',
    partners: [
      Nowaczyk,
      Roza,
      OPSDopiewo,
    ],
  },
];

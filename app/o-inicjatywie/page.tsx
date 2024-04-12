import Image from 'next/image';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { useId } from 'react';

export default function AboutPage() {
  const id = useId();
  return (
    <Container className="max-w-[1090px]">
      <div className="mt-[110px]">
          <SectionTitle title="O inicjatywie" subtitle="Aktywne Mamy" />
          <p className="text-md text-center max-w-lg mx-auto mb-24">Chcesz dowiedzieć się czegoś więcej o inicjatywie, założycielkach i planach na przyszłość. To jest odpowiednie miejsce.</p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-8 gap-y-12 mb-8">
            <div className="flex md:block flex-col">
              <div className="p-4 border-main-dark border-4 inline-block mx-auto md:block md:float-left md:mr-8 mb-8">
                <Image src="/team.webp" alt="" width={360} height={480} className="border-main-dark border-2" />
              </div>
              <p className="mb-8 mt-4 leading-relaxed first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:font-bold first-letter:text-main-dark"><strong className="text-main-dark">Aktywne Mamy</strong> to grupa nieformalna dziewięciu wspaniałych kobiet-mam, których celem jest aktywizacja i zrzeszanie mam wokół tematów związanych z macierzyństwem, zdrowiem fizycznym i psychicznym, samorozwojem, jak i rozrywką.</p>
              <p className="mb-8 mt-4 leading-relaxed">W okresie czerwiec - grudzień 2023 działając w ramach Inicjatywy Oddolnej, która objęta była patronatem finansowym przez ówczesny Ośrodek Pomocy Społecznej (obecnie CUS) w Dopiewie, sfokusowana była na newralgicznej grupie młodych mam wraz dziećmi do 1 roku życia, które mieszkają na terenie Gminy Dopiewo.</p>
              <p className="mb-8 mt-4 leading-relaxed">Pierwsza faza projektu zakładała regenerację fizyczną uczestniczek w ramach cyklu treningów medycznych, które były przygotowane do możliwości kobiet po połogu. Treningi przeprowadzane były w okresie od czerwca do sierpnia 2023r.</p>
              <p className="mb-8 mt-4 leading-relaxed">W drugiej fazie ofertę poszerzono o dodatkowe wydarzenia, poruszające ważne tematy z perspektywy młodych mam. Rozbudowana oferta zajęć na okres październik-grudzień 2023 zawierała bezpłatny cykl treningów ruchowych, spotkań edukacyjnych i warsztatów rozwojowych.</p>
              <p className="mb-8 mt-4 leading-relaxed">Od dnia 01.01.2024 grupa nieformalna Aktywne Mamy działa całkowicie bez dofinansowań, zapraszając na bezpłatne wydarzenia Specjalistów z różnych dziedzin, którzy nieodpłatnie dzielą się swoją fachową wiedzą oraz drogocennym czasem. W ramach współpracy partnerskiej udostępniono Inicjatywie przez Gminę Dopiewo świetlicę w Dąbrowie jako miejsce, w którym spotkania mogą być kontynuowane.</p>
              <p className="mt-4 leading-relaxed">Szczegóły na temat dostępnych wydarzeń publikowane są zarówno na stronie internetowej Inicjatywy: aktywnemamy.org, jak i w mediach społecznościowych: grupa Aktywne Mamy z gminy Dopiewo na platformie Facebook i Instagram.</p>
            </div>
          </div>
          <div className="mb-24">
            <video key={id} controls className="mx-auto md:max-w-xl w-full">
              <source src="/about.mp4" type="video/mp4" key={id} />
            </video>
          </div>
      </div>
    </Container>
  )
}

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
                <Image src="/team.webp" alt="" width={400} height={533} className="border-main-dark border-2" />
              </div>
              <p className="mb-8 mt-4 leading-relaxed"><strong>Aktywne Mamy</strong> to Inicjatywa Oddolna ośmiu mam przy wsparciu trenerki fitness Anety Biadun, działająca pod patronatem Ośrodka Pomocy Społecznej w Dopiewie. Jej celem jest aktywizacja i zrzeszanie młodych mam wraz dziećmi do 1 roku życia, które mieszkają na terenie Gminy Dopiewo, wokół tematów związanych z macierzyństwem, zdrowiem fizycznym i psychicznym, samorozwojem, jak i rozrywką.</p>
              <p className="mb-8 mt-4 leading-relaxed">Pierwsza faza projektu zakładała regenerację fizyczną uczestniczek w ramach cyklu treningów medycznych, które były przygotowane do możliwości kobiet po połogu. Treningi trwały w okresie od czerwca do sierpnia br. W drugiej fazie został postawiony krok dalej, poszerzając ofertę o dodatkowe wydarzenia, poruszające ważne tematy z perspektywy młodych mam.</p>
              <p className="mt-4 leading-relaxed">Rozbudowana oferta zajęć zakłada na okres październik-grudzień br. bezpłatny cykl treningów ruchowych, spotkań edukacyjnych i warsztatów rozwojowych. Szczegóły na temat dostępnych wydarzeń publikowane są zarówno na stronie internetowej Inicjatywy: aktywnemamy.org, jak i w mediach społecznościowych: grupa Aktywne Mamy z gminy Dopiewo na platformie Facebook i Instagram.</p>
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

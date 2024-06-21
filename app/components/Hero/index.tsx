import Image from 'next/image';
import { Content, Description, Title, Wrapper } from './ui';
import { InstaxPhoto } from '../InstaxPhoto';

export const Hero = () => (
  <Wrapper>
    <Content>
      <div className="absolute right-[20px] top-[20px] hidden md:block">
        <Image src="/flowers.png" width={400} height={400} alt="" />
      </div>
      <div className="relative">
        <Title><strong className="text-stroke">Innowacja</strong><br /> i tradycja</Title>
        <Description>Koło Gospodyń Wiejskich Aktywne mamy w Dopiewcu zostało założone w 2024 roku. Działamy na rzecz lokalnej społeczności organizując różnego rodzaju wydarzenia. Zapraszamy wszystkie aktywne kobiety z naszej gminy do wspólnego działania.</Description>
      </div>
      <div className="relative">
        <InstaxPhoto className="rotate-[0] relative left-[50px] lg:static lg:rotate-[-7deg] h-[477px] w-[338px] lg:h-auto lg:w-auto">
          <Image src="/photos/las-zakrzewski.webp" width={338} height={477} alt="Las Zakrzewski" />
        </InstaxPhoto>
        <InstaxPhoto className="rotate-[0] lg:rotate-[9deg] absolute top-0 left-[-50px] lg:left-[120px] h-[477px] w-[338px]">
          <Image src="/photos/spotkanie1.jpg" width={338} height={477} alt="Pierwsze spotkanie KGW Aktywne mamy" />
        </InstaxPhoto>
        <InstaxPhoto className="rotate-[0] lg:rotate-[22deg] absolute top-0 lg:top-[65px] lg:left-[200px] h-[477px] w-[338px]">
          <Image src="/photos/mm.jpg" width={338} height={477} alt="Magda i Monika podczas pierwszego spotkania" />
        </InstaxPhoto>
      </div>
    </Content>
  </Wrapper>
)

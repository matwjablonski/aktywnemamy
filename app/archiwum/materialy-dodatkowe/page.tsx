import Image from 'next/image';
import Container from '../../components/Container';
import SectionTitle from '../components/SectionTitle';

const PromoMaterialsPage: React.FC = () => (
  <div className="mt-[110px]">
    <Container>
      <SectionTitle title="Materiały dodatkowe" subtitle="Zobacz nasze plakaty i filmy" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
        <Image
          src="/promo/maj2024-so3.webp"
          alt="Plakat promujący kurs samoobrony dla kobiet z maja 2024 - wersja 3"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/maj2024-so2.webp"
          alt="Plakat promujący kurs samoobrony dla kobiet z maja 2024 - wersja 2"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/maj2024-so1.webp"
          alt="Plakat promujący kurs samoobrony dla kobiet z maja 2024 - wersja 1"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/maj2024.webp"
          alt="Plakat promujący wydarzenia z maja 2024"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/kwiecien2024.webp"
          alt="Plakat promujący wydarzenia z kwietnia 2024"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/marzec2024.webp"
          alt="Plakat promujący wydarzenia z marca 2024"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/luty2024.webp"
          alt="Plakat promujący wydarzenia z lutego 2024"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/styczen2024.webp"
          alt="Plakat promujący wydarzenia ze stycznia 2024"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/grudzien2023.webp"
          alt="Plakat promujący wydarzenia z grudnia 2023"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/listopad2023-press.webp"
          alt="Plakat promujący wydarzenia z listopada 2023 dla lokalnej prasy"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
        <Image
          src="/promo/listopad2023.webp"
          alt="Plakat promujący wydarzenia z listopada 2023"
          width={471}
          height={666}
          className="max-w-full shadow-lg mx-auto"  
        />
      </div>
    </Container>
  </div>
)

export default PromoMaterialsPage;

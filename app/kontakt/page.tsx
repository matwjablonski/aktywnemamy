import Link from 'next/link';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <Container className="max-w-[1090px]">
      <div className="mt-[110px]">
        <SectionTitle title="Kontakt" subtitle="Znajdź nas" />
        <p className="text-md text-center max-w-lg mx-auto mb-4">Cześć, super, że jesteś!</p>
        <p className="text-md text-center max-w-lg mx-auto mb-24">Nasza inicjatywa cały czas się rozwija dzięki takim osobom jak Ty. Jeśli masz pomysł na kolejne spotkanie, chciałabyś lub chciałbyś zostać prelegentem lub po prostu coś na przekazać - napisz do Nas maila lub odwiedź nasz profil na Instagramie.</p>
        <div className="flex justify-center gap-6 items-center mb-6 md:mb-28">
          <Link href="https://www.instagram.com/aktywne_mamy_w_gminie_dopiewo/" target="_blank" className="flex items-center gap-2">
            <Image src="/brand-instagram.svg" height={50} width={50} alt="" />
            Odwiedź nasz profil na Instagram
          </Link>
          <Link href="mailto:aktywnamamadopiewo@gmail.com" target="_blank" className="flex items-center gap-2">
            <Image src="/mail.svg" height={50} width={50} alt="" />
            <p>Napisz do nas e-mail</p>
          </Link>
        </div>
      </div>
    </Container>
  );
};

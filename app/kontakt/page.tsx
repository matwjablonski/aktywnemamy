import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { SocialMediaIcons } from '../components/SocialMediaIcons';

export default function ContactPage() {
  return (
    <Container className="max-w-[1090px]">
      <div className="mt-[110px]">
        <SectionTitle title="Kontakt" subtitle="Znajdź nas" />
        <p className="text-md text-center max-w-lg mx-auto mb-4">Cześć, super, że jesteś!</p>
        <p className="text-md text-center max-w-lg mx-auto mb-24">Nasza Inicjatywa cały czas się rozwija dzięki takim osobom jak Ty. Jeśli masz pomysł na kolejne spotkanie, chciałabyś lub chciałbyś zostać prelegentem lub po prostu coś nam przekazać - napisz do nas maila lub odwiedź nasz profil na Instagramie.</p>
        <div className="flex justify-center gap-6 items-center mb-6 md:mb-28">
          <SocialMediaIcons />
        </div>
      </div>
    </Container>
  );
};

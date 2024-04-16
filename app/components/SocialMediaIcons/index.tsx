import Image from 'next/image';
import Link from 'next/link';

export const SocialMediaIcons = () => (
  <>
    <Link href="https://www.facebook.com/profile.php?id=61555722398074" target="_blank" className="flex items-center gap-2" title="Odwiedź nasz profil na Facebook">
      <Image src="/brand-facebook.svg" height={50} width={50} alt="Odwiedź nasz profil na Facebook" />
    </Link>
    <Link href="https://www.instagram.com/aktywne_mamy_w_gminie_dopiewo/" target="_blank" className="flex items-center gap-2" title="Odwiedź nasz profil na Instagram">
      <Image src="/brand-instagram.svg" height={50} width={50} alt="Odwiedź nasz profil na Instagram" />
    </Link>
    <Link href="mailto:aktywnamamadopiewo@gmail.com" target="_blank" className="flex items-center gap-2" title="Napisz do nas e-mail">
      <Image src="/mail.svg" height={50} width={50} alt="Napisz do nas e-mail" />
    </Link>
  </>
)

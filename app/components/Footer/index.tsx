import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Image
              src="/logo-opsdopiewo.png"
              alt="Aktywne Mamy logo"
              className="block"
              width={55}
              height={45}
              priority
            />
            <Image
              src="/herb-dopiewo.webp"
              alt="Aktywne Mamy logo"
              className="block"
              width={55}
              height={62}
              priority
            />
          </div>
          <div className="max-w-lg">
            <p className="text-right">Inicjatywa oddolna finansowana z funduszy Ośrodka Pomocy Społecznej Gminy Dopiewo.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

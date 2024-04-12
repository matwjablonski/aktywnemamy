import Image from 'next/image';
import styles from './Footer.module.scss';
import FooterNav from '../FooterNav';

const Footer = () => {
  return (
    <footer className={`${styles.Footer} z-10 relative`}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex mb-4">
          <FooterNav />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <Image
              src="/herb-dopiewo.webp"
              alt="Herb Gminy Dopiewo"
              className="block"
              width={55}
              height={62}
              priority
            />
          </div>
          <div className="max-w-lg">
            <p className="text-center md:text-right">Projekt jest realizowany we współpracy z Gminą Dopiewo.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

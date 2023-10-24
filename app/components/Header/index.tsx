import Image from 'next/image';
import styles from './Header.module.scss';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between align-middle items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Aktywne Mamy logo"
              className="max-w-70 md:max-w-100 w-52"
              width={425}
              height={135}
              priority
            />
          </Link>
          <ButtonLink label="Zapisy" link="/zapisy" />
        </div>
      </div>
    </header>
  )
}

export default Header;

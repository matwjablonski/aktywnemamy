import Image from 'next/image';
import styles from './Header.module.scss';
import ButtonLink from '../ButtonLink';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between align-middle items-center">
          <Image
            src="/logo.png"
            alt="Aktywne Mamy logo"
            className="max-w-70 md:max-w-100 w-52"
            width={425}
            height={135}
            priority
          />
          <ButtonLink />
        </div>
      </div>
    </header>
  )
}

export default Header;

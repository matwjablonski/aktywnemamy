'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 40);
  const pathname = usePathname();

  const detectScroll = () => {
    if (window.scrollY > 40 && !isScrolled) {
      setIsScrolled(true);
    } 

    if (window.scrollY <= 40 && isScrolled) {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', detectScroll);
    }

    return () => {
      window.removeEventListener('scroll', detectScroll);
    }
  })

  return (
    <header className={`${styles.Header} fixed z-10 w-full top-0 transition-all ${!isScrolled && pathname === '/' && 'bg-transparent'}`}>
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

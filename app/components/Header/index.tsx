'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../MainNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 40;
    }
    return false;
  });
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
    if (pathname === '/' && typeof window !== "undefined") {
      window.addEventListener('scroll', detectScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('scroll', detectScroll);
      }
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
          <MainNav />
          <ButtonLink label="Zapisy" link="/zapisy" className="hidden md:inline-block" />
        </div>
      </div>
    </header>
  )
}

export default Header;

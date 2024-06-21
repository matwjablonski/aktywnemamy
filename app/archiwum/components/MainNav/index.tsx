import Link from 'next/link';
import ButtonLink from '../ButtonLink';
import { useState } from 'react';

const MainNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav>
      <div className="md:hidden" onClick={() => setIsOpenMenu((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <ul className={`
        gap-8
        ${isOpenMenu ? 'block absolute top-[106px] right-0 w-3/4 sm:w-1/2 bg-gray p-10 text-right': 'hidden'}
        
        md:flex
        md:static
        md:w-auto
        md:right-auto
        md:text-left
        md:bg-white 
        md:top-auto
      `}>
        <li className="uppercase tracking-wider text-white md:text-gray-dark hover:text-gray-light transition-all text-md md:mb-0 md:text-sm relative group py-2">
          <Link className="whitespace-nowrap" href="/archiwum/o-inicjatywie">O inicjatywie</Link>
          <ul className="md:absolute md:hidden md:group-hover:block mt-2 md:mb-0 md:p-2 text-white md:bg-main-dark md:mt-2">
            <li className="[&:not(:last-child)]:pb-2 hidden md:block">
              <Link className="whitespace-nowrap" href="/archiwum/o-inicjatywie">O nas</Link>
            </li>
            <li className="[&:not(:last-child)]:pb-2">
              <Link className="whitespace-nowrap" href="/archiwum/materialy-dodatkowe">Materiały dodatkowe</Link>
            </li>
            <li className="[&:not(:last-child)]:pb-2">
              <Link className="whitespace-nowrap" href="/archiwum/partnerzy">Wspierają nas</Link>
            </li>
          </ul>
        </li>
        <li className="uppercase tracking-wider text-white md:text-gray-dark hover:text-gray-light transition-all text-md mb-2 md:mb-0 md:text-sm py-2">
          <Link href="/archiwum/wydarzenia" className="whitespace-nowrap">Wydarzenia</Link>
        </li>
        <li className="uppercase tracking-wider text-white md:text-gray-dark hover:text-gray-light transition-all text-md mb-2 md:mb-0 md:text-sm py-2">
          <Link href="/archiwum/news" className="whitespace-nowrap">Aktualności</Link>
        </li>
        <li className="uppercase tracking-wider text-white md:text-gray-dark hover:text-gray-light transition-all text-md mb-2 md:mb-0 md:text-sm py-2">
          <Link href="/archiwum/opinie" className="whitespace-nowrap">Opinie</Link>
        </li>
        <li className="uppercase tracking-wider text-white md:text-gray-dark hover:text-gray-light transition-all text-md mb-2 md:mb-0 md:text-sm py-2">
          <Link href="/archiwum/kontakt" className="whitespace-nowrap">Kontakt</Link>
        </li>
        <li className="md:hidden mt-8  py-2">
          <ButtonLink label="Zapisy" link="/zapisy" className="" />
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;

import Link from 'next/link';

const MainNav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li className="uppercase tracking-wider text-[var(--main-text-dark)] hover:text-[--main-text] transition-all text-sm">
          <a className="whitespace-nowrap cursor-default opacity-30">O inicjatywie</a>
        </li>
        <li className="uppercase tracking-wider text-[var(--main-text-dark)] hover:text-[--main-text] transition-all text-sm">
          <Link href="/wydarzenia" className="whitespace-nowrap">Wydarzenia</Link>
        </li>
        <li className="uppercase tracking-wider text-[var(--main-text-dark)] hover:text-[--main-text] transition-all text-sm">
          <a href="/" className="whitespace-nowrap cursor-default opacity-30">Kontakt</a>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;

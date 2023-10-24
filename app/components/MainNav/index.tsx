import Link from 'next/link';

const MainNav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li className="uppercase tracking-wider text-[var(--main-text-dark)] hover:text-[--main-text] transition-all text-sm">
          <Link href="/">O inicjatywie</Link>
        </li>
        <li className="uppercase tracking-wider text-[var(--main-text-dark)] hover:text-[--main-text] transition-all text-sm">
          <Link href="/">Wydarzenia</Link>
        </li>
        <li className="uppercase tracking-wider text-[var(--main-text-dark)] hover:text-[--main-text] transition-all text-sm">
          <Link href="/">Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;

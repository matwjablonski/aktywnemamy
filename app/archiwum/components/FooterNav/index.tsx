import Link from 'next/link';
import ButtonLink from '../ButtonLink';

const FooterNav = () => {
  return (
    <nav className="mx-auto md:mx-0">
      <ul className={`
        gap-4
        flex
        flex-col
        text-center

        md:text-left
        md:flex-row
      `}>
        <li className="uppercase tracking-wider text-gray-dark hover:text-gray-light transition-all text-sm">
          <Link className="whitespace-nowrap" href="/archiwum/materialy-dodatkowe">Materiały dodatkowe</Link>
        </li>
        <li className="uppercase tracking-wider text-gray-dark hover:text-gray-light transition-all text-sm">
          <Link href="/archiwum/o-inicjatywie  " className="whitespace-nowrap">O inicjatywie</Link>
        </li>
        <li className="uppercase tracking-wider text-gray-dark hover:text-gray-light transition-all text-sm">
          <Link className="whitespace-nowrap" href="/archiwum/partnerzy">Partnerzy</Link>
        </li>
        {/* <li className="uppercase tracking-wider text-gray-dark hover:text-gray-light transition-all text-sm">
          <Link href="/archiwum/partnerzy" className="whitespace-nowrap">Partnerzy i sponsorzy</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default FooterNav;

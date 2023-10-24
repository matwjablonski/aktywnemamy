import Link from 'next/link';
import styles from './ButtonLink.module.scss';

const ButtonLink = () => {
  return (
    <Link href="/zapisy" className={`${styles.ButtonLink} px-10 py-3 inline-block rounded-3xl`}>
      <span>Zapisy</span>
    </Link>
  )
}

export default ButtonLink;

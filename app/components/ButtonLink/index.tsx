import Link from 'next/link';
import styles from './ButtonLink.module.scss';
import { FC } from 'react';

type ButtonLink = {
  label: string;
}

const ButtonLink: FC<ButtonLink> = ({ label }) => {
  return (
    <Link href="/zapisy" className={`${styles.ButtonLink} px-10 py-3 rounded-3xl hidden sm:inline-block `}>
      <span>{label}</span>
    </Link>
  )
}

export default ButtonLink;

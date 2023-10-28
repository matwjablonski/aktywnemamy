import Link from 'next/link';
import { FC } from 'react';

type ButtonLink = {
  label: string;
  link: string;
  className?: string;
}

const ButtonLink: FC<ButtonLink> = ({ label, link, className }) => {
  return (
    <Link
      href={link}
      className={`
        ${className} 
        bg-main 
        text-white
        hover:bg-main-dark
        
        px-10 
        py-3 
        rounded-3xl 
        hidden 
        
        sm:inline-block
      `}>
      <span className="uppercase text-sm tracking-widest">{label}</span>
    </Link>
  )
}

export default ButtonLink;

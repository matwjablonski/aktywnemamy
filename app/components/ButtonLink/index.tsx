import Link from 'next/link';
import { FC } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  GRAY = 'gray',
}

type ButtonLink = {
  label: string;
  link: string;
  className?: string;
  variant?: ButtonVariant;
}

const ButtonLink: FC<ButtonLink> = ({ label, link, className, variant }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case ButtonVariant.GRAY: 
        return 'bg-gray text-white hover:bg-gray-dark';
      case ButtonVariant.PRIMARY:
      default:
        return 'bg-main text-white hover:bg-main-dark'
    }
  }
  return (
    <Link
      href={link}
      className={`
        ${className} 
        ${getVariantClasses()}
        
        px-10 
        py-3 
        rounded-3xl 
        hidden 
        
        sm:inline-block
      `}>
      <span className="uppercase text-sm tracking-widest whitespace-nowrap">{label}</span>
    </Link>
  )
}

export default ButtonLink;

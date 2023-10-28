import Link from 'next/link';
import { FC, HTMLAttributeAnchorTarget } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  GRAY = 'gray',
}

type ButtonLink = {
  label: string;
  link: string;
  className?: string;
  variant?: ButtonVariant;
  target?: HTMLAttributeAnchorTarget;
}

const ButtonLink: FC<ButtonLink> = ({ label, link, className, variant, target }) => {
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
      target={target}
      href={link}
      className={`
        ${className} 
        ${getVariantClasses()}
        
        px-10 
        py-3 
        rounded-3xl 
        inline-block
      `}>
      <span className="uppercase text-sm tracking-widest whitespace-nowrap">{label}</span>
    </Link>
  )
}

export default ButtonLink;

import Link from 'next/link';
import { FC, HTMLAttributeAnchorTarget } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  GRAY = 'gray',
  WHITE = 'white',
}

type ButtonLink = {
  label: string;
  link: string;
  className?: string;
  variant?: ButtonVariant;
  target?: HTMLAttributeAnchorTarget;
  asAnchor?: boolean;
  full?: boolean;
}

const ButtonLink: FC<ButtonLink> = ({ label, link, className, variant, target, asAnchor, full }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case ButtonVariant.GRAY: 
        return 'bg-gray text-white hover:bg-gray-dark';
      case ButtonVariant.WHITE:
        return 'bg-white text-main hover:bg-gray-light';
      case ButtonVariant.PRIMARY:
      default:
        return 'bg-main text-white hover:bg-main-dark'
    }
  }

  const getFullStyle = () => `${full ? 'w-full text-center' : ''}`

  if (asAnchor) {
    <a
      target={target}
      href={link}
      className={`
        ${className} 
        ${getVariantClasses()}
        ${getFullStyle()}
        
        px-10 
        py-3 
        rounded-3xl 
        inline-block
      `}
    >
      <span className="uppercase text-sm tracking-widest whitespace-nowrap">{label}</span>
    </a>
  }

  return (
    <Link
      target={target}
      href={link}
      className={`
        ${className} 
        ${getVariantClasses()}
        ${getFullStyle()}
        
        px-10 
        py-3 
        rounded-3xl 
        inline-block
      `}
    >
      <span className="uppercase text-sm tracking-widest whitespace-nowrap">{label}</span>
    </Link>
  )
}

export default ButtonLink;

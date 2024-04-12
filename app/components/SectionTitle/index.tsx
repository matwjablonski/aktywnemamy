import { FC } from 'react';

type SectionTitle = {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  maxWidth?: string;
}

const SectionTitle: FC<SectionTitle> = ({ title, subtitle, align, maxWidth }) => {

  return (
    <h2 className={`
      text-3xl
      text-${align || 'center'}
      text-gray-dark 
      font-semibold 

      mb-10
      pb-6
      relative

      ${maxWidth ? `max-w-${maxWidth}` : ''}

      after:content
      after:block
      after:w-16
      after:h-1
      after:bg-main

      ${
        align === 'center' ? `
          after:left-0
          after:right-0
          after:mx-auto
        ` : `
          after:left-0
          after:mx-0
        `
      }
      
      after:absolute
      after:bottom-0
    `}>
      { subtitle && <small className="block text-main font-light text-lg mb-1">{subtitle}</small>}
      {title}
    </h2>
  )
}

export default SectionTitle;

import { FC } from 'react';

type SectionTitle = {
  title: string;
  subtitle?: string;
}

const SectionTitle: FC<SectionTitle> = ({ title, subtitle }) => {

  return (
    <h2 className="
      text-3xl
      text-center
      text-gray-dark 
      font-semibold 

      mb-10
      pb-6
      relative

      after:content
      after:block
      after:w-16
      after:h-1
      after:bg-main
      after:left-0
      after:right-0
      after:mx-auto
      after:absolute
      after:bottom-0
    ">
      { subtitle && <small className="block text-main font-light text-lg mb-1">{subtitle}</small>}
      {title}
    </h2>
  )
}

export default SectionTitle;

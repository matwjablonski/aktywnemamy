import { News } from '@/app/data/news';
import Link from 'next/link';
import { FC } from 'react';
import ButtonLink from '../ButtonLink';

const ArticlePreview: FC<News> = ({ title, date, shortText, magazine, link}) => {
  return (
    <article
      className="
        last:border-0
        pb-8
        pt-8
        min-w-[300px]
        max-w-[450px]
        w-[300px]
        md:min-w-[450px]
        md:w-[450px]
        odd:mr-4
        even:ml-4
        mb-16
      "
    >
      <div>
        <span>{date}</span> | <span>{magazine}</span>
      </div>
      <Link target="_blank" href={link}><h3 className="text-xl mb-4"><strong>{title}</strong></h3></Link>
      <p className="mb-6">{shortText}</p>
      <ButtonLink link={link} target='_blank' label="Przeczytaj" />
    </article>
  )
}

export default ArticlePreview;

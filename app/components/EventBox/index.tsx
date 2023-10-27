import { Event } from '@/app/data/events';
import { calculateEndHour, canRegister } from '@/app/utils/events';
import Image from 'next/image';
import { FC } from 'react'

type EventBox = {

} & Event;

const EventBox: FC<EventBox> = ({ title, eventDate, duration, place, description, image, registrationUrl, detailsUrl }) => (
  <article className="
    flex
    content-stretch

    mb-6
    px-4
    py-4
    w-8/12
    min-h-[200px]
    mx-auto
  ">
    <div className="
      flex
      flex-col
      justify-between
      overflow-hidden
      rounded-l-lg

      mr-6
      py-4
      pl-8
      pr-4
      w-[200px]
      min-w-[200px]

      bg-gradient-to-b
      bg-16
      bg-no-repeat
      to-white
      from-main
      text-gray-dark
    ">
      {new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long'}).format(eventDate)}
      <div className="flex flex-col items-start gap-1">
        {canRegister(eventDate) && registrationUrl && (
          <a href={registrationUrl} rel="nofollow noreferrer noopener" target="_blank">
            <div className="flex gap-2 text-sm items-center text-gray-dark hover:text-secondary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
              Zapisz się  
            </div>
          </a>
        )}
        {
          detailsUrl && (
            <a href={detailsUrl} rel="nofollow noreferrer noopener" target="_blank">
              <div className="flex gap-2 text-sm items-center text-gray-dark hover:text-secondary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Szczegóły
              </div>
            </a>
          )
        }
      </div>
    </div>
    <div className="shadow-2xl flex w-full">
      <div className="w-[200px] overflow-hidden rounded-l-lg border-y border-l border-main min-w-[200px]">
        {
          image && (
            <Image
              src={image}
              width={200}
              height={200}
              alt={title}
              className="
                object-cover
                h-full
                hover:scale-110
                transition-all
              "
            />
          )
        }
      </div>
      <div className="
        py-4
        px-8
        flex
        flex-col
        justify-between
        relative
        flex-auto
        rounded-r-lg
        bg-white
        border-y
        border-main

        hover:after:-right-[4px]

        after:transition-all
        after:content
        after:w-[15px]
        after:block
        after:h-full
        after:absolute
        after:-right-[8px]
        after:top-0
        after:bg-main
        after:rounded-r-lg
        after:z-[-1]
      ">
        <div>
          <h3 className="text-2xl mb-1 text-gray-dark">{title}</h3>
          <p className="text-gray-light text-sm">{description}</p>
          </div>
        <div className="flex">
          <div className="flex mr-6 text-sm items-center text-gray gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {new Intl.DateTimeFormat('pl-PL', { timeStyle: 'short'}).format(eventDate)} - {calculateEndHour(eventDate, duration)}</div>
            <div className="flex mr-6 text-sm items-center text-gray gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {place}
          </div>
        </div>
      </div>
    </div>
  </article>
)

export default EventBox;

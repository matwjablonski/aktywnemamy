'use client';

import { Event } from '@/app/data/events';
import { FC, useEffect, useRef, useState } from 'react';
import ButtonLink, { ButtonVariant } from '../ButtonLink';
import { DAYS_TO_REGISTRATION_BEFORE_EVENT, calculateEndHour, canRegister, getLeftTimeObject, getTimeLabel } from '@/app/utils/events';
import Image from 'next/image';

const TIMESPAN = 60 * 60 * 24 * DAYS_TO_REGISTRATION_BEFORE_EVENT * 1000;

const RegistrationEventBox: FC<Event> = ({ title, description, registrationUrl, eventDate, image, duration, place, trainer, detailsUrl }) => {
  const [leftTime, setLeftTime] = useState(() => getLeftTimeObject(eventDate, TIMESPAN));
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setLeftTime(getLeftTimeObject(eventDate, TIMESPAN))
    }, 990);

    timerRef.current = id;

    return () => {
      timerRef?.current && clearInterval(timerRef.current);
    }
  }, []);

  const timerWithDaysAndHours = () => leftTime.days > 0 ? (
    <div className="flex gap-2 justify-center">
      <div className="bg-secondary px-5 py-2 flex flex-col items-center justify-center rounded-xl text-black min-w-[75px]">
        {leftTime.days}
        <span className="text-xs uppercase">{getTimeLabel(leftTime.days, 'day')}</span>
      </div>
      <div className="bg-secondary px-4 py-2 flex flex-col items-center justify-center rounded-xl text-black min-w-[75px]">
        {leftTime.hours}
        <span className="text-xs uppercase">{getTimeLabel(leftTime.hours, 'hour')}</span>
      </div>
    </div>
  ) : null;

  const timerWithHoursAndMinutes = () => {
    if (
      leftTime.days > 0
      || (leftTime.days === 0 && leftTime.hours === 0)
    ) {
      return null;
    }

    return <div className="flex gap-2 justify-center">
      <div className="bg-secondary px-5 py-2 flex flex-col items-center justify-center rounded-xl text-black min-w-[75px]">
        {leftTime.hours}
        <span className="text-xs uppercase">{getTimeLabel(leftTime.hours, 'hour')}</span>
      </div>
      <div className="bg-secondary px-4 py-2 flex flex-col items-center justify-center rounded-xl text-black min-w-[75px]">
        {leftTime.minutes}
        <span className="text-xs uppercase">{getTimeLabel(leftTime.minutes, 'minute')}</span>
      </div>
    </div>
  }

  const timerWithMinutesAndSeconds = () => {
    if (
      leftTime.days > 0
      || (leftTime.days === 0 && leftTime.hours > 0)
    ) {
      return null;
    }

    return <div className="flex gap-2 justify-center">
      <div className="bg-secondary px-5 py-2 flex flex-col items-center justify-center rounded-xl text-black min-w-[75px]">
        {leftTime.minutes}
        <span className="text-xs uppercase">{getTimeLabel(leftTime.minutes, 'minute')}</span>
      </div>
      <div className="bg-secondary px-4 py-2 flex flex-col items-center justify-center rounded-xl text-black min-w-[75px]">
        {leftTime.seconds}
        <span className="text-xs uppercase">{getTimeLabel(leftTime.seconds, 'second')}</span>
      </div>
    </div>
  }

  return (
    <div className="
      flex

      max-w-lg
    ">
      <div>
        <div className="
          py-10
          
          min-w-[220px]

          w-[320px]
          md:mr-6
          md:w-auto
          
          bg-[#ededed]
          ticket
        ">
          <div className="px-6 uppercase text-sm text-center mb-5">Wydarzenie bezpłatne</div>
          <div className="md:hidden">
            <h2 className="px-6 text-lg font-bold leading-6 mb-6 text-center whitespace-normal">
              {title}
            </h2>
          </div>
          {image &&  <Image src={image} alt={title} width={220} height={220} className="min-w-full" />}
          <div className="flex flex-col my-4 gap-2 px-6">
            <div className="flex text-sm items-center text-gray gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              {new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(eventDate)}
            </div>
            <div className="flex text-sm items-center text-gray gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {new Intl.DateTimeFormat('pl-PL', { timeStyle: 'short' }).format(eventDate)} - {calculateEndHour(eventDate, duration)}
            </div>
            <div className="flex text-sm items-center text-gray gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {place}
            </div>
          </div>
          {(canRegister(eventDate) && registrationUrl) && (
            <div className="text-center mt-8">
              <ButtonLink label="Zapisz się" link={registrationUrl} target="_blank" />
            </div>
          )}
          {!canRegister(eventDate) && (
            <div className="px-6">
              <h4 className="uppercase text-sm mb-2">Zapisy już za:</h4>
              {timerWithDaysAndHours()}
              {timerWithHoursAndMinutes()}
              {timerWithMinutesAndSeconds()}
            </div>
          )}
          <div className="md:hidden mt-2 text-center">
            {detailsUrl && <ButtonLink label="Szczegóły" link={detailsUrl} variant={ButtonVariant.GRAY} target="_blank" />}
          </div>
        </div>
      </div>
      <div className="mb-8 hidden md:block">
        <h2 className="text-lg font-bold leading-6 mb-6">
          <small className="block text-main font-normal">O wydarzeniu</small>
          {title}
        </h2>
        <div className="flex text-sm items-center text-gray gap-1 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          {trainer}
        </div>
        <p className="mb-8">{description}</p>
        {detailsUrl && <ButtonLink label="Szczegóły" link={detailsUrl} variant={ButtonVariant.GRAY} target="_blank"/>}
      </div>
    </div>
  )
}

export default RegistrationEventBox;

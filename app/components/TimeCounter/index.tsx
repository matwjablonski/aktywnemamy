'use client';

import { FC, useEffect, useState } from 'react';

type TimeCounter = {
  endDate: Date;
}

let i = 0;

const TimeCounter: FC<TimeCounter> = ({ endDate }) => {
  const [intervalData, setIntervalData] = useState<{ id: NodeJS.Timeout, i: number} | null>(null);
  const left = Math.floor(((+endDate - +new Date())) / 1000);
  const days = Math.floor(left / (3600 * 24));
  const h = Math.floor((left % (3600 * 24)) / 3600);
  const min = Math.floor(((left % (3600 * 24)) % 3600) / 60);
  const sec = left % 60;


  useEffect(() => {
    const a = setInterval(() => {
      setIntervalData({ id: a, i })
    }, 990);
  }, []);

  const daysWithLabel = days === 1 ? `${days} dzień` : `${days} dni`;
  const hoursWithLabel = () => {
    if (h === 0 || h >= 5) {
      return `${h} godzin`;
    }

    if (h === 1) {
      return `${h} godzina`;
    }

    return `${h} godziny`
  }

  const minWithLabel = () => {
    if (min === 0 || min >= 5) {
      return `${min} minut`;
    }

    if (min === 1) {
      return `${min} minuta`;
    }

    return `${min} minuty`
  }

  const secWithLabel = () => {
    if (sec === 0 || sec >= 5) {
      return `${sec} sekund`;
    }

    if (sec === 1) {
      return `${sec} sekunda`;
    }

    return `${sec} sekundy`
  }

  if (left <= 0) {
    return <div>Czas zacząć zapisy!</div>
  }

  return (
    <div className="font-sans text-3xl counter font-bold flex flex-col md:flex-row justify-center">
      <div className="md:mr-3">{daysWithLabel}</div>
      <div className="md:mr-3">{hoursWithLabel()}</div> 
      <div className="md:mr-3">{minWithLabel()}</div> 
      <div>{secWithLabel()}</div>
    </div>
  )
}

export default TimeCounter;

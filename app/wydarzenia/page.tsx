'use client';

import { useState } from 'react';
import Container from '../components/Container'
import EventBox from '../components/EventBox';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/events';
import { getPassedEvents, getClosestEvents } from '../utils/events';

const EventsPage = () => {
  const nextEvents = getClosestEvents(events, 999);
  const passedEvents = getPassedEvents(events);
  const [isArchiveVisible, setIsArchiveVisible] = useState(false);

  return (
    <div className="mt-[110px]">
      <Container>
        <SectionTitle title="Wydarzenia" subtitle="Co się u nas dzieje?" />
        <p className="text-md text-center max-w-lg mx-auto mb-16">Poniżej znajdziesz wszystkie wydarzenia, które zrealizowaliśmy i które są jeszcze przed nami.</p>
        <button
          className="
          bg-main
          text-white
          hover:bg-main-dark
            px-10 
            py-3 
            mx-auto
            mb-20
            rounded-3xl 
            block
          "
          onClick={() => setIsArchiveVisible(prev => !prev)}
        >{isArchiveVisible ? 'Ukryj archiwalne wydarzenia' : 'Pokaż archiwalne wydarzenia'}</button>
        {isArchiveVisible && <div>
          {passedEvents.map(event => (
            <EventBox {...event} key={event.id} withArchive showDetails />
          ))}
        </div>}
        {nextEvents.map(event => (
          <EventBox {...event} key={event.id} withArchive showDetails />
        ))}
      </Container>
    </div>
  )
}

export default EventsPage;

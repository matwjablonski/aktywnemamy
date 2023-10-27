import { redirect } from 'next/navigation';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import Container from './components/Container';
import { events } from './data/events';
import { useMemo } from 'react';
import { getClosestEvents } from './utils/events';
import EventBox from './components/EventBox';

export default function Home() {
  const nextEvents = getClosestEvents(events, 100);

  return (
    <>
      <Hero />
      <Container>
        <SectionTitle title="Nadchodzące wydarzenia" subtitle="Sprawdź co się u nas dzieje" />
        {nextEvents.map(event => (
          <EventBox {...event} key={event.id} />
        ))}
      </Container>
    </>
  )
}

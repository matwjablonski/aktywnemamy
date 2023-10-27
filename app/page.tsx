import { redirect } from 'next/navigation';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import Container from './components/Container';
import { events } from './data/events';
import { useMemo } from 'react';
import { getClosestEvents } from './utils/events';

export default function Home() {
  const nextEvents = useMemo(() => {
    return getClosestEvents(events);
  }, [ events ]);

  return (
    <>
      <Hero />
      <Container>
        <SectionTitle title="Nadchodzące wydarzenia" subtitle="Sprawdź co się u nas dzieje" />

      </Container>
    </>
  )
}

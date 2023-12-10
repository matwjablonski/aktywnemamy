'use client';

import Container from '../components/Container';
import RegistrationEventBox from '../components/RegistrationEventBox';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/events';
import { getClosestEvents } from '../utils/events';

export default function RegistrationPage() {
  const nextEvents = getClosestEvents(events, 999);

  return (
    <Container className="max-w-[1090px]">
      <div className="mt-[110px]">
          <SectionTitle title="Zapisy na wydarzenia" subtitle="Zapisy wystartowały" />
          <p className="text-md text-center max-w-lg mx-auto mb-24">Zapisy będą uruchamiane na 5 dni przed wydarzeniem. Zapraszamy do odwiedzania naszej strony i udziału w wydarzeniach.</p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-8 gap-y-12">
            {nextEvents.map(event => (
              <RegistrationEventBox {...event} key={event.id} />
            ))}
            {nextEvents.length === 0 && (
              <div className="text-center w-full">
                <h3 className="text-2xl mb-2">Kolejne wydarzenia już wkrótce.</h3>
                <p>Pracujemy nad tym. Śledź nasze media społecznościowe lub zaglądaj tutaj, aby być na bieżąco.</p>
              </div>
            )}
          </div>
      </div>
    </Container>
  )
}

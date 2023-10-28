import Container from '../components/Container';
import EventBox from '../components/EventBox';
import RegistrationEventBox from '../components/RegistrationEventBox';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/events';
import { getClosestEvents } from '../utils/events';

export default function RegistrationPage() {
  const nextEvents = getClosestEvents(events, 999);

  return (
    <Container>
      <div className="mt-[110px]">
          <SectionTitle title="Zapisy na wydarzenia" subtitle="Zapisy wystartowały" />
          <p className="text-md text-center max-w-lg mx-auto mb-24">Zapisy na wydarzenia będą sukcesywnie odblokowywane. Zapisy są uruchamiane na 5 dni przed wydarzeniem.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {nextEvents.map(event => (
              <RegistrationEventBox {...event} key={event.id} />
            ))}
          </div>
      </div>
    </Container>
  )
}

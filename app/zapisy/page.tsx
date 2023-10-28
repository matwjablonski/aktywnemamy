import Container from '../components/Container';
import EventBox from '../components/EventBox';
import { events } from '../data/events';
import { getClosestEvents } from '../utils/events';

export default function RegistrationPage() {
  const nextEvents = getClosestEvents(events, 9);

  return (
    <Container>
      <div className="mt-[110px]">
          <h2 className="text-4xl font-bold mb-2 text-center">Zapisy wystartowały!</h2>
          <p className="mb-3 text-lg text-center max-w-lg mx-auto mb-8">Zapisy na pozostałe wydarzenia będą sukcesywnie odblokowywane, na 5 dni przed wydarzeniem o godz. 21:00.</p>
          {nextEvents.map(event => (
            <EventBox {...event} key={event.id} />
          ))}
      </div>
    </Container>
  )
}

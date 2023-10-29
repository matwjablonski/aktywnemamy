import Container from '../components/Container'
import EventBox from '../components/EventBox';
import RegistrationEventBox from '../components/RegistrationEventBox';
import { events } from '../data/events';
import { getAllSortedEvents, getClosestEvents } from '../utils/events';

const EventsPage = () => {
  const nextEvents = getAllSortedEvents(events);
  const closeEvents = getClosestEvents(events);

  return (
    <div className="mt-[110px]">
      <Container>
        {nextEvents.map(event => (
          <RegistrationEventBox {...event} key={event.id} />
        ))}
      </Container>
    </div>
  )
}

export default EventsPage;

import Container from '../components/Container'
import EventBox from '../components/EventBox';
import { events } from '../data/events';
import { getAllSortedEvents } from '../utils/events';

const EventsPage = () => {
  const nextEvents = getAllSortedEvents(events);

  return (
    <div className="mt-[110px]">
      <Container>
        {nextEvents.map(event => (
          <EventBox {...event} key={event.id} withArchive />
        ))}
      </Container>
    </div>
  )
}

export default EventsPage;

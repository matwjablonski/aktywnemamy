import Container from '../components/Container'
import EventBox from '../components/EventBox';
import { events } from '../data/events';
import { getAllSortedEvents, getClosestEvents } from '../utils/events';

const EventsPage = () => {
  const nextEvents = getAllSortedEvents(events);
  const closeEvents = getClosestEvents(events);

  console.log(closeEvents);
  console.log(nextEvents);

  return (
    <div className="mt-[110px]">
      <Container>
        {closeEvents.map(event => (
          <EventBox {...event} key={event.id} withArchive showDetails />
        ))}
      </Container>
    </div>
  )
}

export default EventsPage;

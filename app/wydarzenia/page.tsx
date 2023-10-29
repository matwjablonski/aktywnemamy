import Container from '../components/Container'
import EventBox from '../components/EventBox';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/events';
import { getAllSortedEvents, getClosestEvents } from '../utils/events';

const EventsPage = () => {
  const nextEvents = getAllSortedEvents(events);

  return (
    <div className="mt-[110px]">
      <Container>
        <SectionTitle title="Wydarzenia" subtitle="Co się u nas dzieje?" />
        <p className="text-md text-center max-w-lg mx-auto mb-16">Poniżej znajdziesz wszystkie wydarzenia, które zrealizowaliśmy i które są jeszcze przed nami.</p>
        {nextEvents.map(event => (
          <EventBox {...event} key={event.id} withArchive showDetails />
        ))}
      </Container>
    </div>
  )
}

export default EventsPage;

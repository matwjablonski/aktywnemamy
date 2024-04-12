'use client';

import { getEvents } from '@/app/lib/utils/events';
import { getServerSession } from 'next-auth';
import { Table } from '../components/Table';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { EventWithMeta } from '@/app/lib/definitions/Event';

export default function Dashboard() {
  const [events, setEvents] = useState<EventWithMeta[]>([]);
  // console.log('session', session);
  // console.log('events', events);

  const fetchEvents = async () => {
    const fetchedEvents = await fetch('/api/events', { cache: 'no-cache', next: { revalidate: 5 } }).then((res) => res.json());

    setEvents(fetchedEvents.data);
  }

  useEffect(() => {
    fetchEvents();
  }, [])

  const eventsForTable = useMemo(() => {
    return events.map(({ title, date, startTime, description, id }) => (
      {
        title,
        date,
        startTime,
        description,
        id,
      }
    ))
  }, [events]);

  console.log(events)
  
  return (
    <div>
        events
        {eventsForTable.length > 0 && <Table data={eventsForTable} />}
    </div>
  );
}

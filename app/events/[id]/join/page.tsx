'use client';

import Container from '@/app/components/Container';
import { JoinForm } from '@/app/components/JoinForm';
import SectionTitle from '@/app/components/SectionTitle';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const JoinPage = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  const fetchEvent = async () => {
    const fetchedEvents = await fetch(`/api/events/${id}`, { cache: 'no-cache', next: { revalidate: 5 } }).then((res) => res.json());

    setEvent(fetchedEvents.data);
  }

  useEffect(() => {
    fetchEvent();
  }, [id])

  const maxParticipantsMsg = event?.maxParticipants ? `na tym wydarzeniu będzie max ${event?.maxParticipants} osób` : 'różnej na różne wydarzenia';

  return (
    <div className="mt-[110px]">
      <Container>
        <SectionTitle
          title={`Zapisujesz się na wydarzenie: ${event?.title}`}
          align="left"
          subtitle="Zapisz się już dziś"
          maxWidth='xl'
        />
        <p className="text-md max-w-xl mb-4">
          Wypełnij podstawowe informacje celem zapisania się na zajęcia Grupy Nieformalnej Aktywne Mamy. Wydarzenie odbędzie się: <strong>{event?.date}</strong> o godzinie <strong>{event?.starttime}</strong> w <strong>{event?.place}</strong>.</p>
        <p className="text-md max-w-xl mb-24">Na podstawie kolejności zgłoszeń i dostępności miejsc ({maxParticipantsMsg}) poinformujemy Cię email-owo czy jesteś na liście uczestników.</p>
        <JoinForm eventId={id as string} />
      </Container>
    </div>
  )
};

export default JoinPage;

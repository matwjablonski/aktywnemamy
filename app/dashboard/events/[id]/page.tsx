'use client';
import { useParams } from 'next/navigation';
import { Component, useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import { Attendee } from '@/app/lib/definitions/Attendee';
import { Status } from '@/app/components/Status';
import { CellBox } from '@/app/components/CellBox';

const EventDetails = () => {
  const { id } = useParams();
  const [attendees, setAttendees] = useState([]);

  const fetchAttendees = async () => {
    const fetchedAttendees = await fetch(`/api/attendees/${id}`).then((res) => res.json());

    setAttendees(fetchedAttendees.data);
  }

  useEffect(() => {
    fetchAttendees();
  }, []);

  console.log(attendees)

  return (
    <div>
      <h2>Uczestnicy wydarzenia</h2>

      {attendees.length > 0 && <Table<Attendee> 
        data={attendees} 
        cells={{ 
          status: { Component: Status},
          name: { Component: CellBox },
          email: { Component: CellBox }
        }}
      />}
    </div>
  )
}

export default EventDetails;

'use server';

import { sql } from '@vercel/postgres';
import { EventWithMeta } from '../definitions/Event';

export const getEvents = async (): Promise<EventWithMeta[]> => {
  const events = await sql`
    SELECT * FROM events
  `;

  return events.rows as EventWithMeta[];
}

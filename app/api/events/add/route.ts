import { Event } from '@/app/lib/definitions/Event';
import { getServerSession } from 'next-auth';
import { NextResponse, NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/app/lib/definitions';

const POST = async (req: NextRequest) => {
  const session = await getServerSession();
  const data: Omit<Event, 'id'> = await req.json();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const users = await sql<User>`SELECT * FROM users WHERE email=${session.user.email}`;
  const user = users.rows[0];

  await sql`INSERT INTO events (
    id,
    title,
    description,
    date,
    startTime,
    endTime,
    trainer,
    trainerLink,
    place,
    fbLink,
    created_at,
    created_by,
    maxParticipants
  ) VALUES (
    ${uuidv4()},
    ${data.title},
    ${data.description},
    ${data.date},
    ${data.startTime},
    ${data.endTime},
    ${data.trainer},
    ${data.trainerLink},
    ${data.place},
    ${data.fbLink},
    ${new Date().toDateString()},
    ${user.user_id},
    ${data.maxParticipants}
  )`;

  return NextResponse.json({ name: 'John Doe' })
}

export { POST }

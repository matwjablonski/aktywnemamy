import { Attendee } from '@/app/lib/definitions/Attendee';
import { cleanUUID } from '@/app/lib/utils/uuid';
import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const POST = async (req: NextRequest) => {
  const session = await getServerSession();
  const data: Omit<Attendee, 'id'> = await req.json();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  await sql`INSERT INTO attendees (
    id,
    name,
    email,
    phone,
    event,
    childName,
    childAge,
    city,
    joined_at,
    status
  ) VALUES (
    ${cleanUUID(uuidv4())},
    ${data.name},
    ${data.email},
    ${data.phone},
    ${data.event},
    ${data.childName},
    ${data.childAge},
    ${data.city},
    ${new Date().toDateString()},
    'joined'
  )`;

  return NextResponse.json({ data: 'success' });
}

export { POST };

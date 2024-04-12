import { cleanUUID } from '@/app/lib/utils/uuid';
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: {
    event: string;
  }
};

const GET = async (_: NextRequest, { params }: Params) => {
  const eventId = decodeURIComponent(params.event);

  const attendees = await sql`
    SELECT name, email, phone, city, status FROM attendees WHERE event = ${eventId} OR event = ${cleanUUID(eventId)}
  `;

  if (attendees.rowCount > 0) {
    return NextResponse.json({ data: attendees.rows });
  }
  return NextResponse.json({ data: [] });
};

export { GET };

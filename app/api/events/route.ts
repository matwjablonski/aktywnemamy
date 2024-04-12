import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

const GET = async () => {

  const events = await sql`
    SELECT * FROM events
  `;

  return NextResponse.json({ data: events.rows });
}

const DELETE = async (req: NextRequest) => {
  const session = await getServerSession();
  const request = await req.json();
  
  console.log('query', request.query.id);
  sql`
    DELETE FROM events
    WHERE id = ${request.query.id}
  `
}

export { GET, DELETE };

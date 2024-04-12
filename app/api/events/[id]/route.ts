import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { useSearchParams } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const DELETE = async (req: NextRequest) => {
  const session = await getServerSession();
  const request = await req.json();
  
  console.log('query', request.query.id);
  sql`
    DELETE FROM events
    WHERE id = ${request.query.id}
  `
}

const GET = async (req: NextRequest, { params }) => {
  console.log('request.query.id', params.id);

  const events = await sql`
    SELECT * FROM events WHERE id = ${params.id}
  `;

  if (events.rowCount > 0) {
    return NextResponse.json({ data: events.rows[0] });
  }

  return NextResponse.json({ data: null });
};

export { DELETE, GET };

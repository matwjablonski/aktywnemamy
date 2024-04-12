import { getServerSession } from 'next-auth';

export default async function Dashboard() {
  const session =  await getServerSession();

  console.log('session', session);
  return (
    <div>
        dashboard
        {session?.user && <div>Witaj {session.user.name}</div>}
        {!session && <div>Brak sesji</div>}
    </div>
  );
}

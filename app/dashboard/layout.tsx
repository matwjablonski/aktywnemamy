import { FC, PropsWithChildren } from 'react';
import { SideMenu } from './components/SideMenu';
import Container from '../components/Container';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const session =  await getServerSession();


  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="bg-main-light min-h-screen mt-[110px]">
      <Container>
        <div className="flex py-6">
          <SideMenu />
          <div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Layout;

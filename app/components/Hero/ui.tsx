import { PropsWithChildren } from 'react';
import Container from '../Container';

export const Wrapper = ({ children }: PropsWithChildren) => (
  <div className="from-white to-kgw-main min-h-[100vh] lg:h-[100vh] pt-[127px] bg-gradient-to-br-horizontal lg:bg-gradient-to-br overflow-hidden">
    <div className="pt-4 h-full pb-8">
      <Container className="h-full">
        {children}
      </Container>
    </div>
  </div>
);

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className={`
    text-5xl
    md:text-6xl
    lg:text-8xl
    font-bold
    uppercase
    pb-4
    max-w-[550px] 
    text-kgw-secondary 
    
    [&>strong]:text-transparent
  `}>{children}</h1>
);

export const Description = ({ children }: PropsWithChildren) => (
  <p className="text-lg max-w-[650px]">{children}</p>
);

export const Content = ({ children }: PropsWithChildren) => (
  <div
    className={`
      flex
      flex-col
      items-center
      h-full
      gap-16

      lg:flex-row
    `}
  >
    {children}
  </div>
);

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => (
  <div className="pt-6 pb-2 absolute top-0 w-full z-10">{children}</div>
)

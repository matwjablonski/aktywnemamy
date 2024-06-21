import { PropsWithChildren } from 'react';

export const InstaxPhoto = ({ children, className }: PropsWithChildren<{ className: string }>) => (
  <div className={`
    border
    border-t-[20px]
    border-l-[20px]
    border-r-[20px]
    border-b-[60px]
  border-white
    drop-shadow

    ${className || ''}
  `}>{children}</div>
);

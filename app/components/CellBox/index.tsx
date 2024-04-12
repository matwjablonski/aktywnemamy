import { FC, PropsWithChildren } from 'react';

export const CellBox: FC<PropsWithChildren> = ({ children }) => (
  <div className="min-w-[200px]">{children}</div>
);

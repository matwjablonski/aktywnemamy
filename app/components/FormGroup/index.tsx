import { FC, PropsWithChildren } from 'react';

export const FormGroup: FC<PropsWithChildren> = ({ children }) => (
  <div className="mb-4">
    {children}
  </div>
);

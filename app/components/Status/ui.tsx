import { AttendeeStatus } from '@/app/lib/definitions/Attendee';
import { FC, PropsWithChildren } from 'react';

export const Cell: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-[250px]">{children}</div>
);

export const Tag: FC<PropsWithChildren<{ status: AttendeeStatus}>> = ({ children, status }) => (
  <span className={`
    px-4 py-1
    rounded-md
    text-left
    uppercase
    text-nowrap
    
    ${status === 'joined' ? 'bg-secondary text-gray-dark' : ''}
  `}>{children}</span>
);

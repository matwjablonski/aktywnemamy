import { FC } from 'react'
import { Cell, Tag } from './ui'
import { AttendeeStatus } from '@/app/lib/definitions/Attendee';

type Status = {
  status: AttendeeStatus;
};

const mapStatusNames = {
  joined: 'Zapisane zgłoszenie',
  emailSent: 'email wysłany',
  smsSent: 'sms wysłany',
  confirmed: 'potwierdzony',
  notConfirmed: 'nie potwierdzony',
  canceled: 'odwołany',
}

export const Status: FC<Status> = ({ status }) => {
  return (
    <Cell>
      <Tag status={status}>{mapStatusNames[status]}</Tag>
    </Cell>
  )
}

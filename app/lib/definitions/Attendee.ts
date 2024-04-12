export type AttendeeStatus = 'joined' | 'emailSent' | 'smsSent' | 'confirmed' | 'notConfirmed' | 'canceled';

export type Attendee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  event: string;
  childName: string;
  childAge: string;
  city: string;
  status: AttendeeStatus;
};


// zgłoszony, email wysłany, sms wysłany, potwierdzony, nie potwierdzony, odwołany

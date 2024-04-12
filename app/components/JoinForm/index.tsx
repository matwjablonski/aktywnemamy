'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { Input } from '../Input'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select } from '../Select';
import { FormGroup } from '../FormGroup';
import { JoinFormWrapper } from './ui';
import { Attendee } from '@/app/lib/definitions/Attendee';
import { FC } from 'react';

const JoinEventSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(9),
  childName: z.string().min(3),
  childAge: z.string().min(1),
  city: z.string().min(1),
  // startTime: z.string().min(5),
  // endTime: z.string().min(5),
  // trainer: z.string().min(1),
  // trainerLink: z.string().url().optional(),
  // place: z.string().min(1),
  // fbLink: z.string().url(),

});

type JoinEventSchemaType = z.infer<typeof JoinEventSchema>;

export const JoinForm: FC<{ eventId: string }> = ({ eventId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinEventSchemaType>({ resolver: zodResolver(JoinEventSchema) });

  const addAttendee = async (data: Omit<Attendee, 'id'>) => {
    console.log('data', data);

    fetch('/api/attendees/add', { method: 'POST', body: JSON.stringify({...data, event: eventId}), cache: 'no-cache', next: { revalidate: 5 }}); 
  }

  return (
    <JoinFormWrapper>
      <form onSubmit={handleSubmit((data: FieldValues) => addAttendee(data as Omit<Attendee, 'id'>))} noValidate>
        <FormGroup>
          <Input
            label="Adres email"
            register={register}
            name="email"
            type="email"
            placeholder="Adres email"
            required
            errorMsg={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label="Numer telefonu"
            register={register}
            name="phone"
            type="text"
            placeholder="Numer telefonu"
            required
            errorMsg={errors.phone?.message}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label="Imię i nazwisko uczestniczki warsztatów"
            register={register}
            name="name"
            type="text"
            placeholder="Wprowadź swoje imię i nazwisko"
            required
            errorMsg={errors.name?.message}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label="Imię Twojego dziecka"
            register={register}
            name="childName"
            type="text"
            placeholder="Wprowadź imię swojego dziecka"
            required
            errorMsg={errors.childName?.message}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label="Wiek Twojego dziecka"
            register={register}
            name="childAge"
            type="text"
            placeholder="Wprowadź wiek swojego dziecka"
            required
            errorMsg={errors.childAge?.message}
          />
        </FormGroup>
        <FormGroup>
          <Select
            label="Miejscowość zamieszkania"
            register={register}
            name="city"
            errorMsg={errors.city?.message}
            options={
              [
                'Dąbrowa',
                'Dąbrówka',
                'Dopiewiec',
                'Dopiewo',
                'Drwęsa',
                'Fiałkowo',
                'Glinki',
                'Gołuski',
                'Joanka',
                'Konarzewo',
                'Lisówki',
                'Palędzie',
                'Podgaj',
                'Podłoziny',
                'Pokrzywnica',
                'Skórzewo',
                'Trzcielin',
                'Więckowice',
                'Zakrzewo',
                'Zborowo',
                'Zborówko',
                'Żarnowiec',
              ]
            }
          />
        </FormGroup>
        <button type="submit">Dołącz</button>
      </form>
    </JoinFormWrapper>
  )
}

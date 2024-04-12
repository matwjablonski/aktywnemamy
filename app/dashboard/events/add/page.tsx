'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { Input } from '@/app/components/Input';
import { useEffect } from 'react';
import { Event } from '@/app/lib/definitions/Event';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const AddEventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(20),
  date: z.string().min(10),
  startTime: z.string().min(5),
  endTime: z.string().min(5),
  trainer: z.string().min(1),
  trainerLink: z.string().url().optional(),
  place: z.string().min(1),
  fbLink: z.string().url(),
  maxParticipants: z.coerce.number().min(1),
});

type AddEventSchemaType = z.infer<typeof AddEventSchema>;

const AddEventPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddEventSchemaType>({ resolver: zodResolver(AddEventSchema) });

  const addEvent = async (data: Omit<Event, 'id'>) => {

    console.log('data', data);

    fetch('/api/events/add', { method: 'POST', body: JSON.stringify(data)}); 
  }
  
  useEffect(() => {
    
  }, []);

  return (
    <form onSubmit={handleSubmit((data: FieldValues) => addEvent(data as Omit<Event, 'id'>))} noValidate>
      <div className="flex flex-col">
        <Input label="Tytuł wydarzenia" register={register} name="title" type="text" placeholder="Tytuł wydarzenia" required errorMsg={errors.title?.message} />
        <Input label="Opis" register={register} name="description" type="text" placeholder="Opis wydarzenia" required errorMsg={errors.description?.message} />
        <div className="flex gap-2">
          <Input label="Data" register={register} name="date" type="date" placeholder="Data" required errorMsg={errors.date?.message} />
          <Input label="Godzina rozpoczęcia" register={register} name="startTime" type="time" placeholder="Godzina rozpoczęcia" required errorMsg={errors.startTime?.message} />
          <Input label="Godzina zakończenia" register={register} name="endTime" type="time" placeholder="Godzina zakończenia" required errorMsg={errors.endTime?.message} />
        </div>
        <Input label="Trener" register={register} name="trainer" type="text" placeholder="Trener" required errorMsg={errors.trainer?.message} />
        <Input label="Link do strony trenera" register={register} name="trainerLink" type="text" placeholder="Link do strony trenera" errorMsg={errors.trainerLink?.message} />
        <Input label="Miejsce" register={register} name="place" type="text" placeholder="Miejsce" required errorMsg={errors.place?.message} />
        <Input label="Link do wydarzenia na FB" register={register} name="fbLink" type="text" placeholder="Link do wydarzenia na FB" required errorMsg={errors.fbLink?.message} />
        <Input label="Liczba miejsc" register={register} name="maxParticipants" type="number" placeholder="Liczba miejsc" required errorMsg={errors.maxParticipants?.message} />
        <button type="submit">Zapisz</button>
      </div>
    </form>
  )
};

export default AddEventPage;

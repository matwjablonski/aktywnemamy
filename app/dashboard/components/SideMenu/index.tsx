import ButtonLink, { ButtonVariant } from '@/app/components/ButtonLink'

export const SideMenu = () => {
  return (
    <ul className="min-w-[200px] flex flex-col gap-2 mr-8">
      <li>
        <ButtonLink link="/dashboard" label="Dashboard" full />
      </li>
      <li>
        <ButtonLink link="/dashboard/events" label="Wydarzenia" full />
      </li>
      <li>
        <ButtonLink link="/dashboard/events/add" label="Dodaj wydarzenie" variant={ButtonVariant.WHITE} full />
      </li>
      <li>
        <ButtonLink link="/dashboard/rules" label="Regulamin" full />
      </li>
      <li>
        <ButtonLink link="/dashboard/settings" label="Ustawienia" full />
      </li>
    </ul>
  )
}

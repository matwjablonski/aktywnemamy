import TimeCounter from '../components/TimeCounter';
import styles from './Page.module.scss';

export default function RegistrationPage() {
  // console.log(new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long', timeStyle: 'short'}).format(new Date(2023, 9, 28, 21)));
  return (
    <section className="container mx-auto px-4 flex flex-col align-middle items-center justify-center mt-[110px]">
      <div className={`flex flex-col justify-center align-middle text-center ${styles.Page}`}>
        <h2 className="text-4xl font-bold mb-2">Zapisy startują już niedługo!</h2>
        <p className="mb-3 text-lg">Już 28 października br. będziesz mogła zapisać się na pierwsze wydarzenie.</p>
        <p className="mb-3 text-lg">Zapisy na pozostałe wydarzenia będą sukcesywnie odblokowywane, na 5 dni przed wydarzeniem o godz. 21:00.</p>
        <TimeCounter endDate={new Date(2023, 9, 28, 19)} />
      </div>
    </section>
  )
}

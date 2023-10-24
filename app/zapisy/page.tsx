import TimeCounter from '../components/TimeCounter';
import styles from './Page.module.scss';

export default function RegistrationPage() {
  return (
    <div className={`flex flex-col justify-center align-middle text-center ${styles.Page}`}>
      <h2 className="text-4xl font-bold mb-2">Zapisy startują już niedługo!</h2>
      <p className="mb-3 text-lg">Nie przegap! Już 31 października br. będziesz mogła zapisać się na wybrane wydarzenia!</p>
      <TimeCounter endDate={new Date('2023-10-31 00:00')} />
    </div>
  )
}

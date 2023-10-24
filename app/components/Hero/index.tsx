import Image from 'next/image';
import styles from './Hero.module.scss';
import ButtonLink from '../ButtonLink';

const Hero = () => {

  return (
    <section className={`${styles.Hero} mb-20 overflow-hidden`}>
      <div className="container px-4 flex items-center h-full mx-auto">
        <div className={`${styles.Content} mx-auto max-w-xl text-center`}>
          <h2 className={`${styles.Title} relative text-5xl font-bold mb-8 drop-shadow-xl capitalize tracking-wider leading-tight`}>Ćwiczenia. Warsztaty. Szkolenia.</h2>
          <p className="text-lg mb-8 leading-relaxed relative">W ramach inicjatywy oddolnej we współpracy z Ośrodkiem Pomocy Społecznej w Dopiewie realizujemy aktywności dla mam z dziećmi.</p>
          <ButtonLink link="/" label="Sprawdź" className="relative" />
        </div>
      </div>
    </section>
  )
}

export default Hero;

import { useMemo } from 'react';
import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Review from '../components/Review';
import SectionTitle from '../components/SectionTitle';
import { reviews } from '../data/reviews';

const ReviewsPage = () => {
  const average = useMemo(() => Math.round(reviews.reduce((acc, review) => review.rate + acc, 0) / reviews.length * 100) / 100, [])

  return (
    <div className="mt-[110px]">
      <Container>
        <SectionTitle title="Opinie" subtitle="Co myślą inni o naszej inicjatywie" />
        <p className="text-md text-center max-w-lg mx-auto mb-8">Poniżej znajdziesz opinie, które zostały napisane przez uczestniczki i uczestników spotkań w ramach naszej inicjatywy.</p>
        <p className="text-md text-center">Średnia ocena uczestniczek i uczestników: <strong>{average}/5</strong></p>
        <p className="text-md text-center mb-16">Liczba napisanych opinii: <strong>{reviews.length}</strong>. Dziękujemy!</p>
        <div className="text-center">
          <ButtonLink
            className="
            bg-main
            text-white
            hover:bg-main-dark
              px-10 
              py-3 
              mx-auto
              mb-20
              rounded-3xl 
              block
            "
            label='Zostaw swoją opinię'
            target='_blank'
            link="https://forms.gle/CKPqcLJ3cpAAUWiX9"
          />
        </div>
        <div className="flex gap-8 gap-y-20 flex-wrap justify-center mb-48">
          {reviews.length > 0 && reviews.map(review => <Review {...review} key={review.date} />)}
        </div>
        {reviews.length === 0 && (
          <p className="text-center mb-48 text-gray">Nie ma jeszcze opinii. Napisz coś i bądź pierwsza / pierwszy.</p>
        )}
      </Container>
    </div>
  );
}

export default ReviewsPage;

import ArticlePreview from '../components/ArticlePreview';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { news } from '../data/news';

const NewsPage = () => {

  return (
    <div className="mt-[110px]">
      <Container>
        <SectionTitle title="Aktualności" subtitle="Aktywnie w mediach" />
        <p className="text-md text-center max-w-lg mx-auto mb-16">Poniżej znajdziesz informacje prasowe, które pojawiły się o nas w ostatnim czasie. Zapraszamy do lektury.</p>
        <div className="flex max-w-[960px] mx-auto flex-wrap">
          {news.map(article => (
            <ArticlePreview {...article} key={article.title} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;

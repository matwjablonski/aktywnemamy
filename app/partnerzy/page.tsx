import Image from 'next/image';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { partners } from '../data/partners';

export default function PartnersPage() {
  const sortedPartners = partners.sort((a, b) => +new Date(b.month) - +new Date(a.month));
  console.log(sortedPartners);

  const createTitleFromDate = (date: string) => {
    const parsedDate = new Date(date);
    const month = parsedDate.toLocaleString('default', { month: 'long' });
    const year = parsedDate.getFullYear();
    return `${month} ${year}`;
  };
  return (
    <Container className="max-w-[1090px]">
      <div className="mt-[110px]">
          <SectionTitle title="Partnerzy" subtitle="Wspierają nas" />
          <p className="text-md text-center max-w-lg mx-auto mb-24">Aktywne Mamy działają również dzięki partnerom, którzy prowadzą warsztaty i prelekcje, dbają o słodki poczęstunek i razem z Nami tworzą tę społeczność. Poniżej partnerzy, którzy nas wspierali i wspierają.</p>
          <div>
            {sortedPartners.map(item => (
              <div key={item.month}>
                <h3 className="text-secondary text-2xl font-bold">{createTitleFromDate(item.month)}</h3>
                <div className="flex items-center justify-center gap-8 flex-wrap mb-24 py-12">
                  {item.partners.map(partner => (
                    <div key={partner.name} className="p-4">
                      <a href={partner.website} target="_blank" rel="noreferrer noopener nofollow" title={partner.name}>
                        <Image 
                          src={partner.logo}
                          alt={partner.name}
                          width={250}
                          height={150}
                          className="max-h-[150px] object-contain"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </div>
    </Container>
  )
}

import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCards from '../components/SmallCards';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-aut px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {exploreData?.map(({ location, distance, img }) => (
              <SmallCards
                key={location}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}

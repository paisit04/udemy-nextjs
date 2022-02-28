import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import SectionCards from '../components/card/section-cards';

import {
  getVideos,
  getPopularVideos,
  getWatchItAgainVideos,
} from '../lib/videos';
import useRedirectUser from '../utils/redirectUser';

export async function getServerSideProps(context) {
  const { userId, token } = await useRedirectUser(context);
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('Productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();
  return {
    props: {
      disneyVideos,
      productivityVideos,
      travelVideos,
      popularVideos,
      watchItAgainVideos,
    },
  };
}

export default function Home({
  disneyVideos,
  productivityVideos,
  travelVideos,
  popularVideos,
  watchItAgainVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavBar />

        <Banner
          videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" size="large" videos={disneyVideos} />
          <SectionCards
            title="Watch it again"
            size="small"
            videos={watchItAgainVideos}
          />
          <SectionCards title="Travel" size="small" videos={travelVideos} />
          <SectionCards
            title="Productivity"
            size="medium"
            videos={productivityVideos}
          />
          <SectionCards title="Popular" size="small" videos={popularVideos} />
        </div>
      </div>
    </div>
  );
}

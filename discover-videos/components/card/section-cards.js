import Card from './card';
import Link from 'next/link';
import styles from './section-cards.module.css';

const SectionCards = (props) => {
  const { title, videos = [], size } = props;
  // console.log({ videos });
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Link href={`/video/${video.id}`}>
              <a>
                <Card
                  key={video.id}
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default SectionCards;

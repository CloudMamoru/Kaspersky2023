import styles from './Home.module.sass';
import photo from '../../assets/images/my_photo.jpg';

const Home = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div class={styles.hero__left}>
          <h1 className={styles.hero__h1}>
            Hi, I'm <span className={styles.hero__h1_gradient}>Chernakov Aleksandr</span>
            <br />
            Frontend Developer 👋🏻
          </h1>
        </div>
        <img className={styles.hero__right} src={photo} alt='my_photo'></img>
      </div>
    </section>
  );
};

export default Home;

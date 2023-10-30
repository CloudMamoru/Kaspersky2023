import style from './Home.module.css';
import home_page from '../../assets/images/home_image.png';

const Home = (props) => {
  return (
    <div className={style.home}>
      <img src={home_page} alt='Home page' />
    </div>
  );
};

export default Home;

import style from './Home.module.css';
import home_page from '../../assets/images/home_image.png';

const Home = (props) => {
  return (
    <div className={style.home}>
      <label for='cars'>Сортировка: </label>
      <select
        onChange={(e) => {
          alert(e.target.value);
        }}
      >
        <option value='full_name'>По имени</option>
        <option value='account'>По логину</option>
        <option value='email'>По электронной почте</option>
        <option value='group'>По группе</option>
        <option value='phone_number'>По телефону</option>
      </select>
    </div>
  );
};

export default Home;

// const Home = (props) => {
//   return (
//     <div className={style.home}>
//       <img src={home_page} alt='Home page' />
//     </div>
//   );
// };

// export default Home;

import safeboard_logo from '../../assets/images/safeboard.png';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to='/'>
          <img src={safeboard_logo} alt='logo' />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? style.activeLink : undefined)}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? style.activeLink : undefined)}
          to='/employees'
        >
          Employees
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

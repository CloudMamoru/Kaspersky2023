import logo from '../../assets/images/logo.png';
import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
          to='/employees'
        >
          Task
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

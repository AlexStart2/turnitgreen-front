import styles from '@/styles/navbar.module.css';
import React, { useState } from 'react';
import logo from '@/public/Teal Illustrated Iceberg Graph Concept Map Graph.png';
import Image from 'next/image';
import menuSVG from '@/public/menu-outline.svg';
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';

function NavigationBar() {
  const router = useRouter();
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_general}>
          <NavLink to='/'>
            <Image src={logo} priority={true} alt="Turn it Green" className={styles.logotip} />
          </NavLink>
          <div id='nav-opt' className={`${isMobileMenuActive ?styles.navbar_options_active: styles.navbar_options}`}>
            <NavLink to='/' className={styles.navbar_button}>Home</NavLink>
            <NavLink to='/ESG-knowledge' className={styles.navbar_button}>ESG Knowledge</NavLink>
            <NavLink to='/ESG-updates' className={styles.navbar_button}>ESG Updates</NavLink>
            <NavLink to='/Search' className={styles.navbar_button}>Search</NavLink>
            <div className={styles.navbar_button_last}>
              <button className={styles.GetInTouchButton} onClick={() => router.push('/about-us')}>
                Get in Touch
              </button>
            </div>
          </div>
          <button onClick={toggleMobileMenu} className={styles.MenuButton}>
            <Image src={menuSVG} alt='menuButton' className={styles.menu} />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;


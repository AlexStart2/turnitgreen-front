import styles from '@/styles/footer.module.css';
import React from 'react';
import NavLink from './NavLink';
import 'bootstrap/dist/css/bootstrap.css';


function Footer() {


  return (
    <>
      <div className={styles.footer}>

        <div className={styles.cmp_footer}>
          <div className={styles.Copyright}>

            Copyright © 2024 by Turn it green<br/><br/>
            Regulatory information on this website is provided "as is" 
            for informational purposes only. While we take great care 
            in selecting sources, Turn it green assumes no responsibility 
            for the accuracy, completeness, or timeliness of any regulatory 
            information.
          </div>
          <NavLink to='/cookies-policy' className={styles.footElements}>Cookies</NavLink>
          <NavLink to='/disclaimer' className={styles.footElements}>Disclaimer</NavLink>
          <NavLink to='/impressum' className={styles.footElements}>Impresum</NavLink>
          <NavLink to='./sources' className={styles.footElements}>Sources</NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
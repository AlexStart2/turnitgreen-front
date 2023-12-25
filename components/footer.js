import './footer.css';
import React from 'react';
import NavLink from './NavLink';
import 'bootstrap/dist/css/bootstrap.css'


function Footer() {


  return (
    <>
      <div className='footer'>

        <div className='cmp-footer'>
          <div className='Copyright'>

            Copyright © 2023 by Turn it green<br/><br/>
            Regulatory information on this website is provided "as is" 
            for informational purposes only. While we take great care 
            in selecting sources, Turn it green assumes no responsibility 
            for the accuracy, completeness, or timeliness of any regulatory 
            information.
          </div>
          <NavLink to='/cookies-policy' className={'footElements'}>Cookies</NavLink>
          <NavLink to='/disclaimer' className={'footElements'}>Disclaimer</NavLink>
          <NavLink to='/impressum' className={'footElements'}>Impresum</NavLink>
          <NavLink to='./sources' className={'footElements'}>Sources</NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
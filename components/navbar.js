'use client'

import './navbar.css';
import React from 'react';
import logo from './Teal Illustrated Iceberg Graph Concept Map Graph.png';
import Image from 'next/image';
import menuSVG from '@/app/Images/menu-outline.svg';
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';


function NavigationBar() {

  const router=useRouter();

  const NavBarMobile = () => {
    let o = document.getElementById('nav-opt').classList;
    if (o.value === 'navbar-options') {
      o.add('active');
    } else {
      o.remove('active');
    }
  }

  return (
    <>
      <div className='navbar'>
        <div className='navbar-general'>
          <NavLink to='/' ><Image src={logo} alt="Turn it Green" className={'logotip'} /></NavLink>
          <div id='nav-opt' className='navbar-options'>
            <NavLink to='/' className={'navbar-button'}>Home</NavLink>
            <NavLink to='/ESG-knowledge' className={'navbar-button'}>ESG Knowledge</NavLink>
            <NavLink to='/ESG-updates' className={'navbar-button'}>ESG Updates</NavLink>
            <NavLink to='/Search' className={'navbar-button'}>Search</NavLink>
            <div className={'navbar-button last'}><button className='GetInTouchButton' onClick={() => router.push('/about-us')}>Get in Touch</button></div>
          </div>
          <button onClick={() => { NavBarMobile() }} className='MenuButton'><Image src={menuSVG} alt='menuButton' className={'menu'} /></button>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

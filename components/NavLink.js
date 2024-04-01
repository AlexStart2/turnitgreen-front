'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
const NavLink = ({ to, children, className }) => {
  const router = useRouter();

  return (
    <a href={to} onClick={() => router.push(to)} className={className}>
      {children}
    </a>
  );
};

export default NavLink;

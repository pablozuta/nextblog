import React from 'react'
import Link from "next/link";


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><Link href='/'>VALIS</Link></div>

        <a href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>

    </a>
   
    <div className="navbar-links">
        <ul>
            <li><Link href='/posts/web-technologies'>THE WIRE</Link></li>
            <li><Link href='/posts/astro'>ASTRO</Link></li>
            <li><Link href='/posts/react-router'>ROUTER</Link></li>
            <li><Link href='/posts/glosary'>GLOSARY</Link></li>
        </ul>
    
  
   
   
    </div>
    </div>
  )
}

export default Navbar
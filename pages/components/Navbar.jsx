import {useState} from 'react'
import Link from "next/link";


function Navbar() {
  const [btnState, setBtnState] = useState(false)

  function handleClick(){
    setBtnState(btnState => !btnState)
  }

  let toggleClassCheck = btnState ? ' active' : '';

  return (
    <div className='navbar'>
        <div className='logo'><Link href='/'>VALIS</Link></div>

        <a href="#" className="toggle-button" onClick={handleClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
     
    </a>
   
    <div className={`navbar-links${toggleClassCheck}`}>
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
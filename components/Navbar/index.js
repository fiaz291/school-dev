import { useState } from 'react'
import { GiHamburgerMenu} from 'react-icons/gi'
import styles from './styles';
import Link from 'next/link'
import { BiSearchAlt2, BiSolidUser } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar-container">
      <div className="nav-container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className="company-logo">
        <Link href="/">Company</Link>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/size-guide">Size Guide</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="social-icon">
            <BiSearchAlt2 />
            <BsFillBagFill />
            <BiSolidUser />
          </div>
      </div>
      <style jsx>{styles}</style>
    </nav>
  )
}

export default Navbar;
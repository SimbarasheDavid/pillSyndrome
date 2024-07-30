import React from 'react'
import log from '../assets/images/logo 1.png'
import ping from '../assets/images/cart-shopping-solid.svg'
import mag from '../assets/images/magnifying-glass-solid.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <Link to ='/'className='logo'>
                <img src={log} alt="" />
            </Link>
            <nav>
                <ul>
                    <li><Link to ="/Categories">Categories</Link></li>

                    <li>Cart</li>


                </ul>
                <div className='cons'>
                    <div className='cart'>
                        <img src={ping} alt="" />
                    </div>
                </div>
                <div className='magn'>
                    <img src={mag} alt="" />
                    <button>Connect Wallet</button>
                </div>

            </nav>

        </>
    )
}

export default NavBar

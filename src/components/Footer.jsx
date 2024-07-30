import footLogo from '../assets/images/logo 2.png'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id='footie'>
                {/* <hr /> */}
                <div className="wrapper">
                    <div className="zero">
                        <img src={footLogo} alt="" />
                        <div className="para">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi quis itaque!</p>
                        </div>
                    </div>
                    <div className="wallet">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Connect Wallet</li>
                            <li>Merchandise</li>
                            <li>Promotions</li>
                        </ul>
                    </div>
                    <div className="promo">
                        <h1>Subscribe For Merch Discount Updates</h1>
                        <div className="submit">
                            <input type="text" className='email' placeholder='Your email here'/>
                            <input type="button" value= 'Subscribe' className='sub' />
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer

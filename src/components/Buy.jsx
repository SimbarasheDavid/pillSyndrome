import React from 'react'
import buy1 from '../assets/images/Rectangle 85.png'
import buy2 from '../assets/images/Rectangle 86.png'
import buy3 from '../assets/images/Rectangle 87.png'
const Buy = () => {
    return (
        <>
            <section id='shirt'>
                <div className="imgContainer">
                    <div className="buy">
                        <div className='jean'>
                            <img src={buy1} alt="" />
                        </div>
                        <div className="over">
                            <button>Buy Shirt Merch</button>
                        </div>
                    </div>
                    <div className="buy">
                        <div className='jean'>
                            <img src={buy2} alt="" />
                        </div>
                        <div className="over">
                            <button>Buy Shirt Merch</button>
                        </div>
                    </div>
                    <div className="buy">
                        <div className='jean'> 
                            <img src={buy3} alt="" />
                        </div>
                        <div className="over">
                            <button>Buy Shirt Merch</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buy

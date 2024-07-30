import React from 'react'
import data from '../../data/categories'
import { useState } from 'react'
const CategoriesCard = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            {data && data.CategoriesCard.map(card => {
                return (
                    <div className="CategoriesCard">
                        <div className="shirt">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="text">
                            <h3>{card.tittle}</h3>
                            <p>{card.pricedesc}<span>{card.price}</span></p>
                            <a href="">{card.link}</a>
                            <div className="hoodies">
                                <h6>{card.qty}</h6>
                                <div className="toy">
                                    <div className="bear">
                                        <button onClick={()=> setCounter((prevCount) => prevCount -1)}>{card.btn}</button>
                                        <p>{card.counter}</p>
                                        <button onClick={()=> setCounter((prevCount) => prevCount +1)}>{card.btn2}</button>
                                    </div>
                                    <div className="buy">
                                        <button>{card.button}</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CategoriesCard

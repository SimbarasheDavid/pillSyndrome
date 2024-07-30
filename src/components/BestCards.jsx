import React from 'react'
import data from '../../data/data'
const BestCards = () => {
    return (
        <>
            {data && data.BestCards.map(card => {
                return (
                    <div className="BestCards">
                        <div className="img">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="textBox">
                            <h3>{card.tittle}</h3>
                            <p>{card.desc}</p>
                            <a href="">{card.link}</a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BestCards

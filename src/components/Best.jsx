import React from 'react'
import BestCards from './BestCards'
const Best = () => {
    return (
        <>
            <section id='sellers'>
                <h1>Best Sellers</h1>
                <div className="cardContainer">
                    <BestCards />
                </div>
            </section>

        </>
    )
}

export default Best

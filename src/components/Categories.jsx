import React from 'react'
import glass from '../assets/images/magnifying-glass-solid.svg'
import CategoriesCard from './CategoriesCard'
const Categories = () => {
    return (
        <>
            <div className="using">
                <div className='xat'>
                    <h1>Buy Using Category</h1>
                    <form action="" className='inp'>
                        <input type="text" placeholder='Search' />
                    </form>
                    <img src={glass} alt="" />
                </div>
                <div className="texto">
                    <h3>T-Shirts</h3>
                    <h3>Hoodies</h3>
                    <h3>Toy Pills</h3>
                    <h3>Bear Bricks</h3>
                </div>
                <div className='card'>  
                    <CategoriesCard />
                </div>

            </div>
        </>
    )
}

export default Categories

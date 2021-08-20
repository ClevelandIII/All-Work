import React, { useState } from 'react'

const Tour = ({id, name, info, price, image, removeTour}) => {
    return (
        <article className="tour">
            <img src={image} alt={name} />

            <footer>
                <div className="info">
                    <h4>{name}</h4>
                    <h4 className="price">${price}</h4>
                </div>
                <p>{info}</p>
                <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour

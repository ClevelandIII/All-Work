import React, { useState } from 'react'

const Tour = ({id, name, info, price, image, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="tour">
            <img src={image} alt={name} />

            <footer>
                <div className="info">
                    <h4>{name}</h4>
                    <h4 className="price">${price}</h4>
                </div>
                <p>
                    {readMore ? `${info}...` : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? `Show Less` : `Read More`}</button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour

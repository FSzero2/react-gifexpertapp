import React from 'react'

export const GifGridItem = ( {tittle, url} ) => {

    return (
        <div className="card animate__animated animate__slideInLeft">
            <img src= {url} alt={ tittle }/>
            <p> { tittle } </p>
        </div>
    )
}






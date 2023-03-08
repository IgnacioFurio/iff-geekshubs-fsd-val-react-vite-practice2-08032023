import React from 'react'

export const Card = ({dataHome}) => {
    return (
        <>
        <h1>Card</h1>
        <hr />
        <code>{dataHome.map(persona => {return <p key={persona.id}>{persona.name}</p>})}</code>
        </>
    )
}

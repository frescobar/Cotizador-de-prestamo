import React from 'react'

export default function Header({titulo, descripcion}) {
    return (
        <div>
            <h1>{titulo}</h1>
            <h4>{descripcion}</h4>
        </div>
    )
}

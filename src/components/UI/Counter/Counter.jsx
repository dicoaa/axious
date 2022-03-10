import React, { useState } from 'react'

export const Counter = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1) 
    const reset = () => setContador(0)

    return (
        <div>
            <div className="contadorTitulo">
                <h2>{ contador }</h2>
            </div>
            <div>
                <nav className="contador">
                    <button onClick={restar}>Restar</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={sumar}>Sumar</button>
                </nav>
            </div>
        </div>

    )
}

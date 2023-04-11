import React from 'react'
import Pagina from '../components/Pagina'

const array = () => {

  const carros = [
    'Opala',
    'Classic',
    'Ka',
    'Omega',
    'Fuscão',
    'Novo Carro',
  ]

  return (
    <>
      <Pagina titulo="Arrays 3">

        <ol>
          {carros.map(item => (
            <li>{item}</li>
          ))}
        </ol>

      </Pagina>
    </>
  )
}

export default array
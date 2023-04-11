import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Pagina from '../components/Pagina';

const pagina2 = () => {
  return (
    <>
      <Pagina titulo="Página 2">
        <h1>Página 2</h1>
      </Pagina>
    </>
  )
}

export default pagina2
import React from 'react'
import Pagina from '../components/Pagina'

const objeto = () => {
  
  const carros = [
    {marca: 'Chevrolet', modelo: 'Opala', ano: '1971', cor: 'azul', foto: 'https://www.pastorecc.com.br/site/photos/cars/974/bg_nuIPmYqoehpdB15TW9iZ.jpeg'},
    {marca: 'Chevrolet', modelo: 'Clasic', ano: '2012', cor: 'prata', foto: 'https://www.marceloscar.com.br/carros/a4caa8116897d827db6408683276c7d1-thumbjpeg-chevrolet-classic-8830543-1000-750-70.jpg'},
    {marca: 'Ford', modelo: 'Ka', ano: '2005', cor: 'branco', foto: 'https://ponathveiculos.com.br/carros/026241dba79a454455964dfe74f35dcf-thumbjpeg-ford-ka-8775109-1000-750-70.jpg'},
    {marca: 'Chevrolet', modelo: 'Omega', ano: '2000', cor: 'preto', foto: 'https://www.vilaggiomultimarcas.com.br/carros/bb9c1ce8e1873df3139d7e89993ebc2c-thumbjpeg-chevrolet-omega-8551643-900-675-70.jpg'},
    {marca: 'Volkswagen', modelo: 'Fuscão', ano: '1947', cor: 'verde', foto: 'https://d2kcfyngdy66xx.cloudfront.net/anuncios/95995_0000000/G95995_614rtTmxB8GlbLb04LvIdtzRLlxxzXajaEBOl3uJ.jpg'},
  ]


  return (
  <Pagina titulo="Objetos">
    {carros.map(item=>(
       <div>
 <img src= {item.foto}/>
 <h1>{item.marca} - {item.modelo}</h1>
 <p>Ano: {item.ano}</p>
 <p>cor: {item.cor}</p>
 <hr />
 </div>
  ))}   
   </Pagina>
  )
}

export default objeto
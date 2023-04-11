import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiDeputados from '../../services/apiDeputudos'

const hooks = () => {

    const [deputados, setDeputados] = useState ([])

    useEffect(()=>{

     apiDeputados.get('/deputados/').then(resultado=>{
        setDeputados(resultado.data.dados)
     })

    }, [])

  return (
    <Pagina titulo="Deputados">    
    {deputados.map(item=>(
      <p>{item.nome}</p> 
    ))}

    </Pagina>
  )
}

export default hooks
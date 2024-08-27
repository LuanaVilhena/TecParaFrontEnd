import React from 'react'

const Adicao = (props) => {
  return ( //return é tudo que vai ser exibido na tela
    <div>
        <h1>O resultado de num1 + num2 é: 
            {props.num1+props.num2}
        </h1>
    </div>
  )
}

export default Adicao
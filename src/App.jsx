import './style.scss'
import { useState } from 'react'
import { Card } from './Card.jsx'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  const [nameColor, setNameColor] = useState('')
  const [color, setColor] = useState('')
  const [allColors, setAllColors] = useState([])
  const [formularioErro, setFormularioErro] = useState(false)

  function cadastrarCor(evento) {

    evento.preventDefault()

    const novaCorCadastrada = {
      name: nameColor,
      color: color
    }

    if (nameColor.length < 3 || color.length < 6) {

      setFormularioErro(true)

    } else {

      setFormularioErro(false)

      setAllColors([...allColors, novaCorCadastrada])

      setNameColor('')
      setColor('')
    }


  }

  return (
    <div className="App">

      <section className='hadder'>

        <h1>Adicionar nova cor</h1>

        <form className={formularioErro ? 'form-error' : ''} onSubmit={cadastrarCor}>

          <section className='inputs'>
            <div>
              <label htmlFor='name'>Nome</label>
              <input id='name' type='text' value={nameColor} onChange={event => setNameColor(event.target.value)} />
            </div>

            <div>
              <label htmlFor='color' className='color'>Cor</label>
              <input id='color' type='text' value={color} onChange={event => setColor(event.target.value)} />
            </div>
          </section>

          <button className='botao' type='submit'>Adicionar</button>

        </form>

      </section>

      {
        formularioErro ? (
          <span>O seu formulário contém erros</span>
        ) : null
      }

      <section className='colors'>
        {
          allColors.map(
            item => {
              return (
                <Card itemData={item} />
              )
            }
          )
        }
      </section>

    </div>
  )
}

export default App
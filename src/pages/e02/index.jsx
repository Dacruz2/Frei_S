import { Link } from 'react-router-dom'
import './index.scss'

export default function E02() {
    return (
        <div className='pagina-e02'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/assets/images/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/assets/images/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 02 - Converter kg/gramas</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em Javascript <b> para converter kilos em gramas </b> </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Valor em gramas</label>
                            <input placeholder='0' />
                        </div>
                        <a href='#' className='executar'>Executar</a>
                    </div>
                    <h3 className='resultado'>Resultado: O valor convertido é:</h3>
                </div>

            </div>
        </div>
    )
}
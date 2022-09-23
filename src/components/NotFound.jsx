import { Link } from 'react-router-dom'


const NotFound = () => {
    return(
        <div className='card404'>
            <img src="https://static-exp1.licdn.com/sc/h/3p7p6a7q99wymlzghijta8d3p" alt="NotFound"/>
            <h2>Questa pagina non esiste</h2>
            <p>Controlla l’URL o torna alla home page di LinkedIn.</p>
            <Link to={'/'} className='button404'>
            <p>Vai al tuo feed</p>
            </Link>
        </div>
    )
}

export default NotFound
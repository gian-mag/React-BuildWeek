import { Link } from 'react-router-dom'


const NotFound = () => {
    return(
        <div className='card404'>
            <h2>Pagina non Trovata...</h2>

            <Link to={'/'} className='button404'>
            <p>Torna alla Home</p>
            </Link>
        </div>
    )
}

export default NotFound
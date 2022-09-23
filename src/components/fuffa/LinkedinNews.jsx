import {BsChevronCompactDown} from 'react-icons/bs'


const LinkedinNews = () => {
    return (
        <div className="linkedinNews">
            <div>
                <h3>Linkedin Notizie</h3>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="black" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                </svg>
            </div>
            <ul>
                <li>Ucraina: gli ultimi aggiornamenti</li>
                <p>Notizie principali • 4.644 lettori</p>
                <li>Prontuario sul periodo di prova</li>
                <p>23 ore fa • 100 lettori</p>
                <li>Si è inceppata la transizione ecologica</li>
                <p>2 ore fa • 364 lettori</p>
                <li>Che cosa succede a Terra Madre</li>
                <p>23 ore fa</p>
                <li>Eataly passa a Investindustrial</li>
                <p>1 giorno fa • 548 lettori</p>
            </ul>
            <div>
                <button>Visualizza altro <BsChevronCompactDown/></button>
            </div>
        </div>
    )
}

export default LinkedinNews
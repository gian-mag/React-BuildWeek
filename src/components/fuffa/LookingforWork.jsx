import { useState } from "react"

const LookingForWork = () => {

    const [idonot, setIdonot] = useState(true)

    const idontwanttowork = () => {
        setIdonot(false)
    }

    return (
        <div>
           {idonot && <div className="lookingForWork">
                <img src="/AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png" alt="" />
                <h2>Ciao, stai cercando lavoro?</h2>
                <p>Possiamo aiutarti a prepararti per la tua ricerca. Solo tu potrai vedere la tua risposta.</p>
                <div className="buttonAreaLookingForWork">
                    <a href="https://youtu.be/dQw4w9WgXcQ" target='_blank' rel="noreferrer" className="noUnderlinepls"><div className='button404'>
                        <p> si </p>
                    </div></a>
                    <div className='button404' onClick={idontwanttowork}>
                        <p>no</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default LookingForWork
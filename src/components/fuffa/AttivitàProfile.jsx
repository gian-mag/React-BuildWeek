const AttivitàProfile = () => {

    return (
        <div className="">
            <div className="analisiProfile attivitàProfile">
                <div className="analisiProfileHeader">
                    <h4>Analisi</h4>
                    <span className="followers">X follower</span>
                </div>
                <div className="analisiProfileSub">
                    <div className="analisiSections">

                        <div>
                            <div className="ActivityHeader">
                                <div className="SubHeader">È da un po’ che non pubblichi qualcosa</div>

                                <span>I post recenti che condividi o commenti appariranno qui</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="fuffaContainer">
                    <div className="btnFuffa">Mostra tutte le attività </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                    </svg>
                </div>
            </div>
        </div>

    )

}

export default AttivitàProfile
const AnalisiProfile = () => {

    return (
        <div className="analisiProfile ">
            <div className="analisiProfileHeader">
                <h4>Analisi</h4>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg> Solo per te</span> 
            </div>
            <div className="analisiProfileSub anaProfQuery">
                <div className="analisiSections">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>
                    <div className="analisiSectionsSub ">
                        <div>
                        <div className="SubHeader">X visualizzazioni del profilo</div>
                            
                            <span>Scopri chi ha visitato il tuo profilo.</span>
                        </div>
                    </div>
                </div>
                <div className="analisiProfileSub">
                    <div className="analisiSections">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                        </svg>
                        <div className="analisiSectionsSub">
                            <div>
                               <div className="SubHeader">X comparse nel motore di ricerca</div> 
                                <span>Vedi quante volte compari nei risultati di ricerca.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default AnalisiProfile
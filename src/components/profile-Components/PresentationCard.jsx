import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PresentationCard = (props) => {
    return (
        <div className="presentationCard">
            <div className="banner">

            </div>
            <div className="profileImg">

            </div>
            <div className="bottomPart">

                <div className="whoAmI">
                    <h2>Nome Dell'Utente</h2>

                    <h3>posizione dell' Utente</h3>

                    <p>luogo</p>
                </div>


                <div className="buttonArea">
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Disponibile per</Button>
                        <Button variant="text">Aggiungi selezione del profilo</Button>
                        <Button variant="outlined">Altro</Button>
                    </Stack>
                </div>
                
            </div>

        </div>
    )
}

export default PresentationCard
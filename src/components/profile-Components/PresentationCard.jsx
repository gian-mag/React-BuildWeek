import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'

const PresentationCard = (props) => {
    
    const account = useSelector((state) => state.account.user)

    return (

        <div>
            {account && <div className="presentationCard">
            <div className="banner">

            </div>
            <div className="profileImg">
                <img src={account.image} alt='profilepicture'/>
            </div>
            <div className="bottomPart">

                <div className="whoAmI">
                    <h2>{account.name} {account.surname}</h2>

                    <h3>{account.title}</h3>

                    <p>{account.area}</p>
                </div>


                <div className="buttonArea">
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Disponibile per</Button>
                        <Button variant="text">Aggiungi selezione del profilo</Button>
                        <Button variant="outlined">Altro</Button>
                    </Stack>
                </div>
                
            </div>

        </div>}
             
        </div>
        
       
    )
}

export default PresentationCard
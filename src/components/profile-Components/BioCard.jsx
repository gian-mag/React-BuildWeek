import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import BioModal from './BioModal';


const BioCard = () => {

    const account = useSelector((state) => state.account.user)
    console.log(account)
    const [openBio, setOpenBio] = useState(false);
    const handleOpen = () => setOpenBio(true);
    const handleClose = () => setOpenBio(false);

    return (
        <div>
            <Card className="myCard">

                {
                    
                }
                <CardContent>

                    <div className="myIconsWrapper">
                        <Typography gutterBottom variant="h5" component="div">
                            Info

                        </Typography>
                        <div className="myButtonsSect">
                            <div className="myBtnWrap" onClick={handleOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match iconExp" width="24" height="24" focusable="false">
                                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                </svg>
                            </div>

                        </div>
                    </div>
                    <Typography variant='body2' component='div'>
                        {account.bio}
                    </Typography>


                </CardContent>


            </Card>

            {<BioModal show={openBio} handleClosed={handleClose} account={account}/>}

        </div>
    )
}

export default BioCard
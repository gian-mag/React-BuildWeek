import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import PutUserModal from '../modalComponents/PutUserModal';
import AddImgModal from '../modalComponents/AddImgModal';
import AnalisiProfile from '../fuffa/AnalisiProfile'
import AttivitàProfile from '../fuffa/AttivitàProfile'
import InteressiProfile from '../fuffa/InteressiProfile'


const PresentationCard = (props) => {

    const account = useSelector((state) => state.account.user)

    /* const dispatch = useDispatch()

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())
 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []) */

      

    const [openImgModal, setOpenImgModal] = useState(false);
    const handleOpenImg = () => setOpenImgModal(true);
    const handleCloseImg = () => setOpenImgModal(false);


    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (

        <div>
            {account && <div className="presentationCard">
                <div className="banner">

                </div>
                <div className="profileImg">
                    <img src={account.image} alt='profilepicture' onClick={handleOpenImg}/>
                </div>
                <div className="bottomPart">

                    <div className="whoAmI">
                        <div className="accWrappy">
                            <h2>{account.name} {account.surname}</h2>
                            <div className="myBtnWrap" onClick={handleOpen}>
                                <a className="myLink" href="#" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match iconExp" width="24" height="24" focusable="false">
                                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

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
        <PutUserModal show={openModal} handleClosed={handleClose} account={account}/>
        <AddImgModal show={openImgModal} handleClosed={handleCloseImg} accountimg={account.image}/>
        <AnalisiProfile />
        <AttivitàProfile />
        <InteressiProfile />
        </div>

    )
}

export default PresentationCard
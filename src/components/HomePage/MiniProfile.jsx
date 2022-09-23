import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import UnderMiniProfile from '../fuffa/UnderMiniProfile';

const PresentationCard = (props) => {

    const account = useSelector((state) => state.account.user)

    return (

        <div>
            {account && <div className="miniPresCard">
                <div className="miniBanner">

                </div>
                <div className="profileImg miniProfileImg">
                    <img src={account.image} alt='profilepicture' />
                </div>
                <div className="miniBottomPart">

                    <div className="whoAmI">
                        <div className="accWrappy">
                            <h2 className="miniAccName">{account.name} {account.surname}</h2>

                        </div>
                        <p className="miniAccRole">{account.title}</p>
                    </div>


                </div>

            </div>}
            <UnderMiniProfile />


        </div>


    )
}

export default PresentationCard
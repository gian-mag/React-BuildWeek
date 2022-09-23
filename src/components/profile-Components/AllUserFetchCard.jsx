import { useSelector } from "react-redux"
import Button from '@mui/material/Button';

const AllUserFetchCard = (props) => {

    const account = useSelector((state) => state.account.user)

    return (
        <div>
            {
                account && (<div className="singleUserCard">

                    <img src={account.image} alt="userLogo" className="postUserImg knownPeople" />
                    <div className="">
                        <h4>{account.name} {account.surname}</h4>
                        <span>{account.title}</span>
                        <div className="buttonArea">
                            
                            <Button variant="outlined">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                </svg>Collegati</Button>
                        </div>

                    </div>
                </div>)
            }
        </div>
    )

}

export default AllUserFetchCard
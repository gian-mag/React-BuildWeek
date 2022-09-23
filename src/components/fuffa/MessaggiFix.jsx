import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import { getUserAction } from '../../redux/actions'

const MessaggiFix = () => {

    const account = useSelector((state) => state.account.user)
    const dispatch = useDispatch()

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="messaggiFix">
            <div>
                {account.image && <img src={account.image} alt="accImg"/>}
                {account.image && <div className="onlinedot"></div>}
                <p>Messaggistica</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#666666" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                </svg>
            </div>
        </div>
    )
}

export default MessaggiFix
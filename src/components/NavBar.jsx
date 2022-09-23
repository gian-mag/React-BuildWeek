import '../style/NavBar.css'
import { BsLinkedin, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../redux/actions'
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

const NavBar = () => {

    const account = useSelector((state) => state.account.user)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getUserAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="nav">

            <div className='profile'>


                <div className="bar">
                    <BsLinkedin className="logo" />

                    <input type="search" className="inputBar" placeholder='      Cerca' />

                </div>
                <BsSearch className="searchIcon" />
                <div className="iconWrapper">
                    <Link to={'/'} className='navigationLink'>
                        <div className="iconContent  homeIcon">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                            </svg>
                            <span>Home</span>

                        </div>
                    </Link>
                    <div className="iconContent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                        </svg>
                        <span>Rete</span>

                    </div>
                    <div className="iconContent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                        </svg>
                        <span>Lavoro</span>
                    </div>
                    <div className="iconContent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                        </svg>
                        <span>Messaggistica</span>
                    </div>
                    <div className="iconContent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                        </svg>
                        <span>Notifiche</span>
                    </div>
                    <Link to="/profile" className="linkToProfile">
                        <div className="iconContent">

                            <img src={account.image} alt="logo_personale" className="logoNavBar" />
                            <span className="spanNavBar">Tu</span>

                        </div>
                    </Link>

                </div>
                {/* <div className="line">
                     <span></span>
                </div> */}
                <div className="iconContent lav">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                    </svg>
                    <span>Lavoro</span>
                </div>
            </div>

        </div>
    )

}
export default NavBar
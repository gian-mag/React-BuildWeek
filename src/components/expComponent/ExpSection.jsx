
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { BiUserCircle } from 'react-icons/bi'
import '../../style/ExpCard.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import PutExpForm from '../modalComponents/PutExpForm';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getSingleExperiencesAction } from '../../redux/actions'
import { getExperiencesAction } from '../../redux/actions'


const ExpSection = () => {

    const [openUp, setOpenUp] = useState(false);

    const handleOpen = (prop) => {
        setOpenUp(true)
        setSingleId(prop)
        console.log(prop)
    }
    
    const handleClose = () => setOpenUp(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getExperiencesAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [singleId, setSingleId] = useState(null);

    const experiences = useSelector((state) => state.experiences.experiences)

    // const singleExperience = useSelector((state) => state.experiences.singleExperience)

    // const getSingleExperience = (singleId) => {dispatch(getSingleExperiencesAction(singleId))}

    return (
        <div className="profileTwo">
            <Card className="myCard">

                <CardContent>

                    <div className="myIconsWrapper">

                        <Typography gutterBottom variant="h5" component="div" className="goBack">
                            <div className="myButtonsSect">
                                <div className="myBtnWrap myBtnWrapFirst">
                                    <Link to={"/profile"} className="myLink">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mercado-match iconExp" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                            <path d="M9 4l-4.87 7H22v2H4.13L9 20H6.56L1 12l5.56-8z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            Esperienza

                        </Typography>

                        <div className="myButtonsSect">
                            <div className="myBtnWrap">
                                <a className="myLink" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match iconExp" width="24" height="24" focusable="false">
                                        <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                    </svg>
                                </a>

                            </div>


                        </div>
                    </div>

                    {
                        experiences.map((experience, i) =>
                        (
                            <div key={i} className="expWrapWrap">
                                <div className="expWrap">
                                {experience.image ? <img className='uploadedExpImg' src={experience.image} alt='experience_picture'/> : <BiUserCircle className="userExp" />}
                                    <div>
                                        <Typography variant="h6" color="text.secondary">
                                            {experience.role}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {experience.company} - {experience.area}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {experience.description}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="myButtonsSect myButtonSectPut">
                                    <div className="myBtnWrap">
                                        <Link to={"/experience"} className="myLink" onClick={() => handleOpen(experience)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match iconExp" width="24" height="24" focusable="false">
                                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                            </svg>
                                        </Link>
                                    </div>

                                </div>
                                {/* <PutExpForm show={openUp} handleclosed={handleClose} exp={experience}/> */}
                            </div>
                        )
                        )
                    }
                </CardContent>

            </Card >
            {
                singleId && <PutExpForm show={openUp} handleclosed={handleClose} exp={singleId} />
            }
            
        </div >
    )
}

export default ExpSection
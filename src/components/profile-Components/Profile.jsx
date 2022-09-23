import PresentationCard from "./PresentationCard"
import '../../style/profile.css'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../../redux/actions'
import { useEffect, useState } from 'react'
import ExpCard from '../expComponent/ExpCard'
import { getExperiencesAction } from '../../redux/actions'
import BioCard from "./BioCard"
import { useSelector } from "react-redux"
import LoadingScreen from "../LoadingScreen"


const Profile = (props) => {

    const account = useSelector((state) => state.account.user)


    const [ready, setReady] = useState(true)


    const dispatch = useDispatch()

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())
        dispatch(getExperiencesAction())

        setTimeout(() => {
            setReady(false)
        }, 1000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="profile">
            <div className="profileSect">
                <PresentationCard />
                <BioCard />
                <ExpCard />
                {ready && <LoadingScreen />}
            </div>
            <div className="profileFuffa">
                <div className="">

                    <div className="">
                        <a tabIndex="0" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="ember-view">
                            <span className="t-16 t-black--light t-bold">
                                Modifica il profilo pubblico e l’URL
                            </span>
                        </a>

                        <span tabIndex="-1" className="artdeco-hoverable-trigger pv-profile-info-section-button__button-icon artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view">
                            <span aria-describedby="artdeco-hoverable-artdeco-gen-42">
                                <li-icon type="question" size="small" role="img" aria-label="Scopri e modifica il modo in cui ti vedono le persone che non hanno effettuato l’accesso e che ti trovano attraverso i motori di ricerca (es. Google e Bing)."><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                                </svg></li-icon>
                            </span>
                            <div className="ember-view"><div className="ember-view"></div></div>
                        </span>
                    </div>

                    <hr className="artdeco-divider mt4 mb4" />
                    <div className="relative display-flex justify-space-between">
                        <a href="/in/gian-mag/edit/secondary-language/" className="ember-view pv-add-secondary-language-section__button pv-profile-info-section-button__button">
                            <span className="">
                                Aggiungi il tuo profilo in un’altra lingua
                            </span>
                        </a>

                        <span tabIndex="-1" className="artdeco-hoverable-trigger pv-profile-info-section-button__button-icon artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view">
                            <span aria-describedby="artdeco-hoverable-artdeco-gen-43">
                                <li-icon type="question" size="small" role="img" aria-label="Con la creazione del profilo in un’altra lingua, professionisti e recruiter locali potranno trovarti più facilmente."><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                                </svg></li-icon>
                            </span>
                            <div className="ember-view" style={{ "display": "none" }}>
                                <div className="ember-view">

                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

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
import Adv from '../fuffa/Adv'
import ProfileFirst from '../fuffa/ProfileFirst'
import ProfileSecond from '../fuffa/ProfileSecond'
import ProfileThird from '../fuffa/ProfileThird'
import ProfileLast from '../fuffa/ProfileLast'

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
                
                <ProfileFirst />

                <Adv />

                <ProfileSecond />

                <ProfileThird />

                <ProfileLast />
            </div>
        </div>
    )
}

export default Profile

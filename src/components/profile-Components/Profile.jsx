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
    

    return(
        <div className="profile">
            <PresentationCard />
            <BioCard />
            <ExpCard />
            { ready  && <LoadingScreen/>}
        </div>
    )
}

export default Profile

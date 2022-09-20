import PresentationCard from "./PresentationCard"
import '../../style/profile.css'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../../redux/actions'
import { useEffect } from 'react'
import ExpCard from '../expComponent/ExpCard'
import { getExperiencesAction } from '../../redux/actions'


const Profile = (props) => {


    const dispatch = useDispatch()

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())
        dispatch(getExperiencesAction())
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    

    return(
        <div className="profile">
            <PresentationCard />
            <ExpCard />
        </div>
    )
}

export default Profile
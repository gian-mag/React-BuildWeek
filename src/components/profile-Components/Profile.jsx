import PresentationCard from "./PresentationCard"
import '../../style/profile.css'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../../redux/actions'
import { useEffect } from 'react'

const Profile = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())
      }, [])
    

    return(
        <div className="profile">
            <PresentationCard />
        </div>
    )
}

export default Profile
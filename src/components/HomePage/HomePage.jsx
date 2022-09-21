import MiniProfile from "../HomePage/MiniProfile"
import PostCard from '../HomePage/PostCard'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../../redux/actions'
import { useEffect } from 'react'

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div className="miniProfile">
            <MiniProfile className="flexProportions"/>

            <PostCard className="flexPropCard"/>
            
            <MiniProfile className="flexProportions"/>
            
        </div>
    )

}

export default HomePage


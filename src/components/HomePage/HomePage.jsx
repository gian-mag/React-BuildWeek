import MiniProfile from "../HomePage/MiniProfile"
import PostCard from '../HomePage/PostCard'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../../redux/actions'
import { useEffect } from 'react'
import { getPostsActions } from "../../redux/actions"
import { useSelector } from "react-redux"

const HomePage = () => {

    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts.posts)


    

    
    

    useEffect(() => {
        dispatch(getPostsActions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    useEffect(() => {
        // componentDidMount
        dispatch(getUserAction())

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div className="miniProfile">
            <MiniProfile className="flexProportions"/>

            <div className="centerHomeSection">
                {posts && posts.map((e,i)=>(<PostCard className="flexPropCard" key={e._id} post={e}/>))}
            </div>
            
            <MiniProfile className="flexProportions"/>
            
        </div>
    )

}

export default HomePage


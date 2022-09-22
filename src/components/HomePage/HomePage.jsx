import MiniProfile from "../HomePage/MiniProfile"
import PostCard from '../HomePage/PostCard'
import { useDispatch } from 'react-redux'
import { getUserAction } from '../../redux/actions'
import { useEffect } from 'react'
import { getPostsActions } from "../../redux/actions"
import { useSelector } from "react-redux"
import PostNews from "../HomePage/PostNews"
import PutPostForm from '../modalComponents/PutPostForm'
import { useState } from 'react'
import LoadingScreen from "../LoadingScreen"

const HomePage = () => {

    const [postId, setPostId] = useState(null);

    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts.posts)

    const pagePosts = posts.slice(posts.length - 100).reverse()

    const [openPutModal, setOpenPutModal] = useState(false);
    const handleOpen = () => setOpenPutModal(true);
    const handleClose = () => setOpenPutModal(false);

    const getPostId = (p) => {
        setPostId(p)
    }

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

            <div className=" flexProportions">
                <MiniProfile />

            </div>

            <div className="centerHomeSection">
                <PostNews />
                <hr />
                {pagePosts && pagePosts.map((e, i) => (<PostCard className="flexPropCard" key={e._id} post={e} getPost={getPostId} handlePutOpen={handleOpen} />))}
            </div>

            <div className=" flexProportions">
                <MiniProfile />
            </div>

            {
                postId && <PutPostForm show={openPutModal} handleclosed={handleClose} post={postId} />
            }

            {pagePosts.length === 0 && <LoadingScreen/>}

        </div>
    )

}

export default HomePage


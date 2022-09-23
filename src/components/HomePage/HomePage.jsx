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
import Adv from "../fuffa/Adv"
import LookingForWork from "../fuffa/LookingforWork"
import LinkedinNews from "../fuffa/LinkedinNews"
import FuffaElementHome from "../fuffa/FuffaElementHome"

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

            <div className=" flexProportionsFirst">
                <MiniProfile />
                <FuffaElementHome/>

            </div>
            <div className="visualFuffa">
                <button id="ember655" className=" artdecoR artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--full artdeco-button--tertiary ember-view scaffold-layout__sidebar-toggle" type="button">  <li-icon aria-hidden="true" type="chevron-down" className="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                </svg></li-icon>

                    <span className="arteSpan">
                        Visualizza altro
                    </span>
                </button>
            </div>
            <div className="centerHomeSection">
                <LookingForWork />
                <PostNews />
                <hr />
                {pagePosts && pagePosts.map((e, i) => (<PostCard className="flexPropCard" key={e._id} post={e} getPost={getPostId} handlePutOpen={handleOpen} />))}
            </div>

            <div className=" flexProportionsSecond">
                <LinkedinNews/>
                <Adv/>
            </div>

            {
                postId && <PutPostForm show={openPutModal} handleclosed={handleClose} post={postId} />
            }

            {pagePosts.length === 0 && <LoadingScreen/>}

        </div>
    )

}

export default HomePage


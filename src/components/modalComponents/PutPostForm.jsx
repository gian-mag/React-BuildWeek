import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { putPostAction } from '../../redux/actions'

const PutPostForm = (props) => {


    const dispatch = useDispatch()


    const [modPost, setModPost] = useState({
        _id: props.post._id,
        text: props.post.text,
        username: props.post.username,
        user: props.post.user,
        createdAt: props.post.createdAt,
        updatedAt: props.post.updateAt,
        __v: props.post.__v
    })

    useEffect(() => {
        setModPost({
            _id: props.post._id,
            text: props.post.text,
            username: props.post.username,
            user: props.post.user,
            createdAt: props.post.createdAt,
            updatedAt: props.post.updateAt,
            __v: props.post.__v
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleChange = (propertyName, propertyValue) => {
        setModPost({
            ...modPost,
            [propertyName]: propertyValue,
        })
    }

    const subModPost = (e) => {
        e.preventDefault()
        let body = {
            "_id": modPost._id,
            "text": modPost.text,
            "username": modPost.username,
            "user": modPost.user,
            "createdAt": modPost.createdAt,
            "updatedAt": modPost.updatedAt,
            "__v": modPost.__v
        }
        dispatch(putPostAction(body, props.post._id))
        props.handleclosed()

    }


    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton onHide={props.handleclosed}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modifica Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modalFormNotCenter">

                    <div>
                        <textarea cols="30" rows="10" value={modPost.text} placeholder="Di cosa vorresti parlare?" onChange={(e) => { handleChange('text', e.target.value) }}></textarea>
                    </div>


                </form>
            </Modal.Body>
            <Modal.Footer className="footForm">

                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={subModPost}>Salva</Button>

            </Modal.Footer>


        </Modal>


    )

}

export default PutPostForm
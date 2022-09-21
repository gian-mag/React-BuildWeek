import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postPostsAction } from '../../redux/actions'
import { useState } from 'react'

const ModalNewPost = (props) =>{

    const [newPost, setNewPost] = useState({
        text: ''
    })

    const dispatch = useDispatch()

    const handleChange = (propertyName, propertyValue) => {
        setNewPost({
            ...newPost,
            [propertyName]: propertyValue,
        })
    }
    const subPost = (e) => {
        console.log(newPost);
        e.preventDefault()
        let body = {
            text: newPost.text
        }
        dispatch(postPostsAction(body))
        // props.handlecloded()
    }


    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

    >
        <Modal.Header closeButton onHide={props.handleClosed}>
            <Modal.Title id="contained-modal-title-vcenter">
                Aggiungi esperienza
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="modalForm">
                
                    {/* <p>Descrizione</p> */}
                    <textarea cols="30" rows="10" onChange={(e) => { handleChange('text', e.target.value) }}></textarea>
             
            </div>
        </Modal.Body>
        <Modal.Footer className="footForm">
            
            <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={subPost}>Pubblica</Button>
            {/* <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={subModExp}>Salva</Button> */}

        </Modal.Footer>
    </Modal>
    )
}

export default ModalNewPost
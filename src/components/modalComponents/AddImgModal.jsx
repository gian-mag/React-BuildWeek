import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { profileImgPostAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

const AddImgUser = (props) => {

    const dispatch = useDispatch()

    const [img, setImg] = useState('')

    const imgPost = () => {
        dispatch(profileImgPostAction(img)) 
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
                    Aggiungi un immagine
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modalForm" id='formimg'>
                    
                    <input type="file" name='image' value={img} onChange={(e)=>(setImg(e.target.value))}/>
                 
                </form>
            </Modal.Body>
            <Modal.Footer className="footForm">
                
                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={props.handleClosed}>Annulla</Button>
                <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={imgPost}>Salva</Button>

            </Modal.Footer>
        </Modal>
    )
}

export default AddImgUser
import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { deletePostAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const AddImgUser = (props) => {

    const dispatch = useDispatch()

    const delPost = () => {
        dispatch() // metti la tua dispatch ADD IMG
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
                <form className="modalForm">
                    
                    <input type="file"/>
                 
                </form>
            </Modal.Body>
            <Modal.Footer className="footForm">
                
                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={props.handleClosed}>Annulla</Button>
                <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={delPost}>Salva</Button>

            </Modal.Footer>
        </Modal>
    )
}

export default AddImgUser
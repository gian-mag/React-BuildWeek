import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { deletePostAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const DelPost = (props) => {

    const dispatch = useDispatch()

    const delPost = () => {
        dispatch(deletePostAction(props.post._id))
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
                    Elimina Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalForm">
                    
                    <p>Sicuro di voler eliminare questo post?</p>
                 
                </div>
            </Modal.Body>
            <Modal.Footer className="footForm">
                
                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={props.handleClosed}>Annulla</Button>
                <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={delPost}>Elimina</Button>

            </Modal.Footer>
        </Modal>
    )
}


export default DelPost
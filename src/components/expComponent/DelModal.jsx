import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { deleteExperiencesAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'



const DelModal = (props) => {

    const dispatch = useDispatch()

    const delExp = () => {
        
        dispatch(deleteExperiencesAction(props.exp._id))
        props.handleClosed()
        props.ciccu()
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
                    
                    <p>Sicuro di voler eliminare questa esperienza</p>
                 
                </div>
            </Modal.Body>
            <Modal.Footer className="footForm">
                
                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={props.handleClosed}>Annulla</Button>
                <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={delExp}>Elimina</Button>

            </Modal.Footer>
        </Modal>
    )
}


export default DelModal
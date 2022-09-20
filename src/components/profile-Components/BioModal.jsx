import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'



const BioModal = (props) => {
    return(
        
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton onHide={props.handleclosed}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Aggiungi esperienza
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modalForm">
                    <div>
                        <p>Descrizione</p>
                        {/* <textarea cols="30" rows="10" onChange={(e) => { handleChange('description', e.target.value) }}></textarea> */}
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="footForm">
                <Button className="delForm">Elimina Esperienza</Button>
                {/* <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={subModExp}>Salva</Button> */}

            </Modal.Footer>
        </Modal>
        
    )
}

export default BioModal
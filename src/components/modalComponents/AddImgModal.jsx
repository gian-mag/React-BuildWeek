import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { profileImgPostAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';

const AddImgUser = (props) => {

    const dispatch = useDispatch()

    const [img, setImg] = useState(null)
    const [fileDataURL, setFileDataURL] = useState(null);

    useEffect(() => {
        let fileReader, isCancel = false;
        if (img) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(img);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [img]);

    const imgPost = () => {
        dispatch(profileImgPostAction(img)) 
        setImg(null)
        setFileDataURL(null)
        props.handleClosed()
    }


    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton onHide={() => {
                props.handleClosed()
                setImg(null)
                setFileDataURL(null)
            }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Aggiungi un immagine
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modalForm" id='formimg'>

                    {props.accountimg && <img src={fileDataURL==null ? props.accountimg : fileDataURL} alt="profilePic" className='profilePicModal'/>}
                    
                    <input type="file" name='profile' className='imputPicProfile' onChange={(e)=>(setImg(e.target.files[0]))}/>
                 
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
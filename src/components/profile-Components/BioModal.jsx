import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getUserAction, putUserAction } from '../../redux/actions'
import { useState } from 'react'

const BioModal = (props) => {

    const dispatch = useDispatch()

    const handleChange = (propertyName, propertyValue) => {
        setModUser({
            ...modUser,
            [propertyName]: propertyValue,
        })
    }

    const [modUser, setModUser] = useState({
        _id: props.account._id,
        name: props.account.name,
        surname: props.account.surname,
        email: props.account.email,
        bio: props.account.bio,
        title: props.account.title,
        area: props.account.area,
        image: props.account.image,
        username: props.account.username,
        createdAt: props.account.createdAt,
        updatedAt: props.account.updatedAt,
        __v: props.account.__v
    })

    const subModUser = (e) => {
        console.log(modUser);
        e.preventDefault()
        let body = {
            '_id': modUser._id,
            'name': modUser.name,
            'surname': modUser.surname,
            'email': modUser.email,
            'bio': modUser.bio,
            'title': modUser.title,
            'area': modUser.area,
            'image': modUser.image,
            'username': modUser.username,
            'createdAt': modUser.createdAt,
            'updatedAt': modUser.updateAt,
            '__v': modUser.__v
        }
        dispatch(putUserAction(body))
        dispatch(getUserAction())

    }

    return (

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
                        <textarea cols="30" rows="10" onChange={(e) => { return handleChange('bio', e.target.value) }}></textarea>
                 
                </div>
            </Modal.Body>
            <Modal.Footer className="footForm">
                
                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={subModUser}>Salva</Button>
                {/* <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={subModExp}>Salva</Button> */}

            </Modal.Footer>
        </Modal>

    )
}

export default BioModal
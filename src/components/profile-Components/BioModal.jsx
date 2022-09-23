import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { putUserAction } from '../../redux/actions'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserAction } from '../../redux/actions'

const BioModal = (props) => {

    const account = useSelector((state) => state.account.user)

    const dispatch = useDispatch()

    const handleChange = (propertyName, propertyValue) => {
        setModUser({
            ...modUser,
            [propertyName]: propertyValue,
        })
    }

    const saveModal = () => {
        props.handleClosed()
    }

    useEffect(() => {
        setModUser({
            _id: account._id,
            name: account.name,
            surname: account.surname,
            email: account.email,
            bio: account.bio,
            title: account.title,
            area: account.area,
            image: account.image,
            username: account.username,
            createdAt: account.createdAt,
            updatedAt: account.updatedAt,
            __v: account.__v
        })
    },[account])

    const [modUser, setModUser] = useState({
        _id: account._id,
        name: account.name,
        surname: account.surname,
        email: account.email,
        bio: account.bio,
        title: account.title,
        area: account.area,
        image: account.image,
        username: account.username,
        createdAt: account.createdAt,
        updatedAt: account.updatedAt,
        __v: account.__v
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
        saveModal()
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
                    <textarea cols="30" rows="10" value={modUser.bio} onChange={(e) => { handleChange('bio', e.target.value) }}></textarea>

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
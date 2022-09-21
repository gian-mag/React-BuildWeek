import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { putUserAction } from '../../redux/actions'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const PutUserModal = (props) => {

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

    const subModUserFirstPart = (e) => {
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


                    <form className="modalForm">
                        <div>
                            <p>Nome*</p>
                            <input className="inputForm" type="text" placeholder="Esempio: Retail Sales Manager" required value={modUser.name} onChange={(e) => {
                                handleChange('name', e.target.value)
                            }} />
                        </div>
                        <div>
                            <p>Cognome*</p>
                            <input className="inputForm" type="text" name="" placeholder="Esempio: Microsoft" required value={modUser.surname} onChange={(e) => {
                                handleChange('surname', e.target.value)
                            }} />
                        </div>
                        <div>
                            <p>Qualifica*</p>
                            <input cols="30" rows="10" value={modUser.title} onChange={(e) => { handleChange('title', e.target.value) }}/>
                        </div>

                        <div>
                            <p>Email*</p>
                            <input className="inputForm" type="email" placeholder="Esempio: Milano, Italia" required value={modUser.email} onChange={(e) => {
                                handleChange('email', e.target.value)
                            }} />
                        </div>
                        <div>
                            <p>Luogo di Nascita*</p>
                            <input className="myDate" aria-required="false" required value={modUser.area} onChange={(e) => {
                                handleChange('area', e.target.value)
                            }} />


                        </div>



                    </form>

                </div>
            </Modal.Body>
            <Modal.Footer className="footForm">

                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={subModUserFirstPart}>Salva</Button>
                {/* <Button style={{"borderRadius": "100px"}} variant="contained" type="button"  onClick={subModExp}>Salva</Button> */}

            </Modal.Footer>
        </Modal>

    )
}

export default PutUserModal
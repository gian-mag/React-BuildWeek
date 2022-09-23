import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { putUserAction } from '../../redux/actions'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'



const PutUserModal = (props) => {

    const account = useSelector((state) => state.account.user)

    const dispatch = useDispatch()

    const handleChange = (propertyName, propertyValue) => {
        setModUserNoBio({
            ...modUserNoBio,
            [propertyName]: propertyValue,
        })
    }

    const saveModal = () => {
        props.handleClosed()
    }

    const [modUserNoBio, setModUserNoBio] = useState({
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
        console.log(modUserNoBio);
        e.preventDefault()
        let body = {
            '_id': modUserNoBio._id,
            'name': modUserNoBio.name,
            'surname': modUserNoBio.surname,
            'email': modUserNoBio.email,
            'bio': modUserNoBio.bio,
            'title': modUserNoBio.title,
            'area': modUserNoBio.area,
            'image': modUserNoBio.image,
            'username': modUserNoBio.username,
            'createdAt': modUserNoBio.createdAt,
            'updatedAt': modUserNoBio.updateAt,
            '__v': modUserNoBio.__v
        }
        dispatch(putUserAction(body))
        saveModal()
    }

    useEffect(() => {

        setModUserNoBio({
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
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account])


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
                <div className="modalFormNotCenter">


                    <form className="modalFormNotCenter">
                        <div>
                            <p>Nome*</p>
                            <input className="inputForm" type="text" placeholder="Nome" required value={modUserNoBio.name} onChange={(e) => {
                                handleChange('name', e.target.value)
                            }} />
                        </div>
                        <div>
                            <p>Cognome*</p>
                            <input className="inputForm" type="text" name="" placeholder="Cognome" required value={modUserNoBio.surname} onChange={(e) => {
                                handleChange('surname', e.target.value)
                            }} />
                        </div>
                        <div>
                            <p>Qualifica*</p>
                            <input cols="30" rows="10" value={modUserNoBio.title} placeholder="Esempio: Studente, Dirigente.." onChange={(e) => { handleChange('title', e.target.value) }} />
                        </div>

                        <div>
                            <p>Email*</p>
                            <input className="inputForm" type="email" placeholder="Esempio: test@test.test" required value={modUserNoBio.email} onChange={(e) => {
                                handleChange('email', e.target.value)
                            }} />
                        </div>
                        <div>
                            <p>Luogo di Nascita*</p>
                            <input className="myDate" aria-required="false" placeholder="Esempio: Milano, Lombardia" required value={modUserNoBio.area} onChange={(e) => {
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
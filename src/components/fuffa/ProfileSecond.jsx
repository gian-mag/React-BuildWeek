import AllUserFetchCard from '../profile-Components/AllUserFetchCard'
import { useState, useEffect } from 'react'

const ProfileSecond = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {

        let headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
        }

            try {
                let resp = await fetch(
                    'https://striveschool-api.herokuapp.com/api/profile/',
                    {
                        method: 'GET',
                        headers,
                    }
                )
                if (resp.ok) {
                    let data = await resp.json()

                    setUsers(data.reverse().slice(0,4))

                } else {
                    console.log('error')
                }
            } catch (error) {
                console.log(error)
            }
        
    }

    useEffect(() => { fetchUsers() }, [])


    return (
        <div className="firstSection companyKnown">
            <h4 className="titleAllFuffa">Altre aziende consultate</h4>
            {
                users.length !== 0 && users.map((e, i) => (<AllUserFetchCard account={e} key={e._id} />))
            }

        </div>

    )
}

export default ProfileSecond
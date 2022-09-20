export const GET_ALL_USER = 'GET_ALL_USER'
export const GET_ACCOUNT = 'GET_ACCOUNT'
export const GET_EXPERIENCES = 'GET_EXPERIENCES'
export const GET_SINGLE_EXPERIENCE = 'GET_SINGLE_EXPERIENCE'


export const getUserAction = () => {
  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          method: 'GET',
          headers,
        }
      )
      if (resp.ok) {
        let data = await resp.json()
        console.log('GETSTATE', getState())
        dispatch({
          type: GET_ACCOUNT,
          payload: data,
        })
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const putUserAction = (data) => {
  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          method: 'PUT',
          headers,
          body: JSON.stringify(data)
        }
      )
      if (resp.ok) {
        console.log('GETSTATE', getState())
        console.log('modifiche utente avvenute con successo');
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getExperiencesAction = () => {
  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/632821ab6d79a500150902f0/experiences',
        {
          method: 'GET',
          headers,
        }
      )
      if (resp.ok) {
        let data = await resp.json()
        console.log('GETSTATE', getState())
        dispatch({
          type: GET_EXPERIENCES,
          payload: data,
        })
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const getSingleExperiencesAction = (expId) => {
  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/632821ab6d79a500150902f0/experiences/${expId}`,
        {
          method: 'GET',
          headers,
        }
      )
      if (resp.ok) {
        let data = await resp.json()
        console.log('GETSTATE', getState())
        dispatch({
          type: GET_SINGLE_EXPERIENCE,
          payload: data,
        })
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const postExperiencesAction = (data) => {

  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4',
    "Content-Type": "application/json"
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/632821ab6d79a500150902f0/experiences',
        {
          method: 'POST',
          headers,
          body: JSON.stringify(data)
        }
      )
      if (resp.ok) {
        console.log('GETSTATE', getState())
        console.log('added succesfully');

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }

  }
}

export const putExperiencesAction = (data, expId) => {
  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/632821ab6d79a500150902f0/experiences/${expId}`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify(data)
        }
      )
      if (resp.ok) {
        console.log('GETSTATE', getState())
        console.log('MODIFIED succesfully');

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteExperiencesAction = (expId) => {
  let headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MjFhYjZkNzlhNTAwMTUwOTAyZjAiLCJpYXQiOjE2NjM1NzQ0NDQsImV4cCI6MTY2NDc4NDA0NH0.19jtd3dROekp-6-Hfjt13YTBBrxtLhgeu4ZcI07tRt4'
  }

  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/632821ab6d79a500150902f0/experiences/${expId}`,
        {
          method: 'DELETE',
          headers
        }
      )
      if (resp.ok) {
        console.log('GETSTATE', getState())
        console.log('DELETED succesfully');

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
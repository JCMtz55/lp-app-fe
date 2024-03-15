import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_ENDPOINT}v1/record/`

export const create_record = async (user, record_request) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.id_token}`
    }
  }

  let res
  await axios
    .post(baseUrl + 'create', record_request, config)
    .then((response) => (res = response.data))
    .catch((error) => {
      throw error.response.data.error
    })
  return res
}

export const get_user_records = async (user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.id_token}`
    }
  }

  let res
  await axios
    .get(baseUrl, config)
    .then((response) => (res = response.data))
    .catch((error) => {
      throw error.response.data.error
    })
  return res
}

export const delete_user_record = async (user, record_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.id_token}`
    }
  }

  let res
  await axios
    .post(baseUrl + 'delete', record_id, config)
    .then((response) => (res = response.data))
    .catch((error) => {
      throw error.response.data.error
    })
  return res
}

import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_ENDPOINT}v1/operation/`

export const get_operations = async (user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.id_token}`
    }
  }

  let operation_list = []
  await axios.get(baseUrl, config).then((response) => (operation_list = response.data))
  return operation_list
}

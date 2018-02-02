import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (object) => {
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async(object) => {
  const urlOfObject = baseUrl + "/" + object.id
  const response = await axios.put(urlOfObject, object)
  return response.data
}

export default { getAll , create, update}
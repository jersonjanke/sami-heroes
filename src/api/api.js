import axios from 'axios'
const TOKEN = '1553314874865944'
const URL_BASE = `https://www.superheroapi.com/api.php/${TOKEN}`

const searchHeroes = (name) => {
  return axios.get(`${URL_BASE}/search/${name}`)
}

export default searchHeroes

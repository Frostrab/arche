import axios from 'axios'
export const loginService = {
  loginService: login,
}
const url = `http://localhost:4000/`
const login = async (username, password) => {
  try {
    const res = await axios.get('/login')
    // axios.get (`${url}/login`).then (res => res);
  } catch (e) {
    return e
  }
}

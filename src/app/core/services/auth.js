const AUTH_API = 'http://localhost:8000/auth';
let TOKEN = null;
export const isAuth = () => TOKEN !== null;
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getDefaultHeaders = () => {
  if (!TOKEN) return false;
  return { ...options.headers.headers, Authorizations: 'Bearer ' + TOKEN }
}
export const register = async (credentials) => {
  const requestOptions = { ...options, body: JSON.stringify(credentials) };
  const response = await fetch(AUTH_API + '/register', requestOptions).then(res => res.json())
  console.table(response)

  if (response.access_token) {
    TOKEN = response.access_token
    return 'USER connected'
  } else {
    return 'Connection Failed'
  }
}

export const login = async (credentials) => {
  const requestOptions = { ...options, body: JSON.stringify(credentials) };
  const response = await fetch(AUTH_API + '/login', requestOptions).then(res => res.json())
  console.table(response)
  if (response.access_token) {
    TOKEN = response.access_token
    return 'USER connected'
  } else {
    return 'Connection Failed'
  }
}
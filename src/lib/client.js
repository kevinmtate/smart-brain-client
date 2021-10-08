const API_BASE_URL = 'http://localhost:3001'
// const API_BASE_URL = 'https://morning-anchorage-58695.herokuapp.com'

const client = (endpoint, { method = 'GET', body = {} }) => {
  const url = API_BASE_URL + endpoint

  const params = {
    method,
    headers: { 
      'Content-Type': 'application/json',
    },
  }

  if (method !== 'GET') {
    params.body = JSON.stringify(body)
  }

  return fetch(url, params).then(res => res.json()).catch(console.error)
}

client.get = (endpoint) => client(endpoint, {})
client.post = (endpoint, body) => client(endpoint, { method: 'POST', body })
client.put = (endpoint, body) => client(endpoint, { method: 'PUT', body })

export default client
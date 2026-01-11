const BASE_URL = import.meta.env?.VITE_API_URL || ''

if (!BASE_URL) {
  console.warn('VITE_API_URL is not set; API requests will use relative paths.')
} else {
  console.log('Using API base URL:', BASE_URL)
}

export function apiFetch(path, opts){
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`
  return fetch(url, opts)
}

export default { apiFetch }

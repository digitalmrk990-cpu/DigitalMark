// Thin fetch wrapper around the backend API.
const BASE = import.meta.env.VITE_API_URL || '/api'

async function request(path, options = {}) {
  const token = localStorage.getItem('sma_token')
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(err.message || `Error ${res.status}`)
  }
  return res.status === 204 ? null : res.json()
}

export const api = {
  // public
  submitLead: (data) =>
    request('/leads', { method: 'POST', body: JSON.stringify(data) }),
  getServices: () => request('/services'),
  getProjects: () => request('/projects'),

  // auth
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  // admin
  getLeads: () => request('/admin/leads'),
  updateLead: (id, data) =>
    request(`/admin/leads/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteLead: (id) => request(`/admin/leads/${id}`, { method: 'DELETE' }),
}

import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export function useAuth() {
  const [token, setToken] = useState(() => localStorage.getItem('sma_token'))

  useEffect(() => {
    if (token) localStorage.setItem('sma_token', token)
    else localStorage.removeItem('sma_token')
  }, [token])

  const logout = () => setToken(null)
  return { token, setToken, logout, isAuthed: !!token }
}

export function RequireAuth({ children }) {
  const token = localStorage.getItem('sma_token')
  if (!token) return <Navigate to="/admin/login" replace />
  return children
}

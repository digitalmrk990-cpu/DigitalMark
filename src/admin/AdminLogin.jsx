import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function AdminLogin() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { token } = await api.login(email, password)
      localStorage.setItem('sma_token', token)
      nav('/admin')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const inputCls =
    'w-full rounded-xl border-2 border-ink bg-cream-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange'

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-100 px-5">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border-2 border-ink bg-cream-50 p-8 shadow-[6px_6px_0_0_#1C1917]">
        <h1 className="font-display text-3xl font-semibold text-ink">Admin</h1>
        <p className="mt-1 text-sm text-ink-muted">Sign in to manage leads and content.</p>
        <div className="mt-6 space-y-4">
          <input
            className={inputCls}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={inputCls}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="mt-3 text-sm text-orange-700">{error}</p>}
        <button disabled={loading} className="btn-primary mt-6 w-full">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
        <p className="mt-4 text-center text-xs text-ink-muted">
          Seeded demo: admin@agency.com / admin123
        </p>
      </form>
    </div>
  )
}

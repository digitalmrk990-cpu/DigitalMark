import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

const STATUSES = ['new', 'contacted', 'won', 'lost']
const statusColor = {
  new: 'bg-orange text-ink',
  contacted: 'bg-cream-200 text-ink',
  won: 'bg-ink text-cream-50',
  lost: 'bg-cream-100 text-ink-muted',
}

export default function AdminDashboard() {
  const nav = useNavigate()
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = () => {
    setLoading(true)
    api
      .getLeads()
      .then(setLeads)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  const setStatus = async (id, status) => {
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)))
    try {
      await api.updateLead(id, { status })
    } catch {
      load()
    }
  }

  const remove = async (id) => {
    if (!confirm('Delete this lead?')) return
    await api.deleteLead(id)
    setLeads((ls) => ls.filter((l) => l.id !== id))
  }

  const logout = () => {
    localStorage.removeItem('sma_token')
    nav('/admin/login')
  }

  const counts = STATUSES.reduce(
    (acc, s) => ({ ...acc, [s]: leads.filter((l) => l.status === s).length }),
    {}
  )

  return (
    <div className="min-h-screen bg-cream-100">
      <header className="border-b-2 border-ink bg-cream-50">
        <div className="container-x flex h-16 items-center justify-between">
          <h1 className="font-display text-2xl font-semibold text-ink">Leads</h1>
          <button onClick={logout} className="btn-outline py-2">Sign out</button>
        </div>
      </header>

      <main className="container-x py-10">
        <div className="grid gap-4 sm:grid-cols-4">
          {STATUSES.map((s) => (
            <div key={s} className="rounded-xl border-2 border-ink bg-cream-50 p-5">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-ink-muted">
                {s}
              </p>
              <p className="mt-1 font-display text-3xl font-semibold text-ink">{counts[s] || 0}</p>
            </div>
          ))}
        </div>

        {error && <p className="mt-6 text-sm text-orange-700">{error}</p>}
        {loading ? (
          <p className="mt-10 text-ink-muted">Loading leads…</p>
        ) : leads.length === 0 ? (
          <p className="mt-10 text-ink-muted">No leads yet. Submissions from the contact form land here.</p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border-2 border-ink bg-cream-50">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-ink font-heading text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Message</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {leads.map((l) => (
                  <tr key={l.id} className="align-top">
                    <td className="px-4 py-3 font-semibold">{l.name}</td>
                    <td className="px-4 py-3 text-ink-muted">
                      <div>{l.email}</div>
                      {l.phone && <div>{l.phone}</div>}
                    </td>
                    <td className="px-4 py-3">{l.service}</td>
                    <td className="max-w-xs px-4 py-3 text-ink-muted">{l.message}</td>
                    <td className="px-4 py-3">
                      <select
                        value={l.status}
                        onChange={(e) => setStatus(l.id, e.target.value)}
                        className={`rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase ${statusColor[l.status]}`}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => remove(l.id)} className="text-xs font-bold uppercase text-orange-700 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { api } from '../lib/api'
import { servicePillars } from '../data/content'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Pick a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Tell us a little more (10+ characters)'),
})

const inputCls =
  'w-full rounded-xl border-2 border-ink bg-cream-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      await api.submitLead(data)
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Let's grow together</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
          Ready to build your digital presence?
        </h1>
        <p className="mt-5 max-w-md text-ink-muted">
          Tell us about your brand and what you want to achieve. We'll get back
          to you within one business day.
        </p>
        <dl className="mt-10 space-y-3 text-sm">
          <div className="flex gap-3">
            <dt className="font-heading font-bold uppercase text-ink">Email</dt>
            <dd className="text-ink-muted">hello@agency.com</dd>
          </div>
          <div className="flex gap-3">
            <dt className="font-heading font-bold uppercase text-ink">Phone</dt>
            <dd className="text-ink-muted">+91 00000 00000</dd>
          </div>
          <div className="flex gap-3">
            <dt className="font-heading font-bold uppercase text-ink">Instagram</dt>
            <dd className="text-ink-muted">@agency</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-3xl border-2 border-ink bg-cream-100 p-7 shadow-[6px_6px_0_0_#1C1917] sm:p-9">
        {status === 'sent' ? (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink">Thanks — got it.</h2>
            <p className="mt-2 text-ink-muted">We'll be in touch within one business day.</p>
            <button onClick={() => setStatus('idle')} className="btn-outline mt-6">
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold">Name</label>
              <input className={inputCls} {...register('name')} placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-orange-700">{errors.name.message}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold">Email</label>
                <input className={inputCls} {...register('email')} placeholder="you@brand.com" />
                {errors.email && <p className="mt-1 text-xs text-orange-700">{errors.email.message}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Phone</label>
                <input className={inputCls} {...register('phone')} placeholder="Optional" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold">Service</label>
                <select className={inputCls} {...register('service')} defaultValue="">
                  <option value="" disabled>Choose one</option>
                  {servicePillars.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-orange-700">{errors.service.message}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Budget</label>
                <select className={inputCls} {...register('budget')} defaultValue="">
                  <option value="">Optional</option>
                  <option>Under ₹25k / mo</option>
                  <option>₹25k–₹75k / mo</option>
                  <option>₹75k+ / mo</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">Message</label>
              <textarea
                className={`${inputCls} min-h-28`}
                {...register('message')}
                placeholder="What are you trying to achieve?"
              />
              {errors.message && <p className="mt-1 text-xs text-orange-700">{errors.message.message}</p>}
            </div>
            {status === 'error' && (
              <p className="text-sm text-orange-700">
                Something went wrong sending that. Please try again.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

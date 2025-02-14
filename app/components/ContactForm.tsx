'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-veriseek-blue">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-veriseek-blue">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-veriseek-blue">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-veriseek-blue/50 shadow-sm focus:border-veriseek-blue focus:ring-veriseek-blue"
          required
        />
      </div>

      {status === 'error' && (
        <div className="text-red-600 text-sm">{errorMessage}</div>
      )}

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-sm"
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-3 px-4 rounded-md bg-veriseek-blue text-white font-medium hover:bg-veriseek-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-veriseek-blue ${
          status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

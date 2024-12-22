'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      consent: formData.get('consent') === 'on'
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Submission failed')

      toast({
        title: "Success!",
        description: "Thanks for signing up! Check your email for the free guide.",
      })
      
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-lg">
        <div className="form-container">
          <h2 className="text-4xl font-bold text-center mb-8">Ready to Master TikTok?</h2>
          <p className="text-center mb-8">Sign up now to receive our exclusive TikTok Mastery guide!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg"
              required
              disabled={isSubmitting}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                disabled={isSubmitting}
              />
              <label htmlFor="consent">I consent to receiving marketing emails</label>
            </div>
            <button
              type="submit"
              className="cta-button w-full py-4 rounded-lg text-white font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Guide'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
"use client"
import Header from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setIsModalOpen(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900">
            Contact Us
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-zinc-600 mb-6">
              We'd love to hear from you! Whether you have a question about our services, need technical support, or want to discuss a potential project, our team is ready to assist you.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Contact Information
            </h2>
            <div className="text-lg text-zinc-600 mb-6 space-y-2">
              <p><strong>Email:</strong> waglogy.in@gmail.com</p>
              <p><strong>Phone:</strong> +91 97338 14168</p>
              <p><strong>Operational Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM IST</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Our Offices
            </h2>
            <div className="text-lg text-zinc-600 mb-6 space-y-2">
              <p><strong>Registered Office:</strong><br />
              C/o Iswari Psd Sharma, Kokalya Chandeyn Nr Patuk,<br />
              Kokalay, Singtam, East Sikkim, Sikkim, 737134</p>
              <p><strong>Operational Office:</strong><br />
              Gangtok, Metro Point near Tourism Dept,<br />
              Govt of Sikkim</p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">
              Send Us a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />

      {/* Thank You Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
            <Dialog.Title className="text-2xl font-bold text-zinc-900 mb-4">
              Thank You!
            </Dialog.Title>
            <Dialog.Description className="text-zinc-600">
              Thank you for contacting us! We will reach out to you within 24 hours.
            </Dialog.Description>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import GradientButton3d from '@/components/optmatic/GradientButton'
import { useState } from 'react'

export default function ContactUs() {
  // Update state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Update form handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setIsSubmitting(true)

    // Check required fields (excluding phone as it's optional)
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      const form = new FormData()
      form.append('access_key', '21455ef4-d6aa-4abd-858a-8376cb4f30d2')
      form.append('subject', 'New Contact Us Request')
      form.append('firstName', formData.firstName)
      form.append('lastName', formData.lastName)
      form.append('email', formData.email)
      form.append('phone', formData.phone)
      form.append('subject', formData.subject)
      form.append('message', formData.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Add change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="contact-form bg-lighter">
      <div className="mx-auto max-w-7xl py-16">
      {/* <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8"> */}
        <div className="relative bg-light border border-deepBlue/50 shadow-xl shadow-deepBlue/10">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-deepBlue px-6 py-10 sm:px-10 xl:p-12">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 sm:hidden">
                <svg
                  fill="none"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      x2="961.66"
                      y1="107.554"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
              >
                <svg
                  fill="none"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      x2="899.66"
                      y1="28.553"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
              >
                <svg
                  fill="none"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute inset-0 size-full"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      x2="899.66"
                      y1="325.553"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="gradient-text subheading">Contact information</h3>
              <p className="mt-2 max-w-3xl font-normal text-lighterBlue">
               If your query is urgent, please contact us via the below channels.
              </p>
              <dl className="mt-8 space-y-2">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-lighterBlue">
                  <PhoneIcon aria-hidden="true" className="size-6 shrink-0 text-light" />
                  <span className="ml-3">0499 992 401</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-lighterBlue">
                  <EnvelopeIcon aria-hidden="true" className="size-6 shrink-0 text-light" />
                  <span className="ml-3">tom@optmatic.com</span>
                </dd>
              </dl>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-deepBlue">Enquire with us today</h3>
              
              {/* Add error message */}
              {error && (
                <div className="mt-4 text-red-600 text-md font-semibold">{error}</div>
              )}
              
              {/* Add success message */}
              {success && (
                <div className="mt-4 text-optGreen text-md font-semibold">Thank you for your message. We'll get back to you soon!</div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-deepBlue">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      value={formData.firstName}
                      onChange={handleChange}
                      name="firstName"
                      id="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border border-lighterBlue px-4 py-3 text-deepBlue shadow-sm focus:border-optBlue focus:ring-optBlue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-deepBlue">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      value={formData.lastName}
                      onChange={handleChange}
                      name="lastName"
                      id="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border border-lighterBlue px-4 py-3 text-deepBlue shadow-sm focus:border-optBlue focus:ring-optBlue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deepBlue">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      id="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border border-lighterBlue px-4 py-3 text-deepBlue shadow-sm focus:border-optBlue focus:ring-optBlue"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-deepBlue">
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-slightBlue">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      id="phone"
                      type="text"
                      autoComplete="tel"
                      aria-describedby="phone-optional"
                      className="block w-full rounded-md border border-lighterBlue px-4 py-3 text-deepBlue shadow-sm focus:border-optBlue focus:ring-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-deepBlue">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      value={formData.subject}
                      onChange={handleChange}
                      name="subject"
                      id="subject"
                      type="text"
                      className="block w-full rounded-md border border-lighterBlue px-4 py-3 text-deepBlue shadow-sm focus:border-optBlue focus:ring-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-deepBlue">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-slightBlue">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      id="message"
                      rows={4}
                      aria-describedby="message-max"
                      className="block w-full rounded-md border border-lighterBlue px-4 py-3 text-deepBlue shadow-sm focus:border-optBlue focus:ring-optBlue"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <GradientButton3d 
                    type="submit" 
                    text={isSubmitting ? "Sending..." : "Submit"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

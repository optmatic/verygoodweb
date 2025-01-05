'use client'

import { useState, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setResult("Sending....")

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "21455ef4-d6aa-4abd-858a-8376cb4f30d2")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        setSubmitted(true)
        formRef.current?.reset()
      } else {
        console.error("Error", data)
        setResult(data.message)
      }
    } catch (error) {
      console.error('Error:', error)
      setResult("An error occurred while submitting the form")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="isolate bg-deepBlue px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        {/* <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        /> */}
      </div>
      <div className="mx-auto max-w-2xl text-left">
        <h2 className="text-balance text-4xl font-light font-serif tracking-tight text-white sm:text-5xl">Get in touch :)</h2>
        <p className="mt-2 text-lg/8 text-white font-light">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} method="POST" className="mx-auto max-w-xl mt-6">
        <div className="grid grid-cols-1 gap-x-4  sm:grid-cols-2">
          <div>
            {/* <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
              First name
            </label> */}
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                className="block w-full px-3.5 py-2  text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white"
              />
            </div>
          </div>
          <div>
            {/* <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
              Last name
            </label> */}
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                placeholder="Surname"
                className="block w-full px-3.5 py-2 text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            {/* <label htmlFor="company" className="block text-sm/6 font-semibold text-white">
              Company
            </label> */}
            {/* <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div> */}
          </div>
          <div className="sm:col-span-2">
            {/* <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label> */}
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                className="block w-full px-3.5 py-2 text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            {/* <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
              Phone number
            </label> */}
            <div className="mt-2.5">
              <div className="flex  outline outline-1 -outline-offset-1 outline-white has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  {/* <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  /> */}
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="Phone number"
                  className="block min-w-0 grow px-3.5 py-2 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-0"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            {/* <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label> */}
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                className="block w-full px-3.5 py-2 text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                defaultValue={''}
              />
            </div>
          </div>
          {/* <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field> */}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white shadow-lg shadow-white/5 bg-gradient-to-br from-green-400 to-blue-600 px-3 py-1.5 hover:bg-gradient-to-bl disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Let\'s talk'}
          </button>
        </div>
        {submitted && (
          <p className="mt-4 text-center text-white">Thank you for your message!</p>
        )}
        {result && (
          <p className="mt-4 text-center text-white">{result}</p>
        )}
      </form>
    </div>
  )
}

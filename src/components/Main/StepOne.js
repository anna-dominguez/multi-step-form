import FormHead from '@/tools/FormHead'
import { useEffect, useState } from 'react'

const FirstStep = ({ setError }) => {
  const [name, setName] = useState(() => {
    return typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('name'))
      : ''
  })
  const [email, setEmail] = useState(() => {
    return typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('email'))
      : ''
  })
  const [phone, setPhone] = useState(() => {
    return typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('phone'))
      : ''
  })
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)

  useEffect(() => {
    setError(errorName || !name || errorEmail || !email || errorPhone || !phone)
  })

  const onNameChange = (e) => {
    const { value } = e.target
    setName(value)
    localStorage.setItem('value', JSON.stringify(name))

    if (!value) setErrorName(true)
    else setErrorName(false)
    !value || errorEmail || !email || errorPhone || !errorPhone
      ? setError(true)
      : setError(false)
  }

  const onEmailChange = (e) => {
    const { value } = e.target
    let isError = false
    setEmail(value)
    localStorage.setItem('email', JSON.stringify(phone))

    if (
      value.length &&
      value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setErrorEmail(false)
    else {
      setErrorEmail(true)
      isError = true
    }

    isError || errorName || !name || errorPhone || !phone
      ? setError(true)
      : setError(false)
  }

  const onPhoneChange = (e) => {
    const { value } = e.target
    let isError = false
    setPhone(value)
    localStorage.setItem('email', JSON.stringify(email))

    if (
      value &&
      value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    )
      setErrorPhone(false)
    else {
      setErrorPhone(true)
      isError = true
    }

    isError || errorName || !name || errorEmail || !email
      ? setError(true)
      : setError(false)
  }

  return (
    <div className="flex flex-col">
      <FormHead
        title={'Personal info'}
        description={
          'Please provide your name, email address, and phone number.'
        }
      />
      <>
        <div className="flex justify-between">
          <label
            className="text-bodyXS mb-[3px] lg:mb-1.5 self-end"
            htmlFor="name"
          >
            Name
          </label>
          <p
            className={
              errorName
                ? 'text-redErrors text-index font-bold mb-1 lg:mb-[11px]'
                : 'hidden'
            }
          >
            This field is required
          </p>
        </div>
        <input
          className={`${errorName ? 'border-redErrors' : ''} w-full`}
          placeholder="e.g. Stephen King"
          type="text"
          name="name"
          onChange={(e) => onNameChange(e)}
          value={name}
        />
        <div className="flex justify-between mt-4 lg:mt-6">
          <label
            className="text-bodyXS mb-[3px] lg:mb-2 self-end"
            htmlFor="email"
          >
            Email Address
          </label>
          <p
            className={
              errorEmail
                ? 'text-redErrors text-index font-bold mb-1.5 lg:mb-[11px]'
                : 'hidden'
            }
          >
            This field is required
          </p>
        </div>
        <input
          className={`${errorEmail ? 'border-redErrors' : ''} w-full`}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          onChange={(e) => onEmailChange(e)}
          value={email}
        />
        <div className="flex justify-between mt-4 lg:mt-6">
          <label
            className="text-bodyXS mb-[3px] lg:mb-2 self-end"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <p
            className={
              errorPhone
                ? 'text-redErrors text-index font-bold mb-1.5 lg:mb-[11px]'
                : 'hidden'
            }
          >
            This field is required
          </p>
        </div>
        <input
          className={`${errorPhone ? 'border-redErrors' : ''} w-full`}
          placeholder="e.g. +1 234 567 890"
          name="phone"
          onChange={(e) => onPhoneChange(e)}
          value={phone}
        />
      </>
    </div>
  )
}

export default FirstStep

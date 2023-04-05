import { useState } from 'react'

import Footer from '@/components/Footer'
import Main from '@/components/Main'
import HeaderMobile from '@/components/HeaderMobile'

const forms = [
  {
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
  },
  {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
  },
  {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
  },
  {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
  },
]

export default function Home() {
  const [stepActive, setStepActive] = useState(0)
  const [error, setError] = useState(true)

  return (
    <div className="relative overflow-y-auto h-full w-full flex flex-col lg:flex-row lg:justify-center">
      <HeaderMobile stepActive={stepActive} />
      <Main
        setStepActive={setStepActive}
        stepActive={stepActive}
        setError={setError}
        error={error}
      />
    </div>
  )
}

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Arcade from '../../../public/images/icon-arcade.svg'
import Advanced from '../../../public/images/icon-advanced.svg'
import Pro from '../../../public/images/icon-pro.svg'
import FormHead from '@/tools/FormHead'

export const plans = [
  { name: 'Arcade', price: [9, 90] },
  { name: 'Advanced', price: [12, 120] },
  { name: 'Pro', price: [15, 150] },
]

const StepTwo = () => {
  const [isMonthly, setMonthly] = useState(() => {
    const billing = JSON.parse(localStorage.getItem('billing'))
    return billing ? billing === 'monthly' : true
  })
  const [selected, setSelected] = useState(() => {
    const plan = JSON.parse(localStorage.getItem('plan'))
    return plan ? plans.findIndex(({ name }) => name === plan.name) : 0
  })

  useEffect(() => {
    localStorage.setItem('plan', JSON.stringify(plans[selected]))
  }, [selected])

  useEffect(() => {
    localStorage.setItem(
      'billing',
      JSON.stringify(isMonthly ? 'monthly' : 'yearly')
    )
  }, [isMonthly])

  const Details = ({ index }) => (
    <div className="text-start">
      <h2 className="mb-[7px]">{plans[index].name}</h2>
      <p className="text-index">
        ${isMonthly ? plans[index].price[0] : plans[index].price[1]}/
        {isMonthly ? 'mo' : 'yr'}
      </p>
      {!isMonthly && (
        <p className="mt-[3px] lg:mt-1.5 text-denim text-bodyXS">
          2 months free
        </p>
      )}
    </div>
  )

  return (
    <>
      <FormHead
        title={'Select your plan'}
        description={'You have the option of monthly or yearly billing.'}
      />
      <div className="flex flex-col">
        <div className="grid grid-flow-row gap-3 lg:grid-flow-col lg:gap-[18px]">
          <div
            onClick={() => setSelected(0)}
            className={`card ${
              selected === 0 ? 'border-purple bg-lightestGrey' : ''
            }`}
          >
            <Image alt="Arcade plan" className="mr-3.5 lg:mb-10" src={Arcade} />
            <Details index={0} />
          </div>
          <div
            onClick={() => setSelected(1)}
            className={`card ${
              selected === 1 ? 'border-purple bg-lightestGrey' : ''
            }`}
          >
            <Image
              alt="Advanced plan"
              className="mr-3.5 lg:mb-10"
              src={Advanced}
            />
            <Details index={1} />
          </div>
          <div
            onClick={() => setSelected(2)}
            className={`card ${
              selected === 2 ? 'border-purple bg-lightestGrey' : ''
            }`}
          >
            <Image alt="Pro plan" className="mr-3.5 lg:mb-10" src={Pro} />
            <Details index={2} />
          </div>
        </div>
        <div className="bg-lightestGrey flex mt-6 lg:mt-8 justify-center py-3.5">
          <p
            className={`${
              isMonthly ? 'text-denim' : ''
            } font-medium text-bodyS`}
          >
            Monthly
          </p>
          <label
            onClick={() => setMonthly(!isMonthly)}
            className="relative mx-6 flex justify-between items-center p-[3px]"
          >
            <input
              type="checkbox"
              className="peer cursor-pointer absolute left-0 top-0 w-full h-full appearance-none border-0"
              defaultChecked={!isMonthly}
            />
            <span className="w-10 h-5 cursor-pointer p-[3px] rounded-full bg-denim flex flex-shrink-0 items-center after:bg-white after:w-3.5 after:h-3.5 after:rounded-full peer-checked:after:translate-x-5 ease-in-out duration-300 after:duration-300"></span>
          </label>
          <p
            className={`${
              !isMonthly ? 'text-denim' : ''
            } font-medium text-bodyS`}
          >
            Yearly
          </p>
        </div>
      </div>
    </>
  )
}

export default StepTwo

import { useState, useEffect } from 'react'

import FormHead from '@/tools/FormHead'

const prices = [
  [1, 10],
  [2, 20],
  [2, 20],
]

const StepThree = () => {
  const isMonthly =
    JSON.parse(localStorage.getItem('billing')) === 'monthly' ? true : false

  const [isCheckedOne, setCheckedOne] = useState(() => {
    const adds = JSON.parse(localStorage.getItem('adds'))
    return adds && adds[0] ? adds[0].checked : true
  })

  const [isCheckedTwo, setCheckedTwo] = useState(() => {
    const adds = JSON.parse(localStorage.getItem('adds'))
    return adds && adds[1] ? adds[1].checked : true
  })

  const [isCheckedThree, setCheckedThree] = useState(() => {
    const adds = JSON.parse(localStorage.getItem('adds'))
    return adds && adds[2] ? adds[2].checked : false
  })

  const Details = ({ title, detail }) => (
    <div key={title} className="ml-4 grow">
      <p className="text-denim font-medium text-bodyS mb-[3px]">{title}</p>
      <p className="text-bodyXS lg:text-index text-coolGrey">{detail}</p>
    </div>
  )

  useEffect(() => {
    const adds = [
      {
        checked: isCheckedOne,
        title: 'Online service',
        price: prices[0][isMonthly ? 0 : 1],
      },
      {
        checked: isCheckedTwo,
        title: 'Larger storage',
        price: prices[1][isMonthly ? 0 : 1],
      },
      {
        checked: isCheckedThree,
        title: 'Customizable profile',
        price: prices[2][isMonthly ? 0 : 1],
      },
    ]
    localStorage.setItem('adds', JSON.stringify(adds))
  }, [isCheckedOne, isCheckedTwo, isCheckedThree])

  return (
    <>
      <FormHead
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience.'}
      />
      <div className="grid gap-6">
        <div
          onClick={() => setCheckedOne(!isCheckedOne)}
          className={`card flex flex-row py-3 items-center ${
            isCheckedOne ? 'border-purple bg-lightestGrey' : ''
          }`}
        >
          <input
            readOnly
            checked={isCheckedOne}
            className="form-checkbox rounded cursor-pointer grow-0 w-5 h-5 accent-purple border-border
                      focus:ring-offset-0 focus:border-0"
            type="checkbox"
          />
          <Details
            title={'Online service'}
            detail={'Access to multiplayer games'}
          />
          <p className="grow-0 text-purple text-bodyXS">
            +${prices[0][isMonthly ? 0 : 1]}/{isMonthly ? 'mo' : 'yr'}
          </p>
        </div>
        <div
          onClick={() => setCheckedTwo(!isCheckedTwo)}
          className={`card flex flex-row py-3 items-center ${
            isCheckedTwo ? 'border-purple bg-lightestGrey' : ''
          }`}
        >
          <input
            readOnly
            checked={isCheckedTwo}
            className="form-checkbox cursor-pointer rounded grow-0 w-5 h-5 accent-purple border-border
                      focus:ring-offset-0 focus:border-0"
            type="checkbox"
          />
          <Details
            title={'Larger storage'}
            detail={'Extra 1TB of cloud save'}
          />
          <p className="grow-0 text-purple text-bodyXS">
            +${prices[1][isMonthly ? 0 : 1]}/{isMonthly ? 'mo' : 'yr'}
          </p>
        </div>
        <div
          onClick={() => setCheckedThree(!isCheckedThree)}
          className={`card flex flex-row py-3 items-center ${
            isCheckedThree ? 'border-purple bg-lightestGrey' : ''
          }`}
        >
          <input
            readOnly
            checked={isCheckedThree}
            className="form-checkbox cursor-pointer rounded grow-0 w-5 h-5 accent-purple border-border
                      focus:ring-offset-0 focus:border-0"
            type="checkbox"
          />
          <Details
            title={'Customizable profile'}
            detail={'Custom theme on your profile'}
          />
          <p className="grow-0 text-purple text-bodyXS">
            +${prices[2][isMonthly ? 0 : 1]}/{isMonthly ? 'mo' : 'yr'}
          </p>
        </div>
      </div>
    </>
  )
}

export default StepThree

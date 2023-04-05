import FormHead from '@/tools/FormHead'

const StepFour = ({ setStepActive }) => {
  const plan = JSON.parse(localStorage.getItem('plan'))
  const billing = JSON.parse(localStorage.getItem('billing'))
  const isMonthly = billing === 'monthly' ? true : false
  const adds = JSON.parse(localStorage.getItem('adds')).filter(
    ({ checked }) => checked
  )
  let totalPrice = adds
    .map(({ price }) => price)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      isMonthly ? plan.price[0] : plan.price[1]
    )

  return (
    <>
      <FormHead
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="bg-lightestGrey py-4 lg:pb-6 px-4 lg:px-6">
        <div className="flex justify-between items-center pb-3 lg:pb-6 border-b-[1px] border-solid border-lightGrey">
          <div>
            <p className="capitalize mb-[7px] text-index lg:text-bodyS font-medium text-denim">
              {plan.name} ({billing})
            </p>
            <p
              onClick={() => setStepActive(1)}
              className="underline cursor-pointer hover:text-purple text-index"
            >
              Change
            </p>
          </div>
          <p className="text-denim text-index lg:text-bodyS font-bold">
            ${isMonthly ? plan.price[0] : plan.price[1]}/
            {isMonthly ? 'mo' : 'yr'}
          </p>
        </div>
        {adds.map(({ title, price }) => (
          <div
            key={title}
            className="flex justify-between items-center mt-3 lg:mt-4"
          >
            <p className="text-index">{title}</p>
            <p className="text-denim text-index">
              +${price}/{isMonthly ? 'mo' : 'yr'}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 mx-4 flex justify-between items-center">
        <p>Total (per {isMonthly ? 'month' : 'year'})</p>
        <p className="text-bodyS lg:text-bodyM text-purple font-bold">
          ${totalPrice}/{isMonthly ? 'mo' : 'yr'}
        </p>
      </div>
    </>
  )
}

export default StepFour

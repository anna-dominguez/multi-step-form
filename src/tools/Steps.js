const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary']

const Step = ({ stepNum, index }) => (
  <div className="hidden lg:flex flex-col ml-4 pr-20 uppercase">
    <p className="text-bodyXS text-ligthBlue">{`Step ${stepNum}`}</p>
    <p className="text-bodyS font-bold text-white">{steps[index]}</p>
  </div>
)

const Steps = ({ stepActive }) => (
  <div className="flex lg:flex-col justify-center pt-8 lg:pt-10 lg:pl-8 absolute">
    {[1, 2, 3, 4].map((stepNum, index) => (
      <div key={`Step-${index}`} className="flex lg:mb-8">
        <p
          className={`${index ? 'ml-4 lg:ml-0' : ''} ${
            stepActive === index || (stepActive > index && stepNum === 4)
              ? 'bg-skyBlue text-denim '
              : 'border-solid border-[1px] border-white text-white'
          } text-index text-center items-center h-fit lg:self-center px-3 py-2 rounded-full`}
        >
          {stepNum}
        </p>
        <Step stepNum={stepNum} index={index} />
      </div>
    ))}
  </div>
)

export default Steps

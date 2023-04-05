const Footer = ({ stepActive, setStepActive, error }) => (
  <footer
    className={`fixed lg:absolute w-full flex ${
      stepActive ? 'justify-between' : 'justify-end'
    } ${
      stepActive === 4 && 'hidden'
    } p-4 lg:p-0 bottom-0 lg:bottom-8 left-0 bg-white`}
  >
    {stepActive !== 0 && (
      <button
        className="text-coolGrey text-index lg:text-bodyS hover:text-denim font-medium"
        onClick={() => setStepActive(stepActive - 1)}
      >
        Go back
      </button>
    )}
    <button
      onClick={() => setStepActive(stepActive + 1)}
      disabled={error}
      className={`disabled:bg-coolGrey rounded bg-denim text-white px-4 py-3 lg:px-6 hover:bg-denimActive ${
        stepActive === 3 &&
        'bg-purple hover:bg-[#928CFF] px-[22px] lg:px-[31px]'
      }`}
    >
      {stepActive < 3 ? 'Next Step' : 'Confirm'}
    </button>
  </footer>
)

export default Footer

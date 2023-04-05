import Image from 'next/image'

import StepOne from './StepOne'
import Steps from '@/tools/Steps'
import BgSidebarDesktop from '../../../public/images/bg-sidebar-desktop.svg'
import Footer from '../Footer'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import Thanks from './Thanks'

const Main = ({ stepActive, setStepActive, setError, error }) => (
  <main
    className="absolute lg:static h-fit lg:min-h-[600px] top-[12%] w-[90%] lg:min-w-fit rounded-[10px]
              shadow-[0_25px_40px_-20px_rgba(0,0,0,0.0951141)] grid grid-flow-col self-center
              py-8 px-6 lg:p-4 bg-white"
  >
    <div className="relative w-full hidden lg:flex">
      <Steps stepActive={stepActive} />
      <Image
        className="w-full h-full"
        alt="Desktop Background"
        src={BgSidebarDesktop}
      />
    </div>
    <div className="relative lg:mt-10 lg:mx-[100px] lg:w-[450px]">
      {stepActive === 0 && <StepOne setError={setError} />}
      {stepActive === 1 && <StepTwo />}
      {stepActive === 2 && <StepThree />}
      {stepActive === 3 && <StepFour setStepActive={setStepActive} />}
      {stepActive === 4 && <Thanks />}
      <Footer
        stepActive={stepActive}
        setStepActive={setStepActive}
        error={error}
      />
    </div>
  </main>
)

export default Main

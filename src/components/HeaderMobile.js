import Steps from '@/tools/Steps'
import Image from 'next/image'
import BgMobile from '../../public/images/bg-sidebar-mobile.svg'

const Header = ({ stepActive }) => (
  <header className="lg:hidden bg-purple flex w-full lg:w-fit lg:h-fit justify-center content-center lg:items-center">
    <Steps stepActive={stepActive} />
    <Image
      className="w-screen lg:hidden"
      alt="Mobile Background"
      src={BgMobile}
    />
  </header>
)

export default Header

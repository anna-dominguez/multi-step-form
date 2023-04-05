import Image from 'next/image'
import ThankIcon from '../../../public/images/icon-thank-you.svg'

const Thanks = () => (
  <div className="flex flex-col justify-center items-center py-20 lg:py-32 ">
    <Image alt="Thank you icon" src={ThankIcon} />
    <h2 className="font-bold text-denim text-headingS lg:text-headingM mt-8">
      Thank you!
    </h2>
    <p className="text-center mt-4 text-bodyS">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
)

export default Thanks

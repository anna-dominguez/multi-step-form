import Head from 'next/head'

import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <div
      className="bg-background text-black grid w-full h-screen overflow-auto
                  justify-start lg:justify-center"
    >
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App

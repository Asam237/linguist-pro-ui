import Head from 'next/head'
import { Poppins } from "@next/font/google"
import { Header } from '../components/header'

const poppins = Poppins({ weight: "400", subsets: ["latin"] })
export default function Home() {
  return (
    <>
      <Head>
        <title>LinguistPro UI  |  By Asam</title>
        <meta name="description" content="Top mangas apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='hidden lg:flex bg-black py-6'>
          <p className={`text-center ${poppins.className} text-white w-full text-base`}>Don&apos;t Just Learn, Ninja Up Your Languages Skills with LinguistPro</p>
        </div>
        <Header />
      </main>
    </>
  )
}

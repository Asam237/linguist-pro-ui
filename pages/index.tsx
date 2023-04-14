import Head from 'next/head'
import { Poppins } from "@next/font/google"
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Img1 from "../public/imgs/img1.png"
import Img2 from "../public/imgs/img2.png"
import Img3 from "../public/imgs/img3.png"
import Img4 from "../public/imgs/img4.png"
import Image from 'next/image'
import { HiArrowCircleRight, HiTranslate, HiCursorClick } from "react-icons/hi"

interface IPicture {
  img: any
  bg: any
}

const pictures: IPicture[] = [
  {
    img: Img3,
    bg: "#f5fb62"
  },
  {
    img: Img4,
    bg: "#ff9033"
  },
  {
    img: Img1,
    bg: "#00f6a1"
  },
  {
    img: Img2,
    bg: "#ce7cfc"
  },
]

const languages: string[] = ["English", "German", "Spanish"]
const tutors: string[] = ["Henry", "Amelia", "Willian"]

const poppins = Poppins({ weight: "400", subsets: ["latin"] })
const poppinsBold = Poppins({ weight: "800", subsets: ["latin"] })
export default function Home() {
  return (
    <>
      <Head>
        <title>LinguistPro UI  |  By Asam</title>
        <meta name="description" content="Top mangas apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='lg:h-screen'>
        <div className='hidden lg:flex bg-black py-6'>
          <p className={`text-center ${poppins.className} text-white w-full text-base`}>Don&apos;t Just Learn, Ninja Up Your Languages Skills with LinguistPro</p>
        </div>
        <Header />
        <div className='mx-4 lg:mx-0 mt-4'>
          <div className={`container mx-auto ${poppins.className} text-white`}>
            <div className='bg-black lg:h-[70vh] rounded-3xl px-8 py-10 lg:px-16 lg:py-20'>
              <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-7/12'>
                  <h1 className='text-3xl lg:text-5xl text-center lg:text-start'>Become a Language</h1>
                  <h1 className='text-3xl lg:text-5xl text-center mt-3 lg:mt-6 lg:text-start'>Ninja with <span className={`${poppinsBold.className}`}>LinguistPro</span></h1>
                  <p className='text-lg lg:text-2xl text-center mt-5 lg:mt-10 lg:text-start'><span className={`${poppinsBold.className}`}>Interactive lessons, quizzes, and progress tracking</span></p>
                  <p className='text-lg mt-2 lg:text-2xl text-center lg:text-start text-gray-200'>to accelerate your language learning journey</p>
                  <button className="bg-green-300 rounded-full text-sm font-semibold px-6 py-3 mt-10 text-gray-700 flex mx-auto lg:mx-0">Get Fluent</button>
                  <div className='flex flex-col lg:flex-row mt-8'>
                    <div className='w-full lg:w-1/2'>
                      <div className='flex items-center w-full justify-center lg:justify-start'>
                        <HiTranslate color='white' size={30} />
                        <h1 className='ml-2 text-sm'>Choose Language</h1>
                      </div>
                      <div className='grid gap-2 grid-cols-2 md:grid-cols-3 mt-4 md:w-[50%] mx-auto lg:mx-0 lg:w-[74%]'>
                        {languages.map((item, index) => {
                          return (
                            <span className={`text-xs text-white border rounded-full mx-auto px-6 py-3 ${index == 2 ? 'hidden md:flex' : 'flex'}`} key={index}>{item}</span>
                          )
                        })}
                      </div>
                      <div className='grid gap-2 grid-cols-2 md:gap-1 md:grid-cols-3 mt-4 md:mt-1 md:w-[50%] mx-auto lg:mx-0 lg:w-[74%] '>
                        <span className='text-xs text-white border rounded-full mx-auto px-6 py-3'>Arabic</span>
                        <span className='text-xs text-white border rounded-full mx-auto px-6 py-3'>Italian</span>
                        <span className='text-sm text-black hidden md:flex bg-[#ce7cfc] border rounded-full mx-auto px-6 py-3'>+32</span>
                      </div>
                    </div>
                    <div className='w-full mt-8 lg:mt-0 lg:w-1/2'>
                      <div className='flex items-center w-full justify-center lg:justify-start'>
                        <HiCursorClick color='white' size={30} />
                        <h1 className='ml-2 text-sm'>Choose Top Tutor</h1>
                      </div>
                      <div className='grid gap-2 grid-cols-2 md:grid-cols-3 mt-4 md:w-[50%] mx-auto lg:mx-0 lg:w-[74%]'>
                        {tutors.map((item, index) => {
                          return (
                            <span className={`text-xs text-white border rounded-full mx-auto px-6 py-3 ${index == 2 ? 'hidden md:flex' : 'flex'}`} key={index}>{item}</span>
                          )
                        })}
                      </div>
                      <div className='grid gap-2 grid-cols-2 md:gap-1 md:grid-cols-3 mt-4 md:mt-1 md:w-[50%] lg:mx-0 mx-auto lg:w-[74%] '>
                        <span className='text-xs text-white border rounded-full mx-auto px-6 py-3'>Noah</span>
                        <span className='text-xs text-white border rounded-full mx-auto px-6 py-3'>Jean</span>
                        <span className='text-sm text-black hidden md:flex bg-[#f5fb62] border rounded-full mx-auto px-6 py-3'>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-4/12 mt-8 lg:mt-0 bg-gray-800 p-4 rounded-2xl lg:h-[36vh] xl:h-[28vh] 2xl:h-[44vh]'>
                  <div className='grid gap-8 lg:gap-1 grid-cols-1 lg:grid-cols-2'>
                    {
                      pictures.map((item, index) => {
                        return (
                          <div style={{ background: item.bg }} key={index} className="flex rounded-xl justify-center">
                            <Image alt='pict' src={item.img} width={150} height={200} />
                          </div>
                        )
                      })
                    }

                  </div>
                  <hr className="h-px my-6 bg-gray-500 border-0" />
                  <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <button className='bg-gray-900 text-sm rounded-full px-8 py-2'>Explore Worldwide Tutors</button>
                    <HiArrowCircleRight className='mt-4 lg:mt-0 lg:ml-4' size={34} color='white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { HiOutlineSupport } from "react-icons/hi"
import { Poppins } from "@next/font/google"
import { useState } from "react"

interface IMenu {
    title: string
    link: string
}

const menus: IMenu[] = [
    {
        title: "Home",
        link: "#home"
    },
    {
        title: "Lessons",
        link: "#lessons"
    },
    {
        title: "Tutors",
        link: "#tutors"
    },
    {
        title: "Quizzes",
        link: "#quizzes"
    },
    {
        title: "Progess",
        link: "#progess"
    },
    {
        title: "Support",
        link: "#support"
    },
]

const poppins = Poppins({ weight: "400", subsets: ["latin"] })
const poppinsBold = Poppins({ weight: "800", subsets: ["latin"] })
export const Header = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <header className="py-6 mx-4 lg:mx-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-black rounded-full w-12 h-12 flex justify-center items-center">
                            <HiOutlineSupport size={32} color={"white"} />
                        </div>
                        <h4 className={`${poppinsBold.className} ml-4`}>LinguistPro</h4>
                    </div>
                    <div>
                        <div className="hidden lg:flex">
                            <nav>
                                <ul className="flex items-center">
                                    {menus.map((item, index) => {
                                        return (
                                            <li className={`${poppins.className} ml-6 text-sm`} key={index}>
                                                <Link href={item.link}>{item.title}</Link>
                                            </li>
                                        )
                                    })}
                                    <button className="border-black border-2 rounded-full text-sm font-semibold ml-6 px-6 py-3">Get Started</button>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex lg:hidden" onClick={() => {
                            setNavbar(!navbar)
                        }}>
                            <AiOutlineMenu size={30} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                    }`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:hidden text-gray-600">
                    {
                        menus.map((item, index) => {
                            return <li key={index} className={`${poppins.className} text-sm border-b pb-1 w-full text-center ml-8`}><Link href={item.link}>{item.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        </header>
    )
}
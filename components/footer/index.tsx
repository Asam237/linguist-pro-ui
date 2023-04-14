import { HiStar } from "react-icons/hi"
import { Poppins } from "@next/font/google"
import Link from "next/link"

interface IMenu {
    title: string
    link: string
}

const menus: IMenu[] = [
    {
        title: "Privacy Policy",
        link: "#privacypolicy"
    },
    {
        title: "Terms of Service",
        link: "#termsofservice"
    }
]

const poppins = Poppins({ weight: "400", subsets: ["latin"] })
const poppinsBold = Poppins({ weight: "800", subsets: ["latin"] })
export const Footer = () => {
    return (
        <footer>
            <div className={`container mx-auto ${poppins.className}`}>
                <div className="flex flex-col justify-center items-center lg:justify-between lg:flex-row">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <HiStar size={30} color={"black"} />
                        <p className="text-base mt-4 lg:mt-0">Trusted by <span className={`${poppinsBold.className}`}>100k</span> users</p>
                    </div>
                    <nav>
                        <ul className="flex flex-col lg:flex-row">
                            {menus.map((item, index) => {
                                return (
                                    <li className={`${poppins.className} mt-4 lg:mt-0 lg:ml-6 text-base text-center`} key={index}>
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
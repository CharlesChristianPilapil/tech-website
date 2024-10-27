import { home_constants } from "@/utils/constants/home"
import Button from "../button"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="max-w-[1280px] mx-auto px-10 flex justify-between mt-[50px] items-center">
        <Link href={''}>
            <Image
                width={240}
                height={50.56}
                src={home_constants.images.logo.src} 
                alt={home_constants.images.logo.alt} 
            />
        </Link>
        <div className="flex gap-5 items-center">
            <ul className="hidden lg:flex text-[20px] gap-x-5">
                {home_constants.nav_links.map((link, key) => (
                    <li key={key} className="py-3 px-[14px] font-medium">
                        <a className="hover:text-purple-400 focus:text-purple-400 text-title_color duration-75 transition-all" role="link" href="">{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className="pl-[5px]">
                <Button 
                    label="Login"
                    variant="dark"
                />
            </div>
        </div>
    </nav>
  )
}
export default NavBar
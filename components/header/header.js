import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faBehance,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";


export default function Header(){
    return (
        <div className="container flex items-center justify-between w-full px-10 py-4 mx-auto bg-white">
            <h1 className="text-xl font-semibold font-poppins lg:text-2xl">Roctopus</h1>
            <div className="justify-center hidden md:flex">
                <Link href="/">
                    <a className="px-3 text-sm font-poppins">Home</a>
                </Link>
                <Link href="/">
                    <a className="px-3 text-sm font-poppins">About</a>
                </Link>
                <Link href="/">
                    <a className="px-3 text-sm font-poppins">Contact</a>
                </Link>
            </div>
            <div className="flex justify-center">
                <FontAwesomeIcon icon={faInstagram} className="px-2 text-xl lg:text-2xl" />
                <FontAwesomeIcon icon={faBehance} className="px-2 text-xl lg:text-2xl" />
                <FontAwesomeIcon icon={faDribbble} className="px-2 text-xl lg:text-2xl" />
            </div>
        </div>
    )
}
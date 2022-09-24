import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faBehance,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons"


export default function Header(){
    return (
        <div className="container flex items-center justify-between w-full px-10 py-4 mx-auto bg-white">
            <h1 className="text-xl font-semibold font-poppins">Roctopus</h1>
            <div className="flex justify-center">
                <FontAwesomeIcon icon={faInstagram} className="px-2 text-xl" />
                <FontAwesomeIcon icon={faBehance} className="px-2 text-xl" />
                <FontAwesomeIcon icon={faDribbble} className="px-2 text-xl" />
            </div>
        </div>
    )
}
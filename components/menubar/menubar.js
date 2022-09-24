import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome
} from "@fortawesome/free-solid-svg-icons"

export default function Menubar() {
    return (
        <div className="flex justify-center py-6 bg-black">
            <p className="px-6 text-sm font-medium text-white font-poppins">Home</p>
            <p className="px-6 text-sm font-medium text-white font-poppins">About</p>
            <p className="px-6 text-sm font-medium text-white font-poppins">Contact</p>
        </div>
    )
}
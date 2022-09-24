import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {
    faInstagram,
    faBehance,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons"

export default function Hero(){
    return (
        <div className="w-full px-10 py-20 text-center">
            <h1 className="text-2xl font-bold font-poppins">Lorem ipsum dolor sit amet consectetur</h1>
            <p className="pt-2 text-sm font-poppins text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In aliquam ipsum eu enim sollicitudin interdum. Duis eu iaculis 
                ex, at blandit elit. Fusce lacinia cursus tortor et cursus.
            </p>
            <div className="flex items-center justify-center mt-4">
                <div className="flex justify-center px-8 py-3 bg-black border rounded-md">
                    <span className="text-sm text-white"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <span className="ml-2 text-sm text-white font-poppins">Mail Me</span>
                </div>
                <div className="px-2 text-xl">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="px-2 text-xl">
                    <FontAwesomeIcon icon={faBehance} />
                </div>
                <div className="px-2 text-xl">
                    <FontAwesomeIcon icon={faDribbble} />
                </div>
            </div>
        </div>
    )
}
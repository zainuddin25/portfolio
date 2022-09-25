import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {
    faInstagram,
    faBehance,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons"
import Image from "next/image";
import hero from "../../public/hero.png"

export default function Hero(){
    return (
        <div className="container md:flex lg:flex xl:flex lg:items-center lg:py-20 md:items-center">
            <div className="w-full px-10 py-20 text-center md:text-left md:w-4/6 lg:w-2/4 xl:w-2/4">
                <h1 className="text-2xl font-bold font-poppins">Lorem ipsum dolor sit amet consectetur</h1>
                <p className="pt-2 text-xs lg:text-sm font-poppins text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ultricies felis, 
                    iaculis elementum libero. Nulla tempus viverra odio, ut porta eros imperdiet eget. 
                    In in massa feugiat est feugiat maximus ac vel est. Mauris porttitor lorem sit 
                    amet tortor blandit accumsan. Sed nulla mi, tempus nec suscipit ac, pulvinar 
                    nec justo. Cras tellus sem, ultrices porta libero facilisis, ultrices congue 
                    ligula. Aliquam venenatis, sem eu molestie imperdiet, lacus ipsum iaculis 
                    risus, quis vehicula nulla sapien eget libero. Phasellus maximus eget 
                    erat ac pretium. Donec suscipit lectus molestie turpis posuere luctus. 
                    Suspendisse dapibus diam et quam vestibulum, nec laoreet nulla egestas.
                </p>
                <div className="flex items-center justify-center mt-4 md:justify-start">
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
            <div className="hidden w-2/4 lg:flex lg:justify-center md:block md:w-2/6">
                <Image src={hero} />
            </div>
        </div>
    )
}
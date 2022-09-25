import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {
} from "@fortawesome/free-brands-svg-icons"

export default function Contact(){
    return (
        <div className="w-full py-20 bg-black">
            <h1 className="text-center text-white font-poppins">Contact Me</h1>
            <div className="container flex flex-col mx-auto mt-8 lg:flex-row lg:justify-center">
                <div className="w-2/4 px-10 text-white">
                    <h1 className="text-sm font-poppins text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ultricies felis, 
                        iaculis elementum libero. Nulla tempus viverra odio, ut porta eros imperdiet eget. 
                        In in massa feugiat est feugiat maximus ac vel est. Mauris porttitor lorem sit 
                        amet tortor blandit accumsan.
                    </h1>
                    <div className="flex items-center mt-8 mb-2">
                        <div className="w-[4%]">
                            <span className="text-xl"><FontAwesomeIcon icon={faLocationDot} /></span>
                        </div>
                        <div className="w-[96%]">
                            <span className="font-poppins">Indonesia, Central Java</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-[4%]">
                            <span className="text-xl"><FontAwesomeIcon icon={faPhone} /></span>
                        </div>
                        <div className="w-[96%]">
                            <span className="font-poppins">085156970093</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-[4%]">
                            <span className="text-xl"><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <div className="w-[96%]">
                            <span className="font-poppins">emailaddres@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { 
    faBehance,
    faDribbble,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return (
        <div className="w-full pt-20 bg-black pb-36">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl font-bold text-white font-poppins">Roctopus</h1>
                <p className="w-3/4 mx-auto mt-2 text-sm font-light text-slate-500 font-poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In in ultricies felis, iaculis elementum libero. Nulla 
                    tempus viverra odio, ut porta eros imperdiet eget. In in 
                    massa feugiat est feugiat maximus ac vel est. Mauris porttitor 
                    lorem sit amet tortor blandit accumsan. Sed nulla mi, 
                    tempus nec suscipit ac, pulvinar nec justo. Cras tellus sem, 
                    ultrices porta libero facilisis, ultrices congue ligula.
                </p>
                <hr className="w-2/4 mx-auto my-6" />
                <span className="mx-2 text-2xl duration-200 ease-in-out text-slate-600 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></span>
                <span className="mx-2 text-2xl duration-200 ease-in-out text-slate-600 hover:text-white"><FontAwesomeIcon icon={faBehance} /></span>
                <span className="mx-2 text-2xl duration-200 ease-in-out text-slate-600 hover:text-white"><FontAwesomeIcon icon={faDribbble} /></span>
            </div>
        </div>
    )
}
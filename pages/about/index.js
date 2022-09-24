import Image from "next/image";
import about from "../../public/about.png"

export default function About() {
    return (
        <div className="px-10 py-10 bg-black">
            <h1 className="text-white font-poppins">ABOOUT ME</h1>
            <p className="mt-2 text-sm font-light text-slate-500 font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In aliquam ipsum eu enim sollicitudin interdum. Duis eu iaculis 
                ex, at blandit elit. Fusce lacinia cursus tortor et cursus.
            </p>
            <div className="flex justify-center">
                <Image src={about} />
            </div>
            <p className="mt-2 text-sm font-light text-slate-500 font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In aliquam ipsum eu enim sollicitudin interdum. Duis eu iaculis 
                ex, at blandit elit. Fusce lacinia cursus tortor et cursus.
            </p>
        </div>
    )
}
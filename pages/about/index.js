import Image from "next/image";
import about from "../../public/about.png"

export default function About() {
    return (
        <div className="w-full bg-black">
            <div className="container px-10 py-10 mx-auto lg:px-0 md:px-0">
                <h1 className="text-center text-white font-poppins">About Me</h1>
                <div className="flex-col mt-10 lg:flex-row lg:flex md:flex md:flex-row lg:items-center">
                    <div className="w-full lg:w-2/4 lg:px-16 md:w-2/4">
                        <h1 className="mt-8 text-4xl font-bold text-white lg:mt-0 font-poppins">Hi, Iam RifAn</h1>
                        <p className="mt-4 text-sm font-light lg:mt-2 text-slate-500 font-poppins md:font-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In in ultricies felis, iaculis elementum libero. Nulla 
                            tempus viverra odio, ut porta eros imperdiet eget. In in 
                            massa feugiat est feugiat maximus ac vel est. Mauris porttitor 
                            lorem sit amet tortor blandit accumsan. Sed nulla mi, tempus 
                            nec suscipit ac, pulvinar nec justo. Cras tellus sem, ultrices 
                            porta libero facilisis, ultrices congue ligula. Aliquam venenatis, 
                            sem eu molestie imperdiet, lacus ipsum iaculis risus, quis vehicula 
                            nulla sapien eget libero. Phasellus maximus eget erat ac pretium. 
                            Donec suscipit lectus molestie turpis posuere luctus. Suspendisse 
                            dapibus diam et quam vestibulum, nec laoreet nulla egestas. Donec 
                            fermentum facilisis odio, non vehicula arcu consequat nec. Sed ut 
                            nisl felis. Quisque nec iaculis ex. Vivamus viverra metus libero, 
                            eu hendrerit neque sagittis at.
                        </p>
                    </div>
                    <div className="w-full mt-10 lg:w-2/4 lg:mt-0 md:w-2/4">
                        <div className="flex justify-center">
                            <Image src={about} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
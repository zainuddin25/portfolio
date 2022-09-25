import Image from "next/image";
import image1 from "../../public/Image/upload1.jpg"
import image2 from "../../public/Image/upload2.jpg"
import image3 from "../../public/Image/upload3.jpg"
import image4 from "../../public/Image/upload4.jpg"

export default function Gallery() {

    return (
        <div className="w-full py-20 bg-white">
            <div className="container mx-auto">
                <h1 className="mb-10 text-center font-poppins">Gallery</h1>
                <div className="lg:grid lg:grid-cols-5 lg:gap-4">
                    <div class="lg:col-span-2 lg:row-span-2">
                        <Image src={image1} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image2} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image3} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image4} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image4} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image3} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image2} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image4} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image2} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image3} width={1000} height={1000} />
                    </div>
                    <div class="lg:col-span-2 lg:row-span-2">
                        <Image src={image1} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image2} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image4} width={1000} height={1000} />
                    </div>
                    <div>
                        <Image src={image3} width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}
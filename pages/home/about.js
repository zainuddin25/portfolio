import Link from "next/link";

export default function About() {
    return (
        <div className="flex justify-center w-screen h-screen flex-col items-center">
            <h1 className='text-2xl font-bold'>Ini About</h1>
            <div className="flex">
                <Link href="/">
                    <a className='px-4 py-2 border-sky-500 border rounded-sm mr-2'>Home</a>
                </Link>
                <Link href="/home/contact">
                    <a className='px-4 py-2 border-sky-500 border rounded-sm ml-2'>Contact</a>
                </Link>
            </div>
        </div>
    )
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center w-screen h-screen flex-col items-center">
        <h1 className='text-2xl font-bold'>Ini Home</h1>
        <div className="flex">
            <Link href="/home/about">
                <a className='px-4 py-2 border-sky-500 border rounded-sm mr-2'>About</a>
            </Link>
            <Link href="/home/contact">
                <a className='px-4 py-2 border-sky-500 border rounded-sm ml-2'>Contact</a>
            </Link>
        </div>
    </div>
  )
}

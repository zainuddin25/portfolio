import Header from '../components/header/header'
import Menubar from '../components/menubar/menubar'
import About from './about'
import Hero from './hero'

export default function Home() {
  return (
    <>
    <div className='fixed top-0 w-full'>
      <Header />
    </div>
    <Hero />
    <About />
    <div className='fixed bottom-0 w-full md:hidden lg:hidden xl:hidden 2xl:hidden'>
      <Menubar />
    </div>
    </>
  )
}

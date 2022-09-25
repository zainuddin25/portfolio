import Header from '../components/header/header'
import Menubar from '../components/menubar/menubar'
import About from './about'
import Contact from './contact'
import Hero from './hero'

export default function Home() {
  return (
    <>
    <div className='fixed top-0 z-50 w-full'>
      <Header />
    </div>
    <Hero />
    <About />
    <Contact />
    <div className='fixed bottom-0 z-50 w-full md:hidden lg:hidden xl:hidden 2xl:hidden'>
      <Menubar />
    </div>
    </>
  )
}

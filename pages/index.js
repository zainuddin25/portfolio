import Footer from '../components/footer'
import Header from '../components/header/header'
import Menubar from '../components/menubar/menubar'
import About from './about'
import Colaboration from './colaboration'
import Contact from './contact'
import Gallery from './gallery'
import Hero from './hero'
import Service from './service'

export default function Home() {
  return (
    <>
    <div className='fixed top-0 z-50 w-full'>
      <Header />
    </div>
    <Hero />
    <About />
    <Gallery />
    <Service />
    <Colaboration />
    <Footer />
    {/* <Contact /> */}
    <div className='fixed bottom-0 z-50 w-full md:hidden lg:hidden xl:hidden 2xl:hidden'>
      <Menubar />
    </div>
    </>
  )
}

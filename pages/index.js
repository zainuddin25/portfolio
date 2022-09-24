import Header from '../components/header/header'
import Menubar from '../components/menubar/menubar'

export default function Home() {
  return (
    <>
    <Header />
    <div className='fixed bottom-0 w-full md:hidden lg:hidden xl:hidden 2xl:hidden'>
      <Menubar />
    </div>
    </>
  )
}

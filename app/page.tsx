import Carouselproduct from '@/components/Carouselproduct'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Hero from '@/components/Hero'
import { Footer } from '@/components/Footer'
import About from '@/components/About'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Product/>
    <Carouselproduct/>
    <Footer/>
    </>
   
  )
}

import React from 'react'
import Navbar from '../Components/NAvbar'
import Hero from '../Components/HeroSection'
import FeaturedProducts from '../Components/FeaturedProducts'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <Footer />
    </div>
  )
}

export default Home
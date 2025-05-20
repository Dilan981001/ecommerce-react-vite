import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Category from './sections/Category'
import Types from './sections/Types'
import Footer from './sections/Footer'
import Services from './sections/Services'
import Productsgrid from './sections/Productsgrid'
import Banner from './sections/Banner'
import Reviews from './sections/Reviews'
import Insta from './sections/Insta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero/>
     <Category/>
     <Types/>
     <Services/>
     <Productsgrid/>
     <Banner/>
     <Reviews/>
     <Insta/>
     <Footer/>
    </>
  )
}

export default App

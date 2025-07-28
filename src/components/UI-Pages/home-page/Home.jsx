import React, { useRef } from 'react'

import Header from './Header'
import ShoesCategory from './ShoesCategory'
import CustomerReviews from './CustomerReviews'
import BrandSlider from './BrandSlider'
import OurTeam from './OurTeam'
import FrequentlyAskQuestions from './FrequentlyAskQuestions'
import MissionVision from './MissionVision'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  const categoryRef = useRef(null);
  const brandRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <div className='home-page overflow-x-hidden'>

<Navbar refs={{ categoryRef, brandRef, aboutRef, faqRef }} />

      <Header />
      <section ref={categoryRef}>
        <ShoesCategory />
      </section>
      
      <CustomerReviews />

      <section ref={brandRef}>
        <BrandSlider />
      </section>

      <section ref={aboutRef}>
        <OurTeam />
      </section>

      <MissionVision />

      <section ref={faqRef}>
        <FrequentlyAskQuestions />
      </section>

      <Footer />

        
        
    </div>
  )
}

export default Home
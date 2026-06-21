import React from 'react'
import Hero from '../Components/Hero'
import TopProduct from '../Components/TopProducts'
import PopularCards from '../Components/PopularCards'

export default function Home() {
  return (
    <div>

        <Hero/>
        <PopularCards/>
        <TopProduct/>
    </div>
  )
}

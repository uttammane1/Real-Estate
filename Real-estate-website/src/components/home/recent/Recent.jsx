import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Most booked holiday rentals' subtitle='
              Featuring pool views, Luxury Studios with Canal View in Downtown - Marquise Square Tower offers accommodation with balcony' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent

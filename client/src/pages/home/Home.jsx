import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'
import Slide from '../../components/slide/slide'
import bgImage from './images/main-bg.webp'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={3}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className='item'>
            <video src='./img/video.mp4' controls />
          </div>
        </div>
      </div>
      <div className='features dark'>
        <div className='container'>
          <div className='item'>
            <h1>
              TenEthen <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              Connect to freelancers with proven business experience
            </div>

            <div className='title'>
              <img src='./img/check.png' alt='' />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className='title'>
              <img src='./img/check.png' alt='' />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className='item'>
            <img src={bgImage} alt='' />
          </div>
        </div>
      </div>
      <Slide className='secondSlide' slidesToShow={4} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  )
}

export default Home

import React from 'react'
import facebook from './images/facebook.png'
import google from './images/google.png'
import netflix from './images/netflix.png'
import paypal from './images/paypal.png'
import pg from './images/pg.png'
import './TrustedBy.scss'

const TrustedBy = () => {
  return (
    <div className='trustedBy'>
      <div className='container'>
        <span>Trusted By:</span>
        <img src={facebook} alt='' />
        <img src={google} alt='' />
        <img src={netflix} alt='' />
        <img src={pg} alt='' />
        <img src={paypal} alt='' />
      </div>
    </div>
  )
}

export default TrustedBy

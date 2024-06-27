import React from 'react'
import './Hero.css'

import R_image from '../Images/LAYOUT 1 (1) (6).png'
import Rift_image from '../Images/LAYOUT 1 (1) (7).png'
import Rafter_image from '../Images/LAYOUT 1 (5).png'
import cartoon_gif from '../Images/FINAL1.gif'
import soon_image from '../Images/LAYOUT 1 (1) (5).png'
import rigter from '../Images/LAYOUT 1 (4) (2).png'
import discord from '../Images/discord.jpeg';
import x from '../Images/x.jpeg';

const Hero = () =>{
  return (

<div className='top_container'>
  <img src={
    cartoon_gif} alt=""  className='background_gif'/>

<img src={R_image} alt=""  className='R_image'/>
<img src={Rift_image} alt=""  className='Rift_image'/>
<img src={x} alt=""  className='twitter'/>
<img src={discord} alt=""  className='discord'/>
<img src={rigter} alt="" className='Rafter_image1' />
<img src={Rafter_image} alt="" className='Rafter_image' />

<img src={soon_image} alt="" className='soon_image' />

</div>

  )
}

export default Hero

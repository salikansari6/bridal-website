import React from 'react'
import '../styles/Hero.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const Hero = ({imageURL}) => {
    return (
        <div className="hero" style={{background:`url(${imageURL})`}}>
            <div className="hero__text">
                <p className="hero__text__banner">You are important and so is your wedding!</p>
                <p className='hero__text__description'>Marriage is a sacred bond between two people. Let us help you make it special and glam you up.</p>
            </div>
            <a href="#" className="hero__offers">Check our offers<ChevronRightIcon/></a>
        </div>
    )
}

export default Hero

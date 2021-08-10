import React from 'react'
import BrowsingHistory from './BrowsingHistory'
import Hero from './Hero'
import Trending from './Trending'
import {useSelector} from 'react-redux'

const LandingPage = () => {
    const historyItems = useSelector(state => state.historyItems)
    return (
        <div>
            <Hero imageURL="https://wallpaperaccess.com/full/1657549.jpg"></Hero>
            <Trending/>
            {
                historyItems.length!==0 && <BrowsingHistory/>
            }
        </div>
    )
}

export default LandingPage

import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import turtle1 from '../../assets/turtle1.jpg'
import turtle2 from '../../assets/turtle2.jpg'
import turtle4 from '../../assets/turtle4.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={turtle1} alt='/' />
                    {/* <p className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique cursus eleifend. In hac habitasse platea dictumst. Proin finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed porttitor tellus massa vitae justo. Morbi elementum posuere ex in tincidunt.</p> */}
                </div>
                <div>
                    <img src={turtle2} alt='/' />
                    {/* <p className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique cursus eleifend. In hac habitasse platea dictumst. Proin finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed porttitor tellus massa vitae justo. Morbi elementum posuere ex in tincidunt.</p> */}
                </div>
                <div>
                    <img src={turtle4} alt='/' />
                    {/* <p className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique cursus eleifend. In hac habitasse platea dictumst. Proin finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed porttitor tellus massa vitae justo. Morbi elementum posuere ex in tincidunt.</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel

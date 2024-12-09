import React from 'react'
import './SelectsStyles.css'

import turtle1 from '../../assets/turtle1.jpg'
import turtle2 from '../../assets/turtle2.jpg'
import turtle3 from '../../assets/turtle3.jpg'
import turtle4 from '../../assets/turtle4.jpg'


import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={turtle1} text='turtle1' />
                <SelectsImg bgImg={turtle2} text='turtle2' />
                <SelectsImg bgImg={turtle3} text='turtle3' />
                <SelectsImg bgImg={turtle4} text='turtle4' />
 
            </div>

        </div>
    )
}

export default Selects

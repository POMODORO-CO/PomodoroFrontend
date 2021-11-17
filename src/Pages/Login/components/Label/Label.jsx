import React from 'react'
import './Label.css'

const Label = ({text}) => {
    return (
        <div>
            <div>
                <label> {text} </label> 
            </div>
        </div>
    )
}

export default Label

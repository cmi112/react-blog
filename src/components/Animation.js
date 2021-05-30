import React from 'react'
import {Spring} from "react-spring"
export default function Animation() {
    return (
        // How to use this liberary Tommorows question
        <Spring
        from={{opacity:0,marginTop:-500}}
        to={{opacity:1,marginTop:0}}
        >
            {props=>(
                <div style={props}>

            <div style={styling}>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut est eaque delectus asperiores. Dignissimos, nesciunt asperiores! Ducimus nisi amet nemo ipsum vitae, provident eaque, laboriosam sunt quidem cupiditate consequatur.</p>
        </div>
                </div>
            )}
        </Spring>
      
    )
}
const styling={
    background:"steelblue",
    color:"white",
    padding:"1.5rem"

}
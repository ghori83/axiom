
import React from 'react'


function About () {

const city= localStorage.getItem('city')
console.log(city)
const city2 = localStorage.setItem('city', 'hyderabad')
console.log(city2)
    return(
        <>
        <h1>this is about page</h1>
        
        
        </>
    )


}

export default About
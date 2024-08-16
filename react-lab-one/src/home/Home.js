import React from 'react'
import image from "../logo.svg"
const Home = () => {
    let article = 'first'
    return (
        <div style={{alignItems: 'center',padding:'15px', justifyContent:'center'}}>
        { article === 'first' ?( 
            <img src={image} alt='first'/>) :(
            <a href="https://github.com/rawanmohameedd" style={{fontSize: 'large', fontWeight:'bold', padding:'50px', color:'rgb(189, 100, 211)'}}> GitHub link</a>
            )}
            <p> Officia mollit aliquip ipsum consectetur ea aliquip non non tempor. Cupidatat reprehenderit eu ut dolore mollit nostrud. Consequat ullamco aliqua est magna eiusmod officia sunt pariatur qui occaecat.</p>
            </div>
    )
}

export default Home
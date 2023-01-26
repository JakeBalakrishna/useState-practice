import React, {useState} from 'react'
import './style.css'
import './images/FallingNugget3-1.jpg'

export default function About() {
    const [count, setCount] = useState(0);
    

    const increment = ()  => {
    setCount(count + 1)
    };
    
    return(
    <>   

        <div>
        <img src={require('./images/FallingNugget3-1.jpg')} className='avatar' alt='A sinlge chicken nugget' />
        </div>
        
        <div className="nug-counter">
            <p>Nug counter: {count}</p>
            <p>Calories: {count * 59}</p>
             <button onClick={increment} >I can have one more</button>      
        </div>
        
    </>
        
        
    )
}
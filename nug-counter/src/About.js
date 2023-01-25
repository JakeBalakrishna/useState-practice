import React, {useState} from 'react'

import './style.css'


export default function About() {
    const [count, setCount] = useState(0);
    

    const increment = ()  => {
    setCount(count + 1)
    };
    
    return(
    <>   
        <div>
        <img src="../images/1nug.jpg" className='avatar' alt='nugget'/>
        </div>
        
        <div className="nug-counter">
            <p>Nug counter: {count}</p>
            <p>Calories: {count * 59}</p>
             <button onClick={increment} >I can have one more</button>      
        </div>
        
    </>
        
        
    )
}
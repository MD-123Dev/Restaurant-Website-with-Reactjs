
import React, { Component , useRef ,useState  } from 'react'
import './style.css'
 
const Food = (props) => {
       const show = useRef(null)
       const hide = useRef(null)
       const [showv, setShow] = useState(false);


    const hideCard = () => {
        
           setShow(!showv )
          
           show.current.style.display = (showv==false) ? "none" : "block";
           hide.current.style.display = (showv==false) ? "block" : "none";

    }
    const showCard = () => {
        
           setShow(!showv )
          
           show.current.style.display = (showv==true) ? "block" : "none";
           hide.current.style.display = (showv==true) ? "none" : "block";

    }

    return (
        <div>
            <div className=" sty-card" style={{width:'260px',height:300}}>
                <img className="sty-img" src={ props.image } style={{width:'260px',height:'200px'}} alt="" ref = {show} onMouseOver={ hideCard  } />
                 <div ref={hide} onMouseOut={ showCard  } className="sty-hide" style={{display:'none',width:'260px',height:'200px'}}>
                   <h4 className="sty-titl">Description </h4>
                   <p className="sty-text">{ props.title}</p>
                   <button className="sty-btn"><i className="fa fa-shopping-cart"></i></button>
            </div>
            </div>
           
            
        </div>
    )
}

export default Food

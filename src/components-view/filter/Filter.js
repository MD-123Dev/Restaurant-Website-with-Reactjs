import React, { Component , useRef ,useState  } from 'react'

import './style.css'
 

 function Filter() {
        const toggle = useRef(null)
           const toggleRg = useRef(null)
      
       const [show, setShow] = useState(false);

     const showCategories = () => {
        
         setShow(!show)
          
           toggle.current.style.display = (show==false) ? "none" : "block";

     }
     const showPrix = () => {
        
         setShow(!show)
          
           toggleRg.current.style.display = (show==false) ? "none" : "block";

     }



    return (
        <div>
            <div className="sty-cnt">
              <h4 className="mt-2 sty-catg">Categorie  <i className="fa fa-caret-down sty-arrow" style={{cursor:'pointer'}} onClick={showCategories}></i></h4>
             
              <ul ref = {toggle} style={{marginTop:'20px'}}>
                  <li className="sty-li" ><input type="checkbox" className="sty-checkb" />Pitzaa</li>
                  <li className="sty-li" >  <input type="checkbox" className="sty-checkb"/>Food</li>
                  <li className="sty-li"><input type="checkbox" className="sty-checkb" />Sopa</li>
                  <li className="sty-li"> <input type="checkbox" className="sty-checkb" />Salad</li>
                  
             </ul>  
               <h4 className="sty-catg">Prix <i className="fa fa-caret-down sty-arrow" onClick={showPrix} style={{cursor:'pointer'}}> </i></h4>
               <div  ref = {toggleRg}>
                   <input type="text" className="sty-txt-prix d-inline" value="0" />
                  
                   <input type="text" className="sty-txt-prix d-inline" style={{marginLeft:"25px"}} value="1000"/><br></br>
                 <input type="range" name="range" class="form-range styl-range"  id="customRange1"></input>
               </div>

              </div>
        </div>
    )
}
export default Filter;
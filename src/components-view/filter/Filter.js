
import React from 'react'
import './style.css'
 

 function Filter() {
    return (
        <div>
            <div className="sty-cnt">
              <h1 className="mt-2 sty-catg">Categorie : </h1>
              <ul>
                  <li className="sty-li" ><a href="#" className="sty-a">Pitzaa</a></li>
                  <li className="sty-li" ><a href="#" className="sty-a">Food</a></li>
                  <li className="sty-li"><a href="#" className="sty-a">Sopa</a></li>
                  <li className="sty-li"><a href="#" className="sty-a">Salade</a></li>
                  
             </ul>  
               <h1 className="sty-catg">Prix : </h1>
               <input type="range" name="range" class="form-range styl-range"  id="customRange1"></input>

              </div>
        </div>
    )
}
export default Filter;
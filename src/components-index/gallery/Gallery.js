
import React from 'react'
import foodimg from '../gallery/food.jpg'
import './style.css'


 function Gallery() {
    return (
        <div>
                  <img className="img-fluid w-100 " src={foodimg} style={{height:730}} alt="" />
                  <h1 className="sty-test">Welcome :</h1>
        </div>
    )
}
export default Gallery;
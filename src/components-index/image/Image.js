
import React from 'react'
import images from '../image/imageeat.jpg'

 function Image() {
    return (
        <div>
              
              <div >
                  <img className="card-img-top img-fluid " src={images} style={{height:400,width:450}} alt="" />
                  
              </div>
             
        </div>
    )
}
export default Image;
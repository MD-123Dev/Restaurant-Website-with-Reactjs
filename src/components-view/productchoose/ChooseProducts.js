
import React, { Component  ,useState  } from 'react'
import './style.css'


const ChooseProducts = () => {
      
     const [value, setValues] = useState([]);
     const [isChange , setChange] = useState(false);
       

       const handleChange = (e) =>{
             setChange(true)
             setValues( e.target.value );
             
   
       }

       const cancelChoose = () =>{
             setValues( null );
              setChange(false)
       }

    return (
        <div>
           <div >
                <div class="form-group d-inline ">
                  <select class="form-control sty-selct d-inline " onChange={handleChange} name="" id="">
                    <option>Food</option>
                    <option>Juice</option>
                    <option>kake</option>
                    <option>water</option>
                    <option>burger</option>
                  </select>
                </div>

                 

                <div className="style-input-keyw d-inline ">

                  {isChange
                      ?   <span >{value}<i className="fa fa-window-close" onClick={cancelChoose}></i></span>
                      : ""
                    }

                    
                </div>
            </div>
        </div>
    )
}

export default ChooseProducts

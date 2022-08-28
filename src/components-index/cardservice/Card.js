
import React from 'react'
import './style.css'


 function Card(props) {
    return (
        <div>

            <div class="card" style={{width:310,height:'100%',marginLeft:30}}>
                    <img className="card-img-top " src={ props.image } style={{width:310,height:'220px'}} alt="" />
                <div class="overlay">
                   <p className="card-text">simply dummy text of the printing and typesetting industry. Lorem Ips</p>
                </div>
            </div>
                
        </div>
    )
}
export default Card;
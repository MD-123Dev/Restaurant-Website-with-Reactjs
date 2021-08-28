
import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{width:310,height:300}}>
                <img className="card-img-top" src={ props.image } style={{width:310,height:'180px'}} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{ props.title }</h4>
                    <p className="card-text">simply dummy text of the printing and typesetting industry. Lorem Ips</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card

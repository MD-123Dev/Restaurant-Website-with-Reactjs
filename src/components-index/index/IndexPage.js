import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dipslay.css'
import { Link } from 'react-router-dom'
import Image from '../image/Image';
import Gallery from '../gallery/Gallery';
import Card from '../card/Card';

import NavBar from '../../layout/navbar/NavBar';
import Footer from '../../layout/footer/Footer';
import image from '../../images/welc2.jpg'
import image1 from '../../images/eat1.jpg'
import image2 from '../../images/eat2.jpg'
import image3 from '../../images/eat3.jpg'
import image4 from '../../images/eat4.jpg'
import image5 from '../../images/eat5.jpg'
import image6 from '../../images/eat6.jpg'


class indexPage extends Component {
  
    

    render() {
       
         
        return (
            
            <div>
                
                <Gallery />
                <div className="container">
                    <div className="row">

                         <div className="col-md-6 mt-5">
                            <Image />
                        </div>

                        <div className="col-md-6">
                            <div className=" mt-5">
                                <h1>Restaurant </h1>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            
                            </div>
                        
                        </div>
                       
                   </div>
                   <div className="row">
                      <h1 className="title-sty">Menu</h1>
                      <div className="styl-border-tit"></div>
                   </div>
                   <div className="row">
                       <div className="col-md-4">
                          <Card title="Piths kil" image={ image1 }/>
                       </div>
                        <div className="col-md-4">
                           <Card title="Piths kil" image={ image2 } />
                       </div>
                        <div className="col-md-4">
                           <Card title="Piths kil" image={ image3 } />
                       </div>
                       
                   </div>
                   <div className="row mt-4 mb-3">
                       <div className="col-md-4">
                          <Card title="Piths kil" image={ image4 } />
                       </div>
                        <div className="col-md-4">
                           <Card title="Piths kil" image={ image5 } />
                       </div>
                        <div className="col-md-4">
                           <Card title="Piths kil" image={ image6 } />
                       </div>
                       
                   </div>
                   
                </div>
                <div className="mb-3">
                   <img className="img-fluid" src={image} style={{width:'100%',height:'500px'}} alt="" />
                </div>
             
            </div> 
        )
    }
}

export default indexPage
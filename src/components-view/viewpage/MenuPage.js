import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../filter/Filter';

import Food from '../food/Food';
import Paginate from '../pagination/Pagination';
import image1 from '../../images/eat1.jpg'
import image2 from '../../images/eat2.jpg'
import image3 from '../../images/eat3.jpg'
import image4 from '../../images/eat4.jpg'
import image5 from '../../images/eat5.jpg'
import image6 from '../../images/eat6.jpg'
import image7 from '../../images/eat7.jpg'



class viewpage extends Component {
  
  

    render() {
       
         
        return (
            
            <div>
                <div class="container-fluid">
                    <div className="row">
                       <div className="col-md-3">
                         <Filter />
                         
                       </div>
                      
                       <div className="col-md-9 mt-4">
                            <div className="row">
                                <div className="col-md-3">
                                <Food title="since ists has nes ops to g since" image = { image1 } />
                                </div>
                                <div className="col-md-3">
                                  <Food title="since ists has nes ops to g since" image = { image2 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image3 } />
                                </div>
                               <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image4 } />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image5 } />
                                </div>
                                <div className="col-md-3">
                                  <Food title="since ists has nes ops to g since" image = { image2 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image4 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image5 } />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image2 } />
                                </div>
                                <div className="col-md-3">
                                  <Food title="since ists has nes ops to g since" image = { image4 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image3 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image7 } />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image5 } />
                                </div>
                                <div className="col-md-3">
                                  <Food title="since ists has nes ops to g since" image = { image2 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image3 } />
                                </div>
                                <div className="col-md-3">
                                   <Food title="since ists has nes ops to g since" image = { image1 } />
                                </div>
                            </div>
                         
                               
                          
                       </div>
                    </div>
                    <Paginate />
                </div>
            </div> 
        )
    }
}

export default viewpage
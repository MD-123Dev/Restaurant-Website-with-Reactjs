import React, { Component } from 'react'
import './style.css'
import kake1 from '../../images/kake1.jpg'
import kake2 from '../../images/kake2.jpg'
import kake3 from '../../images/kake3.jpg'
import burger from '../../images/burger1.jpg'
import burger1 from '../../images/burger.jpg'
import juice1 from '../../images/juice1.jpg'
import juice2 from '../../images/juice2.jpg'
import juice4 from '../../images/juice4.jpg'
import juice5 from '../../images/juice5.jpg'


class ImageGallery extends Component {
  
   

   state = {
            imageList:[]
           
            
        
        };

        componentDidMount(){
            this.navGalleryJuices();
        }
   
        navGalleryKake = (e) => {
              e.preventDefault();
                 const images1 = [
                        { src:[kake1]  },
                        {  src:[kake2] },
                        { src: [kake3] },
                        { src:[kake2] },
                        {  src: [kake1] },
                        
                ];
                
                
                    
                   this.setState({
                           imageList:this.state.imageList.splice(0,this.state.imageList.length),
                           imageList:this.state.imageList.concat(images1)
                           
                          
                    });

                    
                
         }   

         navGalleryJuices = () => {
              
              const images2 = [
                        { src:[juice1]  },
                        {  src:[juice2] },
                        { src: [juice4] },
                        { src:[juice2] },
                        {  src: [juice5] },
                        {  src: [juice2] },
                        {  src: [juice1] },
                        {  src: [juice5] },
                        
                ];
                
                
                    
                   this.setState({
                           imageList:this.state.imageList.splice(0,this.state.imageList.length),
                           imageList:this.state.imageList.concat(images2)
                          
                    });
         }

         navGalleryBurger = (e) => {
               e.preventDefault();
              const images3 = [
                        { src:[burger]  },
                        {  src:[burger1] },
                        
                        
                ];
                
                
                    
                   this.setState({
                           imageList:this.state.imageList.splice(0,this.state.imageList.length),
                           imageList:this.state.imageList.concat(images3)
                          
                    });
         }


    render() {
       
    
                    
        return (
            
            <div>
                
                <div>
                    <button className="sty-btn" onClick={this.navGalleryJuices}>Juices</button>
                     <button className="sty-btn" onClick={this.navGalleryBurger}>burger</button>
                      <button className="sty-btn" onClick={this.navGalleryKake}>Kake</button>
                </div>
                    {this.state.imageList.map(({src}) => <img  src={src} className="img-styG" />)}
                    
                   

              
             
            </div> 
        )
    }
}

export default ImageGallery
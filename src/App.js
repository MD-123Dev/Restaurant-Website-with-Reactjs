import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import home from './components-index/index/IndexPage';
import menu from './components-view/viewpage/MenuPage';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import NavBar from './layout/navbar/NavBar.js';
import Footer from './layout/footer/Footer.js';


function App() {
  return (
  
     <Router>
      <div className="App">
         
       
         <NavBar />
        <Switch>
           
                  <Route exact path="/" component={home} />
              
                   <Route exact path="/menu" component={menu}  />
            
        </Switch> 

         <Footer />
         
      </div>
      </Router>
     
     
  ) 
  
}

export default App;

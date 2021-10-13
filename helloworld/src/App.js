import "bootstrap/dist/css/bootstrap.min.css";
// import { Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Popular from './component/Popular'
import TopRated from './component/TopRated'
import Movie from './component/Movie'
import LoginProvider from './component/context/context'
import Header from "./component/Header";




function App() {

  return (
    <>
      <Router >
        <Header/>
        <Switch>
      
      
        <LoginProvider>
        <Route exact path="/"  component={Home} />
          <Route exact path="/Popular"component={Popular} />    
          <Route exact path="/TopRated"  component={TopRated} />  
          <Route  exact path="/Movie" component={Movie} />  
          
          </LoginProvider>
        
      
    
        </Switch>
      </Router>
    </>
  );
}

export default App;
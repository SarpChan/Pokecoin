import React from 'react'

import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage'
import BlockPage from './pages/BlockPage'
import CardPackPage from './pages/CardPackPage'
import ErrorPage from './pages/ErrorPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom"
import CardListPage from './pages/CardListPage'
import CardDetailPage from './pages/CardDetailPage'
import PrivateRoute from './components/PrivateRoute'




function App() {
    
  return (
    

    <div className="App">

      
      
      <Router>

        <NavBar />
        

        <Switch>
          <Route exact path='/' children={<Redirect to='/login'/>}/>
          <Route exact path="/login" component={LoginPage}>
           
          </Route>
          <PrivateRoute component={BlockPage} exact path="/home" />
         
          
           
          
          <Route exact path="/packs" component={CardPackPage}>
            
          </Route>
          <Route  exact path="/cards/packages/:id" component ={CardListPage}>
           
          </Route>
          <Route exact path="/cards/:id" component={CardDetailPage}>
            
          </Route>
          <Route exact path="/cards" component={CardListPage} />

          <Route path="*" component={ErrorPage}/>
        </Switch>
      </Router>

    </div>
    
   
  )
}

export default App;

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
    
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { Productos } from '../components/productos/Productos';
import { Home } from '../components/home/Home';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                
                <Switch>
                    <Route exact path="/productos" component={Productos}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}

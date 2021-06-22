import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/home';
import Broma from '../pages/Broma/broma';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bromas/" component={Broma} />
   
            <Route path="*" component={() => 
                <div>
                Error 404 (No me he currado tanto este ejercicio), pero imaginate aquí la típica imagen de "la página no existe"
                
                </div> } />
        </Switch>
    </BrowserRouter>
);

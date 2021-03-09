import { BrowserRouter, Route, Switch } from "react-router-dom";

import CarProvider from './Components/Context/CarProvider';
import Home from './Components/Pages/Home';
import MenuBrownie from './Components/Pages/MenuBrownie';
import MenuCake from './Components/Pages/MenuCake';
import MenuCupCake from './Components/Pages/MenuCupcake';
import MenuPie from './Components/Pages/MenuPie';
import Order from './Components/Pages/Order';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home} />
        <CarProvider>
          <Route exact path="/brownie" component={MenuBrownie} />
          <Route exact path="/cake" component={MenuCake} />
          <Route exact path="/cupcake" component={MenuCupCake} />
          <Route exact path="/pie" component={MenuPie} />
          <Route exact path="/order" component={Order} />
        </CarProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

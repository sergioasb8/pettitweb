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
          <Route exact path="/Brownie" component={MenuBrownie} />
          <Route exact path="/Cake" component={MenuCake} />
          <Route exact path="/CupCake" component={MenuCupCake} />
          <Route exact path="/Pie" component={MenuPie} />
          <Route exact path="/Order" component={Order} />
        </CarProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import Greenhouse from "./components/Greenhouse";
import Navigation from "./components/Navigation";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";
import { ClimateProvider } from "./context/ClimateContext";

function App() {
  return (
    <>
    <ClimateProvider>

      <Navigation />
      <Switch>
        <Route path="/thermometer">
          <Thermometer />
        </Route>
        <Route path="/hygrometer">
          <Hygrometer />
        </Route>
        <Route path="/">
          <Greenhouse />
        </Route>
      </Switch>
    </ClimateProvider>
    </>
  );
}

export default App;

import { LandingPage } from './LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"
import { ProtectedRoute } from "./Protected.route";
import { AppLayout } from './AppLayout';
function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;

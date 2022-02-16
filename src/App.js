import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/' exact component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

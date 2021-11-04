import './App.css';
import {Route, Switch} from 'react-router-dom';
/* IMPORT LINK, ROUTE, & || SWITCH FROM REACT ROUTER DOM
SEE INDEX.JS FOR BROWSER ROUTER*/
import Planet from './components/Planet';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <h4>These aren't the droids you're looking for:</h4>
      {/*ANYTHING OUTSIDE OF SWITCH WILL ALWAYS SHOW*/}
      <switch>
      {/*PUT COMPONENT IN ROUTE IN SWITCH SO ONLY SHOWS WHEN PATH USED*/}
        <Route path ='/planets/:input1'>
          <Planet/>
        </Route>

        <Route path ='/people/:input1'>
          <People/>
        </Route>
      </switch>
    </div>
  );
}

export default App;

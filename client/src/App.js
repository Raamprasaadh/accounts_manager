import './App.css';
import NavBar from '../src/components/NavBarComponent';
import AddTxn from '../src/components/AddTransactionComponent';
import ViewTxn from '../src/components/ViewTransactionsComponent';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
      <Switch>
      <Route path="/addtxn" component={AddTxn}></Route>
      <Route path="/viewtxn" component={ViewTxn}></Route>
      <Route path="/" component={AddTxn}></Route>
      </Switch>
    </div>
    </Router>
  );
  }
export default App;

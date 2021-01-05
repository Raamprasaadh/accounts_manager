import './App.css';

function App() {
  return (
    <div className="App">
    <div className="navbar">
      <div className="logo"><h1>(AM) Accounts Manager*</h1></div>
      <div className="navitems">
        <ul>
          {/*add router and routes */}
          <li>
            {/*add router and routes */}
            Add Transaction
          </li>
          <li>
            View/Edit Accounts
          </li>
        </ul>
        <div className="addtrxnform">
          <h3>Add Transaction</h3>
            <label>Date</label>
            {/* Date picker*/}
            <input/>
            <label>Type of Transaction</label>
            {/*Dropdown */}
            <input/>
            <label>Subtype</label>
            {/*Dropdown */}
            <input/>
            <label>Amount</label>
            {/*only numerical/decimal */}
            <input/>
        </div>
      </div>
    </div>      
    </div>
  );
  }
export default App;

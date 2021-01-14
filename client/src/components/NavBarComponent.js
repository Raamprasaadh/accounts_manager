import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBarComponent extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="logo"><h1>(AM) Accounts Manager*</h1></div>
                    <div className="navitems">
                        <Link to ="/addtxn"className="navbar-link">Add Transactions</Link>
                        <Link to ="/viewtxn"className="navbar-link">View Transactions</Link>
                    </div>
                </div>
            </div>
        )
    }
}

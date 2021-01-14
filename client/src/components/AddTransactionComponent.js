import React, { Component } from 'react'

export default class AddTransactionComponent extends Component {
    render() {
        return (
            <div>
                <div className="addtrxnform">
                    <h3>Add Transaction</h3>
                    <label>Date</label>
                    {/* Date picker*/}
                    <input type="date" placeholder="YYYY-MM-DD" />
                    <label>Type of Transaction</label>
                    <select value="Select">
                        <option value="expense-business">Expense Business</option>
                        <option value="expense-personal">Expense Personal</option>
                        <option value="income">Income</option>
                        <option value="investment">Investment</option>
                    Select</select>
                    <label>Subtype</label>
                    {/*Dropdown */}
                    <input />
                    <label>Amount</label>
                    {/*only numerical/decimal */}
                    <input />
                    <label>Reason</label>
                    {/*only numerical/decimal */}
                    <input />
                </div>
            </div>)
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default class AddTransactionComponent extends Component {
    constructor(props
    ) {
        super(props);

        this.state = {
            date: new Date(),
            type: "",
            subType: "",
            amount: "",
            reason: "",
            types: [],
            subTypes: []
        }

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeSubType = this.onChangeSubType.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3001/types")
            .then(res => {
                if (res) {
                    this.setState({ types: res.data.map(type => type.name), type: 'select' })
                }
            }
            );

        console.log(this.state.types);
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
        var url = "http://localhost:3001/types/"
        var urlExt = e.target.value.toLowerCase().replace(' ', '-');
        axios.get(url + urlExt)
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        subTypes: res.data.map((subtype => subtype.name))
                    })
                }
                console.log(this.state.subTypes);
            })
            .catch()
    };
    onChangeSubType(e) {
        this.setState({
            subType: e.target.value
        });
    };
    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    };
    onChangeReason(e) {
        this.setState({
            reason: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.amount);
        console.log(parseFloat(this.state.amount));
        const transaction = {

             date :this.state.date,
             type : this.state.type,
             sub_type : this.state.subType,
             amount : parseFloat(this.state.amount),
             reason:this.state.reason
            
        }
        axios.post("http://localhost:3001/accounts/add", transaction)
            .then(res => console.log(res.data));
        console.log(transaction);
    }

    render() {
        return (
            <div>
                <div className="addtrxnform">
                    <h3 className="pageTitle">Add Transaction</h3>
                    <form onSubmit={this.onSubmit}>
                        <label>Date</label>
                        {/* Date picker*/}
                        <DatePicker selected={this.state.date}
                            onChange={this.onChangeDate} />
                        {/*<input type="date" placeholder="YYYY-MM-DD" />*/}
                        <div className="formGroup">
                            <label>Type of Transaction : </label>
                            <select required
                                className="formControl"
                                value={this.state.type}
                                onChange={this.onChangeType}>
                                <option>select</option>
                                {
                                    this.state.types.map(function (type) {
                                        return <option key={type}
                                            value={type}>
                                            {type}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="formGroup">
                            <label>Subtype : </label>
                            {/*Dropdown */}
                            <select required
                                className="formControl"
                                value={this.state.subType}
                                onChange={this.onChangeSubType}>
                                <option>select</option>
                                {
                                    this.state.subTypes.map(function (subType) {
                                        return <option key={subType}
                                            value={subType}>
                                            {subType}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="formGroup">
                            <label>Amount</label>
                            {/*only numerical/decimal */}
                            <input className="formControl" required type="float" onChange={this.onChangeAmount}/>
                        </div>
                        <div className="formGroup">
                            <label>Reason</label>
                            {/*only numerical/decimal */}
                            <input className="formControl" required type="text" placeholder="Why did this transaction happened ?" onChange={this.onChangeReason}/>
                        </div>
                        <button type='submit'>Add transaction</button>
                    </form>
                </div>
            </div>)
    }
}

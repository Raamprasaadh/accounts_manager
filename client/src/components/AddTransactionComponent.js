import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import  "react-datepicker/dist/react-datepicker.css"

export default class AddTransactionComponent extends Component {
    constructor(props
    ){
        super(props);

        this.state = {
            date:new Date(),
            type:"",
            subType:"",
            amount:"",
            reason:"",
            types:[],
            subTypes:[]
        }

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeType =this.onChangeType.bind(this);
        this.onChangeSubType = this.onChangeSubType.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:3001/types")
        .then(res=>{
            if(res){
                this.setState({types:res.data.map(type => type.name)})
                }
        }
            );
        
                console.log(this.state.types);
    }
    onChangeDate(date){
        this.setState({
            date: date
        })
    }
    onChangeType(e){
        this.setState({
            type:e.target.value
        });
        var url = "http://localhost:3001/types/"
        var urlExt = e.target.value.toLowerCase();
        console.log(url+urlExt);
    };
    onChangeSubType(e){
        this.setState({
            type:e.target.value
        });
    };
    onChangeAmount(e){
        this.setState({
            amount:e.target.value
        });
    };
    onChangeReason(e){
        this.setState({
            reason:e.target.value
        });
    };

    onSubmit(e){
        e.preventDefault();

        const transaction = {
            date :this.state.date,
            accounts_type : this.state.type,
            sub_type : this.state.subType,
            amount : this.state.amount,
            reason : this.state.reason
        }
        console.log( transaction);
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
                    onChange={this.onChangeDate}/>
                    {/*<input type="date" placeholder="YYYY-MM-DD" />*/}
                    <div className="formGroup">
                    <label>Type of Transaction : </label>
                    <select required
                    className="formControl"
                     value={this.state.type}
                     onChange={this.onChangeType}>
                        
                    {
                        this.state.types.map(function(type){
                            return <option key = {type}
                            value = {type}>
                                {type}
                            </option>
                        })
                    }
                    </select>
                    </div>
                    <div className="formGroup">
                    <label>Subtype : </label>
                    {/*Dropdown */}
                    <select /*required*/
                    className="formControl" 
                    value = {this.state.subType}
                    onChange={this.onChangeSubType}>
                        {
                            this.state.subTypes.map(function(subType){
                                return <option key = {subType} 
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
                    <input className = "formControl" required type = "number"/>
                    </div>
                    <div className="formGroup">
                    <label>Reason</label>
                    {/*only numerical/decimal */}
                    <input  className = "formControl" required type = "text" placeholder="Why did this transaction happened ?"/>
                    </div>
                    <button type='submit'>Add transaction</button>
                    </form>
                </div>
            </div>)
    }
}

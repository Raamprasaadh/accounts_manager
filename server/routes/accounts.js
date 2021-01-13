const router = require("express").Router();
let Transaction = require('../models/accounts.model');

router.route('/').get((req,res)=>{
    Transaction.find()
    .then(transactions=>res.json(transactions))
    .catch(err => res.status(400).json("error:"+error));
});

router.route('/add').post((req,res)=>{

const date = Date.parse(req.body.date);    
const accounts_type = req.body.type;
const sub_type = req.body.sub_type;
const amount = Number(req.body.amount);
const reason = req.body.reason;

const newTransaction = new Transaction({date,accounts_type,sub_type,amount,reason});
newTransaction.save()
.then(()=>res.json("Transaction added successfully"))
.catch(err => res.status(400).json("error:"+err));
});

router.route('/:id').delete((req,res)=>{
    Transaction.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Transaction Deleted successfully"))
    .catch(err => res.status(400).json("error:"+err));
    });

module.exports = router;
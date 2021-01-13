const router = require("express").Router();
let types = require('../models/types.model');
let expense_business = require('../models/subtypes.model').expense_business;
let expense_personal = require('../models/subtypes.model').expense_personal;
let income = require('../models/subtypes.model').income;
let investment = require('../models/subtypes.model').investment;

router.route('/').get((req,res)=>{    
    types.find()
    .then(types=>res.status(200).json(types))
    .catch(err=>res.status(400).json("error:"+err));
});
router.route('/expense-business').get((req,res)=>{    
    expense_business.find()
    .then(types=>res.status(200).json(types))
    .catch(err=>res.status(400).json("error:"+err));
});
router.route('/expense-personal').get((req,res)=>{    
    expense_personal.find()
    .then(types=>res.status(200).json(types))
    .catch(err=>res.status(400).json("error:"+err));
});
router.route('/income').get((req,res)=>{    
    income.find()
    .then(types=>res.status(200).json(types))
    .catch(err=>res.status(400).json("error:"+err));
});
router.route('/investment').get((req,res)=>{    
    investment.find()
    .then(types=>res.status(200).json(types))
    .catch(err=>res.status(400).json("error:"+err));
});
module.exports = router;
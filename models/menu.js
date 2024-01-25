const mongoose=require('mongoose');
const menuitemschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        deffault:[],
    },
    umsales:{
        type:Number,
        default:0
    }
});

const menuitem=mongoose.model('menuitem',menuitemschema);
module.exports=menuitem;
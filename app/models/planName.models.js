const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const PlanName = new mangoose.Schema(
  {
    _id: {
      type:mangoose.Schema.Types.ObjectId,
    },
    //PrivateCabins(dedicated,flating,private desk)
    name:{
        type:String
    },
    facilities:{
        type:Array
    },
    branchId:{
        type:Schema.Types.ObjectId,
        ref:"Branch"
    }  
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("PlanName", PlanName);

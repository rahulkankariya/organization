const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const Plan = new mangoose.Schema(
  {
    _id: {
      type:mangoose.Schema.Types.ObjectId,
    },
    //floatingDesk,dedicatedDesk,PrivateCabins(small,medium ,large)
    planId:{
        type:Schema.Types.ObjectId,
        ref:"PlanName"
    },
    capacity:{
        type:String
    },
    roomNumber:{
      type:String
    }
   
    
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("Plan", Plan);

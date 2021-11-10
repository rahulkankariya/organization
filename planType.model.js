const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const PlanType = new mangoose.Schema(
  {
    _id: {
      type:mangoose.Schema.Types.ObjectId,
      ref:"Facilities"
    },
    //PrivateCabins(small,medium ,large)
    name:{
        type:String
    },
    planId:{
      type:Schema.Types.ObjectId,
      ref:"PlanAlloted"
  },
  capacity:{
    type:String
  }

    
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("PlanType", PlanType);

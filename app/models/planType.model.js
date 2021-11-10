const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const PlanType = new mangoose.Schema(
  {
    _id: {
      type:mangoose.Schema.Types.ObjectId,
    },
    name:{
        type:String
    },
    roomNumber:{
        type:String
    },
    roomCapacity:{
        type:String
    },
    planId:{
        type:Schema.Types.ObjectId,
        ref:"PlanName"
    }
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("PlanType", PlanType);

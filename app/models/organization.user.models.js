const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const Branch = new mangoose.Schema(
  {
    _id: mangoose.Schema.Types.ObjectId,
    name: {
      type: String,
    },
    post:{
        type:String
    },
    // array object idname,id proof document
    idProof:{
      type:Array
    },
    joiningDate:{
      type:String
    },  
    area:{
        type:String
    },
    street:{
        type:String
    },
    landmark:{
        type:String
    },
    pincode:{
      type:String
    },
    city:{
      type:String
    },
    state:{
      type:String
    },
    country:{
      type:String
    },
    telephoneNumber:{
        type:Array
    },
    email:{
        type:String
    },
    branchId: {
        type: Schema.Types.ObjectId,
        ref: "Branch",
      },

   
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("Branch", Branch);

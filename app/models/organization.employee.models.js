const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const Employee = new mangoose.Schema(
  {
    _id: mangoose.Schema.Types.ObjectId,
    name: {
      type: String,
    },
    post:{
        type:String
    },
    // array object idname,id proof document,documentId
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
    contactNumber:{
        type:Array
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
module.exports = mangoose.model("Employee", Employee);

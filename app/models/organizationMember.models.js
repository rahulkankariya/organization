const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const Member = new mangoose.Schema(
  {
    _id: mangoose.Schema.Types.ObjectId,
    name: {
      type: String,
    },
    post:{
        type:String
    },
    emai:{
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
    organizationId: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
      }
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("Member", Member);

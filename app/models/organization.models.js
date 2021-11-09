const mangoose = require("mongoose");
const Organization = new mangoose.Schema(
  {
    _id: {
      type:mangoose.Schema.Types.ObjectId,
      ref:"Branch"
    },
    name: {
      type: String,
    },
    //organization Identification Number (Org ID)
    orgId:{
      type:String,
      unique:true
    },
    area: {
      type: String,
    },
    street: {
      type: String,
    },
    landmark: {
      type: String,
    },
    pincode: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    telephoneNumber: {
      type: Array,
    },
    email: {
      type: String,
    },
    foundedDate: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("Organization", Organization);

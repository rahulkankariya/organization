const mangoose = require("mongoose");
const Schema = mangoose.Schema;
const Branch = new mangoose.Schema(
  {
    _id: {
      type: mangoose.Schema.Types.ObjectId,
      ref:"PlanName",
      ref:"Employee"
    },
    name: {
      type: String,
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
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },
    foundedDate: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mangoose.model("Branch", Branch);

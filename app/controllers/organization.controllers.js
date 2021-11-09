const mangose = require("mongoose");
const Joi = require("joi");
const organization = require("../models/organization.models");
const branch = require('../models/branch.models');
exports.organization = async (req, res) => {
  try {
    const { error } = OrganizationValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    } else {
      const {name,orgId,area,street,landmark,pincode,city,state,country,telephoneNumber,email,foundedDate} = req.body;
      const existingOrgId = await organization.findOne({ orgId });
      if (!existingOrgId) {
        const Organization = new organization( {
          _id: new mangose.Types.ObjectId(),
          name,
          orgId,
          area,
          street,
          landmark,
          pincode,
          city,
          state,
          country,
          telephoneNumber,
          email,
          foundedDate
        });
        Organization.save().then((result) => {
          res.status(200).send({
            success: true,
            message: "Organization Information records can inserted",
            data: result,
          });
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Organization is Already Exist",
          data: null,
        });
      }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Organization Inforamtion Cannot Inserted" + error,
      data: error,
    });
    console.log(error);
  }
};
exports.organizationMember = async (req, res) => {
  try {
    const { error } = MemberValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    } else {
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Organization Member Inforamtion Cannot Inserted" + error,
      data: error,
    });
    // console.log(error);
  }
};
exports.organizationUser = async (req, res) => {
  try {
    const { error } = UserValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    } else {
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Organization Inforamtion Cannot Inserted" + error,
      data: error,
    });
    // console.log(error);
  }
};
exports.organizationBranch = async (req, res) => {
  try {
    const { error } = BranchValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    }
    else {
      const {name,organizationId,area,street,landmark,pincode,city,state,country,telephoneNumber,email,foundedDate,branchId} = req.body;
      const existingBranchId = await branch.findOne({branchId});
      const existingOrgId = await organization.findOne({_id:organizationId });
      if (!existingBranchId) {
        const Branch = new branch( {
          _id: new mangose.Types.ObjectId(),
          name,
          area,
          street,
          landmark,
          pincode,
          city,
          state,
          country,
          telephoneNumber,
          email,
          organizationId,
          foundedDate,
          branchId
        });
        if(!existingOrgId){
          res.status(400).send({
            success:false,
            message:"Organization is Not Exist",
            data:null
          })
        }else{
        Branch.save().then((result) => {
          res.status(200).send({
            success: true,
            message: "Branch Information records can inserted",
            data: result,
          });
        });
      }
      } else {
        res.status(400).send({
          success: false,
          message: "Branch is Already Exist",
          data: null,
        });
      }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Branch Inforamtion Cannot Inserted" + error,
      data: error,
    });
    // console.log(error);
  }
};

//validation
function OrganizationValidation(validData) {
  const schema = {
    name: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Organization Name",
        };
      }),
    orgId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Organization Identfication NUMBER",
        };
      }),
    area: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Area",
        };
      }),
    street: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Street",
        };
      }),
    landmark: Joi.string(),
    pincode: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Pincode",
        };
      }),
    city: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a City",
        };
      }),

    state: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a State",
        };
      }),

    country: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Country",
        };
      }),
    telephoneNumber: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Telephone Number",
        };
      }),
    email: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Email",
        };
      }),

    foundedDate: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Founded Date",
        };
      }),
  };
  return Joi.validate(validData, schema);
}

function MemberValidation(validData) {
  const schema = {
    name: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Member Name",
        };
      }),
    post: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Member Post",
        };
      }),
    idProof: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Id Proof",
        };
      }),
    joiningDate: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Joining Date",
        };
      }),
    area: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Area",
        };
      }),
    street: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Street",
        };
      }),
    landmark: Joi.string(),
    pincode: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Pincode",
        };
      }),
    city: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a City",
        };
      }),

    state: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a State",
        };
      }),

    country: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Country",
        };
      }),
    telephoneNumber: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Telephone Number",
        };
      }),
    email: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Email",
        };
      }),

    organizationId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Organization",
        };
      }),
  };
  return Joi.validate(validData, schema);
}

function BranchValidation(validData) {
  const schema = {
    name: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Branch  Name",
        };
      }),
    area: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Area",
        };
      }),
    street: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Street",
        };
      }),
    landmark: Joi.string(),
    pincode: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Pincode",
        };
      }),
    city: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  City",
        };
      }),
    state: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  State",
        };
      }),
    country: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Country",
        };
      }),
    telephoneNumber: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Telephone Number",
        };
      }),
    email: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Email",
        };
      }),
    organizationId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Organization ID",
        };
      }),
    foundedDate: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Founded Date",
        };
      }),
      branchId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a  Branch ID",
        };
      }),
  };
  return Joi.validate(validData, schema);
}

function UserValidation(validData) {
  const schema = {
    name: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter User Name",
        };
      }),
    post: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a User Post",
        };
      }),
    idProof: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Id Proof",
        };
      }),
    joiningDate: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Joining Date",
        };
      }),
    area: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Area",
        };
      }),
    street: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Street",
        };
      }),
    landmark: Joi.string(),
    pincode: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Pincode",
        };
      }),
    city: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a City",
        };
      }),

    state: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a State",
        };
      }),

    country: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Country",
        };
      }),
    telephoneNumber: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Telephone Number",
        };
      }),
    email: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Email",
        };
      }),

    BranchId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Branch ID",
        };
      }),
  };
  return Joi.validate(validData, schema);
}

const mangose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)
const organization = require("../models/organization.models");
const branch = require("../models/branch.models");
const employee = require("../models/organization.employee.models");
const planname = require('../models/planName.models');
const plantype = require('../../extramodels/planType.model');
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
      const {
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
        foundedDate,
      } = req.body;
      const existingOrgId = await organization.findOne({ orgId });
      if (!existingOrgId) {
        const Organization = new organization({
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
          foundedDate,
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
    
  }
};
exports.organizationMember = async (req, res) => {
  try {
    const { error } = UserValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    } else {
      const {
        name,
        post,
        idProof,
        joiningDate,
        area,
        street,
        landmark,
        pincode,
        city,
        state,
        country,
        telephoneNumber,
        organizationId,
        email,
      } = req.body;
      const existinguserEmailId = await user.findOne({ email });
      if (!existinguserEmailId) {
        const user = new user({
          _id: new mangose.Types.ObjectId(),
          name,
          post,
          email,
          idProof,
          joiningDate,
          area,
          street,
          landmark,
          pincode,
          city,
          state,
          country,
          telephoneNumber,
          organizationId,
        });
        user.save().then((result) => {
          res.status(200).send({
            success: true,
            message: "User Information records can inserted",
            data: result,
          });
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Email Id  is Already Exist",
          data: null,
        });
      }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Organization Member Inforamtion Cannot Inserted" + error,
      data: error,
    });
    
  }
};
exports.organizationEmployee = async (req, res) => {
  try {
    const { error } = UserValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    } else {
      const {
        name,
        post,
        idProof,
        joiningDate,
        area,
        street,
        landmark,
        pincode,
        city,
        state,
        country,
        contactNumber,
        branchId,
      } = req.body;
      const existingBranchId = await branch.findOne({ _id:branchId });
      if (existingBranchId) {
        const existinguserId = await employee.findOne({idProof})
        if(!existinguserId){
        const user = new employee({
          _id: new mangose.Types.ObjectId(),
          name,
          post,
          idProof,
          joiningDate,
          area,
          street,
          landmark,
          pincode,
          city,
          state,
          country,
          contactNumber,
          branchId,
        });
        user.save().then((result) => {
          res.status(200).send({
            success: true,
            message: "User Information records can inserted",
            data: result,
          });
        });
      }
      else{
        res.status(400).send({
          success:false,
          message:"User Already Exist",
          data:null
        })
      }
      } else {
        res.status(400).send({
          success: false,
          message: "Branch  is Not Exist",
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
exports.organizationBranch = async (req, res) => {
  try {
    const { error } = BranchValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    } else {
      const {
        name,
        organizationId,
        area,
        street,
        landmark,
        pincode,
        city,
        state,
        country,
        telephoneNumber,
        email,
        foundedDate,
        branchId,
      } = req.body;
      const existingBranchId = await branch.findOne({ branchId });
      const existingOrgId = await organization.findOne({ _id: organizationId });
      if (!existingBranchId) {
        const Branch = new branch({
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
          branchId,
        });
        if (!existingOrgId) {
          res.status(400).send({
            success: false,
            message: "Organization is Not Exist",
            data: null,
          });
        } else {
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
exports.planname = async(req,res)=>{
  try {
    const { error } = planNameValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    }
    else{
      const {name,facilities,branchId} = req.body;
      const existingBranchId = await branch.findOne({branchId})
            const PlanName = new planname({
              _id: new mangose.Types.ObjectId(),
              name,
              facilities,
              branchId
            });
            if(!existingBranchId){
              res.status(400).send({
                success:false,
                message:"Branch is Not Exist",
                data:null
              });
            }
            else{
            PlanName.save().then((result) => {
              res.status(200).send({
                success: true,
                message: "Plan Information records can inserted",
                data: result,
              });
            });
          }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Plan Inforamtion Cannot Inserted" + error,
      data: error,
    });
    // console.log(error);
  }
}
exports.plantype = async(req,res)=>{
  try {
    const { error } = planTypeValidation(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        message: "mandatory field error",
        data: error.details[0].message,
      });
    }
    else{
      const {name,planId,roomNumber,roomCapacity } =req.body;
      const existingPlan = await planname.findOne({_id:planId});
      if(!existingPlan){
        res.status(400).send({
          success:false,
          message:"Plan Name is Not Exist",
          data:null
        });
      }
      else{
       
        const roomnumberExisting = await plantype.findOne({roomNumber});
        
        if(!roomnumberExisting){
          const PlanType = new plantype({
            _id: new mangose.Types.ObjectId(),
            name,
            roomNumber,
            roomCapacity,
            planId
          });
          PlanType.save().then((result) => {
            res.status(200).send({
              success: true,
              message: "Plan Type Information records can inserted",
              data: result,
            });
          });
        }
        else{
          res.status(400).send({
            success:false,
            message:"Room Are Already Exist",
            data:null
          })
        }
      }
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Plan Type Inforamtion Cannot Inserted" + error,
      data: error,
    });
    console.log(error);
  }
}



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
          message: "Please Enter  Name",
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
      contactNumber: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a contact Number",
        };
      }),
    

    branchId: Joi.objectId()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Branch ID",
        };
      }),
  };
  return Joi.validate(validData, schema);
}
function planNameValidation(validData) {
  const Schema = {
    name: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Name",
        };
      }),
    branchId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Branch ID",
        };
      }),
    facilities: Joi.array()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Facilities Name",
        };
      }),
  };
  return Joi.validate(validData, Schema);
}

function planTypeValidation(validData) {
  const Schema = {
    name: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Name",
        };
      }),
    roomCapacity: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Room Capacity",
        };
      }),
    roomNumber: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Room Number",
        };
      }),
      planId: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please Enter a Plan Id",
        };
      }),
   
  };
  return Joi.validate(validData, Schema);
}


module.exports = (app) => {
    const router = require("express").Router();
    const organization = require("../controllers/organization.controllers");
    router.post('/organization',organization.organization);
    router.post('/organization-members',organization.organizationMember);
    router.post('/organization-branch',organization.organizationBranch);
    router.post('/organization-user',organization.organizationUser);
    app.use("/", router);
  };
  
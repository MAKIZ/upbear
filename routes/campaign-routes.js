const express = require('express');
const campaignRouter = express.Router();

const campaignHelper = require('../services/campaigns/campaign-helper');
const campaignController = require('../controllers/campaign-controllers');

campaignRouter.get('/', campaignHelper.getCampaign, campaignController.index);

module.exports = campaignRouter;
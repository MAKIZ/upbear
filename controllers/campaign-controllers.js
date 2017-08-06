const campaignController = {};

campaignController.index = (req, res) => {
  res.render('campaigns/campaign-index', {
    campaign: res.locals.campaign,
  });
}

module.exports = campaignController;
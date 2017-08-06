require('isomorphic-fetch');

function getCampaign(req, res, next) {
  fetch(`https://www.dosomething.org/api/v1/campaigns`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      res.locals.campaign = jsonRes.data;
      return next();
    }).catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getCampaign,
}
var ninjaBlocks = require('ninja-blocks');

var ninja = ninjaBlocks.app({user_access_token:process.env.NINJA_API_TOKEN});

/*
 * GET device listing.
 */
exports.list = function(req, res){
  ninja.devices(function(err, devices) {
    if (err) return res.send(err);
    
    res.send(devices);
  });
};

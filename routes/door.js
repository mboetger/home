var ninjaBlocks = require('ninja-blocks');

var ninja = ninjaBlocks.app({user_access_token:process.env.NINJA_API_TOKEN});

/*
 * Subscribe and point here
 */
ninja.device(process.env.DOOR).subscribe(process.env.HOSTNAME+'/door',true,function(err){});

/*
 * POST door event.
 */
exports.post = function(req, res){
  console.log("req.body.DA: " + req.body.DA);
  // This route will be hit when *any* RF433MHz signal is received.
  console.log('door event');
  res.send(200);
};

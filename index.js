// Include our underscore and ninja-blocks libraries
var _ = require('underscore');

var ninjaBlocks = require('ninja-blocks');

// Instantiate a ninja object with your API token from https://a.ninja.is/hacking
var ninja = ninjaBlocks.app({user_access_token:process.env.NINJA_API_TOKEN});

console.log(process.env.NINJA_API_TOKEN);
ninja.devices(function(err, devices) {

  if (err) {
    console.log("Error:" + JSON.stringify(err));
    return; 
  }

  console.log(devices);
});

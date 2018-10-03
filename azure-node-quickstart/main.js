// Azure - Update Virtual Machine DB Table //
var async = require('async');
var msRestAzure = require('ms-rest-azure');
var ComputeManagementClient = require('azure-arm-compute');
var StorageManagementClient = require('azure-arm-storage');
var NetworkManagementClient = require('azure-arm-network');
var ResourceManagementClient = require('azure-arm-resource').ResourceManagementClient;

// Set Variables
var clientId = 
var secret = 
var domain = 

//////////////////////////////////////////////////////
//   Login to Subscription via Service Principal    //
//////////////////////////////////////////////////////
msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain, function (err, credentials, subscriptions) {
  if (err) return console.log(err);
  
  for(var sub=0, len = subscriptions.length; sub < len; sub++)
    
    resourceClient = new ResourceManagementClient(credentials, subscriptionId);
    computeClient = new ComputeManagementClient(credentials, subscriptionId);
    storageClient = new StorageManagementClient(credentials, subscriptionId);
    networkClient = new NetworkManagementClient(credentials, subscriptionId);
    
    async.series([
      function (callback) {
        //////////////////////////////////////////////////////
        //    Listing All the VMs under the subscription    //
        //////////////////////////////////////////////////////
        console.log('\nList all VMs under the current subscription.');
        computeClient.virtualMachines.listAll(function (err, result) {
          if (err) {
            console.log(util.format('\nError while listing all the vms under ' + 
              'the current subscription:\n%s', util.inspect(err, { depth: null })));
            callback(err);
          } else {
            console.log(util.format('\nList all the vms under the current ' + 
              'subscription is successful.\n%s', util.inspect(result, { depth: null })));
            callback(null, result);

          }
        })
      },
    ])
});
    function (callback) {
      /////////////////////////////////////////////////////////
      //    Get Info about each VM under the subscription    //
      /////////////////////////////////////////////////////////
      for(var vm=0, len = result.length; vm < len; vm++)
        console.log('\nGet VM Info about VM: ' + vmName);
        computeClient.virtualMachines.get(resourceGroupName, vmName, function (err, result) {
          if (err) {
            console.log(util.format('\nError while getting the VM Info:\n%s', 
              util.inspect(err, { depth: null })));
            callback(err);
          } else {
            console.log(util.format('\nGet VM Info is successful.\n%s', 
              util.inspect(result, { depth: null })));
            callback(null, result);
          }
        })
    }
  //])
//});

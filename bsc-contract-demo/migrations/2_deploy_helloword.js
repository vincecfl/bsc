

const HelloWord = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  deployer.deploy(HelloWord);
};




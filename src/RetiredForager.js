var RetiredForagerBee = function() {
  HoneyMakerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// RetiredForagerBee.prototype.forage = function () {
//   return 'I am too old, let me play cards instead.';
// };

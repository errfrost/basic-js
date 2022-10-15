const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if ((isNaN(position))||(position<1)||(position>this.chain.length)){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = [];
    return result.map(i => '( '+i+' )').join('~~');
  }
};

module.exports = {
  chainMaker
};

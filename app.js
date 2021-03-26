const CryptoBlockchain = require("./CryptoBlockChain.js");
const CryptoBlock = require("./CryptoBlock.js");

const chain = new CryptoBlockchain();

chain.addNewBlock(
  new CryptoBlock(1, "03/27/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50,
  })
);

chain.addNewBlock(
  new CryptoBlock(2, "03/29/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100,
  })
);

console.log(JSON.stringify(chain, null, 4));
console.log("chain is valid:", chain.checkChainValidity());

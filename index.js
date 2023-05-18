import { Blockchain } from "./blockchain.js";

// create an instance of the blockchain
const blockchain = new Blockchain();

for (let i = 1; i < 10; i++) {
    blockchain.addBlock("block " + i)
}

// blockchain.invalidateBlock()

console.log(blockchain.validateBlockchain())
// blockchain.print()
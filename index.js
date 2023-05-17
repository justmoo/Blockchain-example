import { Blockchain } from "./blockchain.js";

// create an instance of the blockchain
const blockchain = new Blockchain();


blockchain.addBlock("block 1")
blockchain.addBlock("block 2")
blockchain.print()
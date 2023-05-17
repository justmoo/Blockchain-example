import { Block } from "./block.js"
export class Blockchain {
    // store the blocks in an array
    blockchain = []

    constructor() {
        if (this.blockchain.length == 0) {
            this.blockchain.push(new Block("0000xxx000aasdadfc",
                "N/A", 0, "Genesis Block"))
        }
    }
    // the add function 
    addBlock() {
        // get the hash of the previous block
        const previousBlock = this.blockchain[this.blockchain.length - 1]
        // get the data 
        // create an instance of a block
        // use the previous block data as input
        // add the new block to the blockchain 
    }

    // print the blockchain
    print() {
        console.log(this.blockchain)
    }
}
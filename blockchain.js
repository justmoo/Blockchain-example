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
    addBlock(data) {
        const previousBlock = this.blockchain[this.blockchain.length - 1]
        const newBlock = new Block("hash", previousBlock.hash, 0, data);
        this.blockchain.push(newBlock)
        return newBlock;
    }

    // print the blockchain
    print() {
        console.log(this.blockchain)
    }

    // mine
}
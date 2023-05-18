import { Block } from "./block.js"
import { createHash } from "crypto"
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
        const { nonce, hash } = this.mine(data);
        const newBlock = new Block(hash, previousBlock.hash, nonce, data);

        this.blockchain.push(newBlock)
        return newBlock;
    }

    // mine
    mine(data) {
        let nonce = 0;
        let hash;
        // get the data alone with the nonce and hash them together.
        // till you get a hash starting with 00, use substring
        // for loop
        for (let i = 0; i < 10_000_000; i++) {
            // hash the data + nonce
            // if the hash is starting with "00" exit the loop 
            hash = createHash("sha256").update(data + nonce).digest("hex")
            if (hash.startsWith("00")) {
                break;
            }
            nonce++;
        }
        return { nonce, hash }
    }

    // print the blockchain
    print() {
        console.log(this.blockchain)
    }
    validateBlock(block) {
        // gets the data from the block
        if (createHash("sha256").update(block.data + block.nonce).digest("hex") == block.hash) {
            return true
        } else {
            return false
        }
    }

    validateBlockchain() {
        if (this.blockchain.length == 1) {
            return true;
        }
        for (let i = 1; i < this.blockchain.length; i++) {
            if (this.blockchain[i].previousHash != this.blockchain[i - 1].hash) {
                return false
            }
            if (!this.validateBlock(this.blockchain[i])) {
                return false
            }
        }
        return true

    }

    invalidateBlock() {
        const randomIndex = Math.floor(Math.random() * 8);
        console.log(randomIndex)
        this.blockchain[randomIndex].data = "Hacked"
    }

}
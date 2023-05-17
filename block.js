export class Block {
    data
    nonce
    previousHash
    hash

    constructor(hash, previousHash, nonce, data) {
        this.data = data
        this.hash = hash
        this.previousHash = previousHash
        this.nonce = nonce
    }
}
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

class VideosService {
    constructor(staticDataPath) {
        this.staticDataPath = staticDataPath
        this.cache = null
    }

    async getData() {
        if (!this.cache) {
            const content = await readFile(this.staticDataPath)
            this.cache = content
        }
        return JSON.parse(this.cache)
    }
}

let instance

module.exports = (staticDataPath) => {
    instance = instance || new VideosService(staticDataPath)
    return instance
}

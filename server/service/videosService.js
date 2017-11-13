const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

class VideosService {
    constructor(staticDataPath) {
        this.staticDataPath = staticDataPath
        this.cache = null
    }

    async getData() {
        const content = await readFile(this.staticDataPath)
        this.cache = JSON.parse(content)
        return this.cache
    }
}

let instance

module.exports = (staticDataPath) => {
    instance = instance || new VideosService(staticDataPath)
    return instance
}

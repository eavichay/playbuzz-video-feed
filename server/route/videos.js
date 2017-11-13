const videosServiceFactory = require('../service/videosService')

module.exports = (app, config) => {
    app.use('/videos', async (req, res) => {
        const service = videosServiceFactory(config.staticDataPath)
        const { filter } = req.query
        let data = await service.getData()
        if (filter) {
            data.items = data.items.filter(item => item.source === filter)
        }
        res.status(200).json(data)
    })
}
const path = require('path')

module.exports = app => {
    app.get('/api/projects', (req,res) => {
        console.log('api req')
        res.sendFile(path.join(__dirname,'./../public/api/projects.json'))
    })
}
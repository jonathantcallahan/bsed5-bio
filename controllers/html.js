const path = require('path')

module.exports = app => {
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname,'./../public/html/index.html'))
    });
    app.get('/about', (req,res) => {
        res.sendFile(path.join(__dirname,'./../public/html/about.html'))
    })
    app.get('/projects', (req,res) => {
        res.sendFile(path.join(__dirname,'./../public/html/projects.html'))
    })
    app.get('/contact', (req,res) => {
        res.sendFile(path.join(__dirname,'./../public/html/contact.html'))
    })

}
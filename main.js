const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { getStudent, getStudentByName } = require('./utils/data');
const server = express();

const port = 80;

server.set('view engine', 'ejs');
server.use(expressLayouts);
server.use(express.static('public'));

server.get('/', async (req, res) => {
    const page = req.query.page;
    const data = await getStudent(page);
    // con
    res.render('index', {
        title: 'Blue Archive Students',
        layout: 'layout/main',
        data
    });
});

server.get('/detail', async (req, res) => {
    const nama = req.query.nama;
    const data = await getStudentByName(nama);
    res.render('detail', {
        title: `Detail ${nama}`,
        layout: 'layout/main',
        nama,
        data
    });
});

server.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        layout: 'layout/main',
    });
});

server.listen(port, () => {
    console.log(`server run on http://127.0.0.1`);
});
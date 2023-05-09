const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { getStudent, getStudentByName } = require('./utils/data');
const server = express();

const port = 80;

server.set('view engine', 'ejs');
server.use(expressLayouts);
server.use(express.static('public'));

server.get('/', async (req, res) => {
    try {
        const data = await getStudent();
        res.render('index', {
            title: 'Blue Archive Students',
            layout: 'layout/main',
            data
        });
    } catch (err) {
        console.log(err);
    }
});

server.get('/detail/:nama', async (req, res) => {
    try {
        const nama = req.params.nama;
        const data = await getStudentByName(nama);
        res.render('detail', {
            title: `Detail ${nama}`,
            layout: 'layout/main',
            nama,
            data
        });
    } catch (err) {
        console.log(err);
    }
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
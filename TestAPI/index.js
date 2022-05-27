const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {id: 1, title: 'Joker', year: 1990,  enroll: true },
    {id: 2, title: 'Batman', year: 2020,  enroll: false },
    {id: 3, title: 'Superman', year: 1999,  enroll: false },
];

//My_API

app.get('/', (req, res) => {
    res.send('NodeJS API');
});

app.get('/api/movies', (req, res) =>{
    res.send(movies);
});


app.get('/api/movies/:id', (req, res) =>{
    const movies = movies.find(c => c.id === parseInt(req.params.id));
    if (!movies) return res.status(404).send('can not find the movie')
    else res.send(movies);
})

app.post('/api/movies', (req, res) => {
    const movies = {
        id: movies.leenght +1,
        title: req.body.title,
        year: parseInt(req.body.year),
        enroll: (req.body.enroll === 'true')
    };
    movies.push(movies);
    res.send(movies);
});

app.delete('/api/movies/:id', (req, res) => {
    const movies = movies.find(c => c.id === parseInt(req.params.id));
    if (!movies) return res.status(404).send('can not find the movie');

    const index = movies.indexOf(movies);
    movies.splice(index, 1);
    res.send(movies);
});

//Settings

const port = process.env.port || 80
app.listen(port, () => console.log(`Listening port ${port}...`));
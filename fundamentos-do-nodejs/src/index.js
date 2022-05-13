const express = require('express');

const app = express();

app.get('/cursos', (request, response) => {
    return response.status(201).json([ "Curso 1", "Curso 2", "Curso 3"]);
});

app.post('/cursos', (request, response) => {
    return response.status(202).json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put('/cursos/:id', (request, response) => {
    return response.status(203).json([ "Curso 5", "Curso 6", "Curso 7", "Curso 8"]);
});

app.path('/cursos/:id', (request, response) => {
    return response.status(200).json([ "Curso 1", "Curso 6", "Curso 3", "Curso 4"]);
});

app.delete('/cursos/:id', (request, response) => {
    return response.status(205).json([ "Curso 1", "Curso 2", "Curso 3"]);
});



app.listen(3333);
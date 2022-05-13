const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.status(404).json({
        message: "Aooba aa !!!!!"
    });
});

app.listen(3333);
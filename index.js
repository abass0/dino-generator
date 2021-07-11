if (process.env.NODE_ENV !== 'production') { 
    require('dotenv').config()
}
const express = require('express'); //import express module
const app = express(); //create an express app
const port = 3000; //localhost port
const fetch = require('node-fetch');

app.use(express.static('public')); //serving static files

app.listen(port, () => {
    console.log('Server is running!'); //server listen
});

const api_key = process.env.API_KEY;

app.get('/dinoname',async(request, response) => {
    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": api_key,
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	    },   
    });

const dinoNameResponse = await fetchApi.json();
response.json(dinoNameResponse);
});

app.get('/dinoimage',async(request, response) => {
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinossaur&count=90", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        },
    }
);
const dinoImageResponse = await fetchApi.json();
response.json(dinoImageResponse);
});
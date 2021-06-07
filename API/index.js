const express = require('express');
const app = express();
const db = require("./queries.js");
const port = 3030;
const cors = require('cors');

app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: "Welcome to Jessica's Hip Hop database!index!"})
});

app.get('/albums', db.getAlbum);
app.use(express.json());
app.post('/addalbums', db.addAlbum);
// app.delete('/album/:id', db.deleteAlbumById);

app.get('/artist', db.getArtist);
app.use(express.json());
app.post('/addartist', db.addArtist);
// app.delete('/artist/:id', db.deleteArtistById);

app.get('/genre', db.getGenre);
app.use(express.json());
app.post('/addgenre', db.addGenre);
// app.delete('/genre/:id', db.deleteGenreById); 




app.listen(port, () => {
    console.log("Server Running")
});
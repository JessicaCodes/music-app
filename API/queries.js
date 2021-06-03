// pg - node-postgres
// https://node-postgres.com/api/pool
const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  // database: "music",
  database: "music",
  password: "J082901o$",
  port: 5432
});

// Our logic for getting data back from postgres
const getArtist = (request, response) => {
  pool.query('SELECT * FROM artist', (error, result) => {
    if(error){
      throw error;
    }
    response.status(200).json(result.rows);
  });
}

const getAlbum = (request, response) => {
  pool.query('SELECT * FROM album', (error, result) => {
    if(error){
      throw error;
    }
    response.status(200).json(result.rows);
  });
}

const getGenre = (request, response) => {
  pool.query('SELECT * FROM genre', (error, result) => {
    if(error){
      throw error;
    }
    response.status(200).json(result.rows);
  });
}

const addArtist = (request, response) => {
  console.log(request.body, "<--- request.body")
  const { id, artist_name, genre_id } = request.body;

  pool.query(
    `INSERT INTO artist (id, artist_name, genre_id) VALUES ($1, $2, $3)`,
    [id, artist_name, genre_id],
    (error, results) => {
      if(error){
        throw error;
      }
      response.status(200).json(results.rows);
    }
  )
}

const addAlbum = (request, response) => {
  console.log(request.body, "<--- request.body")
  const { album_title, artist, release_year, length, genre, tracks, cowriter, is_ep, is_mixtape } = request.body;

  pool.query(
    `INSERT INTO album (album_title, artist, release_year, length, genre, tracks, cowriter, is_ep, is_mixtape) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [album_title, artist, release_year, length, genre, tracks, cowriter, is_ep, is_mixtape],
    (error, results) => {
      if(error){
        throw error;
      }
      response.status(200).json(results.rows);
    }
  )
}
const addGenre = (request, response) => {
  console.log(request.body, "<--- request.body")
  const { id, name } = request.body;

  pool.query(
    `INSERT INTO genre (id, name) VALUES ($1, $2)`,
    [id, name],
    (error, results) => {
      if(error){
        throw error;
      }
      response.status(200).json(results.rows);
    }
  )
}
module.exports = {
  getArtist: getArtist,
  addArtist: addArtist,
  getAlbum: getAlbum,
  addAlbum: addAlbum,
  getGenre: getGenre,
  addGenre: addGenre
};
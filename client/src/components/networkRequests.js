//--------------------Get Requests-----------------------

export const getAllGenres = async () => {
    const genres = await fetch("https://d1a4k1ihjbvg4p.cloudfront.net/genre");
    return genres.json();
}

export const getAllArtists = async () => {
    const artists = await fetch("https://d1a4k1ihjbvg4p.cloudfront.net/artist");
    return artists.json();
}

export const getAllAlbums = async () => {
    const artists = await fetch("https://d1a4k1ihjbvg4p.cloudfront.net/albums");
    return artists.json();
}

//-------------------Add Requests----------------------------

export const addGenre = async (genre) => {
    const holdResponse = await fetch("https://d1a4k1ihjbvg4p.cloudfront.net/addgenre", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(genre)
    });
    return holdResponse;    
}


export const addArtist = async (artist) => {
    const holdResponse = await fetch("https://d1a4k1ihjbvg4p.cloudfront.net/addartist", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(artist)
    });
    return holdResponse;    
}

export const addAlbum = async (album) => {
    const holdResponse = await fetch("https://d1a4k1ihjbvg4p.cloudfront.net/addalbum", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(album)
    });
    return holdResponse;    
}


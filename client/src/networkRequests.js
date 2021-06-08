//--------------------Get Requests-----------------------

export const getAllGenres = async () => {
    const genres = await fetch("http://localhost:3030/genre");
    return genres.json();
}

export const getAllArtists = async () => {
    const artists = await fetch("http://localhost:3030/artist");
    return artists.json();
}

export const getAllAlbums = async () => {
    const artists = await fetch("http://localhost:3030/albums");
    return artists.json();
}

//-------------------Add Requests----------------------------

export const addGenre = async (genre) => {
    const holdResponse = await fetch("http://localhost:3030/addgenre", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(Ggenre)
    });
    return holdResponse;    
}


export const addArtist = async (artist) => {
    const holdResponse = await fetch("http://localhost:3030/addartist", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(artist)
    });
    return holdResponse;    
}

export const addAlbum = async (album) => {
    const holdResponse = await fetch("http://localhost:3030/addalbum", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(album)
    });
    return holdResponse;    
}


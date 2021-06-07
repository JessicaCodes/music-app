export const getAllGenres = async () => {
    const genres = await fetch("http://localhost:3030/genre");
    return genres.json();
}

export const getAllArtists = async () => {
    const artists = await fetch("http://localhost:3030/artist");
    return artists.json();
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


export const getAllGenres = async () => {
    const genres = await fetch("http://localhost:3030/genre");
    return genres.json();
}
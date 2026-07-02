import React from 'react';
import MovieCard from '../shared/movieCard/MovieCard';

const Movies = () => {
    const initialMovies = [
        {
            id: 1,
            title: "Interstellar",
            genre: "Sci-Fi",
            releaseYear: 2014,
            watched: false,
            poster:
                "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        },
        {
            id: 2,
            title: "Inception",
            genre: "Sci-Fi",
            releaseYear: 2010,
            watched: true,
            poster:
                "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        },
        {
            id: 3,
            title: "The Dark Knight",
            genre: "Action",
            releaseYear: 2008,
            watched: true,
            poster:
                "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
        {
            id: 4,
            title: "Avengers: Endgame",
            genre: "Superhero",
            releaseYear: 2019,
            watched: false,
            poster:
                "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        },
        {
            id: 5,
            title: "Parasite",
            genre: "Thriller",
            releaseYear: 2019,
            watched: false,
            poster:
                "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        },
        {
            id: 6,
            title: "The Shawshank Redemption",
            genre: "Drama",
            releaseYear: 1994,
            watched: true,
            poster:
                "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {
            id: 7,
            title: "Joker",
            genre: "Crime",
            releaseYear: 2019,
            watched: false,
            poster:
                "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        },
        {
            id: 8,
            title: "Spider-Man: No Way Home",
            genre: "Superhero",
            releaseYear: 2021,
            watched: false,
            poster:
                "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        },
        {
            id: 9,
            title: "The Matrix",
            genre: "Sci-Fi",
            releaseYear: 1999,
            watched: true,
            poster:
                "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        },
        {
            id: 10,
            title: "Oppenheimer",
            genre: "Biography",
            releaseYear: 2023,
            watched: false,
            poster:
                "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        },
    ];


    return (
        <div className='container mx-auto mt-10'>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2.5 px-2.5 md:px-0'>
                {
                    initialMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default Movies;
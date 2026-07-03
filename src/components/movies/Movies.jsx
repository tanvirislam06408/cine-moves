import React, { useState } from 'react';
import MovieCard from '../shared/movieCard/MovieCard';
import { IoSearch } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Movies = ({ movies, setMovies }) => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleWatched = (id) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, watched: !movie.watched } : movie
            )
        );
    };

    const searchedMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const watchedMovies = searchedMovies.filter((movie) => movie.watched);
    const unwatchedMovies = searchedMovies.filter((movie) => !movie.watched);
    const movieData =
        filter === 'watched'
            ? watchedMovies
            : filter === 'unwatched'
                ? unwatchedMovies
                : searchedMovies;

    const deleteMovie = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setMovies(prevMovies =>
                    prevMovies.filter(movie => movie.id !== id))

            }
        });

    };

    return (
        <div className='container mx-auto mt-10 min-h-screen'>
            <div className="flex flex-col  md:flex-row-reverse justify-between px-7 md:px-0 items-center gap-4 mb-8">

                <div className="flex gap-4">

                    <div className="bg-success text-success-content rounded-xl px-5 py-3 shadow">
                        <p className="text-sm font-medium">Watched</p>
                        <h2 className="text-2xl font-bold">
                            {watchedMovies.length}
                        </h2>
                    </div>

                    <div className="bg-warning text-warning-content rounded-xl px-5 py-3 shadow">
                        <p className="text-sm font-medium">Unwatched</p>
                        <h2 className="text-2xl font-bold">
                            {unwatchedMovies.length}
                        </h2>
                    </div>

                    <div className="bg-primary text-primary-content rounded-xl px-5 py-3 shadow">
                        <p className="text-sm font-medium">Total</p>
                        <h2 className="text-2xl font-bold">
                            {movies.length}
                        </h2>
                    </div>

                </div>

                <div className="flex w-full md:w-auto gap-4">
                    <div className="relative w-full md:w-64">
                        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 text-lg" />
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="input input-bordered w-full pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <select
                        className="select select-bordered w-44"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Movies</option>
                        <option value="watched">Watched</option>
                        <option value="unwatched">Unwatched</option>
                    </select>
                </div>

            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2.5 px-2.5 md:px-0'>
                {movieData.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onDelete={deleteMovie}
                        onToggleWatched={toggleWatched}
                    />
                ))}
            </div>
        </div>
    );
};

export default Movies;

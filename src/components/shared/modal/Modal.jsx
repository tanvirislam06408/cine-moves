import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

const Modal = ({ onAddMovie }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value.trim();
        const genre = form.genre.value.trim();
        const releaseYear = Number(form.releaseYear.value);
        const poster = form.poster.value.trim();

        const newMovie = {
            id: Date.now(),
            title,
            genre,
            releaseYear,
            poster,
            watched: false,
        };

        onAddMovie(newMovie);
        form.reset();
        document.getElementById('add_movie_modal').close();
    };

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => document.getElementById('add_movie_modal').showModal()}
            >
                Add Movies <IoMdAddCircle />
            </button>

            <dialog id="add_movie_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-6">Add New Movie</h3>
                    <form onSubmit={handleSubmit}>
                        <label className="form-control w-full mb-4">
                            <div className="label">
                                <span className="label-text">Title</span>
                            </div>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter movie title"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <label className="form-control w-full mb-4">
                            <div className="label">
                                <span className="label-text">Genre</span>
                            </div>
                            <input
                                type="text"
                                name="genre"
                                placeholder="e.g. Action, Sci-Fi"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <label className="form-control w-full mb-4">
                            <div className="label">
                                <span className="label-text">Release Year</span>
                            </div>
                            <input
                                type="number"
                                name="releaseYear"
                                placeholder="e.g. 2024"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Poster URL</span>
                            </div>
                            <input
                                type="url"
                                name="poster"
                                placeholder="https://image.tmdb.org/t/p/w500/..."
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={() => document.getElementById('add_movie_modal').close()}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Add Movie
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;

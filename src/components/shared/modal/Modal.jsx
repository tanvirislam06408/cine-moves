import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import {
  FaFilm,
  FaTags,
  FaCalendarAlt,
  FaImage,
} from "react-icons/fa";
const Modal = ({ onAddMovie }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData=new FormData(form);
        const data=Object.fromEntries(formData.entries());
        console.log(data);
        

        const newMovie = {
            id: Date.now(),
            ...data,
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
  <div className="modal-box max-w-2xl">

    {/* Header */}
    <div className="flex items-center gap-3 mb-8">
      <div className="bg-primary/10 p-3 rounded-xl">
        <FaFilm className="text-2xl text-primary" />
      </div>

      <div>
        <h3 className="text-2xl font-bold">
          Add New Movie
        </h3>
        <p className="text-sm opacity-70">
          Fill in the details below to add a movie to your watchlist.
        </p>
      </div>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Title */}
      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <FaFilm className="text-primary" />
            Movie Title
          </span>
        </label>

        <input
          type="text"
          name="title"
          placeholder="Interstellar"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Genre & Year */}
      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="label">
            <span className="label-text flex items-center gap-2">
              <FaTags className="text-primary" />
              Genre
            </span>
          </label>

          <input
            type="text"
            name="genre"
            placeholder="Sci-Fi"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              Release Year
            </span>
          </label>

          <input
            type="number"
            name="releaseYear"
            placeholder="2024"
            className="input input-bordered w-full"
            required
          />
        </div>

      </div>

      {/* Poster */}
      <div>
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <FaImage className="text-primary" />
            Poster URL
          </span>
        </label>

        <input
          type="url"
          name="poster"
          placeholder="https://image.tmdb.org/..."
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Buttons */}
      <div className="modal-action mt-8">

        <button
          type="button"
          className="btn btn-outline"
          onClick={() =>
            document.getElementById("add_movie_modal").close()
          }
        >
          Cancel
        </button>

        <button type="submit" className="btn btn-primary gap-2">
          <IoMdAddCircle className="text-xl" />
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

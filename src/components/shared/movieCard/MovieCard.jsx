import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const MovieCard = ({ movie, onToggleWatched,onDelete }) => {
    const { id, poster, title, genre, watched, releaseYear } = movie;

    return (
        <div>
            <div className="card h-full bg-base-100 shadow-sm p-2.5 border border-gray-200">
                <figure className='h-[350px]'>
                    <img
                        className='h-full w-full object-cover group transition-transform duration-500 ease-in-out hover:scale-105'
                        src={poster}
                        alt={title}
                    />
                </figure>

                <div className="card-body">
                    <div className="space-y-2.5">
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>category: {genre}</p>
                        </div>
                        <div>
                            <p>{releaseYear}</p>
                        </div>
                    </div>
                    <div className="card-actions flex items-center justify-between">
                        <MdDeleteForever onClick={()=>onDelete(id)} className='text-xl' />
                        <button onClick={() => onToggleWatched(id)} className="btn btn-primary">
                            {watched ? 'UnWatch' : 'Watch'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
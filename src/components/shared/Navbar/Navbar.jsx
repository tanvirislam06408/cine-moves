import React from 'react';
import { RiMovie2Fill } from 'react-icons/ri';
import Modal from '../modal/Modal';

const Navbar = ({ onAddMovie }) => {
    return (
        <nav className=" bg-base-100 shadow-sm">
            <div className='container mx-auto navbar'>
                <div className="flex-1 flex items-center">
                    <RiMovie2Fill />
                    <a className="btn btn-ghost text-xl">Cine-Movie</a>
                </div>
                <div className="flex items-center">
                    <Modal onAddMovie={onAddMovie} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

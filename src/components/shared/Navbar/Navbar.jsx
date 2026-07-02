import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';

const Navbar = () => {
    return (
        <nav className=" bg-base-100 shadow-sm">
            <div className='container mx-auto navbar'>
                <div className="flex-1 flex items-center">
                <RiMovie2Fill />
                <a className="btn btn-ghost text-xl">Cine-Movie</a>
            </div>
            <div className="flex items-center">
                <button className="btn  btn-primary">
                    Add Movies 
                <IoMdAddCircle />
                </button>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
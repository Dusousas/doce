import React from 'react';
import NavBar from './subc/NavBar';

export default function Header() {
    return (
        <>
            <header className='py-3 bg-GreenP maxW px-6'>
                <div className='flex justify-between items-center py-4'>
                    <a className='text-white uppercase text-2xl font-Oswald' href="">Doce Fada</a>
                    <NavBar />
                </div>
            </header>
        </>
    );
}
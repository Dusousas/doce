import React from 'react';

export default function Slider1() {
    return (
        <>
            <section className='slider1 maxW relative'>
                {/* Camada de fundo transparente */}
                <div className='absolute inset-0 bg-black/40 z-0'></div>

                <div className='relative px-2 h-full flex justify-center flex-col items-center lg:px-8 z-10'>
                    <h1 className='text-7xl uppercase tracking-wider text-center text-white'>Doce de leite direto da fazenda</h1>
                    <h5 className='mt-2 text-lg font-light text-center text-white'>Sem conversantes e reduzido em açúcar</h5>
                </div>
            </section>
        </>
    );
}

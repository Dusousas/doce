import React from 'react';
import { MdVerified } from 'react-icons/md';
import { SiVerizon } from 'react-icons/si';

export default function History() {
    return (
        <>
            <section id='historia' className='bg-white maxW pt-20 px-6'>
                <div className='px-6 flex flex-col gap-8 lg:flex-row'>
                    
                    <article className='lg:w-1/2'>
                        <img className='h-full object-cover' src="/homeBG.jpg" alt="" />
                    </article>

                    <article className='lg:w-1/2'>
                        <h1 className='uppercase text-center text-3xl text-GreenP lg:text-left'>Nossa historia</h1>
                        <p className='text-sm text-BegeP text-center uppercase lg:text-left'>Como tudo começou!</p>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus saepe non, assumenda corporis nulla tempora at laboriosam quis magnam odio rem! Quod omnis laboriosam non saepe, hic, sed molestias natus.</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus saepe non, assumenda corporis nulla tempora at laboriosam quis magnam odio rem! Quod omnis laboriosam non saepe, hic, sed molestias natus.</p>

                        <div className="mt-8 flex flex-col items-center gap-y-4 gap-x-8 lg:flex-row ">
                            <article className="max-w-[350px] border-[1px] rounded-lg text-BegeP bg-white py-5 px-5 gap-4  flex justify-center items-center">
                                <MdVerified className='text-3xl text-BegeP' />
                                <div className="border-r-[1px] h-[80px] text-BegeP"></div>
                                <div>
                                    <h1 className="uppercase text-GrayP font-Oswald text-lg text-BegeP">Sabor, Sofisticação, Qualidade.</h1>
                                </div>
                            </article>
                        </div>

                        <div className='mt-8 flex flex-col gap-2 text-GreenP'>
                            <p className='flex gap-2 items-center uppercase'><SiVerizon className='text-GreenP' />Reduzido em açúcar</p>
                            <p className='flex gap-2 items-center uppercase'><SiVerizon className='text-GreenP' />Reduzido em açúcar</p>
                            <p className='flex gap-2 items-center uppercase'><SiVerizon className='text-GreenP' />Reduzido em açúcar</p>
                            <p className='flex gap-2 items-center uppercase'><SiVerizon className='text-GreenP' />Reduzido em açúcar</p>
                        </div>
                            <a className='mt-8 bg-GreenP rounded-4xl text-white px-8 py-4 inline-block hover:bg-BegeP hover:text-black uppercase' href="">Entre em contato</a>
                    </article>

                </div>
            </section>
        </>
    );
}
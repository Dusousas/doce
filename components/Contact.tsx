import React from 'react';

export default function Contact() {
    return (
        <>
            <section id='contact' className='bg-white maxW '>
                <div className='py-20 px-12'>
                    <h1 className='text-4xl text-center uppercase text-GreenP'>Entre em contato</h1>
                    <p className='text-center mt-2 text-black'>Preencha o formulário e nossa equipe entrará em contato para oferecer uma consulta personalizada.</p>
                    <div className='border-b-2 max-w-[50%] mt-6 mx-auto'></div>


                    <form className='lg:w-[60%] mx-auto mt-10' action="">
                        <div className='flex gap-6'>
                            <input className='border-b-2 border-GreenP w-1/2 px-2 py-2 outline-0' placeholder='Nome' type="text" />
                            <input className='border-b-2 GreenP w-1/2 px-2 py-2 outline-0' placeholder='Telefone' type="text" />
                        </div>
                        <input placeholder='E-mail' className='w-full border-b-2 GreenP px-2 py-2 mt-6 outline-0' type="text" />
                        <textarea placeholder='Sua mensagem...' className='w-full border-b-2 GreenP px-2 py-2 mt-6 outline-0 resize-none' rows={3} name="" id=""></textarea>
                        <div className='flex justify-center'>
                        <button className='mt-8  cursor-pointer bg-GreenP rounded-4xl text-white px-8 py-4  hover:bg-BegeP hover:text-black uppercase'>Enviar</button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
}
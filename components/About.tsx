import React from 'react';
import { PiFarm } from 'react-icons/pi';
import { TbMilk } from 'react-icons/tb';

const featuresLeft = [
    {
        title: 'característica 1',
        text: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
        icon: <PiFarm className="text-GreenP text-6xl" />,
        align: 'text-right'
    },
    {
        title: 'característica 2',
        text: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
        icon: <PiFarm className="text-GreenP text-6xl" />,
        align: 'text-right'
    },
    {
        title: 'característica 3',
        text: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
        icon: <PiFarm className="text-GreenP text-6xl" />,
        align: 'text-right'
    }
];

const featuresRight = [
    {
        title: 'característica 4',
        text: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
        icon: <TbMilk className="text-GreenP text-6xl" />,
        align: 'text-left'
    },
    {
        title: 'característica 5',
        text: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
        icon: <TbMilk className="text-GreenP text-6xl" />,
        align: 'text-left'
    },
    {
        title: 'característica 6',
        text: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
        icon: <TbMilk className="text-GreenP text-6xl" />,
        align: 'text-left'
    }
];

export default function About() {
    return (
        <section className='bg-white maxW pt-20'>
            <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>

                {/* Texto esquerda */}
                <article className='flex flex-col gap-12'>
                    {featuresLeft.map((item, index) => (
                        <div key={index} className='max-w-[350px] flex gap-2'>
                            <div className='flex-1'>
                                <h1 className={`text-GreenP ${item.align} text-xl font-semibold uppercase`}>{item.title}</h1>
                                <p className={`text-BegeP mt-2 ${item.align}`}>{item.text}</p>
                            </div>
                            <div>{item.icon}</div>
                        </div>
                    ))}
                </article>

                <img className='w-[40%] lg:w-[30%]' src="about1.png" alt="Sobre nós" />

                {/* Texto direita */}
                <article className='flex flex-col gap-12'>
                    {featuresRight.map((item, index) => (
                        <div key={index} className='max-w-[350px] flex gap-2'>
                            <div>{item.icon}</div>
                            <div className='flex-1'>
                                <h1 className={`text-GreenP ${item.align} text-xl font-semibold uppercase`}>{item.title}</h1>
                                <p className={`text-BegeP mt-2 ${item.align}`}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </article>

            </div>
        </section>
    );
}

/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-12 mt-12 md:mt-20 md:pb-10'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-7 place-self-center'>
        <h1 className='text-white md:mb-2 text-5xl md:text-7xl font-extrabold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to bg-pink-600'>
            Hello, I'm Lawrence
          </span>
          <br />
        </h1>
        <p className='text-white text-3xl mb-4 font-bold'>
          <TypeAnimation
            sequence={[
              "I'm a Full-stack Developer.",
              2000,
              'I am passionate about crafting user-friendly experiences.',
              1000,
              'I am an enthusiastic problem solver.',
              1000,
              "I'm also a Shopify Developer and a Sound Engineer.",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </p>
        <div>
          <Link href='mailto:johnlawrencehermo@gmail.com'>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button>
          </Link>
          <Link
            href='https://drive.google.com/file/d/1rp8pjn9M0_ecBfQP4xzKonYyLORHsuui/view?usp=sharing'
            target='_blank'>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </Link>
        </div>
      </motion.div>
      <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
          <Image
            className='absolute transform
           -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            src='/images/hero-image.png'
            alt='hero image'
            width={350}
            height={350}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

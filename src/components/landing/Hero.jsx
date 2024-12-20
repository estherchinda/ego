import React from 'react';
// import images
import heroImg from '/assets/man.png';
import egoText from '/assets/ego.png';
import overlayLight from '/assets/lightbg-copy2.png';
import greenBill from '/assets/bill.png';
import lightBlueBill from '/assets/bill (1).png';
import pinkBill from '/assets/bill (2).png';
import darkBlueBill from '/assets/bill (3).png';
import croppedBill from '/assets/bill (4).png';

// mobile
import HeroImg2 from '/assets/man-mobile.png';
import all from '/assets/Group 3.png';

// import buttons
import CreateAccountButton from '../../components/extra/CreateAccountButton';
import DownloadButton from '../../components/extra/DownloadButton';
// import modal
import ScanModal from '../extra/ScanModal';

const Hero = () => {
  return (
    <main className='bg-[#3f3fd9] flex sm:flex-col sm:h-full h-screen sm:pt-10' id='hero'>
      {/* text */}
      <div className='flex flex-col justify-center sm:ml-5 md:ml-8 lg:ml-12 xl:ml-20 2xl:ml-24'>
        <div className='flex gap-3.5 items-center'>
            <h1 className='capitalize font-bold sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white relative'>
                manage your <br className='hidden sm:block' />money <span className='sm:mt-10 md:mt-5'>with</span>
                <div className='relative'>
                  <img src={ egoText } alt="Ego" className='absolute sm:h-12 sm:-right-[75px] sm:-bottom-2 md:h-20 md:-right-2 md:-bottom-5 -right-12 bottom-0'/>
                  <img src={ greenBill } alt="Image of a green bill" className='absolute sm:h-14 sm:-right-24 sm:bottom-7 md:-right-8 md:-top-28 md:h-16 xl:-top-40 xl:-right-20' />
                </div>
            </h1>
        </div>
        <p className='text-white mt-5 sm:text-sm sm:font-extralight xl:text-lg'>Track your expenses. Spend within your budget</p>
        <div className='flex gap-x-3 sm:flex-col-reverse sm:gap-y-4 sm:my-4  md:flex-col md:gap-y-6 md:mt-5 lg:mt-7 xl:mt-7 2xl:mt-10'>
            <CreateAccountButton/>
            <DownloadButton/>
            <ScanModal/>
        </div>
      </div>
      {/* image */}
      <div className='relative'>
        <img src={ overlayLight } alt="Light" className='sm:h-[460px] sm:w-full md:h-full'/>
        <img src={ heroImg } alt="An image of a man" className='absolute top-0 z-10 h-screen sm:hidden object-cover'/>
        <img src={ HeroImg2} alt="An Image of a man" className='hidden sm:block absolute top-0 z-10'  />
        <img src={ lightBlueBill } alt="Image of a light blue bill" className='absolute sm:-top-4 sm:left-20 sm:h-[300px] md:-top-14 md:left-36 lg:-top-16 lg:left-40 xl:-top-40 xl:right-52 2xl:-top-40 2xl:right-52' />
        <img src={ darkBlueBill } alt="Image of a dark blue bill" className='absolute sm:top-14 sm:right-20 md:top-32 md:right-10 lg:top-36 lg:right-28 xl:top-16 xl:right-36 2xl:top-20 2xl:right-36' />
        <img src={ croppedBill } alt="Image of cropped bill" className='absolute right-0 top-[25%]' />
        <img src={ pinkBill } alt="Image of a pink bill" className='absolute sm:left-10 sm:bottom-36 sm:h-[60px] md:bottom-64 lg:left-40 lg:bottom-30 xl:left-60 xl:bottom-44 2xl:left-60 2xl:bottom-44' />
      </div>
    </main>
  )
}

export default Hero

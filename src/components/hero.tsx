import React, { useEffect } from 'react';
import Button from './button';

const Hero = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div id='#hero' className='container-border-bottom'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16 overflow-x-hidden sm:overflow-visible'>
          <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative'>
            <div className='hero-text lg:col-span-6 flex flex-col items-start xl:pr-18 lg:pr-16 '>
              <h2 className='lg:text-display-lg text-display-md font-semibold pb-4'>
                Empowering Sustainable Energy <br></br>Through Real-Time
                Monitoring
              </h2>
              <p className='text-body-md font-normal text-neutral-600 pb-8'>
                At Wia, we're redefining the future of energy. Our innovative
                solutions transform how businesses monitor, analyse, and
                optimise their energy usage, paving the way for a smarter, more
                efficient operational landscape.
              </p>
              <Button
                label='Speak to an Expert'
                link='/contact'
                size='lg'
              />
            </div>

            <div className='circle-background flex relative overflow-x-hidden sm:overflow-visible'>
              <img
                src='./energy-page.png'
                alt='energy-page'
                className='static-image rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

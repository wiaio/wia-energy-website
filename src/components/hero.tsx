import React from 'react';
import Button from './button';

import EnergyPage from '../images/energy-page.png';

const Hero = () => {
  return (
    <div id='#hero' className='container-border-bottom'>
      <div className='container mx-auto'>
        <div className='lg:py-20 md:py-14 pt-5 pb-5'>
          <div className='flex flex-col relative lg:py-0'>
            <div className='absolute lg:block hidden h-16 bg-white bottom-0 left-0 right-0'></div>
            <div className='absolute lg:block hidden h-16 bg-white top-0 left-0 right-0'></div>
            <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative'>
              <div className='hero-text lg:col-span-6 flex flex-col items-start pb-10 xl:pr-18 lg:pr-16 '>
                <h2 className='lg:text-display-lg text-display-md font-semibold pb-4'>
                  Empowering Sustainable Energy <br></br>Through Real-Time Monitoring
                </h2>
                <p className='text-body-md font-normal text-neutral-600 pb-8'>
                  At Wia, we're redefining the future of energy. Our innovative
                  solutions transform how businesses monitor, analyse, and
                  optimise their energy usage, paving the way for a smarter,
                  more efficient operational landscape.
                </p>
                <Button label='Speak to an Expert' link='/' size='lg' />
              </div>
              {/* <div className='circle-background lg:col-span-6 flex md:flex-row flex-col lg:gap-2 gap-2 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative'> */}
              <div className='circle-background  flex relative'>
                <img src={EnergyPage} alt='energy-page' className='rounded-lg' />
                {/* <div className='flex flex-col basis-1/2 lg:gap-8 gap-6 relative'>
                  <img src={EnergyPage} alt='energy-page' className='' />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

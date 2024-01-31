import React from 'react';

import CHECK from '../images/check-circle.svg';
import Button from './button';

const TalkToUs = () => {
  return (
    <div id='#solutions' className='talk-to-us-section'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:py-24 py-10'>
          <div className='lg:col-span-12 flex flex-col items-center pb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-4 text-center max-w-screen-md text-white mb-10'>
              Elevate your company’s energy intelligence with Wia
            </h2>
            <Button
              label='Speak to an Expert'
              link='mailto:sales@wia.io'
              size='lg'
              background='bg-white'
              color='text-primary-600'
            />
          </div>
          <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-8 gap-4 items-center relative'>
            <div className='lg:col-span-4 md:col-span-4 flex flex-row items-center mb-5'>
              <img src={CHECK} alt='UI' className='mr-2' />
              <p className='text-body-md font-normal text-white'>
                Deploy at any location
              </p>
            </div>
            <div className='lg:col-span-4 md:col-span-4 flex flex-row items-center mb-5'>
              <img src={CHECK} alt='UI' className='mr-2' />
              <p className='text-body-md font-normal text-white'>
                One stop shop with end-to-end solutions
              </p>
            </div>
            <div className='lg:col-span-4 md:col-span-4 flex flex-row items-center mb-5'>
              <img src={CHECK} alt='UI' className='mr-2' />
              <p className='text-body-md font-normal text-white'>
                Future proofed with AI enabled analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;

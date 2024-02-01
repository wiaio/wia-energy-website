import React from 'react';

const Metrics = () => {
  return (
    <div id='#metrics' className='metrics-container container-border-bottom'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:pt-20 pt-10 pb-5'>
          <div className='grid lg:grid-cols-12 md:grid-cols-6 grid-cols-1 xl:gap-8 gap-4 items-center relative'>
            <div className='lg:col-span-3 md:col-span-3 h-full flex flex-col items-start xl:pl-4 lg:pl-4 md:pl-4 pl-4 border-l-2 border-primary-600 mb-5'>
              <h2 className='lg:text-4xl text-display-md font-semibold'>
                €200 billion
              </h2>
              <p className='text-body-md font-normal text-neutral-600'>
                Lost annually due to energy inefficiencies
              </p>
            </div>
            <div className='lg:col-span-3 md:col-span-3 h-full flex flex-col items-start xl:pl-4 lg:pl-4 md:pl-4 pl-4 border-l-2 border-primary-600 mb-5'>
              <h2 className='lg:text-4xl text-display-md font-semibold'>36%</h2>
              <p className='text-body-md font-normal text-neutral-600'>
                Amount of global energy used by commercial buildings
              </p>
            </div>
            <div className='lg:col-span-3 md:col-span-3 h-full flex flex-col items-start xl:pl-4 lg:pl-4 md:pl-4 pl-4 border-l-2 border-primary-600 mb-5'>
              <h2 className='lg:text-4xl text-display-md font-semibold'>97</h2>
              <p className='text-body-md font-normal text-neutral-600'>
                Dedicated Members
              </p>
            </div>
            <div className='lg:col-span-3 md:col-span-3 h-full flex flex-col items-start xl:pl-4 lg:pl-4 md:pl-4 pl-4 border-l-2 border-primary-600 mb-5'>
              <h2 className='lg:text-4xl text-display-md font-semibold'>30%</h2>
              <p className='text-body-md font-normal text-neutral-600'>
                Of energy consumed by enterprises that is wasted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
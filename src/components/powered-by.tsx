import React from 'react';

import CONNECT from '../images/benefits/connect.svg';
import DEPTH from '../images/benefits/depth.svg';
import ANALYSE from '../images/benefits/analyse.svg';

import DEPLOY from '../images/approach/deploy.svg';

const PoweredBy = () => {
  return (
    <div id='#powered0by' className='powered-by-section'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:py-24 pt-10 pb-5'>
          <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-6 md:gap-6 gap-6 items-center relative'>
            <div className='lg:col-span-5 flex flex-col pb-5 xl:pr-12 lg:pr-12'>
              <h2 className='lg:text-display-lg text-display-md font-semibold pb-2 text-left '>
                Powered by our own IoT Cloud
              </h2>
              <p className='text-body-md font-normal text-neutral-600'>
                With our super powers we have reached this
              </p>
            </div>
            <div className='lg:col-span-7 flex flex-col'>
              <div className='grid lg:grid-cols-12  md:grid-cols-12 grid-cols-1 xl:gap-6 md:gap-6 gap-6 items-center relative'>
                <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-5'>
                  <img src={CONNECT} alt='UI' className='mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      100,000+
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Devices connected
                    </p>
                  </div>
                </div>
                <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-5'>
                  <img src={DEPTH} alt='UI' className='mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      Millions
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Data points generated each day
                    </p>
                  </div>
                </div>

                <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-5'>
                  <img src={DEPLOY} alt='UI' className='mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      100+
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Hardware manufacturers supported
                    </p>
                  </div>
                </div>

                <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-5'>
                  <img src={ANALYSE} alt='UI' className='mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      120
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;

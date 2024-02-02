import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartMixed,
  faEarthEurope,
  faPlug,
  faSensorCloud,
} from '@fortawesome/pro-duotone-svg-icons';

const PoweredBy = () => {
  return (
    <div id='#powered0by' className='powered-by-section'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:py-24 py-20'>
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
              <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-10 items-center relative'>
                <div className='lg:col-span-6 relative md:col-span-6 md:h-full flex flex-row pl-14'>
                  <FontAwesomeIcon icon={faSensorCloud} className='icon mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      100,000+
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Devices connected
                    </p>
                  </div>
                </div>
                <div className='lg:col-span-6 relative md:col-span-6 md:h-full flex flex-row pl-14'>
                  <FontAwesomeIcon icon={faChartMixed} className='icon mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      Millions
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Data points generated each day
                    </p>
                  </div>
                </div>

                <div className='lg:col-span-6 relative md:col-span-6 md:h-full flex flex-row pl-14'>
                  <FontAwesomeIcon icon={faPlug} className='icon mr-4' />
                  <div className='text'>
                    <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                      100+
                    </h2>
                    <p className='text-body-md font-normal text-neutral-600'>
                      Hardware manufacturers supported
                    </p>
                  </div>
                </div>

                <div className='lg:col-span-6 relative md:col-span-6 md:h-full flex flex-row pl-14'>
                  <FontAwesomeIcon icon={faEarthEurope} className='icon mr-4' />
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

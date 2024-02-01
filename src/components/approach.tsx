import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faClipboardList,
  faMagnifyingGlassChart,
} from '@fortawesome/pro-duotone-svg-icons';

const Approach = () => {
  return (
    <div id='#approach' className='approach-section'>
      <div className='approach-background'></div>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:py-24 pt-10 pb-5'>
          <div className='lg:col-span-12 flex flex-col items-center pb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-4 text-center lg:px-24 text-white'>
              Our Approach
            </h2>
          </div>
          <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-0 md:gap-0 gap-4 items-center relative'>
            <div className='lg:col-span-4 relative md:col-span-4 h-full flex flex-col items-center mb-4 lg:pl-6 lg:pr-10'>
              <div className='dotted-line'></div>
              <div className='image-circle mb-4'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
              </div>
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center mb-2 text-white'>
                Evaluate
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center text-neutral-300'>
                We begin with a detailed site evaluation to understand your
                energy monitoring needs, from overall consumption to specific
                equipment. <br />
                Our experts craft a personalised approach to maximise monitoring
                effectiveness.
              </p>
            </div>
            <div className='lg:col-span-4 relative md:col-span-4 h-full flex flex-col items-center mb-4 lg:pl-6 lg:pr-10'>
              <div className='dotted-line left'></div>
              <div className='dotted-line'></div>
              <div className='image-circle mb-4'>
                <FontAwesomeIcon icon={faBoxOpen} className='icon' />
              </div>
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center mb-2 text-white'>
                Deploy
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center text-neutral-300'>
                We provide an all-inclusive package of hardware, connectivity,
                and software, specifically tailored to your logistical
                operations. <br /> Our turnkey solutions ensure a smooth and
                hassle-free implementation.
              </p>
            </div>
            <div className='lg:col-span-4 relative md:col-span-4 h-full flex flex-col items-center mb-4 lg:pl-6 lg:pr-10'>
              <div className='dotted-line left'></div>
              <div className='image-circle mb-4'>
                <FontAwesomeIcon
                  icon={faMagnifyingGlassChart}
                  className='icon'
                />
              </div>
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center mb-2 text-white'>
                Analyse
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center text-neutral-300'>
                Benefit from immediate analytics post-deployment, offering
                instant access to crucial energy data. <br /> Empower your
                decision-making with timely and accurate energy insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;

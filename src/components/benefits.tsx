import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightDots,
  faAtomSimple,
  faGaugeCircleBolt,
  faHandHoldingSeedling,
} from '@fortawesome/pro-duotone-svg-icons';

const Benefits = () => {
  return (
    <div id='#benefits' className='benefits-section container-border-bottom'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:py-24 pt-10 pb-5'>
          <div className='lg:col-span-12 flex flex-col pb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-4 text-left'>
              Benefits of working with us
            </h2>
          </div>
          <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-6 md:gap-6 gap-6 items-center relative'>
            <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-12'>
              <div className='image-circle mr-10'>
                <FontAwesomeIcon icon={faAtomSimple} className='icon' />
              </div>
              <div className='text'>
                <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                  Enhanced Energy Efficiency
                </h2>
                <p className='text-body-md font-normal text-neutral-600'>
                  Dramatically reduce energy waste and save on costs.
                </p>
              </div>
            </div>
            <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-12'>
              <div className='image-circle mr-10'>
                <FontAwesomeIcon icon={faGaugeCircleBolt} className='icon' />
              </div>
              <div className='text'>
                <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                  In-depth Operational Insights
                </h2>
                <p className='text-body-md font-normal text-neutral-600'>
                  Real-time monitoring delivers a deeper understanding of your
                  energy usage.
                </p>
              </div>
            </div>

            <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-12'>
              <div className='image-circle mr-10'>
                <FontAwesomeIcon icon={faArrowUpRightDots} className='icon' />
              </div>
              <div className='text'>
                <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                  Flexible and Scalable Solutions
                </h2>
                <p className='text-body-md font-normal text-neutral-600'>
                  Our solutions adapt to your growing business needs, ensuring
                  scalability and flexibility.
                </p>
              </div>
            </div>

            <div className='lg:col-span-6 relative md:col-span-6 h-full flex flex-row pb-12'>
              <div className='image-circle mr-10'>
                <FontAwesomeIcon
                  icon={faHandHoldingSeedling}
                  className='icon'
                />
              </div>
              <div className='text'>
                <h2 className='lg:text-4xl text-display-xs font-semibold mb-1'>
                  Sustainability Commitment
                </h2>
                <p className='text-body-md font-normal text-neutral-600'>
                  Align with your environmental goals through efficient energy
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

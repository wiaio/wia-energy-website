import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBrainCircuit,
  faMeterBolt,
  faRouter,
} from '@fortawesome/pro-duotone-svg-icons';

const Solutions = () => {
  return (
    <div id='#solutions' className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16'>
          <div className='lg:col-span-12 flex flex-col items-center'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-14 text-center lg:px-24'>
              Innovative Energy Solutions Tailored for Your Business
            </h2>
          </div>
          <div className='grid lg:grid-cols-12 grid-cols-1 gap-8 items-center relative'>
            <div className='lg:col-span-4 md:col-span-4 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faMeterBolt} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Connect Any Meter
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center'>
                Our adaptable hardware seamlessly integrates with existing
                meters or incomers of any type. <br />
                Experience a blend of precision and versatility in energy
                monitoring.
              </p>
            </div>
            <div className='lg:col-span-4 md:col-span-4 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faRouter} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Advanced Wireless Networks
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center'>
                Robust wireless connectivity with cellular backhaul, ensuring
                reliable data transmission across varied locations. Designed for
                effortless deployment, our networks thrive in diverse
                operational environments.
              </p>
            </div>
            <div className='lg:col-span-4 md:col-span-4 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faBrainCircuit} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                State-of-the-Art Cloud Analytics
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center'>
                Leverage the power of AI for insightful and relevant energy data
                analysis. Transform raw data into strategic insights, driving
                efficient energy utilisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

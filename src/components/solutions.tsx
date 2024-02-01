import React from 'react';

import CONNECT from '../images/solutions/connect.svg';
import WIRELESS from '../images/solutions/wireless.svg';
import CLOUD from '../images/solutions/cloud.svg';

const Solutions = () => {
  return (
    <div id='#solutions' className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col relative lg:pt-24 pt-10 pb-5'>
          <div className='lg:col-span-12 flex flex-col items-center pb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-4 text-center lg:px-24'>
              Innovative Energy Solutions Tailored for Your Business
            </h2>
          </div>
          <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-8 gap-4 items-center relative'>
            <div className='lg:col-span-4 md:col-span-4 h-full flex flex-col items-center mb-5'>
              <img src={CONNECT} alt='UI' className='pb-8' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center mb-2'>
                Connect Any Meter
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center'>
                Our adaptable hardware seamlessly integrates with existing
                meters or incomers of any type. <br />
                Experience a blend of precision and versatility in energy
                monitoring.
              </p>
            </div>
            <div className='lg:col-span-4 md:col-span-4 h-full flex flex-col items-center mb-5'>
              <img src={WIRELESS} alt='UI' className='pb-8' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center mb-2'>
                Advanced Wireless Networks
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center'>
                Robust wireless connectivity with cellular backhaul, ensuring
                reliable data transmission across varied locations. Designed for
                effortless deployment, our networks thrive in diverse
                operational environments.
              </p>
            </div>
            <div className='lg:col-span-4 md:col-span-4 h-full flex flex-col items-center mb-5'>
              <img src={CLOUD} alt='UI' className='pb-8' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center mb-2'>
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

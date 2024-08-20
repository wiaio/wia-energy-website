import { faEnvelope, faWrench } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from '../components/button';

import Layout from '../components/layout';
import Seo from '../components/seo';

const About = () => (
  <Layout>
    <Seo title='Wia | About us'/>
    <div id='#solutions' className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16'>
          <div className='flex flex-col items-center sm:mb-20 mb-12'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-14 text-center lg:px-24'>
              About us
            </h2>
            <p className='text-body-md font-normal text-center text-neutral-600'>
              Wia powers the future of the Internet of Things by enabling
              devices to communicate with one another in a simple, easy way.
              <br /> <br />
              We take care of the messy cloud infrastructure and expose a
              globally available cloud API that developers can interact with to
              build intelligent and complex applications.
            </p>
          </div>
          <div className='grid sm:grid-cols-12 grid-cols-1 gap-12 items-center relative'>
            <div className='sm:col-span-6 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faWrench} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Jobs
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center mb-5'>
                We're always looking for new talent.
                <br /> See if there's something for you.
              </p>
              <Button label='View Openings' link='/jobs' />
            </div>
            <div className='sm:col-span-6 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Contact
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center mb-5'>
                Want to get in touch? <br />
                Find out how.
              </p>
              <Button label='Go to contact' link='/contact' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;

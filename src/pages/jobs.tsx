import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Jobs = () => (
  <Layout>
    <Seo title='Wia | Jobs'/>
    <div id='#solutions' className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16'>
          <div className='md:col-span-12 flex flex-col items-center mb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-14 text-center lg:px-24'>
              Jobs
            </h2>
            <p className='text-body-md font-normal text-center text-neutral-600'>
              We are always looking for talented and unique individuals to join
              our team.
              <br /> <br />
              Send us an email with your CV, LinkedIn, Github or your favourite
              GIF to <a className='link' href='mailto:sales@wia.io'>jobs@wia.io</a>
              <br />
              <br />
              We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Jobs;

import * as React from 'react';

import Layout from '../components/layout';

const Cookies = () => (
  <Layout>
    <div id='#solutions' className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16'>
          <div className='md:col-span-12 flex flex-col items-center mb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold pb-14 text-center lg:px-24'>
              Cookies
            </h2>
            <p className='text-body-md font-normal text-center text-neutral-600'>
              We use data collected by cookies and JavaScript libraries to
              improve your browsing experience, analyze site traffic, deliver
              personalized advertisements, and increase the overall performance
              of our site.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Cookies;

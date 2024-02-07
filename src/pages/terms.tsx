import { withPrefix } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';

const Terms = () => (
  <Layout>
    <div id='#terms' className='section-terms'>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16'>
          <div className='md:col-span-12 flex flex-col items-center mb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold  text-center lg:px-24'>
              Terms of Service
            </h2>
            <a
              href='https://www.iubenda.com/privacy-policy/638858'
              className='iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iub-no-markup iubenda-noiframe iub-body-embed'
              title='Privacy Policy'
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Terms;

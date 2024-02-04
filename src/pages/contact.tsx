import {
  faBuilding,
  faCommentsQuestion,
  faEnvelope,
  faNewspaper,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import Layout from '../components/layout';

const Contact = () => (
  <Layout>
    <div id='#solutions' className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col relative md:py-24 py-16'>
          <div className='md:col-span-12 flex flex-col items-center mb-10'>
            <h2 className='lg:text-display-lg text-display-md font-semibold text-center lg:px-24'>
              Contact us
            </h2>
            <p className='text-body-md font-normal text-center text-neutral-600'>
              Send us an email
            </p>
          </div>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-8 items-center relative'>
            <div className='md:col-span-4 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faBuilding} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Sales
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center mb-5'>
                We'd to help you find <br />
                the best deal for you.
              </p>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='icon mr-2 xs' />
                <a href='mailto:sales@wia.io' className='link text-primary-600'>
                  sales@wia.io
                </a>
              </div>
            </div>
            <div className='md:col-span-4 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon
                icon={faCommentsQuestion}
                className='icon mb-6'
              />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Help & Support
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center mb-5'>
                Getting started?
                <br />
                We're here to assist.
              </p>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='icon mr-2 xs' />
                <a
                  href='mailto:support@wia.io'
                  className='link text-primary-600'
                >
                  support@wia.io
                </a>
              </div>
            </div>

            <div className='md:col-span-4 md:h-full flex flex-col items-center'>
              <FontAwesomeIcon icon={faNewspaper} className='icon mb-6' />
              <h2 className='lg:text-4xl text-display-xs font-semibold text-center pb-2'>
                Press
              </h2>
              <p className='text-body-md font-normal text-neutral-600 text-center mb-5'>
                We'd to help you find <br />
                the best deal for you.
              </p>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='icon mr-2 xs' />
                <a href='mailto:press@wia.io' className='link text-primary-600'>
                  press@wia.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;

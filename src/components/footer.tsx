import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:py-20 pt-12 pb-24 md:gap-24 gap-16 relative'>
          <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xl:gap-8 gap-4 items-center relative'>
            <div className='sm:col-span-4 flex flex-col items-center'>
              <p className='text-body-lg font-medium'>Company</p>

              <p className='link text-body-sm text-neutral-300'>
                <Link to='/about'>About</Link>
              </p>
              <p className='link text-body-sm text-neutral-300'>
                <Link to='/jobs'>Jobs</Link>
              </p>
              <p className='link text-body-sm text-neutral-300'>
                <Link to='/contact'>Contact</Link>
              </p>
            </div>

            <div className='sm:col-span-4 flex flex-col items-center'>
              <p className='text-body-lg font-medium'>Legal</p>
              <p className='link text-body-sm text-neutral-300'>
                <Link to='/cookies'>Cookies Policy</Link>
              </p>
              <p className='link text-body-sm text-neutral-300'>
                <Link to='/terms'>Terms & Conditions</Link>
              </p>
            </div>
            <div className='sm:col-span-4 flex flex-col items-center'>
              <p className='text-body-lg font-medium'>Follow us</p>
              <p className='link text-body-sm text-neutral-300'>
                <a
                  href='https://www.linkedin.com/company/wia-limited/about/'
                  target='_blank'
                >
                  LinkedIn
                </a>
              </p>
              <p className='link text-body-sm text-neutral-300'>
                <a href='https://twitter.com/wiaio' target='_blank'>
                  Twitter
                </a>
              </p>
            </div>
          </div>

          <div className='footer-logo'>
            <div className='line'></div>
            <img
              src='https://cdn.wia.io/website/images/svg/wia-logo-light.svg'
              alt=''
            />
          </div>
          <p className='all-rigths text-body-sm text-neutral-300'>
            © 2024 Wia Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

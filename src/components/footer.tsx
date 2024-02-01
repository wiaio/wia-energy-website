import React from 'react';

const Footer = () => {
  const social = [
    { name: 'Instagram', href: '#' },
    { name: 'Dribbble', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'YouTube', href: '#' },
  ];
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:py-20 pt-12 pb-16 md:gap-24 gap-16 relative'>
          <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xl:gap-8 gap-4 items-center relative'>
            <div className=' sm:col-span-4 h-full flex flex-col items-center mb-5'>
              <p className='text-body-lg font-medium'>Company</p>
              <p className='text-body-sm text-neutral-300'>About</p>
              <p className='text-body-sm text-neutral-300'>Jobs</p>
              <p className='text-body-sm text-neutral-300'>Contact</p>
            </div>

            <div className=' sm:col-span-4 h-full flex flex-col items-center mb-5'>
              <p className='text-body-lg font-medium'>Legal</p>
              <p className='text-body-sm text-neutral-300'>Cookies Policy</p>
              <p className='text-body-sm text-neutral-300'>
                Terms & Conditions
              </p>
            </div>
            <div className=' sm:col-span-4 h-full flex flex-col items-center mb-5'>
              <p className='text-body-lg font-medium'>Follow us</p>
              <p className='text-body-sm text-neutral-300'>LinkedIn</p>
              <p className='text-body-sm text-neutral-300'>Twitter</p>
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

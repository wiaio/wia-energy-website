import { Link } from 'gatsby';
import React from 'react';
import Button from './button';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex py-6 justify-between items-center'>
          <div className='flex flex-row gap-8 items-center'>
            <a className='navbar-brand'>
              <Link to='/' className='navbar-link'></Link>
            </a>
          </div>
          <div className='flex flex-row gap-6'>
            <Button label='Contact Us' link='mailto:sales@wia.io' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

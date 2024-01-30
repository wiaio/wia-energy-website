import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  link,
  size,
  background,
  color,
}: {
  label: string;
  link: string;
    size?: string;
    background?: string;
  color?: string;
}) => (
  <a
    className={`button flex items-center justify-center rounded-lg  font-semibold  
    ${size === 'lg' ? 'px-6 py-4 text-body-sm' : 'px-4 py-2.5 text-body-xs'}
    ${background ? background : 'bg-primary-600'}
    ${color ? color : 'text-white'}
      `}
    href={link}
  >
    {label}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;

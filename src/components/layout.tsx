import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
import { withPrefix } from 'gatsby';

const Layout = ({ children }: any) => (
  <>
    <Helmet>
      <script src='https://gumroad.com/js/gumroad.js' />
      <script
        src='https://kit.fontawesome.com/d7b6a45a19.js'
        crossOrigin='anonymous'
      ></script>
      <link
        rel='icon'
        href='https://cdn.wia.io/website/images/favicons/android-chrome-192x192.png'
      />
      <link
        rel='stylesheet'
        href='https://kit.fontawesome.com/d7b6a45a19.css'
        crossOrigin='anonymous'
      ></link>
      <meta name='viewport' />
      <meta
        name='description'
        content='Wia offers an all-in-one IoT Cloud Platform for businesses to monitor electricity and embrace sustainability. With tools for energy management, operational efficiency, and cost reduction, it supports secure IoT solutions integration at scale. Ideal for fleet management, sensor data analysis, and real-time device monitoring.'
      />
      <meta
        name='keywords'
        content='IoT Cloud Platform, Wia, electricity monitoring, sustainability, energy management, operational efficiency, IoT solutions, fleet management, sensor data, device monitoring'
      />
    </Helmet>
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

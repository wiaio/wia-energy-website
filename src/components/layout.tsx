import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => (
  <>
    <Helmet> 
      <script src="https://gumroad.com/js/gumroad.js" />
      <script src="https://kit.fontawesome.com/d7b6a45a19.js" crossOrigin="anonymous"></script>
      <link rel="icon" href="https://cdn.wia.io/website/images/favicons/android-chrome-192x192.png" />
      <link rel="stylesheet" href="https://kit.fontawesome.com/d7b6a45a19.css" crossOrigin="anonymous"></link>
      <meta name="viewport" />
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

import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ lang, meta, title, description, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  );

  const siteTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  const ogImage = image;
  const ogUrl = `/${url}` || '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `IoT Cloud Platform, Wia, electricity monitoring, sustainability, energy management, operational efficiency, IoT solutions, fleet management, sensor data, device monitoring`,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${ogImage}`,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${siteUrl}${ogUrl}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:image`,
          content: `${siteUrl}${ogImage}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;

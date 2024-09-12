import React from 'react';
import Header from '../Header';
import Footer from '../footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div
      style={{
        backgroundImage: 'url(/image.png)', // Updated to use the local background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Indigo',
};

export default Layout;

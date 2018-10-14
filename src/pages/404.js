import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFoundPage = props => (
  <Layout {...props}>
    <div
      style={{
        minHeight: '100vh',
        margin: '56px auto 0 auto',
        padding: '1em',
        textAlign: 'center'
      }}>
      <h1>404 Error: PAGE NOT FOUND</h1>
      <h2>
        It doesn't look like there is much to look at here. Want to head back?{' '}
        <Link to="/">Take me home.</Link>
      </h2>
    </div>
  </Layout>
);

export default NotFoundPage;

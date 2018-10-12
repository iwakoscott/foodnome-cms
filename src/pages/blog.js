import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { MainContainer } from '../components/Containers';
import Card from '@material-ui/core/Card';
import { LinkButton } from '../components/Buttons';
import styled from 'styled-components';

const CardTitle = styled.h2`
  font-size: 2em;
  @media (max-width: 400px), (max-height: 400px) {
    font-size: 1.5em;
  }
`;

const Date = styled.h3`
  font-size: 1.5em;
  @media (max-width: 400px), (max-height: 400px) {
    font-size: 1.25em;
  }
`;

export default function Blog({ data, ...rest }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout {...rest}>
      <MainContainer>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Card key={post.id} style={{ padding: '1em', margin: '1em 0' }}>
                <CardTitle>
                  <Link
                    to={post.frontmatter.path}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    {post.frontmatter.title}
                  </Link>
                </CardTitle>
                <Date>{post.frontmatter.date}</Date>
                <p>{post.excerpt}</p>
                <LinkButton
                  style={{ float: 'right' }}
                  to={post.frontmatter.path}>
                  Read more
                </LinkButton>
              </Card>
            );
          })}
      </MainContainer>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

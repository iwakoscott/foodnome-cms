import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { MainContainer } from "../components/Containers";
import Card from "@material-ui/core/Card";
import { LinkButton } from "../components/Buttons";

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <MainContainer>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Card key={post.id} style={{ padding: "1em", margin: ".5rem 0" }}>
                <h1>
                  <Link
                    to={post.frontmatter.path}
                    style={{ textDecoration: "none", color: "black" }}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
                <LinkButton
                  style={{ float: "right" }}
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

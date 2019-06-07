import { graphql } from 'gatsby';
import * as React from 'react';
import { Privacy } from './../components/Privacy';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Privacy html={props.data.markdownRemark.html} />
  </Layout>
);

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
      html
      frontmatter {
        title
        name
      }
    }
  }
`;

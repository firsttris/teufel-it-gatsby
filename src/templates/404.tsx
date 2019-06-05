import { graphql } from 'gatsby';
import * as React from 'react';
import { NotFound } from './../components/404';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    {console.log(props.data)}
    <NotFound
      locale={props.pageContext.locale}
      unicorn={props.data.unicorn.childImageSharp.fixed}
      lines={props.data.lines.childImageSharp.fluid.base64}
    />
  </Layout>
);

export const query = graphql`
  query {
    unicorn: file(relativePath: { eq: "NotFound/unicorn-small.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 327) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lines: file(relativePath: { eq: "backgrounds/lines.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

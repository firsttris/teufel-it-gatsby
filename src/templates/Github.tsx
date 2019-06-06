import { graphql } from 'gatsby';
import * as React from 'react';
import { Github } from './../components/Github';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: {
    data: any;
    locale: string;
  };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Github
      locale={props.pageContext.locale}
      repos={props.pageContext.data}
      code={props.data.code.childImageSharp.fluid}
      background={props.data.lines.childImageSharp.fixed.src}
    />
  </Layout>
);

export const query = graphql`
  query {
    code: file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lines: file(relativePath: { eq: "backgrounds/lines.png" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
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
    <Helmet>
      <title>Teufel IT, Software ist unser Handwerk</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration, Webservices, Docker"
      />
      <link rel="canonical" href="http://teufel-it.de" />
    </Helmet>
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

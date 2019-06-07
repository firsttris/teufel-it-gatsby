import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from './../components/Parallax';
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
      <link rel="canonical" href={`http://teufel-it.de/${props.pageContext.locale}`} />
    </Helmet>
    <Parallax
      firstImage={props.data.code.childImageSharp.fluid}
      middleImage={props.data.much_code.childImageSharp.fluid}
      lastImage={props.data.code.childImageSharp.fluid}
      background={props.data.lines.childImageSharp.fixed.src}
      json={props.data.development.nodes[1]}
      locale={props.pageContext.locale}
    />
  </Layout>
);

export const query = graphql`
  query {
    much_code: file(relativePath: { eq: "much_code.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    code: file(relativePath: { eq: "3dCode.jpg" }) {
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
    development: allDataJson {
      nodes {
        portfolio {
          text
          title
          cards {
            gridClass
            iconClass
            text
            title
          }
        }
        principles {
          text
          title
          cards {
            gridClass
            iconClass
            text
            title
          }
        }
      }
    }
  }
`;
